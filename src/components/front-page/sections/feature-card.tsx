"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow">
      <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
