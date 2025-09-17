"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-72 h-full bg-white shadow-xl z-50 p-6"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-700 font-bold text-xl"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-4 mt-12 text-lg">
              <Link href="/">Etusivu</Link>
              <Link href="/events">Tapahtumat</Link>
              <Link href="/feed">Syöte</Link>
              <Link href="/prayer">Rukoukset</Link>
              <Link href="/following">Seurattavat</Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

