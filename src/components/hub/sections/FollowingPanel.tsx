"use client";
import Link from "next/link";

export function FollowingPanel() {
  const sampleOrgs = [
    { id: "church-1", name: "Kirkko Helsinki" },
    { id: "youth-1", name: "Nuorten Kerho" },
  ];

  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg border bg-white">
        <h4 className="font-semibold mb-2">Seurattavat</h4>
        <ul className="space-y-2 text-sm">
          {sampleOrgs.map((o) => (
            <li key={o.id}>
              <Link href={`/orgs/${o.id}`} className="hover:underline">{o.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
