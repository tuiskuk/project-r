"use client";
import cuid from "cuid";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { FeedCard } from "@/components/feed/FeedCard";
import { useUser } from "@clerk/nextjs";

type FeedMessage = {
  id: string;
  time: string;
  user: string;
  avatar: string;
  content: string;
  userId: string;
  // Add other fields from your FeedMessage table as needed
};

export default function FeedPage() {
  const [feed, setFeed] = useState<FeedMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const currentUser = useUser();
  console.log(currentUser);

  // Example user (replace with your auth/user context)
  

  useEffect(() => {
    async function fetchFeed() {
      const { data, error } = await supabase
        .from("FeedMessage")
        .select("*")
        .order("time", { ascending: false });

      if (error) {
        setFeed([]);
      } else {
        setFeed(Array.isArray(data) ? data.map(msg => ({ ...msg, id: String(msg.id) })) : []);
      }
      setLoading(false);
    }

    fetchFeed();

    const channel = supabase
      .channel("realtime:FeedMessage")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "FeedMessage" },
        (payload) => {
          const newMessage = { ...payload.new, id: String(payload.new.id) } as FeedMessage;
          setFeed((prevFeed) => [newMessage, ...prevFeed]);
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "FeedMessage" },
        (payload) => {
          const updatedMessage = { ...payload.new, id: String(payload.new.id) } as FeedMessage;
          setFeed((prevFeed) =>
            prevFeed.map((msg) => (msg.id === updatedMessage.id ? updatedMessage : msg))
          );
        }
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "FeedMessage" },
        (payload) => {
          setFeed((prevFeed) => prevFeed.filter((msg) => msg.id !== String(payload.old.id)));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    setSending(true);
    if (!currentUser.user) {
      alert("You must be logged in to send a message.");
      setSending(false);
      return;
    }
    const newMsg: FeedMessage = {
      id: cuid(),
      user: currentUser.user.fullName || currentUser.user.username || currentUser.user.firstName || "User",
      avatar: currentUser.user.imageUrl,
      userId: currentUser.user.id,
      content: input.trim(),
      time: new Date().toISOString(),
    };
    const { error } = await supabase.from("FeedMessage").insert([newMsg]);
    setSending(false);
    setInput("");
    inputRef.current?.focus();
    if (error) {
      alert(error.message);
    } else {
      setFeed((prevFeed) => [newMsg, ...prevFeed]);
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#15202b]">
      <header className="w-full py-4 bg-[#192734] shadow">
        <div className="max-w-xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-white">Home</h1>
        </div>
      </header>
      <section className="flex-1 max-w-xl mx-auto w-full border-x border-[#38444d] min-h-[80vh]">
        {/* Input box */}
        <div className="flex space-x-3 px-4 py-6 border-b border-[#38444d] bg-[#192734]">
          <img
            src={currentUser.user?.imageUrl || "/default-avatar.png"}
            alt={currentUser.user?.firstName || "User"}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <textarea
              ref={inputRef}
              className="w-full bg-transparent text-white border-none outline-none resize-none text-lg placeholder-gray-400"
              rows={2}
              maxLength={280}
              placeholder="What's happening?"
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
              <span className="text-sm text-gray-500">{input.length}/280</span>
              <button
                onClick={handleSend}
                disabled={sending || !input.trim()}
                className="bg-[#1da1f2] hover:bg-[#1a8cd8] text-white font-bold py-2 px-6 rounded-full transition disabled:opacity-60"
              >
                {sending ? "Sending..." : "Tweet"}
              </button>
            </div>
          </div>
        </div>
        {/* Feed */}
        <div className="flex flex-col">
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
      </section>
    </main>
  );
}