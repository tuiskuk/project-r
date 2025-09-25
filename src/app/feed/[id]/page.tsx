"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { FeedCard } from "@/components/feed/FeedCard";
import { CommentCard } from "@/components/feed/CommentCard";

export default function FeedThreadPage() {
  const params = useParams();
  const feedId = params.id as string;
  console.log(params);
  const [message, setMessage] = useState(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch the original message
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      if (!feedId) return;
      const msgRes = await fetch(`/api/feed/${feedId}`);
      console.log(msgRes);
      const msg = await msgRes.json();
      if (!msg || msg.error) {
        setMessage(null);
        setLoading(false);
        return;
      }
      setMessage(msg);

      const commentsRes = await fetch(`/api/feed/${feedId}/comments`);
      const commentsData = await commentsRes.json();
      setComments(Array.isArray(commentsData) ? commentsData : []);
      setLoading(false);
    }
    fetchData();
  }, [feedId]);

  if (loading) return <div className="p-8 text-center text-gray-400">Moi!</div>;
  if (!message) return <div className="p-8 text-center text-gray-400">Not found</div>;

  const commentTree = buildCommentTree(comments);

  return (
    <div className="max-w-2xl mx-auto py-6">
      {/* Original post */}
      <FeedCard message={message} />
      <div className="border-b my-4" />
      {/* Comments */}
      {commentTree.map(comment => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

// Utility to build threaded comments
type Comment = {
  id: string;
  parentId?: string | null;
  user: string;
  avatar: string;
  time: string;
  content: string;
  replies?: Comment[];
  messageId: string;
  likeCount: number;
  likedByUser?: boolean;
};

function buildCommentTree(comments: Comment[]): Comment[] {
  const map: { [key: string]: Comment } = {};
  comments.forEach(c => (map[c.id] = { ...c, replies: [] }));
  const roots: Comment[] = [];
  comments.forEach(c => {
    if (c.parentId) {
      if (map[c.parentId] && map[c.id]) {
        map[c.parentId].replies!.push(map[c.id]);
      }
    } else if (map[c.id]) {
      roots.push(map[c.id]);
    }
  });
  return roots;
}