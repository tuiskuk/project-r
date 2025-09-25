// CommentCard.tsx
import { useState, useRef } from "react";
import { Heart, MessageCircle, Repeat2, Send, MoreHorizontal } from "lucide-react";
import { useUser } from "@clerk/nextjs";

interface Comment {
  id: string;
  messageId: string;
  user: string;
  avatar: string;
  time: string;
  content: string;
  likedByUser?: boolean;
  likeCount?: number;
  replyCount?: number;
  replies?: Comment[];
}

interface CommentCardProps {
  comment: Comment;
  onReply?: (comment: Comment) => void;
}

export function CommentCard({ comment, onReply }: { comment: Comment; onReply?: (comment: Comment) => void }) {
  const { user } = useUser();
  const [liked, setLiked] = useState(comment.likedByUser || false);
  const [likeCount, setLikeCount] = useState(comment.likeCount || 0);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [reply, setReply] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleLike = async () => {
    if (!user) return;
    if (liked) {
      const res = await fetch("/api/feed/comment/like", {
        method: "DELETE",
        body: JSON.stringify({ commentId: comment.id }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setLiked(false);
      setLikeCount(data.likeCount ?? likeCount - 1);
    } else {
      const res = await fetch("/api/feed/comment/like", {
        method: "POST",
        body: JSON.stringify({ commentId: comment.id }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setLiked(true);
      setLikeCount(data.likeCount ?? likeCount + 1);
    }
  };

  const handleReplyClick = () => {
    setShowReplyInput(true);
    setTimeout(() => inputRef.current?.focus(), 100);
    if (onReply) onReply(comment);
  };

  const handleReplySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!reply.trim() || !user) return;
    await fetch("/api/feed/comment/reply", {
      method: "POST",
      body: JSON.stringify({
        messageId: comment.messageId,
        parentId: comment.id,
        content: reply.trim(),
        userId: user.id,
        user: user.username || user.firstName || "User",
        avatar: user.imageUrl,
      }),
      headers: { "Content-Type": "application/json" },
    });
    setReply("");
    setShowReplyInput(false);
    // Optionally: refresh comments or update state
  };

  return (
    <div className="flex flex-col p-4 bg-white rounded-2xl border border-gray-200 shadow-sm mt-2">
      <div className="flex items-center gap-2 mb-1">
        <img src={comment.avatar} alt={comment.user} className="w-8 h-8 rounded-full object-cover" />
        <span className="font-semibold">{comment.user}</span>
        <span className="text-gray-400 text-xs">{comment.time}</span>
      </div>
      <div className="ml-10">{comment.content}</div>
      <div className="ml-10 mt-2 flex items-center space-x-8 text-gray-500">
        <button onClick={handleLike} className={`flex items-center gap-1 ${liked ? "text-red-500" : "hover:text-red-500"}`}>
          <Heart className={`w-5 h-5 ${liked ? "fill-red-500" : ""}`} />
          <span className="text-sm">{likeCount}</span>
        </button>
        <button onClick={handleReplyClick} className="flex items-center gap-1 hover:text-blue-500">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">{comment.replyCount || 0}</span>
        </button>
        {/* ...other buttons... */}
      </div>
      {showReplyInput && (
        <div className="flex items-start gap-2 mt-2 ml-10">
          <img src={user?.imageUrl || "/default-avatar.png"} alt={user?.username || "User"} className="w-7 h-7 rounded-full object-cover" />
          <form onSubmit={handleReplySubmit} className="flex-1">
            <textarea
              ref={inputRef}
              className="w-full bg-gray-100 rounded-lg p-2 text-sm resize-none"
              rows={2}
              value={reply}
              onChange={e => setReply(e.target.value)}
              placeholder={`Reply to ${comment.user}...`}
            />
            <div className="flex justify-end mt-1">
              <button
                className="bg-[#1da1f2] text-white px-4 py-1 rounded-full text-sm font-bold disabled:opacity-60"
                disabled={!reply.trim()}
                type="submit"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      )}
      {/* Render replies recursively */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-10">
          {comment.replies.map(reply => (
            <CommentCard key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
}