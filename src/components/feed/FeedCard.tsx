"use client";
import { Heart, MessageCircle, Repeat2, Send, MoreHorizontal } from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { FeedMessage } from "../../../types";
import { User } from "@/generated/prisma";
import { useRouter } from "next/navigation";


interface FeedMessageProps {
  message: FeedMessage;
}

export function FeedCard ({ message }: FeedMessageProps) {
  const { user } = useUser();
  const router = useRouter();
  const [liked, setLiked] = useState(message.likedByUser || false);
  const [likeCount, setLikeCount] = useState(message.likeCount || 0);
  const [commentCount] = useState(message.commentCount || Math.floor(Math.random() * 1000));
  const [repostCount] = useState(message.repostCount || Math.floor(Math.random() * 500));
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);


const handleLike = async () => {
  if (!user) return;
  if (liked) {
    const res = await fetch(`/api/feed/${message.id}/like`, {
      method: "DELETE",
      body: JSON.stringify({ feedId: message.id }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLiked(false);
    setLikeCount(data.likeCount ?? likeCount - 1);
  } else {
    const res = await fetch(`/api/feed/${message.id}/like`, {
      method: "POST",
      body: JSON.stringify({ feedId: message.id }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    setLiked(true);
    setLikeCount(data.likeCount ?? likeCount + 1);
  }
};

  const handleCommentClick = () => {
    setShowCommentInput(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
    // If more than 2 lines, open modal
    if (e.target.value.split("\n").length > 2) {
      setShowModal(true);
    }
  };

  const handleExpand = () => setShowModal(true);

  const handleCommentSubmit = async () => {
    if (!comment.trim() || !user) return;
    await fetch("/api/feed/comment", {
      method: "POST",
      body: JSON.stringify({
        messageId: message.id,
        content: comment.trim(),
        userId: user.id,
        user: user.username || user.firstName || "User",
        avatar: user.imageUrl,
      }),
      headers: { "Content-Type": "application/json" },
    });
    setComment("");
    setShowCommentInput(false);
    setShowModal(false);
    // Optionally: refresh comments
  };

  return (
    <div
      className="flex flex-col p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer relative"
      onClick={() => router.push(`/feed/${message.id}`)}
    >
      {/* More menu */}
      <button
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
        onClick={e => e.stopPropagation()}
      >
        <MoreHorizontal className="w-5 h-5" />
      </button>
      {/* Avatar */}
      <img
        src={message.avatar}
        alt={message.user}
        className="w-12 h-12 rounded-full mr-4 object-cover"
        onClick={e => e.stopPropagation()}
      />
      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-gray-900">{message.user}</span>
          <span className="text-gray-400 text-xs">{message.time}</span>
        </div>
        <p className="text-gray-800 whitespace-pre-line">{message.content}</p>
        {/* Actions */}
        <div className="mt-4 flex items-center space-x-8 text-gray-500">
          <button
            onClick={e => { e.stopPropagation(); handleLike(); }}
            className={`flex items-center gap-1 group ${liked ? "text-red-500" : "hover:text-red-500"}`}
          >
            <Heart className={`w-5 h-5 ${liked ? "fill-red-500" : ""}`} />
            <span className="text-sm">{likeCount.toLocaleString()}</span>
          </button>
          <button
            className="flex items-center gap-1 hover:text-blue-500"
            onClick={e => { e.stopPropagation(); handleCommentClick(); }}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">{commentCount.toLocaleString()}</span>
          </button>
          <button
            className="flex items-center gap-1 hover:text-green-600"
            onClick={e => e.stopPropagation()}
          >
            <Repeat2 className="w-5 h-5" />
            <span className="text-sm">{repostCount.toLocaleString()}</span>
          </button>
          <button
            className="flex items-center gap-1 hover:text-blue-400"
            onClick={e => e.stopPropagation()}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Inline comment input */}
      {showCommentInput && !showModal && (
        <div
          className="flex items-start gap-2 mt-4"
          onClick={e => e.stopPropagation()}
        >
          <img
            src={user?.imageUrl || "/default-avatar.png"}
            alt={user?.username || "User"}
            className="w-8 h-8 rounded-full object-cover"
          />
          <form
            onSubmit={e => {
              e.preventDefault();
              handleCommentSubmit();
            }}
            className="flex-1"
          >
            <textarea
              ref={inputRef}
              className="w-full bg-gray-100 rounded-lg p-2 text-sm resize-none"
              rows={2}
              value={comment}
              onChange={handleInputChange}
              placeholder={`Reply to ${message.user}...`}
              onClick={e => e.stopPropagation()}
              onFocus={e => e.stopPropagation()}
            />
            <div className="flex justify-between items-center mt-1">
              <button
                className="text-xs text-blue-500 hover:underline"
                onClick={e => {
                  e.stopPropagation();
                  handleExpand();
                }}
                type="button"
              >
                Expand
              </button>
              <button
                className="bg-[#1da1f2] text-white px-4 py-1 rounded-full text-sm font-bold disabled:opacity-60"
                disabled={!comment.trim()}
                type="submit"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Modal for expanded comment */}
      {showModal && (
        <CommentModal
          message={message}
          comment={comment}
          setComment={setComment}
          onClose={() => setShowModal(false)}
          onSubmit={handleCommentSubmit}
          user={user}
        />
      )}

      {/* ...render comments here if needed... */}
    </div>
  );
}

// Modal component
import { UserResource } from "@clerk/types";

type CommentModalProps = {
  message: FeedMessage;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
  onSubmit: () => void;
  user: UserResource | null | undefined;
};

function CommentModal({ message, comment, setComment, onClose, onSubmit, user }: CommentModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      onClick={e => e.stopPropagation()} // Prevents bubbling to FeedCard
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <img
              src={message.avatar}
              alt={message.user}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-semibold">{message.user}</span>
            <span className="text-xs text-gray-400">{message.time}</span>
          </div>
          <div className="mt-2 text-gray-800">{message.content}</div>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit();
          }}
          onClick={e => e.stopPropagation()} // Also prevent bubbling here
        >
          <Image
            src={user?.imageUrl || "/default-avatar.png"}
            alt={user?.username || user?.firstName || "User"}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          <textarea
            className="w-full bg-gray-100 rounded-lg p-2 text-sm resize-none"
            rows={4}
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder={`Reply to ${message.user}...`}
          />
          <div className="flex justify-end mt-3">
            <button
              className="bg-[#1da1f2] text-white px-6 py-2 rounded-full text-sm font-bold disabled:opacity-60"
              disabled={!comment.trim()}
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}