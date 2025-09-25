"use client";

type Signup = {
  userId: string;
  displayName?: string;
  avatar?: string;
  bio?: string;
  status?: string;
  joinedAt?: string;
  age?: number;
};

interface AttendeeListProps {
  signups: Signup[];
}

export default function AttendeeList({ signups }: AttendeeListProps) {
  // Show up to 3 avatars, then "+N more"
  const visible = signups.slice(0, 3);
  const extraCount = signups.length - visible.length;

  return (
    <div className="flex items-center gap-4 flex-wrap">
      {visible.map((s, i) => (
        <div
          key={s.userId}
          className="flex flex-col items-center bg-white rounded-xl shadow p-3 w-32"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 mb-2">
            <img
              src={s.avatar || "/default-avatar.png"}
              alt={s.displayName || "Attendee"}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-gray-900 font-medium text-sm truncate">
            {s.displayName || s.userId}
          </span>
          <span className="text-xs text-gray-500 mt-1">{s.status || "Member"}</span>
          {s.bio && (
            <span className="text-xs text-gray-400 mt-1 text-center">{s.bio}</span>
          )}
          {typeof s.age === "number" && (
            <span className="text-xs text-gray-400 mt-1">Age: {s.age}</span>
          )}
        </div>
      ))}
      {extraCount > 0 && (
        <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-3 w-32">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg mb-2">
            +{extraCount}
          </div>
          <span className="text-gray-900 font-medium text-sm">+{extraCount} more</span>
        </div>
      )}
    </div>
  );
}