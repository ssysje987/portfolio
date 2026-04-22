"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer, imageReveal, cardHover, viewport } from "@/lib/animations";
import { projects } from "@/lib/data";

// 피처드 프로젝트 제외, 최대 4개
const gridProjects = projects.filter((p) => !p.featured).slice(0, 4);

export default function ProjectGrid() {
  return (
    <section className="max-w-content mx-auto px-20 max-md:px-6 py-24 md:py-section border-t border-border">
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex items-end justify-between mb-8 md:mb-12 gap-4"
      >
        <motion.p variants={fadeInUp} className="t-label text-gray-2">
          Selected Works
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Link
            href="/work"
            className="t-label text-gray-2 hover:text-white transition-colors duration-200 flex items-center gap-2 group whitespace-nowrap"
          >
            ALL WORKS
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Grid: 2-col main (1:1.5) */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-project-main max-md:grid-cols-1 gap-card"
      >
        {gridProjects.slice(0, 2).map((project) => (
          <motion.div key={project.slug} variants={fadeInUp}>
            <Link href={`/work/${project.slug}`} className="group block">
              <motion.div whileHover={cardHover}>
                {/* Image */}
                <motion.div
                  variants={imageReveal}
                  className={`relative bg-surface overflow-hidden ${
                    project.size === "large" ? "aspect-[4/5]" : "aspect-[3/4]"
                  }`}
                >
                  <div className="absolute inset-0 bg-cobalt/0 group-hover:bg-cobalt/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="t-label text-gray-3 tracking-[0.4em]">
                      {project.title}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="t-label text-gray-2 text-[10px]">{project.category}</span>
                  </div>
                </motion.div>

                {/* Info */}
                <div className="pt-4 flex flex-col gap-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="t-h3 text-white group-hover:text-cobalt-light transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span className="t-caption text-gray-2">{project.year}</span>
                  </div>
                  <p className="t-caption text-gray-2">{project.subtitle}</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Grid: 3-col sub */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid grid-cols-project-sub max-md:grid-cols-1 gap-card mt-card"
      >
        {gridProjects.slice(2, 5).map((project) => (
          <motion.div key={project.slug} variants={fadeInUp}>
            <Link href={`/work/${project.slug}`} className="group block">
              <motion.div whileHover={cardHover}>
                {/* Image */}
                <motion.div
                  variants={imageReveal}
                  className="relative aspect-square bg-surface overflow-hidden"
                >
                  <div className="absolute inset-0 bg-cobalt/0 group-hover:bg-cobalt/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="t-label text-gray-3 tracking-[0.4em]">
                      {project.title}
                    </span>
                  </div>
                </motion.div>

                {/* Info */}
                <div className="pt-4 flex flex-col gap-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="t-h3 text-white group-hover:text-cobalt-light transition-colors duration-200 text-base">
                      {project.title}
                    </h3>
                    <span className="t-caption text-gray-2">{project.year}</span>
                  </div>
                  <p className="t-caption text-gray-2">{project.subtitle}</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
