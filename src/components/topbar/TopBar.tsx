"use client";
import { useState, useEffect } from "react";
import { Menu, Search, Heart, MapPin } from "lucide-react";
import { MobileDrawer } from "./MobileDrawer";
import { NavTabs } from "./NavTabs";
import { usePathname } from "next/navigation";
import { AuthButtons } from "../auth/AuthButtons";

export function TopBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [location, setLocation] = useState("Helsinki");
  const [search, setSearch] = useState("");
  const pathname = usePathname();

  const showSecondaryNav = false;

  // Responsive placeholder for search (client-side)
  const [searchPlaceholder, setSearchPlaceholder] = useState("Etsi tapahtumia");
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 340) setSearchPlaceholder("Etsi");
      else if (window.innerWidth < 420) setSearchPlaceholder("Etsi tapaht.");
      else setSearchPlaceholder("Etsi tapahtumia");
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* TopBar */}
      <div className="relative h-16 xs:h-18 sm:h-20 flex items-center bg-blue-900 shadow-md border-b border-blue-800 px-1 xs:px-2 sm:px-4 md:px-6">
        {/* Burger + Search */}
        <div className="flex items-center gap-1 xs:gap-2 sm:gap-3 absolute left-1 xs:left-2 sm:static top-1/2 sm:top-auto -translate-y-1/2 sm:translate-y-0">
          <button
            aria-label="Avaa valikko"
            onClick={() => setDrawerOpen(true)}
            className="p-2 rounded-full bg-blue-800/80 hover:bg-blue-700 shadow transition border border-blue-700 xs:mr-1 sm:mr-2"
          >
            <Menu className="w-6 h-6 xs:w-7 xs:h-7 text-white drop-shadow" />
          </button>
          {/* Search input - responsive width */}
          <div
            className="
              relative
              w-24
              xs:w-32
              sm:w-44
              md:w-56
              lg:w-64
              max-w-[60vw]
              sm:max-w-xs
              transition-all
            "
          >
            <label htmlFor="topbar-search" className="sr-only">
              Etsi tapahtumia
            </label>
            <input
              id="topbar-search"
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className="
                w-full pl-9 pr-3 py-1.5
                xs:pl-10 xs:pr-4 xs:py-2
                rounded-full
                bg-blue-800/90
                border border-blue-700
                focus:border-white
                focus:ring-2 focus:ring-white
                text-white
                placeholder-white/70
                shadow transition font-medium outline-none
                text-sm xs:text-base
              "
              style={{ backdropFilter: "blur(2px)" }}
            />
            <Search className="absolute left-2 xs:left-3 top-1/2 -translate-y-1/2 text-white pointer-events-none w-4 h-4 xs:w-5 xs:h-5" />
          </div>
        </div>

        {/* Centered cross icon and app name */}
        <div className="
          hidden sm:flex flex-1 justify-center items-center
          absolute sm:static left-0 right-0 mx-auto
          select-none pointer-events-none
        ">
          <span
            className="text-2xl md:text-3xl font-extrabold tracking-tight flex items-center"
            style={{
              color: "#f5e7b4", // softer gold, less bright than #fff8dc
              textShadow: "0 0 4px #bfa94a, 0 0 8px #bfa94a, 0 0 1px #f5e7b4",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 28 28" className="inline mr-1" fill="none">
              <rect x="12" y="3" width="4" height="22" rx="2" fill="#FFD700"/>
              <rect x="3" y="12" width="22" height="4" rx="2" fill="#FFD700"/>
            </svg>
            Yhdessä
          </span>
        </div>

        {/* Auth & quick actions - far right */}
        <div className="absolute right-1 xs:right-2 sm:static sm:ml-auto top-1/2 sm:top-auto -translate-y-1/2 sm:translate-y-0 flex items-center gap-1 xs:gap-2">
          <div className="hidden sm:flex items-center gap-2 mr-2">
            <MapPin className="w-5 h-5 text-white" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent text-white text-sm outline-none font-medium"
              aria-label="Valitse sijainti"
            >
              <option>Helsinki</option>
              <option>Espoo</option>
              <option>Turku</option>
              <option>Tampere</option>
              <option>Kaikki</option>
            </select>
          </div>
          <button aria-label="Suosikit" className="p-2 rounded-full hover:bg-blue-800/70 transition">
            <Heart className="w-5 h-5 text-white" />
          </button>
          <AuthButtons />
        </div>
      </div>

      {/* Secondary nav */}
      {showSecondaryNav && (
        <div className="backdrop-blur-md bg-blue-900/80 border-b border-blue-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-1 xs:px-2 sm:px-6 lg:px-8 flex items-center">
            <NavTabs />
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Subtle warmth bar */}
      <div className="absolute left-0 right-0 top-0 h-16 xs:h-18 sm:h-20 pointer-events-none select-none z-[-1]">
        <div className="w-full h-full bg-gradient-to-r from-white/10 via-transparent to-white/10" />
      </div>
    </div>
  );
}