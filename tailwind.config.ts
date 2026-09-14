import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          950: "#05070d",
          900: "#0a0e1a",
          800: "#0f1526",
          700: "#151d33",
        },
        orion: {
          blue: "#2E7DFF",
          cyan: "#5EC9F5",
          violet: "#4C2A9E",
          silver: "#C7D2E8",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "orion-gradient":
          "radial-gradient(120% 120% at 15% 0%, rgba(46,125,255,0.16) 0%, rgba(10,14,26,0) 55%), radial-gradient(120% 120% at 85% 100%, rgba(76,42,158,0.22) 0%, rgba(10,14,26,0) 55%)",
        "orion-line": "linear-gradient(90deg, transparent, #5EC9F5, transparent)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(94,201,245,0.25)",
        "glow-sm": "0 0 20px rgba(46,125,255,0.35)",
        "glow-lg": "0 0 80px rgba(46,125,255,0.2)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        drift: "drift 7s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
