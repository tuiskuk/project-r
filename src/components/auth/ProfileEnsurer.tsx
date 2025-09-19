"use client";
import { useUser } from "@clerk/nextjs";
import { useEnsureProfile } from "@/lib/hooks/useEnsureProfile";


export function ProfileEnsurer() {

  useEnsureProfile();

  return null;
}