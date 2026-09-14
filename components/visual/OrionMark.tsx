type OrionMarkProps = {
  className?: string;
};

/**
 * Compact brand mark: an eclipsed moon with a single curved "wing" stroke
 * cutting across it, plus three stars standing in for Orion's belt.
 * Used at small sizes (header, footer) — the full constellation lives in
 * OrionConstellation for the hero.
 */
export default function OrionMark({ className }: OrionMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="orionMarkMoon" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5EC9F5" />
          <stop offset="100%" stopColor="#2E7DFF" />
        </linearGradient>
        <linearGradient id="orionMarkWing" x1="2" y1="30" x2="46" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5EC9F5" stopOpacity="0" />
          <stop offset="50%" stopColor="#5EC9F5" />
          <stop offset="100%" stopColor="#2E7DFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Eclipsed moon: outer disc minus an offset circle carves the crescent */}
      <mask id="orionMarkCrescent">
        <rect width="48" height="48" fill="#000" />
        <circle cx="22" cy="22" r="14" fill="#fff" />
        <circle cx="27" cy="18" r="12.5" fill="#000" />
      </mask>
      <circle cx="22" cy="22" r="14" fill="url(#orionMarkMoon)" mask="url(#orionMarkCrescent)" />

      {/* The wing: a single curved stroke sweeping past the eclipse */}
      <path
        d="M2 32C14 34 30 30 46 14"
        stroke="url(#orionMarkWing)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Belt stars */}
      <circle cx="16" cy="38" r="1.6" fill="#C7D2E8" />
      <circle cx="24" cy="40.5" r="2" fill="#5EC9F5" />
      <circle cx="32" cy="42.5" r="1.6" fill="#C7D2E8" />
      <path
        d="M16 38L24 40.5L32 42.5"
        stroke="#5EC9F5"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
    </svg>
  );
}
