import { db } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    const event = await db.event.findUnique({
      where: { id },
      include: {
        targetGroups: {
          include: {
            targetGroup: true,
          },
        },
      },
    });
    if (!event) return NextResponse.json({ error: "Not found" }, { status: 404 });

    // Transform so event.targetGroups is an array of { id, name }
    const targetGroups = event.targetGroups.map((tg) => ({
      id: tg.targetGroup.id,
      name: tg.targetGroup.name,
    }));

    return NextResponse.json({
      ...event,
      targetGroups,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch event" }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
const { id } = await context.params;
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const event = await db.event.findUnique({ where: { id: id } });
  if (!event) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (event.organizerId !== userId)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const body = await req.json();

  // Separate targetGroupIds from other fields
  const { targetGroupIds, ...eventData } = body;

  // Update event fields
  const updated = await db.event.update({
    where: { id: id },
    data: {
      ...eventData,
      // Update targetGroups relation
      targetGroups: targetGroupIds
        ? {
            // Remove all old, set new
            deleteMany: {},
            create: targetGroupIds.map((tgId: string) => ({
              targetGroup: { connect: { id: tgId } },
            })),
          }
        : undefined,
    },
    include: {
      targetGroups: {
        include: { targetGroup: true },
      },
    },
  });

  // Transform targetGroups for frontend
  const targetGroups = updated.targetGroups.map((tg) => ({
    id: tg.targetGroup.id,
    name: tg.targetGroup.name,
  }));

  return NextResponse.json({
    ...updated,
    targetGroups,
  });
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  // Fetch event to check creator
  const event = await db.event.findUnique({ where: { id: id } });
  if (!event) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (event.organizerId !== userId)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  // First, delete related EventTargetGroups
  await db.eventTargetGroups.deleteMany({
    where: { eventId: id },
  });

  // Then, delete the event
  await db.event.delete({ where: { id: id } });
  return NextResponse.json({ success: true });
}