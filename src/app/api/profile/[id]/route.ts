import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = await context.params;
  console.log("id is this", id);
  const user = await db.user.findUnique({ where: { userId:id } });
  console.log("user is this", user);
  if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(user);
}

export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = await context.params;
  const data = await req.json();
  const user = await db.user.update({
    where: { id },
    data,
  });
  return NextResponse.json(user);
}