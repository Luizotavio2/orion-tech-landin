"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type GlowButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: ReactNode;
  className?: string;
};

export default function GlowButton({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
}: GlowButtonProps) {
  const base =
    "group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-orion-blue to-orion-cyan text-void-950 shadow-glow-sm hover:shadow-glow"
      : "border border-white/15 text-orion-silver hover:border-orion-cyan/60 hover:text-white";

  return (
    <motion.a
      href={href}
      className={`${base} ${styles} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
      {icon}
    </motion.a>
  );
}
