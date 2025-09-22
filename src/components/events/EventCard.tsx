"use client";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  place: string;
  image: string;
  href?: string;
  badges?: React.ReactNode;
  showEdit?: boolean;
  showDelete?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function EventCard({
  id,
  title,
  date,
  place,
  image,
  href,
  badges,
  showEdit,
  showDelete,
  onEdit,
  onDelete,
}: EventCardProps) {
  const CardContent = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0 }}
      className="w-full md:w-auto flex-shrink-0 rounded-xl cursor-pointer relative bg-white shadow-md transition-all duration-300 z-10 overflow-hidden"
    >
      {/* Image */}
      <div className="h-52 md:h-56 lg:h-60 w-full relative overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 hover:opacity-20 rounded-t-xl" />
      </div>

      {/* Info section */}
      <div className="p-5 bg-gray-50 relative rounded-b-xl">
        <div className="font-semibold text-lg text-gray-900 truncate">{title}</div>
        <div className="text-sm text-gray-600 mt-1">{date} • {place}</div>

        {/* Heart button bottom-right */}
        <button className="absolute bottom-4 right-4 p-2.5 rounded-full transition-all duration-300 cursor-pointer hover:bg-red-50">
          <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors duration-300" />
        </button>

        {/* Hover border and shadow layers for the card */}
        <div className="absolute inset-0 rounded-xl pointer-events-none border border-gray-300 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[0_10px_25px_rgba(0,0,0,0.15),-5px_0_15px_rgba(0,0,0,0.05)] opacity-0 hover:opacity-100 transition-opacity duration-300" />

        {/* Badges (target groups, etc.) */}
        {badges && (
          <div className="absolute left-4 top-4 flex flex-wrap gap-1 z-10">
            {badges}
          </div>
        )}

        {/* Edit/Delete buttons */}
        {(showEdit || showDelete) && (
          <div className="absolute top-4 right-4 flex gap-2 z-20">
            {showEdit && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onEdit && onEdit();
                }}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded text-xs"
              >
                Muokkaa
              </button>
            )}
            {showDelete && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onDelete && onDelete();
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs"
              >
                Poista
              </button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );

  // If href is provided, wrap with Link
  return href ? (
    <Link href={href} className="block h-full" prefetch={false}>
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
}
