"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EventCard } from "./EventCard";
import { Event } from "../../../types";
import { useState, useEffect } from "react";

interface EventCarouselProps {
  title: string;
  events: Event[];
}

export function EventCarousel({ title, events }: EventCarouselProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // only render Swiper on client
  }, []);

  return (
    <section className="space-y-16 relative px-4 lg:px-16 max-w-[1440px] mx-auto">
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>

      <div className="overflow-hidden">
        {!mounted ? (
          // Skeleton loader
          <div className="flex space-x-4 animate-pulse">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="w-full max-w-[320px] h-72 bg-gray-200 rounded-xl" />
            ))}
          </div>
        ) : (
          <Swiper
            spaceBetween={12}
            slidesPerView={1} // full-width mobile
            centeredSlides={false}
            grabCursor={true}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 12 },       // tablet
              1024: { slidesPerView: 3, spaceBetween: 16 },      // desktop
              1280: { slidesPerView: 3.5, spaceBetween: 16 },    // larger desktop
              1600: { slidesPerView: 4, spaceBetween: 20 },      // wide desktop
            }}
          >
            {events.map((e) => (
              <SwiperSlide key={e.id} className="flex justify-center">
                <EventCard
                  title={e.title}
                  date={e.date}
                  place={e.place}
                  image={e.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

