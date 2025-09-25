import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import cuid from "cuid";

export async function POST(req: NextRequest) {
  const { messageId, parentId, content, userId, user, avatar } = await req.json();

  const { error } = await supabase.from("Comment").insert({
    id: cuid(),
    messageId,
    parentId: parentId || null,
    content,
    userId,
    user,
    avatar,
    time: new Date().toISOString(),
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Optionally increment commentCount on FeedMessage (only for top-level comments)
  if (!parentId) {
    await supabase.rpc("increment_comment_count", { feed_id: messageId });
  }

  return NextResponse.json({ success: true });
}

