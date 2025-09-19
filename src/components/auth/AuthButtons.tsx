"use client";

import { SignInButton, SignOutButton, useUser, UserButton } from "@clerk/nextjs";

export function AuthButtons() {
  const { isSignedIn, user } = useUser();

  return (
    <div>
      {isSignedIn ? (
        <div className="flex items-center gap-2">
          <UserButton />
          <span>{user?.firstName}</span>
          <SignOutButton>
            <button className="bg-red-500 text-white px-3 py-1 rounded">Kirjaudu ulos</button>
          </SignOutButton>
        </div>
      ) : (
        <SignInButton>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">Kirjaudu</button>
        </SignInButton>
      )}
    </div>
  );
}
