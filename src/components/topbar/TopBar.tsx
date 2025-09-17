"use client";
import { useState } from "react";
import { Menu, Search, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileDrawer } from "./MobileDrawer";
import { NavTabs } from "./NavTabs";
import { usePathname } from "next/navigation";

export function TopBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [location, setLocation] = useState("Helsinki");
  const pathname = usePathname();

  const showSecondaryNav = pathname !== "/events"; // Only front page hub

  return (
    <div className="sticky top-0 z-50">
      {/* Top colored bar */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white h-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          <div className="flex items-center gap-3">
            {/* Hamburger far left */}
            <button
              aria-label="Avaa valikko"
              onClick={() => setDrawerOpen(true)}
              className="p-2 ml-1 rounded hover:bg-white/10"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>

            <div className="text-lg font-semibold tracking-tight">
              {pathname === "/" ? "Etusivu" : "Tapahtumat"}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent text-white text-sm outline-none"
                aria-label="Valitse sijainti"
              >
                <option>Helsinki</option>
                <option>Espoo</option>
                <option>Turku</option>
                <option>Tampere</option>
                <option>Kaikki</option>
              </select>
            </div>

            <button aria-label="Suosikit" className="p-2 rounded hover:bg-white/10">
              <Heart className="w-5 h-5 text-white" />
            </button>

            <button aria-label="Haku" className="p-2 rounded hover:bg-white/10">
              <Search className="w-5 h-5 text-white" />
            </button>

            {/* Only Kirjaudu for now */}
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Kirjaudu
            </Button>
          </div>
        </div>
      </div>

      {/* Secondary nav for hub only */}
      {showSecondaryNav && (
        <div className="backdrop-blur-sm bg-white/80 border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <NavTabs />
            </div>
        </div>
        )}


      {/* Mobile drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}
