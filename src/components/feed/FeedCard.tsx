"use client";
import { Heart } from "lucide-react";
import { useState } from "react";
import { FeedMessage } from "../../../types";

interface FeedMessageProps {
  message: FeedMessage;
}

export function FeedCard({ message }: FeedMessageProps) {
  const [liked, setLiked] = useState(message.liked || false);

  return (
    <div className="flex p-4 border-b border-gray-200 hover:bg-gray-50 transition cursor-pointer">
      {/* Avatar */}
      <img
        src={message.avatar}
        alt={message.user}
        className="w-12 h-12 rounded-full mr-4"
      />

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-gray-900">{message.user}</span>
          <span className="text-gray-500 text-sm">{message.time}</span>
        </div>
        <p className="text-gray-700">{message.content}</p>

        {message.image && (
          <img
            src={message.image}
            alt="Post image"
            className="mt-2 rounded-lg w-full object-cover max-h-64"
          />
        )}

        {/* Actions */}
        <div className="mt-2 flex items-center space-x-4">
          <button
            onClick={() => setLiked(!liked)}
            className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition"
          >
            <Heart className={`w-5 h-5 ${liked ? "text-red-500" : ""}`} />
            <span className="text-sm">{liked ? "Liked" : "Like"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
