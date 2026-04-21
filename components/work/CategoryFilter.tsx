"use client";

import { motion } from "framer-motion";

type Category = "전체" | "상업공간" | "VMD";

interface Props {
  active: Category;
  onChange: (cat: Category) => void;
  counts: Record<Category, number>;
}

const categories: Category[] = ["전체", "상업공간", "VMD"];

export default function CategoryFilter({ active, onChange, counts }: Props) {
  return (
    <div className="flex items-center gap-1">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`relative px-5 py-2.5 t-label text-[11px] transition-colors duration-200 ${
            active === cat
              ? "text-white"
              : "text-gray-2 hover:text-gray-1"
          }`}
        >
          {/* Active background */}
          {active === cat && (
            <motion.span
              layoutId="filter-pill"
              className="absolute inset-0 bg-surface-2 border border-border"
              style={{ borderRadius: 0 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            {cat}
            <span className={`${active === cat ? "text-cobalt-light" : "text-gray-3"}`}>
              {counts[cat]}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}
