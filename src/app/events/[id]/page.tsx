import { notFound } from "next/navigation";
import { format } from "date-fns";
import { fi } from "date-fns/locale/fi";
import EventPageInfoCard from "@/components/events/EventPageInfoCard";
import EventLocationMap from "@/components/map/EventLocationMap";

// Kuvaus component
function Kuvaus({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <h2 className="text-xl font-semibold mb-2 text-blue-900">Kuvaus</h2>
      <div className="text-gray-800">{children}</div>
    </div>
  );
}

// Helper to fetch event data
async function getEvent(id: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
    "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/events/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const event = await getEvent(params.id);

  if (!event) return notFound();

  // Compose date string for EventPageInfoCard
  const dateString = `${format(new Date(event.date), "d.M.yyyy HH:mm", { locale: fi })}${event.location ? ` • ${event.location}` : ""}`;

  // Compose price string if available
  let priceString = "";
  if (event.minPrice != null && event.maxPrice != null) {
    priceString = `${event.minPrice.toFixed(2)} € ... ${event.maxPrice.toFixed(2)} €`;
  } else if (event.minPrice != null) {
    priceString = `${event.minPrice.toFixed(2)} €`;
  }

  // Try to extract lat/lng from event if available (otherwise fallback to Helsinki)
  let lat: number = 60.1695;
  let lng: number = 24.935;
  if (event.lat && event.lng) {
    lat = event.lat;
    lng = event.lng;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Big blurred image banner */}
      {event.image && (
        <div className="relative w-full h-56 sm:h-72 md:h-80 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-transparent" />
        </div>
      )}

      {/* Main content two-column layout */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 -mt-24 pb-8 grid grid-cols-1 lg:grid-cols-7 gap-8 relative z-10">
        {/* Left: Event info card (moved more to the left) */}
        <div className="lg:col-span-3 flex flex-col items-stretch">
          <div className="max-w-lg ml-0 lg:ml-2">
            <EventPageInfoCard
              event={{
                title: event.title,
                organizer: event.organizer,
                dateString,
                description: event.description,
                image: event.image, // Don't render image again in the card
                location: event.location,
                priceString,
                likes: event.likes,
                targetGroups: event.targetGroups,
              }}
            />
            <Kuvaus>{event.description}</Kuvaus>
          </div>
        </div>
        {/* Right: Map, takes more space */}
        <aside className="lg:col-span-4 flex flex-col items-stretch">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-stretch h-full">
            <h2 className="text-xl font-semibold mb-2 text-blue-900">Sijainti kartalla</h2>
            {event.location && (
              <div className="mb-2 text-blue-800 font-medium text-base">
                {event.location}
              </div>
            )}
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <EventLocationMap
                lat={lat}
                lng={lng}
                label={event.title}
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}