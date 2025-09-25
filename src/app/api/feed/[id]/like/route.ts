import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { auth } from "@clerk/nextjs/server";
import cuid from "cuid";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { feedId } = await req.json();

  // Insert like with cuid
  const { error } = await supabase.from("FeedLike").insert({
    id: cuid(),
    feedId,
    userId,
  });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Increment likeCount atomically
  const { error: incrementError } = await supabase.rpc("increment_like_count", { feed_id: feedId });
    if (incrementError) {
    console.error("RPC Error:", incrementError.message);
    }

  // Fetch updated likeCount
  const { data: updated } = await supabase
    .from("FeedMessage")
    .select("likeCount")
    .eq("id", feedId)
    .single();

  return NextResponse.json({ success: true, likeCount: updated?.likeCount });
}

export async function DELETE(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { feedId } = await req.json();

  await supabase
    .from("FeedLike")
    .delete()
    .eq("feedId", feedId)
    .eq("userId", userId);

  // Decrement likeCount atomically
  await supabase.rpc("decrement_like_count", { feed_id: feedId });

  // Fetch updated likeCount
  const { data: updated } = await supabase
    .from("FeedMessage")
    .select("likeCount")
    .eq("id", feedId)
    .single();

  return NextResponse.json({ success: true, likeCount: updated?.likeCount });
}