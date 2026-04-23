import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Colors ──────────────────────────────────────────────
      colors: {
        bg: "#0A0A0A",
        surface: {
          DEFAULT: "#141414",
          2: "#1E1E1E",
        },
        cobalt: {
          DEFAULT: "#A5B4FC",
          light: "#A5B4FC",
        },
        white: "#FFFFFF",
        gray: {
          1: "#FFFFFF",
          2: "#FFFFFF",
          3: "#FFFFFF",
        },
        border: "#2A2A2A",
      },

      // ── Font Families ────────────────────────────────────────
      fontFamily: {
        sans: ["Pretendard", "Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        pretendard: ["Pretendard", "sans-serif"],
      },

      // ── Font Sizes (type scale) ──────────────────────────────
      fontSize: {
        display: ["72px", { fontWeight: "600", letterSpacing: "0.02em" }],
        h1:      ["48px", { fontWeight: "500", letterSpacing: "0.02em" }],
        h2:      ["32px", { fontWeight: "500", letterSpacing: "0.04em" }],
        h3:      ["20px", { fontWeight: "500", letterSpacing: "0.06em" }],
        label:   ["12px", { fontWeight: "500", letterSpacing: "0.25em" }],
        body:    ["16px", { fontWeight: "300", lineHeight: "1.8" }],
        caption: ["13px", { fontWeight: "300", lineHeight: "1.6" }],
        contact: ["13px", { fontWeight: "300", letterSpacing: "0.12em" }],
      },

      // ── Spacing / Layout ─────────────────────────────────────
      maxWidth: {
        content: "1280px",
      },
      padding: {
        "page-x":    "80px",
        "page-x-sm": "24px",
      },
      gap: {
        section: "160px",
        card:    "24px",
      },
      spacing: {
        "section": "160px",
        "card":    "24px",
      },

      // ── Grid ─────────────────────────────────────────────────
      gridTemplateColumns: {
        // 프로젝트 메인: 좌측 큰 카드(1.5) + 우측 작은 카드(1)
        "project-main": "1.5fr 1fr",
        // 프로젝트 보조: 3컬럼 동일
        "project-sub": "repeat(3, 1fr)",
      },
    },
  },
  plugins: [],
};
export default config;
