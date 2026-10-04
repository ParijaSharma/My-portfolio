import React from "react";

// Doodle arrow pointing down (from "my name is" to name box)
export function ArrowDown({ className = "w-6 h-10 text-neutral-700" }) {
  return (
    <svg
      viewBox="0 0 28 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14 2 C13 14, 15 26, 13 38"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 32 C10 35, 12 38, 14 41 C15 37, 18 34, 21 31"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Doodle arrow curving up and right (from bottom-left tag to name box)
export function ArrowUpRight({ className = "w-8 h-8 text-neutral-700" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 34 C12 28, 22 22, 32 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M23 9 C27 9, 31 10, 34 10 C34 13, 33 17, 33 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Doodle arrow curving up and left (from bottom-right tag to name box)
export function ArrowUpLeft({ className = "w-8 h-8 text-neutral-700" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M34 34 C28 28, 18 22, 8 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17 9 C13 9, 9 10, 6 10 C6 13, 7 17, 7 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hand-drawn horizontal wavy pencil divider
export function HandDrawnDivider({ className = "w-full my-12" }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden py-4 ${className}`}>
      <svg
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 text-neutral-300 stroke-current"
        preserveAspectRatio="none"
      >
        <path
          d="M0 25 C150 18, 300 28, 450 20 C600 12, 750 26, 900 18 C1050 24, 1150 21, 1200 23"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

// Semi-transparent Washi Tape strip
export function WashiTape({
  color = "blue",
  className = "",
  rotation = 0,
}) {
  const colorMap = {
    blue: "bg-blue-300/75 border-t border-b border-blue-400/40",
    yellow: "bg-amber-200/85 border-t border-b border-amber-300/40",
    pink: "bg-pink-300/75 border-t border-b border-pink-400/40",
    white: "bg-white/80 border-t border-b border-neutral-200/60",
    mint: "bg-emerald-200/80 border-t border-b border-emerald-300/40",
  };

  return (
    <div
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
      className={`absolute h-4 w-14 backdrop-blur-[1px] shadow-sm z-20 pointer-events-none ${colorMap[color] || colorMap.blue} ${className}`}
    >
      {/* Jagged / ripped tape edges on ends */}
      <div className="absolute -left-1 top-0 bottom-0 w-1 bg-current opacity-20 transform -skew-y-12" />
      <div className="absolute -right-1 top-0 bottom-0 w-1 bg-current opacity-20 transform skew-y-12" />
    </div>
  );
}
