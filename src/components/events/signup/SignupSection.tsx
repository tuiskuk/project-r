"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState, useRef } from "react";
import AttendeeList from "./AttendeeList";

type Signup = {
  userId: string;
  displayName?: string;
  avatar?: string;
  bio?: string;
  status?: string;
  joinedAt?: string;
  customFields?: Record<string, unknown>;
  age?: number;
};

interface SignupSectionProps {
  eventId: string;
  eventName: string;
  eventDate: string; // ISO string or formatted date
}

export default function SignupSection({ eventId, eventName, eventDate }: SignupSectionProps) {
  const { user } = useUser();
  const [signups, setSignups] = useState<Signup[]>([]);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [loadingSignup, setLoadingSignup] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [form, setForm] = useState({
    displayName: user?.firstName || user?.username || "",
    avatar: user?.imageUrl || "",
    bio: "",
    status: "Going",
    age: undefined as number | undefined,
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  // Fetch signups
  useEffect(() => {
    fetch(`/api/events/${eventId}/signups`)
      .then(res => res.json())
      .then(data => {
        setSignups(data);
        setIsSignedUp(data.some((s: Signup) => s.userId === user?.id));
      });
  }, [eventId, user?.id]);

  // Sticky logic: stick to bottom if button is not visible
  useEffect(() => {
    const handleScroll = () => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      setIsSticky(rect.top > window.innerHeight || rect.bottom < 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignup = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoadingSignup(true);
    await fetch(`/api/events/${eventId}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setIsSignedUp(true);
    setLoadingSignup(false);
    setShowForm(false);
    fetch(`/api/events/${eventId}/signups`)
      .then(res => res.json())
      .then(setSignups);
  };

  const handleCancelSignup = async () => {
    setLoadingSignup(true);
    await fetch(`/api/events/${eventId}/signup`, { method: "DELETE" });
    setIsSignedUp(false);
    setLoadingSignup(false);
    fetch(`/api/events/${eventId}/signups`)
      .then(res => res.json())
      .then(setSignups);
  };

  // Share modal logic
  const handleShare = () => setShowShare(true);
  const closeShare = () => setShowShare(false);

  // The signup bar (used both sticky and at the bottom)
  const SignupBar = () => (
    <div className="w-full bg-white border-t border-gray-200 shadow-lg flex flex-col sm:flex-row items-center px-2 sm:px-12 py-1.5 sm:py-6 min-h-[44px] sm:min-h-[84px]">
      <div className="flex-1 w-full flex flex-col justify-center items-start">
        <span className="text-[9px] sm:text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5 sm:mb-1">
          {eventDate}
        </span>
        <span className="text-sm sm:text-xl font-bold text-gray-900 truncate">{eventName}</span>
      </div>
      <span className="my-1 sm:my-0 sm:mx-8 text-xs sm:text-lg font-bold text-[#222]">FREE</span>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 w-full sm:w-auto mt-1 sm:mt-0">
        <button
          onClick={handleShare}
          className="w-full sm:w-auto px-3 sm:px-7 py-1.5 sm:py-3 rounded-lg border-2 border-[#1da1f2] text-[#1da1f2] font-bold flex items-center justify-center gap-2 hover:bg-[#e8f5fd] transition text-xs sm:text-lg"
          style={{ minWidth: 70 }}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path d="M15 5l7 7-7 7M22 12H3" stroke="#1da1f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Jaa
        </button>
        {user && (
          isSignedUp ? (
            <button
              onClick={handleCancelSignup}
              disabled={loadingSignup}
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-3 sm:px-8 py-1.5 sm:py-3 rounded-lg font-bold shadow transition text-xs sm:text-lg"
              style={{ minWidth: 80 }}
            >
              {loadingSignup ? "Canceling..." : "Cancel Signup"}
            </button>
          ) : (
            <button
              onClick={() => setShowForm(true)}
              disabled={loadingSignup}
              className="w-full sm:w-auto bg-[#ff5a5f] hover:bg-[#e04848] text-white px-3 sm:px-8 py-1.5 sm:py-3 rounded-lg font-bold shadow transition text-xs sm:text-lg"
              style={{ minWidth: 80 }}
            >
              Attend online
            </button>
          )
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Sticky signup bar */}
      
        <div ref={buttonRef} className="fixed bottom-0 left-0 w-full z-40">
          <SignupBar />
        </div>
      

      {/* Share modal */}
      {showShare && (
        <ShareModal
          eventName={eventName}
          eventId={eventId}
          eventDate={eventDate}
          onClose={closeShare}
        />
      )}

      {/* Signup modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <form
            onSubmit={handleSignup}
            className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg space-y-4 relative"
          >
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-2 text-gray-900">Sign up for this event</h2>
            <label className="block font-semibold text-gray-700">
              Display Name
              <input
                type="text"
                className="mt-1 w-full rounded bg-gray-100 p-2"
                value={form.displayName}
                onChange={e => setForm(f => ({ ...f, displayName: e.target.value }))}
                required
              />
            </label>
            <label className="block font-semibold text-gray-700">
              Avatar URL
              <input
                type="url"
                className="mt-1 w-full rounded bg-gray-100 p-2"
                value={form.avatar}
                onChange={e => setForm(f => ({ ...f, avatar: e.target.value }))}
                placeholder="https://..."
              />
            </label>
            <label className="block font-semibold text-gray-700">
              Bio
              <textarea
                className="mt-1 w-full rounded bg-gray-100 p-2"
                value={form.bio}
                onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}
                rows={2}
                placeholder="Say something about yourself"
              />
            </label>
            <label className="block font-semibold text-gray-700">
              Status
              <select
                className="mt-1 w-full rounded bg-gray-100 p-2"
                value={form.status}
                onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
              >
                <option value="Going">Going</option>
                <option value="Maybe">Maybe</option>
                <option value="Interested">Interested</option>
              </select>
            </label>
            <label className="block font-semibold text-gray-700">
              Age
              <input
                type="number"
                className="mt-1 w-full rounded bg-gray-100 p-2"
                value={form.age ?? ""}
                onChange={e => setForm(f => ({ ...f, age: e.target.value ? Number(e.target.value) : undefined }))}
                min={0}
                max={120}
                placeholder="Optional"
              />
            </label>
            <button
              type="submit"
              disabled={loadingSignup}
              className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition disabled:opacity-60"
            >
              {loadingSignup ? "Signing up..." : "Sign Up"}
            </button>
          </form>
        </div>
      )}

      {/* Main signup section */}
      <div
        ref={sectionRef}
        className="mt-8 flex flex-col gap-6"
        style={{ paddingBottom: "110px" }} // Adjust to match sticky bar height
      >
        <div>
          <h3 className="font-bold text-xl text-gray-900 mb-1">
            Attendees ({signups.length})
          </h3>
          <AttendeeList signups={signups} />
        </div>
      </div>
    </>
  );
}

// ShareModal component
function ShareModal({
  eventName,
  eventId,
  eventDate,
  onClose,
}: {
  eventName: string;
  eventId: string;
  eventDate: string;
  onClose: () => void;
}) {
  const eventUrl = typeof window !== "undefined"
    ? window.location.origin + `/events/${eventId}`
    : `/events/${eventId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(eventUrl);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg space-y-4 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-2 text-gray-900">Share this event</h2>
        <div>
          <div className="mb-2">
            <span className="block text-xs text-gray-500">{eventDate}</span>
            <span className="block text-lg font-bold text-gray-900">{eventName}</span>
          </div>
          <input
            type="text"
            readOnly
            value={eventUrl}
            className="w-full bg-gray-100 rounded p-2 text-gray-700 font-mono"
          />
          <button
            onClick={handleCopy}
            className="mt-3 w-full bg-[#1da1f2] hover:bg-[#1a8cd8] text-white font-bold py-2 px-6 rounded-full transition"
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}