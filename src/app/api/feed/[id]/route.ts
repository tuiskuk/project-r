import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { userId } = await auth();

  // Fetch the feed message
  const { data: message, error } = await supabase
    .from("FeedMessage")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 404 });

  // Fetch like for current user
  let likedByUser = false;
  if (userId) {
    const { data: like } = await supabase
      .from("FeedLike")
      .select("id")
      .eq("feedId", params.id)
      .eq("userId", userId)
      .single();
    likedByUser = !!like;
  }

  return NextResponse.json({ ...message, likedByUser });
}