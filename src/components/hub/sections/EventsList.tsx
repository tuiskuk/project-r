"use client";
import Link from "next/link";

export function EventsList() {
  const sample = [
    { id: "1", title: "Nuorten ilta", place: "Helsinki", date: "Pe 19.9." },
    { id: "2", title: "Raamattupiiri", place: "Espoo", date: "Ma 22.9." },
  ];

  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Tapahtumat lähellä sinua</h3>
      <div className="space-y-3">
        {sample.map((e) => (
          <Link key={e.id} href={`/events/${e.id}`} className="block p-4 rounded-lg border bg-white hover:shadow">
            <div className="flex justify-between">
              <div>
                <div className="font-semibold">{e.title}</div>
                <div className="text-sm text-gray-500">{e.place}</div>
              </div>
              <div className="text-sm text-gray-600">{e.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
