"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold mb-2">About</h4>
          <p className="text-sm">
            KideClone is your hub for events, memberships, and student life.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/help">Help / Terms</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Get the App</h4>
          <div className="flex gap-2">
            <a href="#">App Store</a>
            <a href="#">Google Play</a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm py-4 border-t border-gray-800">
        © {new Date().getFullYear()} KideClone. All rights reserved.
      </div>
    </footer>
  );
}
