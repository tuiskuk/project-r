import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import cuid from "cuid";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { commentId } = await req.json();

  // Insert like
  const { error } = await supabase.from("CommentLike").insert({
    id: cuid(),
    commentId,
    userId,
  });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Increment likeCount atomically
  await supabase.rpc("increment_comment_like_count", { comment_id: commentId });

  // Fetch updated likeCount
  const { data: updated } = await supabase
    .from("Comment")
    .select("likeCount")
    .eq("id", commentId)
    .single();

  return NextResponse.json({ success: true, likeCount: updated?.likeCount });
}

export async function DELETE(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { commentId } = await req.json();

  await supabase
    .from("CommentLike")
    .delete()
    .eq("commentId", commentId)
    .eq("userId", userId);

  // Decrement likeCount atomically
  await supabase.rpc("decrement_comment_like_count", { comment_id: commentId });

  // Fetch updated likeCount
  const { data: updated } = await supabase
    .from("Comment")
    .select("likeCount")
    .eq("id", commentId)
    .single();

  return NextResponse.json({ success: true, likeCount: updated?.likeCount });
}