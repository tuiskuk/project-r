import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  const { userId } = await auth();

  // Fetch all feed messages
  const { data: messages, error } = await supabase
    .from("FeedMessage")
    .select("*")
    .order("time", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Fetch likes for current user
  let likedIds: string[] = [];
  if (userId) {
    const { data: likes } = await supabase
      .from("FeedLike")
      .select("feedId")
      .eq("userId", userId);
    likedIds = likes?.map(l => l.feedId) || [];
  }

  // Add likedByUser to each message
  const feed = (messages || []).map(msg => ({
    ...msg,
    likedByUser: likedIds.includes(msg.id),
  }));

  return NextResponse.json(feed);
}