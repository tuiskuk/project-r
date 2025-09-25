"use client";
import cuid from "cuid";
import { useEffect, useState, useRef, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { FeedCard } from "@/components/feed/FeedCard";
import { useUser } from "@clerk/nextjs";
import { Home, Search, Plus, Heart, User } from "lucide-react";
import { FeedSidebar } from "@/components/feed/FeedSidebar";

type FeedMessage = {
  id: string;
  time: string;
  user: string;
  avatar: string;
  content: string;
  userId: string;
  likeCount: number;
  likedByUser?: boolean;
  commentCount: number;
  repostCount: number;
};

const FEED_CHANNEL = "feed-room";
const EVENT_MESSAGE_TYPE = "feed-message";


export default function FeedPage() {
  const [feed, setFeed] = useState<FeedMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const currentUser = useUser();
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);

  // Fetch initial feed from DB
  useEffect(() => {
    async function fetchFeed() {
      const res = await fetch("/api/feed");
      if (!res.ok) {
        setFeed([]);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setFeed(
        Array.isArray(data)
          ? data.map(msg => ({
              ...msg,
              id: String(msg.id),
              likeCount: typeof msg.likeCount === "number" ? msg.likeCount : 0,
              commentCount: typeof msg.commentCount === "number" ? msg.commentCount : 0,
              repostCount: typeof msg.repostCount === "number" ? msg.repostCount : 0,
            }))
          : []
      );
      setLoading(false);
    }
    fetchFeed();
  }, [currentUser.user?.id]);

  // Setup Supabase broadcast channel for real-time updates
  useEffect(() => {
    const channel = supabase.channel(FEED_CHANNEL);

    channel
      .on("broadcast", { event: EVENT_MESSAGE_TYPE }, (payload) => {
        const msg = payload.payload as FeedMessage;
        setFeed((prev) => {
          if (prev.some((m) => m.id === msg.id)) return prev;
          return [msg, ...prev];
        });
      })
      .subscribe();

    channelRef.current = channel;

    return () => {
      supabase.removeChannel(channel);
      channelRef.current = null;
    };
  }, []);
  // Handle sending a new message
    const handleSend = useCallback(async () => {
      if (!input.trim() || sending || !currentUser.user) return;
      setSending(true);
  
      const newMsg: FeedMessage = {
        id: cuid(),
        user:
          currentUser.user.fullName ||
          currentUser.user.username ||
          currentUser.user.firstName ||
          "User",
        avatar: currentUser.user.imageUrl,
        userId: currentUser.user.id,
        content: input.trim(),
        time: new Date().toISOString(),
        likeCount: 0,
        commentCount: 0,
        repostCount: 0,
      };
  
      // Save to DB
      const { error } = await supabase.from("FeedMessage").insert([newMsg]);
      setSending(false);
      setInput("");
      inputRef.current?.focus();
      if (error) {
        alert(error.message);
      } else {
        setFeed((prev) => [newMsg, ...prev]);
        // Use the persistent channel for broadcasting
        if (channelRef.current) {
          await channelRef.current.send({
            type: "broadcast",
            event: EVENT_MESSAGE_TYPE,
            payload: newMsg,
          });
        }
      }
    }, [input, sending, currentUser.user]);

  return (
    <div className="min-h-screen bg-[#fafafa] flex">
      {/* Sidebar */}
      <FeedSidebar />

      {/* Main feed area */}
      <main className="flex-1 flex justify-center md:ml-20">
        <div className="w-full max-w-xl px-2 sm:px-0 py-8">
          {/* Top bar */}
          <header className="w-full py-4 bg-white shadow rounded-2xl mb-4">
            <div className="max-w-xl mx-auto px-4">
              <h1 className="text-2xl font-bold text-gray-900">For you</h1>
            </div>
          </header>
          {/* Input box */}
          <div className="flex space-x-3 px-4 py-6 border-b border-gray-200 bg-white rounded-2xl mb-4">
            <img
              src={currentUser.user?.imageUrl || "/default-avatar.png"}
              alt={currentUser.user?.firstName || "User"}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <textarea
                ref={inputRef}
                className="w-full bg-transparent text-gray-900 border-none outline-none resize-none text-lg placeholder-gray-400"
                rows={2}
                maxLength={280}
                placeholder="What's new?"
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={sending}
                onKeyDown={e => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-400">{input.length}/280</span>
                <button
                  onClick={handleSend}
                  disabled={sending || !input.trim()}
                  className="bg-[#1da1f2] hover:bg-[#1a8cd8] text-white font-bold py-2 px-6 rounded-full transition disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Post"}
                </button>
              </div>
            </div>
          </div>
          {/* Feed */}
          <div className="flex flex-col gap-3">
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <span className="text-gray-400 text-lg">Loading...</span>
              </div>
            ) : feed.length === 0 ? (
              <div className="flex justify-center items-center h-40">
                <span className="text-gray-400 text-lg">No feed messages yet.</span>
              </div>
            ) : (
              feed.map((msg) => <FeedCard key={msg.id} message={msg} />)
            )}
          </div>
        </div>
      </main>

      {/* Floating action button for mobile */}
      <button
        className="fixed bottom-6 right-6 md:hidden bg-black text-white rounded-full p-4 shadow-lg hover:bg-gray-900 transition"
        aria-label="Create"
        onClick={() => inputRef.current?.focus()}
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}