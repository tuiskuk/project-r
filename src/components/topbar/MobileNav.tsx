"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"; // ✅ import each subcomponent
import Link from "next/link";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={(v) => (v ? null : onClose())}>
      <DialogTrigger className="sr-only" />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Valikko</DialogTitle>
        </DialogHeader>
        <nav className="flex flex-col gap-3 mt-4">
          <Link href="/">Etusivu</Link>
          <Link href="/events">Tapahtumat</Link>
          <Link href="/feed">Syöte</Link>
          <Link href="/prayer">Rukoukset</Link>
          <Link href="/following">Seurattavat</Link>
        </nav>
      </DialogContent>
    </Dialog>
  );
}
