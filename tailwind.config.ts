import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Precision Triad: #2A2A2A (Anthracite), #C0C0C0 (Silver), #E10600 (Crimson Red) with Rich Depth
        anthracite: {
          DEFAULT: "#2A2A2E",
          dark: "#1A1A1E",
          deep: "#111114",
          card: "#242428",
          surface: "#2D2D33",
          hover: "#35353D",
          active: "#3D3D47",
        },
        silver: {
          DEFAULT: "#C0C0C0",
          light: "#EAEAEA",
          pure: "#FFFFFF",
          muted: "#9E9E9E",
          dim: "rgba(192, 192, 192, 0.18)",
          chrome: "#D4D4D8",
        },
        crimson: {
          DEFAULT: "#E10600",
          hover: "#FF1A14",
          deep: "#B00500",
          light: "#FF332C",
          neon: "#FF2B24",
          soft: "rgba(225, 6, 0, 0.15)",
          glow: "rgba(225, 6, 0, 0.45)",
        },
        background: {
          DEFAULT: "#121316",
          secondary: "#0C0D0F",
          tertiary: "#1A1B20",
        },
        card: {
          DEFAULT: "#1E1F24",
          hover: "#282930",
          active: "#32333C",
        },
        surface: {
          dark: "#141519",
          elevated: "#23242A",
          glass: "rgba(35, 36, 42, 0.75)",
        },
        content: {
          primary: "#FFFFFF",
          secondary: "#C0C0C0",
          muted: "#888892",
        },
        border: {
          silver: "rgba(192, 192, 192, 0.22)",
          subtle: "rgba(255, 255, 255, 0.10)",
          crimson: "rgba(225, 6, 0, 0.5)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        "3d-card": "0 20px 40px -15px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.6)",
        "3d-card-hover": "0 28px 60px -15px rgba(0,0,0,0.9), 0 0 30px -5px rgba(225,6,0,0.3), inset 0 1px 1px rgba(255,255,255,0.3)",
        "3d-btn-crimson": "0 8px 24px -4px rgba(225,6,0,0.55), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -2px 0 rgba(0,0,0,0.4)",
        "3d-btn-dark": "0 6px 20px -3px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -2px 0 rgba(0,0,0,0.5)",
        "crimson-glow": "0 0 35px 2px rgba(225, 6, 0, 0.45)",
        "silver-rim": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), 0 10px 25px -5px rgba(0, 0, 0, 0.7)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "crimson-ping": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "float-3d": "float3d 6s ease-in-out infinite",
        "float-subtle": "float 5s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        float3d: {
          "0%, 100%": { transform: "translateY(0) rotateX(10deg) rotateY(-10deg)" },
          "50%": { transform: "translateY(-10px) rotateX(8deg) rotateY(-8deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
