import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export function useEnsureProfile() {
  const { isSignedIn } = useUser();

  console.log(isSignedIn);

  useEffect(() => {
    if (!isSignedIn) return;
    fetch("/api/user/me");
  }, [isSignedIn]);
}