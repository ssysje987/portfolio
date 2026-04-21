import type { Variants, Transition } from "framer-motion";

// ── Easing ────────────────────────────────────────────────────
export const ease = [0.25, 0.1, 0.25, 1] as const;

// ── Shared Transitions ────────────────────────────────────────
export const t06: Transition = { duration: 0.6, ease };
export const t04: Transition = { duration: 0.4, ease };
export const t03: Transition = { duration: 0.3, ease };

// ── Scroll-reveal: fadeInUp ───────────────────────────────────
// opacity 0→1, y 20→0, duration 0.6s
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: t06 },
};

// ── Stagger container ─────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// ── Image blur-in ─────────────────────────────────────────────
// blur 10→0, duration 0.4s
export const imageReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: t04 },
};

// ── Card hover ────────────────────────────────────────────────
// scale 1→1.02, duration 0.3s — used via whileHover
export const cardHover = {
  scale: 1.02,
  transition: t03,
};

// ── Viewport options (used with whileInView) ──────────────────
export const viewport = { once: true, margin: "-80px" };
