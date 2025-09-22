"use client";

import { SignInButton, SignOutButton, useUser, UserButton } from "@clerk/nextjs";

export function AuthButtons() {
  const { isSignedIn, user } = useUser();

  return (
    <div>
      {isSignedIn ? (
        <div className="flex items-center gap-2">
          <UserButton />
          <span className="text-yellow-100 font-semibold">{user?.firstName}</span>
          <SignOutButton>
            <button
              className="px-2 py-1 rounded-full bg-blue-800 text-white hover:bg-blue-700 transition text-sm font-semibold shadow-sm border border-blue-700"
              title="Kirjaudu ulos"
            >
              Kirjaudu ulos
            </button>
          </SignOutButton>
        </div>
      ) : (
        <SignInButton>
          <button className="bg-gradient-to-r from-blue-800 to-yellow-400 text-white px-3 py-1 rounded shadow hover:from-blue-700 hover:to-yellow-300 transition font-semibold">
            Kirjaudu
          </button>
        </SignInButton>
      )}
    </div>
  );
}
