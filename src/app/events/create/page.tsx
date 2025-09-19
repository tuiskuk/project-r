"use client";
import { EventCreationForm } from "@/components/events/EventCreationForm";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

const HARDCODED_EVENT_TYPES = [
  "Yhteisö", "Nuoret", "Perhe", "Jumalanpalvelus", "Muu"
];

const HARDCODED_TARGET_GROUPS = [
  { id: "1", name: "Nuoret" },
  { id: "2", name: "Aikuiset" },
  { id: "3", name: "Perheet" },
  { id: "4", name: "Kaikki" }
];

export default function CreateEventPage() {
  return (
    <>
      <SignedIn>
        <EventCreationForm targetGroups={HARDCODED_TARGET_GROUPS} eventTypes={HARDCODED_EVENT_TYPES} />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/sign-in" />
      </SignedOut>
    </>
  );
}
