"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/events", label: "Tapahtumat" },
  { href: "/feed", label: "Syöte" },
  { href: "/prayer", label: "Rukoukset" },
  { href: "/following", label: "Seurattavat" },
  { href: "/discover", label: "Löydä" },
];

export function NavTabs() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-1 sm:gap-2 w-full">
      {tabs.map((t) => {
        const active = pathname?.startsWith(t.href);
        return (
          <Link
            key={t.href}
            href={t.href}
            className={`
              flex items-center px-3 sm:px-4 py-2 rounded-md font-semibold text-sm sm:text-base transition
              border-b-2
              ${active
                ? "bg-blue-800/80 border-white text-white shadow-sm"
                : "bg-transparent border-transparent text-white/80 hover:bg-blue-800/60 hover:border-white hover:text-white"}
              hover:shadow
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white
              cursor-pointer
            `}
            tabIndex={0}
            aria-current={active ? "page" : undefined}
          >
            {t.label}
          </Link>
        );
      })}
    </nav>
  );
}
