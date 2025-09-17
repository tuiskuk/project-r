"use client";

import { Button } from "@/components/ui/button";

export function MerchantInvite() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Sell tickets and memberships effortlessly
      </h2>
      <p className="max-w-2xl mx-auto mb-8 text-gray-600">
        KideClone helps organisations, clubs, and event organisers reach their
        audience with ease. Manage products, memberships, and events from one
        platform.
      </p>
      <Button size="lg" className="px-8 text-lg">
        Become a Merchant
      </Button>
    </section>
  );
}
