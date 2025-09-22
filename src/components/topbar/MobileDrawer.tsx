"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Etusivu" },
  { href: "/events", label: "Tapahtumat" },
  { href: "/feed", label: "Syöte" },
  { href: "/prayer", label: "Rukoukset" },
  { href: "/following", label: "Seurattavat" },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: Props) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-blue-900 z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-72 h-full bg-blue-900 shadow-xl z-50 p-6 border-r border-blue-800"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-yellow-300 font-bold text-xl"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-4 mt-12 text-lg">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-full px-4 py-2 font-semibold transition ${
                    pathname === l.href
                      ? "bg-yellow-300 text-blue-900 shadow"
                      : "bg-blue-800/70 text-yellow-100 hover:bg-yellow-100 hover:text-blue-900"
                  }`}
                  onClick={onClose}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

