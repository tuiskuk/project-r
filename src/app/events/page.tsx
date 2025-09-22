"use client";

import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { fi } from "date-fns/locale/fi";
import { EventCard } from "@/components/events/EventCard";
import { useUser } from "@clerk/nextjs";

interface Event {
  id: string;
  title: string;
  description?: string;
  date: string;
  location: string;
  image?: string;
  targetGroups: { id: string; name: string }[];
  organizerId: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
  fetch("/api/events/all")
    .then((res) => res.json())
    .then((data) => {
      // Defensive: ensure events is always an array
      setEvents(Array.isArray(data) ? data : []);
      setLoading(false);
    })
    .catch(() => {
      setEvents([]);
      setLoading(false);
    });
}, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Haluatko varmasti poistaa tämän tapahtuman?")) return;
    const res = await fetch(`/api/events/${id}`, { method: "DELETE" });
    if (res.ok) {
      setEvents(events.filter((e) => e.id !== id));
    } else {
      alert("Poisto epäonnistui");
    }
  };

  const handleEdit = (id: string) => {
    window.location.href = `/events/${id}/edit`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-900 text-center">
        Tapahtumat
      </h1>
      {loading ? (
        <div className="text-center text-lg text-gray-500">
          Ladataan tapahtumia...
        </div>
      ) : events.length === 0 ? (
        <div className="text-center text-lg text-gray-500">
          Ei tapahtumia löytynyt.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {events.map((event) => {
            return (
              <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={format(new Date(event.date), "d.M.yyyy HH:mm", { locale: fi })}
              place={event.location}
              image={event.image || ""}
              href={`/events/${event.id}`}
              badges={event.targetGroups.map((tg) => (
                <Badge key={tg.id} variant="secondary" className="text-xs">
                  {tg.name}
                </Badge>
              ))}
              showEdit={!!user?.id && event.organizerId === user.id}
              showDelete={!!user?.id && event.organizerId === user.id}
              onEdit={() => handleEdit(event.id)}
              onDelete={() => handleDelete(event.id)}
            />
            )
            
})}
        </div>
      )}
    </div>
  );
}