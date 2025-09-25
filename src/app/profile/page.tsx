"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { ProfileEditModal } from "@/components/profile/ProfileEditModal";

type UserProfile = {
  id: string;
  name?: string;
  email: string;
  imageUrl?: string;
  bio?: string;
  phone?: string;
  location?: string;
  birthdate?: string;
  gender?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  interests: string[];
  languages: string[];
  isPublic: boolean;
};

export default function ProfilePage() {
  const { user } = useUser();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (user) {
      fetch(`/api/profile/${user.id}`)
        .then(res => res.json())
        .then(setProfile);
    }
  }, [user]);

  if (!profile) return <div className="text-center mt-10 text-gray-500">Loading...</div>;

  return (
    <main className="flex flex-col items-center min-h-screen bg-[#15202b]">
      {/* Cover Photo */}
      <div className="w-full h-48 bg-gradient-to-r from-blue-800 to-yellow-400 relative">
        <img
          src={profile.imageUrl || "/default-avatar.png"}
          alt={profile.name || "User"}
          className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
        />
      </div>
      <div className="mt-20 w-full max-w-xl px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
          <p className="text-gray-400">@{profile.email.split("@")[0]}</p>
          <button
            className="mt-4 px-6 py-2 bg-[#1da1f2] text-white rounded-full font-semibold hover:bg-[#1a8cd8] transition"
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </button>
        </div>
        <div className="mt-8 bg-[#192734] rounded-xl p-6 shadow space-y-4">
          <div>
            <span className="font-semibold text-white">Bio:</span>
            <p className="text-gray-300">{profile.bio || "No bio yet."}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div>
              <span className="font-semibold text-white">Location:</span>
              <span className="text-gray-300 ml-2">{profile.location || "-"}</span>
            </div>
            <div>
              <span className="font-semibold text-white">Birthdate:</span>
              <span className="text-gray-300 ml-2">{profile.birthdate ? new Date(profile.birthdate).toLocaleDateString() : "-"}</span>
            </div>
            <div>
              <span className="font-semibold text-white">Gender:</span>
              <span className="text-gray-300 ml-2">{profile.gender || "-"}</span>
            </div>
          </div>
          <div>
            <span className="font-semibold text-white">Interests:</span>
            <span className="text-gray-300 ml-2">{profile.interests?.join(", ") || "-"}</span>
          </div>
          <div>
            <span className="font-semibold text-white">Languages:</span>
            <span className="text-gray-300 ml-2">{profile.languages?.join(", ") || "-"}</span>
          </div>
          <div className="flex gap-4 mt-2">
            {profile.website && (
              <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Website
              </a>
            )}
            {profile.instagram && (
              <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">
                Instagram
              </a>
            )}
            {profile.twitter && (
              <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Twitter
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
      {/* Edit Modal */}
      {editMode && (
        <ProfileEditModal profile={profile} onClose={() => setEditMode(false)} onSave={setProfile} />
      )}
    </main>
  );
}

// You would create a ProfileEditModal component for editing fields in a form and saving via PATCH /api/profile/:userId