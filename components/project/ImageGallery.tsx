"use client";

import { motion } from "framer-motion";
import { imageReveal, staggerContainer, viewport } from "@/lib/animations";

// 갤러리 레이아웃: 첫 번째 풀 너비, 이후 2-col 그리드
const placeholders = [
  { id: 1, aspect: "aspect-[16/9]", label: "Overview" },
  { id: 2, aspect: "aspect-[4/3]", label: "Detail 01" },
  { id: 3, aspect: "aspect-[4/3]", label: "Detail 02" },
  { id: 4, aspect: "aspect-[3/2]", label: "Detail 03" },
  { id: 5, aspect: "aspect-[3/2]", label: "Detail 04" },
];

export default function ImageGallery() {
  return (
    <section className="max-w-content mx-auto px-20 max-md:px-6 py-section flex flex-col gap-card">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.6 }}
        className="t-label text-gray-2 mb-4"
      >
        Gallery
      </motion.p>

      {/* Full-width first image */}
      <motion.div
        variants={imageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className={`relative w-full ${placeholders[0].aspect} bg-surface overflow-hidden`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="t-label text-gray-3 tracking-[0.4em]">
            {placeholders[0].label}
          </span>
        </div>
      </motion.div>

      {/* 2-col grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-2 max-md:grid-cols-1 gap-card"
      >
        {placeholders.slice(1, 3).map((p) => (
          <motion.div
            key={p.id}
            variants={imageReveal}
            className={`relative w-full ${p.aspect} bg-surface overflow-hidden`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="t-label text-gray-3 tracking-[0.4em]">{p.label}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 2-col grid (second row) */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-2 max-md:grid-cols-1 gap-card"
      >
        {placeholders.slice(3).map((p) => (
          <motion.div
            key={p.id}
            variants={imageReveal}
            className={`relative w-full ${p.aspect} bg-surface overflow-hidden`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="t-label text-gray-3 tracking-[0.4em]">{p.label}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
