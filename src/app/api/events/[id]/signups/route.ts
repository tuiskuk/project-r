import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const signups = await db.signup.findMany({
    where: { eventId: params.id },
    include: { User: true },
  });
  return NextResponse.json(signups);
}