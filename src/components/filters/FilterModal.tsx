"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function FilterModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void; }) {
  const [privateOnly, setPrivateOnly] = useState(false);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Suodata tuloksia</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={privateOnly} onChange={(e) => setPrivateOnly(e.target.checked)} />
            <span>Vain yksityiset tapahtumat</span>
          </label>

          <div>
            <label className="block text-sm mb-1">Tapahtumatyypit</label>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 rounded border">Raamattupiiri</button>
              <button className="px-3 py-1 rounded border">Nuoret</button>
              <button className="px-3 py-1 rounded border">Jumalanpalvelus</button>
            </div>
          </div>
        </div>

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>Peruuta</Button>
          <Button onClick={() => onOpenChange(false)}>Näytä tulokset</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
