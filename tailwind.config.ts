import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Brand tokens — near-black base matches the iOS app (#0a0a0b)
        ink: {
          DEFAULT: "#0a0a0b",
          800: "#121214",
          700: "#1a1a1d",
          600: "#26262b",
        },
        bone: {
          DEFAULT: "#f4f1ea", // warm off-white body type
          muted: "#b9b4aa",
          faint: "#7d7a73",
        },
        brass: {
          DEFAULT: "#b8956a",
          light: "#cdac82",
          dark: "#9a7a52",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      letterSpacing: {
        display: "0.08em",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
