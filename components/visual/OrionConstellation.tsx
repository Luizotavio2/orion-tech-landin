"use client";

import { motion } from "framer-motion";

type Star = {
  id: string;
  cx: number;
  cy: number;
  r: number;
  delay: number;
};

const stars: Star[] = [
  { id: "betelgeuse", cx: 96, cy: 78, r: 3.4, delay: 0.1 },
  { id: "bellatrix", cx: 258, cy: 96, r: 2.6, delay: 0.2 },
  { id: "mintaka", cx: 150, cy: 232, r: 2.2, delay: 0.5 },
  { id: "alnilam", cx: 176, cy: 250, r: 2.6, delay: 0.6 },
  { id: "alnitak", cx: 202, cy: 268, r: 2.2, delay: 0.7 },
  { id: "saiph", cx: 122, cy: 392, r: 2.8, delay: 0.9 },
  { id: "rigel", cx: 246, cy: 380, r: 3.6, delay: 1 },
];

const links: { d: string; delay: number }[] = [
  { d: "M96 78 L150 232", delay: 0.35 },
  { d: "M258 96 L202 268", delay: 0.45 },
  { d: "M150 232 L176 250 L202 268", delay: 0.75 },
  { d: "M150 232 L122 392", delay: 1.05 },
  { d: "M202 268 L246 380", delay: 1.1 },
];

/**
 * The hero's centerpiece: Orion's belt and shoulders rendered as a slowly
 * self-drawing constellation, with the brand's eclipsed-moon mark and its
 * signature "wing" stroke sweeping across the top.
 */
export default function OrionConstellation() {
  return (
    <svg
      viewBox="0 0 360 460"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#2E7DFF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#2E7DFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="heroMoon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5EC9F5" />
          <stop offset="100%" stopColor="#2E7DFF" />
        </linearGradient>
        <linearGradient id="heroWing" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#5EC9F5" stopOpacity="0" />
          <stop offset="45%" stopColor="#5EC9F5" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#C7D2E8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5EC9F5" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#2E7DFF" stopOpacity="0.15" />
        </linearGradient>
        <mask id="heroCrescent">
          <rect width="360" height="460" fill="#000" />
          <circle cx="176" cy="98" r="46" fill="#fff" />
          <circle cx="194" cy="82" r="40" fill="#000" />
        </mask>
      </defs>

      <circle cx="180" cy="220" r="220" fill="url(#heroGlow)" />

      {/* Eclipsed moon */}
      <motion.circle
        cx="176"
        cy="98"
        r="46"
        fill="url(#heroMoon)"
        mask="url(#heroCrescent)"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        style={{ transformOrigin: "176px 98px" }}
      />

      {/* Signature wing: one long curved stroke sweeping past the eclipse */}
      <motion.path
        d="M18 210C110 150 230 210 344 60"
        stroke="url(#heroWing)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
      />

      {/* Constellation lines */}
      {links.map((link) => (
        <motion.path
          key={link.d}
          d={link.d}
          stroke="url(#heroLine)"
          strokeWidth="1.2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: link.delay }}
        />
      ))}

      {/* Stars */}
      {stars.map((star) => (
        <g key={star.id}>
          <motion.circle
            cx={star.cx}
            cy={star.cy}
            r={star.r + 5}
            fill="#5EC9F5"
            opacity={0.12}
            initial={{ scale: 0 }}
            animate={{ scale: [0.8, 1.15, 0.8] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
          <motion.circle
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="#F4F8FF"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: star.delay }}
          />
        </g>
      ))}
    </svg>
  );
}
