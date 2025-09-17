"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          KideClone
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/products">Products</Link>
          <Link href="/student-card">Student Card</Link>
          <Link href="/benefits">Benefits</Link>
          <Link href="/help">Help</Link>
          <Link href="/merchant">For Merchants</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <Button variant="outline">Log in</Button>
          <Button>Sign up</Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
