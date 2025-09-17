"use client";
import { EventCarousel } from "../events/EventCarousel";

export const sampleEvents = [
  { id: "1", title: "Nuorten Raamattupiiri", type: "Raamattupiiri", date: "Ma 22.9.", place: "Helsinki", image: "https://picsum.photos/400/300?random=1" },
  { id: "2", title: "Raamattupiiri 2", type: "Raamattupiiri", date: "Ti 23.9.", place: "Espoo", image: "https://picsum.photos/400/300?random=2" },
  { id: "3", title: "Raamattupiiri 3", type: "Raamattupiiri", date: "Ke 24.9.", place: "Turku", image: "https://picsum.photos/400/300?random=3" },
  { id: "4", title: "Raamattupiiri 4", type: "Raamattupiiri", date: "To 25.9.", place: "Tampere", image: "https://picsum.photos/400/300?random=4" },
  { id: "5", title: "Raamattupiiri 5", type: "Raamattupiiri", date: "Pe 26.9.", place: "Helsinki", image: "https://picsum.photos/400/300?random=5" },

  { id: "6", title: "Käsityötapahtuma 1", type: "Käsityöt", date: "La 27.9.", place: "Espoo", image: "https://picsum.photos/400/300?random=6" },
  { id: "7", title: "Käsityötapahtuma 2", type: "Käsityöt", date: "Su 28.9.", place: "Turku", image: "https://picsum.photos/400/300?random=7" },
  { id: "8", title: "Käsityötapahtuma 3", type: "Käsityöt", date: "Ma 29.9.", place: "Tampere", image: "https://picsum.photos/400/300?random=8" },
  { id: "9", title: "Käsityötapahtuma 4", type: "Käsityöt", date: "Ti 30.9.", place: "Helsinki", image: "https://picsum.photos/400/300?random=9" },
  { id: "10", title: "Käsityötapahtuma 5", type: "Käsityöt", date: "Ke 1.10.", place: "Espoo", image: "https://picsum.photos/400/300?random=10" },

  { id: "11", title: "Urheilu 1", type: "Urheilu", date: "To 2.10.", place: "Turku", image: "https://picsum.photos/400/300?random=11" },
  { id: "12", title: "Urheilu 2", type: "Urheilu", date: "Pe 3.10.", place: "Tampere", image: "https://picsum.photos/400/300?random=12" },
  { id: "13", title: "Urheilu 3", type: "Urheilu", date: "La 4.10.", place: "Helsinki", image: "https://picsum.photos/400/300?random=13" },
  { id: "14", title: "Urheilu 4", type: "Urheilu", date: "Su 5.10.", place: "Espoo", image: "https://picsum.photos/400/300?random=14" },
  { id: "15", title: "Urheilu 5", type: "Urheilu", date: "Ma 6.10.", place: "Turku", image: "https://picsum.photos/400/300?random=15" },

  { id: "16", title: "Gospel-konsertti 1", type: "Musiikki", date: "Ti 7.10.", place: "Tampere", image: "https://picsum.photos/400/300?random=16" },
  { id: "17", title: "Gospel-konsertti 2", type: "Musiikki", date: "Ke 8.10.", place: "Helsinki", image: "https://picsum.photos/400/300?random=17" },
  { id: "18", title: "Gospel-konsertti 3", type: "Musiikki", date: "To 9.10.", place: "Espoo", image: "https://picsum.photos/400/300?random=18" },
  { id: "19", title: "Gospel-konsertti 4", type: "Musiikki", date: "Pe 10.10.", place: "Turku", image: "https://picsum.photos/400/300?random=19" },
  { id: "20", title: "Gospel-konsertti 5", type: "Musiikki", date: "La 11.10.", place: "Tampere", image: "https://picsum.photos/400/300?random=20" },

  { id: "21", title: "Nuorten ilta 1", type: "Nuoret", date: "Su 12.10.", place: "Helsinki", image: "https://picsum.photos/400/300?random=21" },
  { id: "22", title: "Nuorten ilta 2", type: "Nuoret", date: "Ma 13.10.", place: "Espoo", image: "https://picsum.photos/400/300?random=22" },
  { id: "23", title: "Nuorten ilta 3", type: "Nuoret", date: "Ti 14.10.", place: "Turku", image: "https://picsum.photos/400/300?random=23" },
  { id: "24", title: "Nuorten ilta 4", type: "Nuoret", date: "Ke 15.10.", place: "Tampere", image: "https://picsum.photos/400/300?random=24" },
  { id: "25", title: "Nuorten ilta 5", type: "Nuoret", date: "To 16.10.", place: "Helsinki", image: "https://picsum.photos/400/300?random=25" },
];


const categories = [
  { title: "Urheile ystäviesi kanssa", type: "Urheilu" },
  { title: "Raamattupiirejä nuorille", type: "Raamattupiiri" },
  { title: "Käsityötapahtumia kädentaitajille", type: "Käsityöt" },
  { title: "Musiikki & Konsertit", type: "Musiikki" },
  { title: "Nuoret ja yhteisö", type: "Nuoret" },
];

export function MainHub() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {categories.map((c) => (
        <EventCarousel
          key={c.type}
          title={c.title}
          events={sampleEvents.filter((e) => e.type === c.type)}
        />
      ))}
    </main>
  );
}
