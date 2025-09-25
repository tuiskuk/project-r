"use client";

import { useState } from "react";

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

interface ProfileEditModalProps {
  profile: UserProfile;
  onClose: () => void;
  onSave: (profile: UserProfile) => void;
}

export function ProfileEditModal({ profile, onClose, onSave }: ProfileEditModalProps) {
  const [form, setForm] = useState<UserProfile>({ ...profile });
  const [saving, setSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" && e.target instanceof HTMLInputElement ? e.target.checked : value,
    }));
  };

  const handleArrayChange = (name: keyof UserProfile, value: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: value.split(",").map((v) => v.trim()).filter(Boolean),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const res = await fetch(`/api/profile/${profile.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const updated = await res.json();
    setSaving(false);
    if (res.ok) {
      onSave(updated);
      onClose();
    } else {
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <form
        onSubmit={handleSubmit}
        className="bg-[#192734] rounded-xl p-8 w-full max-w-lg shadow-lg space-y-4 relative"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-white mb-2">Edit Profile</h2>
        <div className="flex flex-col gap-3">
          <label className="text-white font-semibold">
            Name
            <input
              type="text"
              name="name"
              value={form.name || ""}
              onChange={handleChange}
              className="mt-1 w-full rounded bg-[#22303c] text-white p-2"
            />
          </label>
          <label className="text-white font-semibold">
            Bio
            <textarea
              name="bio"
              value={form.bio || ""}
              onChange={handleChange}
              className="mt-1 w-full rounded bg-[#22303c] text-white p-2"
              rows={2}
            />
          </label>
          <label className="text-white font-semibold">
            Location
            <input
              type="text"
              name="location"
              value={form.location || ""}
              onChange={handleChange}
              className="mt-1 w-full rounded bg-[#22303c] text-white p-2"
            />
          </label>
          <label className="text-white font-semibold">
            Birthdate
            <input
              type="date"
              name="birthdate"
              value={form.birthdate || ""}
              onChange={handleChange}
              className="mt-1 w-full rounded bg-[#22303c] text-white p-2"
            />
          </label>
          <label className="text-white font-semibold">
            Gender
            <input
              type="text"
              name="gender"
              value={form.gender || ""}
              onChange={handleChange}
              className="mt-1 w-full rounded bg-[#22303c] text-white p-2"
              placeholder="e.g. Male, Female, Non-binary"
            />
          </label>
          <label className="text-white font-semibold">
            Website
            <input
              type="url"
              name="website"
              value={form.website || ""}
              onChange={handleChange}
              className="mt-1 w-full rounded bg-[#22303c] text-white p-2"
              placeholder="https://yourwebsite.com"
            />
          </label>
          <label className="text-white font-semibold">
            Instagram
            <input
              type="url"
              name="instagram"
              value={form.instagram || ""}
              onChange={handleChange}
              className="mt-1 w-full rounded bg-[#22303c] text-white p-2"
              placeholder="https://instagram.com/yourprofile"
            />
          </label>
          <label className="text-white font-semibold">
            Twitter
            <input
              type="url"
              name="twitter"
              value={form.twitter || ""}
              onChange={handleChange}
              className="mt-1 w-full rounded bg-[#22303c] text-white p-2"
              placeholder="https://twitter.com/yourprofile"
            />
          </label>
          <label className="text-white font-semibold">
            LinkedIn
            <input
              type="url"
              name="linkedin"
              value={form.linkedin || ""}
              onChange={handleChange}
              className="mt-1 w-full rounded bg-[#22303c] text-white p-2"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </label>
          <label className="text-white font-semibold">
            Interests (comma separated)
            <input
              type="text"
              name="interests"
              value={form.interests?.join(", ") || ""}
              onChange={e => handleArrayChange("interests", e.target.value)}
              className="mt-1 w-full rounded bg-[#22303c] text-white p-2"
              placeholder="e.g. hiking, coding, music"
            />
          </label>
          <label className="text-white font-semibold">
            Languages (comma separated)
            <input
              type="text"
              name="languages"
              value={form.languages?.join(", ") || ""}
              onChange={e => handleArrayChange("languages", e.target.value)}
              className="mt-1 w-full rounded bg-[#22303c] text-white p-2"
              placeholder="e.g. English, Finnish"
            />
          </label>
          <label className="text-white font-semibold flex items-center gap-2">
            <input
              type="checkbox"
              name="isPublic"
              checked={form.isPublic}
              onChange={handleChange}
              className="accent-[#1da1f2]"
            />
            Public Profile
          </label>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="mt-4 w-full bg-[#1da1f2] hover:bg-[#1a8cd8] text-white font-bold py-2 px-6 rounded-full transition disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}