"use client";

interface PinProps {
  size?: number;
  color?: string;
}

export default function Pin({ size = 36, color = "#EF4444" }: PinProps) {
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      className="drop-shadow-lg"
      style={{ fill: color, stroke: "white", strokeWidth: 2 }}
    >
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
    </svg>
  );
}
