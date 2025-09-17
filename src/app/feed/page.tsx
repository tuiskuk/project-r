"use client";
import { useState } from "react";
import { sampleFeed } from "../../../types";
import { FeedCard } from "@/components/feed/FeedCard";

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState<"yleinen" | "seuratut">("yleinen");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top bar (reused) */}

      {/* Main layout */}
      <div className="flex flex-1">
        {/* Left sidebar */}
        <div className="hidden lg:flex flex-col w-64 p-4 space-y-4 border-r border-gray-200">
          <button className="p-2 rounded hover:bg-gray-100 cursor-pointer">Tapahtumat</button>
          <button className="p-2 rounded hover:bg-gray-100 cursor-pointer">Seurattavat</button>
          <button className="p-2 rounded hover:bg-gray-100 cursor-pointer">Asetukset</button>
        </div>

        {/* Feed */}
        <div className="flex-1 p-4 space-y-4 max-w-2xl mx-auto w-full">
          {/* Tabs for feed */}
          <div className="flex space-x-4 mb-4">
            <button
              className={`flex-1 py-2 text-center font-semibold rounded ${
                activeTab === "yleinen"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("yleinen")}
            >
              Yleinen
            </button>
            <button
              className={`flex-1 py-2 text-center font-semibold rounded ${
                activeTab === "seuratut"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("seuratut")}
            >
              Seuratut
            </button>
          </div>

          {/* Post input */}
          <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow">
            <img
              src="https://i.pravatar.cc/40?img=11"
              alt="User avatar"
              className="w-10 h-10 rounded-full"
            />
            <input
              type="text"
              placeholder="Mitä ajatuksia sinulla on?"
              className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Feed posts */}
          {sampleFeed.map((msg) => (
            <FeedCard key={msg.id} message={msg} />
          ))}
        </div>

        {/* Right sidebar */}
        <div className="hidden lg:flex flex-col w-64 p-4 space-y-4 border-l border-gray-200">
          <button className="p-2 rounded hover:bg-gray-100 cursor-pointer">Uusi tapahtuma</button>
          <button className="p-2 rounded hover:bg-gray-100 cursor-pointer">Suosituimmat</button>
          <button className="p-2 rounded hover:bg-gray-100 cursor-pointer">Rukouspyynnöt</button>
        </div>
      </div>
    </div>
  );
}
