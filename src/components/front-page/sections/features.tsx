"use client";

import { FeatureCard } from "./feature-card";
import { Ticket, CreditCard, Users, ShoppingBag } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Ticket className="w-6 h-6" />,
      title: "Events",
      description: "Find and buy tickets for the best events in Finland.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Student Card",
      description: "Activate your digital student card for exclusive discounts.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Communities",
      description: "Join groups and memberships to connect with peers.",
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Products",
      description: "Shop merch and products from student organisations.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Everything you need in one app
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <FeatureCard
            key={i}
            icon={f.icon}
            title={f.title}
            description={f.description}
          />
        ))}
      </div>
    </section>
  );
}
