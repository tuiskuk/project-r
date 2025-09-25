import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import cuid from "cuid";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { messageId, parentId, content, user, avatar } = await req.json();

  const { error } = await supabase.from("Comment").insert({
    id: cuid(),
    messageId,
    parentId,
    content,
    userId,
    user,
    avatar,
    time: new Date().toISOString(),
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Optionally increment replyCount on parent comment
  await supabase.rpc("increment_reply_count", { comment_id: parentId });

  return NextResponse.json({ success: true });
}