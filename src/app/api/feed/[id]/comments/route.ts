import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  const { userId } = await auth();

  // Fetch all comments
  const { data: comments, error } = await supabase
    .from("Comment")
    .select("*")
    .order("time", { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Fetch likes for current user
  let likedIds: string[] = [];
  if (userId) {
    const { data: likes } = await supabase
      .from("CommentLike")
      .select("commentId")
      .eq("userId", userId);
    likedIds = likes?.map(l => l.commentId) || [];
  }

  // Add likedByUser to each comment
  const commentsWithLike = (comments || []).map(comment => ({
    ...comment,
    likedByUser: likedIds.includes(comment.id),
  }));

  return NextResponse.json(commentsWithLike);
}