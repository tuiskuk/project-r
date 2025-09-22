"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from "@/components/map/Pin";
import { renderToString } from "react-dom/server";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

interface EventLocationMapProps {
  lat: number;
  lng: number;
  label?: string;
  color?: string;
  zoom?: number;
}

export default function EventLocationMap({
  lat,
  lng,
  label,
  color = "#2563eb",
  zoom = 13,
}: EventLocationMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12?language=fi",
      center: [lng, lat],
      zoom,
      interactive: false, // disables all interactions
    });

    map.on("load", () => {
      // Add marker
      const el = document.createElement("div");
      el.innerHTML = renderToString(<Pin color={color} />);
      el.style.cursor = "default";
      el.title = label || "";
      el.style.display = "flex";
      el.style.alignItems = "flex-end";
      el.style.justifyContent = "center";
      el.style.background = "none";
      el.style.border = "none";
      el.style.width = "auto";
      el.style.height = "auto";

      new mapboxgl.Marker({ element: el, anchor: "bottom" })
        .setLngLat([lng, lat])
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [lat, lng, label, color, zoom]);

  return (
    <div className="w-full h-80 rounded-lg overflow-hidden">
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
}