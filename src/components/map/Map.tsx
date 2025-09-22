"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "@/components/map/Pin";
import { renderToString } from "react-dom/server";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

const COLORS = [
  "#2563eb", "#e11d48", "#f59e42", "#22c55e", "#a21caf", "#fbbf24"
];

interface MarkerData {
  id: string;
  lat: number;
  lng: number;
  label?: string;
  color?: string;
  placeName?: string;
  address?: string;
}

interface Suggestion {
  id: string;
  place_name: string;
  text: string;
  center: [number, number];
}

interface MapProps {
  initialLat?: number;
  initialLng?: number;
  initialZoom?: number;
  onSelect?: (lat?: number, lng?: number) => void;
}

export default function Map({
  initialLat,
  initialLng,
  initialZoom = 12,
  onSelect
}: MapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const markerRef = useRef<mapboxgl.Marker | null>(null);
  const [marker, setMarker] = useState<MarkerData | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [styleLoaded, setStyleLoaded] = useState(false);
  const [mapLoading, setMapLoading] = useState(true);

  // UI for editing marker
  const [editing, setEditing] = useState(false);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [labelInput, setLabelInput] = useState("");

  // Search/autocomplete
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Helper: fetch address and name in Finnish
  async function fetchAddress(lat: number, lng: number) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}&language=fi&types=address,poi,place`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.features && data.features.length > 0) {
      const feature = data.features[0];
      return {
        address: feature.place_name,
        name: feature.text,
      };
    }
    return { address: "", name: "" };
  }

  // Show user location as blue dot
  function addUserLocationDot(map: mapboxgl.Map, lat: number, lng: number) {
    if (!map.isStyleLoaded()) return;
    if (map.getSource("user-location")) {
      if (map.getLayer("user-location")) map.removeLayer("user-location");
      map.removeSource("user-location");
    }
    map.addSource("user-location", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: { type: "Point", coordinates: [lng, lat] },
        properties: {},
      },
    });
    map.addLayer({
      id: "user-location",
      type: "circle",
      source: "user-location",
      paint: {
        "circle-radius": 10,
        "circle-color": "#2563eb",
        "circle-stroke-width": 3,
        "circle-stroke-color": "#fff",
        "circle-blur": 0.15,
      },
    });
  }

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    setMapLoading(true);

    // If initialLat/Lng are given, center and zoom there
    if (typeof initialLat === "number" && typeof initialLng === "number") {
      initMap(initialLat, initialLng, initialZoom);
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const userLat = pos.coords.latitude;
          const userLng = pos.coords.longitude;
          setUserLocation({ lat: userLat, lng: userLng });
          initMap(userLat, userLng, initialZoom);
        },
        () => {
          // fallback to Helsinki if denied
          initMap(60.1695, 24.935, initialZoom);
        }
      );
    }
    // eslint-disable-next-line
  }, [initialLat, initialLng, initialZoom]);

  function initMap(lat: number, lng: number, zoom: number) {
    if (!mapContainerRef.current) return;

    const m = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12?language=fi",
      center: [lng, lat], // [lng, lat] order!
      zoom: zoom,
    });

    m.addControl(new mapboxgl.NavigationControl(), "top-right");

    m.on("style.load", () => {
      setStyleLoaded(true);
      setMapLoading(false);
      if (userLocation) {
        addUserLocationDot(m, userLocation.lat, userLocation.lng);
      }
    });

    // Click → add or move marker
    m.on("click", handleMapClick);

    setMap(m);
  }

  // Set marker if initialLat/initialLng are given
  useEffect(() => {
    if (
      typeof initialLat === "number" &&
      typeof initialLng === "number" &&
      !marker
    ) {
      fetchAddress(initialLat, initialLng).then((info) => {
        setMarker({
          id: "main",
          lat: initialLat,
          lng: initialLng,
          label: "",
          color: selectedColor,
          placeName: info.name,
          address: info.address,
        });
        if (onSelect) onSelect(initialLat, initialLng);
      });
    }
    // eslint-disable-next-line
  }, [initialLat, initialLng]);

  function handleMapClick(e: mapboxgl.MapMouseEvent) {
    const { lng, lat } = e.lngLat;
    fetchAddress(lat, lng).then((info) => {
      setMarker({
        id: "main",
        lat,
        lng,
        label: "",
        color: selectedColor,
        placeName: info.name,
        address: info.address,
      });
      setEditing(false);
      setLabelInput("");
      if (onSelect) onSelect(lat, lng);
    });
  }

  // Add blue dot if user location changes after map is loaded and style is ready
  useEffect(() => {
    if (map && userLocation && styleLoaded) {
      addUserLocationDot(map, userLocation.lat, userLocation.lng);
    }
  }, [map, userLocation, styleLoaded]);

  // Place or update marker on the map
  useEffect(() => {
    if (!map) return;

    // Remove previous marker
    if (markerRef.current) {
      markerRef.current.remove();
      markerRef.current = null;
    }

    if (marker) {
      const el = document.createElement("div");
      el.innerHTML = renderToString(<Pin color={marker.color || COLORS[0]} />);
      el.style.cursor = "pointer";
      el.style.position = "relative";
      el.title = (marker.label?.trim() ? marker.label : marker.placeName || "") +
        (marker.address ? `\n${marker.address}` : "");
      // Ensure the marker is centered and has no extra space
      el.style.display = "flex";
      el.style.alignItems = "flex-end";
      el.style.justifyContent = "center";
      el.style.padding = "0";
      el.style.margin = "0";
      el.style.background = "none";
      el.style.border = "none";
      el.style.width = "auto";
      el.style.height = "auto";

      const newMarker = new mapboxgl.Marker({ element: el, anchor: "bottom", draggable: true })
        .setLngLat([marker.lng, marker.lat]) // [lng, lat] order!
        .addTo(map);

      // Drag event for marker
      newMarker.on("dragend", async () => {
        const { lng, lat } = newMarker.getLngLat();
        const info = await fetchAddress(lat, lng);
        setMarker((prev) =>
          prev
            ? {
                ...prev,
                lat,
                lng,
                placeName: info.name,
                address: info.address,
                label: prev.label?.trim() ? prev.label : info.name,
              }
            : null
        );
        if (!labelInput.trim()) setLabelInput(info.name);
        if (onSelect) onSelect(lat, lng); // update parent form on drag
      });

      // Right-click to remove marker
      el.addEventListener("contextmenu", (ev) => {
        ev.preventDefault();
        newMarker.remove();
        markerRef.current = null;
        setMarker(null);
        setEditing(false);
        setLabelInput("");
        setSelectedColor(COLORS[0]);
        if (onSelect) onSelect(undefined, undefined); // clear in parent
      });

      // Click to edit
      el.addEventListener("click", (ev) => {
        ev.stopPropagation();
        setEditing(true);
        setLabelInput(marker.label || "");
        setSelectedColor(marker.color || COLORS[0]);
      });

      markerRef.current = newMarker;
    }
    // eslint-disable-next-line
  }, [map, marker]);

  // Update marker color live
  useEffect(() => {
    if (marker && markerRef.current) {
      setMarker((prev) =>
        prev ? { ...prev, color: selectedColor } : null
      );
    }
    // eslint-disable-next-line
  }, [selectedColor]);

  // Update marker label live in tooltip
  useEffect(() => {
    if (markerRef.current) {
      const el = markerRef.current.getElement();
      el.title = (labelInput.trim() ? labelInput : marker?.placeName || "") +
        (marker?.address ? `\n${marker.address}` : "");
    }
  }, [labelInput, marker?.placeName, marker?.address]);

  // SEARCH FUNCTIONALITY
  async function handleSearch(suggestion?: Suggestion) {
    if (!map) return;
    let lng: number, lat: number, placeName: string;
    if (suggestion) {
      [lng, lat] = suggestion.center;
      placeName = suggestion.place_name;
      setSearch(placeName);
    } else {
      if (!search.trim()) return;
      setSearchLoading(true);
      try {
        const helsinkiCoords = "24.941,60.171";
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          search
        )}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}&language=fi&country=FI&types=poi,place,address,locality,neighborhood&limit=1&proximity=${helsinkiCoords}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.features && data.features.length > 0) {
          [lng, lat] = data.features[0].center;
        } else {
          setSearchLoading(false);
          return;
        }
      } finally {
        setSearchLoading(false);
      }
    }
    map.flyTo({ center: [lng, lat], zoom: 15 });
    const info = await fetchAddress(lat, lng);
    setMarker({
      id: "main",
      lat,
      lng,
      label: "",
      color: selectedColor,
      placeName: info.name,
      address: info.address,
    });
    setEditing(false);
    setLabelInput("");
    if (onSelect) onSelect(lat, lng); // update parent form
  }

  // AUTOCOMPLETE FUNCTIONALITY
  useEffect(() => {
    if (!search.trim()) {
      setSuggestions([]);
      return;
    }
    const controller = new AbortController();
    const fetchSuggestions = async () => {
      try {
        const helsinkiCoords = "24.941,60.171";
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          search
        )}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}&language=fi&country=FI&autocomplete=true&types=poi,place,address,locality,neighborhood&limit=7&proximity=${helsinkiCoords}`;
        const res = await fetch(url, { signal: controller.signal });
        const data = await res.json();
        if (data.features) {
          setSuggestions(
            data.features
              .sort(
                (a: { relevance?: number }, b: { relevance?: number }) =>
                  (b.relevance ?? 0) - (a.relevance ?? 0)
              )
              .map((f: { id: string; place_name: string; text: string; center: [number, number] }) => ({
                id: f.id,
                place_name: f.place_name,
                text: f.text,
                center: f.center,
              }))
          );
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          console.error(err);
        }
      }
    };
    fetchSuggestions();
    setShowSuggestions(true);
    return () => controller.abort();
  }, [search]);

  // Handle suggestion click
  const handleSuggestionClick = async (suggestion: Suggestion) => {
    await handleSearch(suggestion);
    setShowSuggestions(false);
    setSuggestions([]);
  };

  // Handle Enter key for top suggestion
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (suggestions.length > 0) {
        handleSearch(suggestions[0]);
      } else {
        handleSearch();
      }
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };

  // Show suggestions only when typing or focused
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setShowSuggestions(true);
  };

  // Locate me button handler
  const handleLocateMe = () => {
    if (userLocation && map) {
      map.flyTo({ center: [userLocation.lng, userLocation.lat], zoom: 15 });
    }
  };

  // Save marker edits
  function handleSaveMarker() {
    setMarker((prev) =>
      prev
        ? {
            ...prev,
            label: labelInput,
          }
        : null
    );
    setEditing(false);
  }

  return (
    <div>
      <div className="mb-2 flex gap-2 items-center">
        <div className="relative flex-1">
          <input
            type="text"
            className="border rounded px-3 py-2 w-full"
            placeholder="Etsi paikkaa (esim. Helsingin rautatieasema)"
            value={search}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute z-10 left-0 right-0 bg-white border rounded shadow max-h-60 overflow-auto">
              {suggestions.map(s => (
                <li
                  key={s.id}
                  className="px-3 py-2 cursor-pointer hover:bg-blue-100"
                  onMouseDown={() => handleSuggestionClick(s)}
                >
                  {s.text}
                  <span className="block text-xs text-gray-500">{s.place_name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={searchLoading}
          onClick={() => {
            handleSearch();
            setShowSuggestions(false);
            setSuggestions([]);
          }}
        >
          {searchLoading ? "Etsitään..." : "Etsi"}
        </button>
        <button
          type="button"
          className="bg-gray-200 text-gray-800 px-3 py-2 rounded border border-gray-300 hover:bg-gray-300"
          title="Sijainti"
          onClick={handleLocateMe}
        >
          📍
        </button>
      </div>

      {/* Marker editing UI */}
      {marker && editing && (
        <div className="mb-2 flex gap-2 items-center">
          <span className="font-semibold">Merkinnän asetukset:</span>
          <div className="flex gap-1">
            {COLORS.map((color) => (
              <button
                key={color}
                className={`w-7 h-7 rounded-full border-2 ${selectedColor === color ? "border-black" : "border-gray-300"}`}
                style={{ background: color }}
                onClick={() => setSelectedColor(color)}
                aria-label={`Valitse väri ${color}`}
                type="button"
              />
            ))}
          </div>
          <input
            type="text"
            className="border rounded px-3 py-2 ml-2 text-base"
            placeholder={marker.placeName || "Merkinnän nimi"}
            value={labelInput}
            onChange={(e) => setLabelInput(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded ml-2 text-base"
            onClick={handleSaveMarker}
            type="button"
          >
            Tallenna
          </button>
        </div>
      )}

      <div className="relative w-full h-[400px] rounded-lg">
        {mapLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
          </div>
        )}
        <div ref={mapContainerRef} className="w-full h-full rounded-lg" />
      </div>
      {marker && (
        <div className="mt-4 flex flex-col items-start gap-1 p-5 bg-white rounded-xl shadow-lg border border-blue-200 max-w-lg">
          <div className="text-xl font-bold text-blue-900 mb-1 break-words">
            {marker.label?.trim() ? marker.label : marker.placeName}
          </div>
          <div className="text-base text-gray-700 break-words">
            {marker.placeName}
          </div>
          <div className="text-sm text-gray-500 break-words">
            {marker.address}
          </div>
        </div>
      )}
      <div className="mt-4 text-sm text-gray-500">
        Klikkaa karttaa lisätäksesi tai siirtääksesi merkin. Vedä merkkiä siirtääksesi sitä. Oikealla napilla voit poistaa merkinnän. Merkinnän nimi näkyy työkaluvihjeenä.
      </div>
    </div>
  );
}