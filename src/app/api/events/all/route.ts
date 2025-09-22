import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET() {
  try {
    const events = await db.event.findMany({
    include: {
        targetGroups: true,
        User: true, // This returns an array of users (organizers)
    },
    orderBy: { date: "asc" },
    });
    return NextResponse.json(events);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json([]);
  }
}