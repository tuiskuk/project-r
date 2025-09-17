"use client";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to experience more?
      </h2>
      <p className="max-w-2xl mx-auto mb-8 text-lg text-indigo-100">
        Download the app and join thousands of students enjoying benefits,
        events, and communities.
      </p>
      <Button size="lg" variant="secondary" className="px-8 text-lg">
        Download App
      </Button>
    </section>
  );
}
