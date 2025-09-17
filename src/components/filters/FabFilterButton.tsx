"use client";
import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FilterModal } from "./FilterModal";

export function FabFilterButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed right-6 bottom-6 z-50">
        <Button className="rounded-full p-3 shadow-lg" onClick={() => setOpen(true)}>
          <Filter className="w-5 h-5" />
        </Button>
      </div>
      <FilterModal open={open} onOpenChange={setOpen} />
    </>
  );
}
