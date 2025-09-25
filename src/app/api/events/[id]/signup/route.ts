import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  // Prevent duplicate signups
  const existing = await db.signup.findUnique({
    where: { userId_eventId: { userId, eventId: params.id } },
  });
  if (existing) return NextResponse.json({ success: true });

  // Get extra fields from the request body
  const body = await req.json();

  const signup = await db.signup.create({
    data: {
      userId,
      eventId: params.id,
      displayName: body.displayName,
      avatar: body.avatar,
      bio: body.bio,
      status: body.status,
      age: body.age,
      // Add customFields or other fields if needed
    },
  });
  return NextResponse.json(signup);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  await db.signup.deleteMany({
    where: { userId, eventId: params.id },
  });
  return NextResponse.json({ success: true });
}