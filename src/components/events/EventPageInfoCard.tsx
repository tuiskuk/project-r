import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Tag, Heart } from "lucide-react";

interface EventPageInfoCardProps {
  event: {
    title: string;
    organizer: string;
    dateString: string;
    description: string;
    image?: string;
    location?: string;
    priceString?: string;
    likes?: number;
    targetGroups?: { id: string; name: string }[];
  };
}

export default function EventPageInfoCard({ event }: EventPageInfoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      {/* Event image on top */}
      {event.image && (
        <div className="w-full h-48 sm:h-64 md:h-72 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
        <div className="text-lg text-blue-700 mb-4">
          by <span className="font-semibold">{event.organizer}</span>
        </div>
        <div className="flex flex-col gap-2 mb-4 text-gray-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-700" />
            <span>{event.dateString}</span>
          </div>
          {event.location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-700" />
              <span>{event.location}</span>
            </div>
          )}
          {event.priceString && (
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5 text-blue-700" />
              <span>{event.priceString}</span>
            </div>
          )}
          {typeof event.likes === "number" && (
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-blue-700" />
              <span>{event.likes}</span>
            </div>
          )}
        </div>
        <div className="flex gap-2 flex-wrap mb-4">
          {event.targetGroups?.map((tg) => (
            <Badge key={tg.id} variant="secondary" className="bg-blue-100 text-blue-800">
              {tg.name}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 mb-4">
          <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm shadow hover:bg-blue-200 transition">
            <span>Lisää kalenteriin</span>
          </button>
          <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm shadow hover:bg-blue-200 transition">
            <span>Jaa</span>
          </button>
        </div>
        <div className="text-gray-700">{event.description}</div>
      </div>
    </div>
  );
}