import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const body = await req.json();
  const { title, description, date, location, latitude, longitude, type, targetGroupIds, image } = body;

  const event = await db.event.create({
    data: {
      title,
      description,
      date: new Date(date),
      location,
      latitude,
      longitude,
      type,
      image,
      organizerId: userId,
      targetGroups: targetGroupIds
        ? { create: targetGroupIds.map((id: string) => ({ targetGroupId: id })) }
        : undefined,
    },
  });

  return new Response(JSON.stringify(event));
}
