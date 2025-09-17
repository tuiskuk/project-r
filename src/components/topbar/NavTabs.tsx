"use client";
import Link from "next/link";

const tabs = [
  { href: "/events", label: "Tapahtumat" },
  { href: "/feed", label: "Syöte" },
  { href: "/prayer", label: "Rukoukset" },
  { href: "/following", label: "Seurattavat" },
  { href: "/discover", label: "Löydä" },
];

export function NavTabs() {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 px-2 py-3">
        {tabs.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="text-sm font-medium px-3 py-1 rounded-md hover:bg-gray-100"
          >
            {t.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
