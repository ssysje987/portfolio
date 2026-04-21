"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { imageReveal, cardHover, viewport } from "@/lib/animations";
import type { Project } from "@/lib/data";

interface Props {
  project: Project;
  variant?: "large" | "small";
  index: number;
}

export default function ProjectCard({ project, variant = project.size, index }: Props) {
  const isLarge = variant === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <motion.div whileHover={cardHover} className="flex flex-col gap-0">
          {/* Image */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className={`relative bg-surface overflow-hidden border border-border group-hover:border-cobalt transition-colors duration-300 ${
              isLarge ? "aspect-[4/5]" : "aspect-[3/4]"
            }`}
          >
            {/* Hover tint */}
            <div className="absolute inset-0 bg-cobalt/0 group-hover:bg-cobalt/8 transition-colors duration-300 z-10" />

            {/* Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="t-label text-gray-3 tracking-[0.4em]">
                {project.title}
              </span>
            </div>

            {/* Category */}
            <div className="absolute bottom-4 left-4 z-20">
              <span className="t-label text-gray-2 text-[10px] bg-bg/80 px-2 py-1 backdrop-blur-sm">
                {project.category}
              </span>
            </div>
          </motion.div>

          {/* Info */}
          <div className="pt-5 pb-6 border-b border-border flex flex-col gap-2">
            <div className="flex items-baseline justify-between gap-4">
              <h3
                className={`font-medium text-white group-hover:text-cobalt-light transition-colors duration-200 ${
                  isLarge ? "t-h3" : "text-[17px] tracking-[0.04em]"
                }`}
              >
                {project.title}
              </h3>
              <span className="t-caption text-gray-2 shrink-0">{project.year}</span>
            </div>
            <p className="t-caption text-gray-2">{project.subtitle}</p>
            <div className="flex gap-2 flex-wrap mt-1">
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="t-label text-gray-3 text-[10px] border border-border px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
