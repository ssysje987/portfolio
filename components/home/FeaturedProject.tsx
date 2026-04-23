"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, imageReveal, staggerContainer, viewport } from "@/lib/animations";
import { projects } from "@/lib/data";

const featured = projects.find((p) => p.featured)!;

export default function FeaturedProject() {
  return (
    <section className="max-w-content mx-auto px-20 max-md:px-6 py-24 md:py-section">
      {/* Section label */}
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="t-label text-gray-2 mb-8 md:mb-12"
      >
        Featured Project
      </motion.p>

      <Link href={`/work/${featured.slug}`} className="group block">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-0"
        >
          {/* Image — large placeholder */}
          <motion.div
            variants={imageReveal}
            className="relative w-full aspect-[16/10] md:aspect-[16/9] bg-surface overflow-hidden"
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent z-10" />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-cobalt/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

            {/* Placeholder image area */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="t-label text-gray-3 tracking-[0.4em]">
                {featured.title}
              </span>
            </div>

            {/* Category badge */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 z-30">
              <span className="t-label text-gray-2 border border-border bg-bg/80 px-2.5 py-1 md:px-3 md:py-1.5 backdrop-blur-sm">
                {featured.category}
              </span>
            </div>
          </motion.div>

          {/* Info bar */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 pt-6 md:pt-8 border-t border-border"
          >
            <div className="flex flex-col gap-2">
              <p className="t-label text-gray-2">{featured.client}</p>
              <h2 className="t-h1 text-white group-hover:text-cobalt-light transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="t-body text-gray-2 max-w-lg mt-1">
                {featured.description}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
              <span className="t-label text-gray-2 group-hover:text-cobalt-light transition-colors duration-200">
                VIEW PROJECT
              </span>
              <span className="text-gray-2 group-hover:text-cobalt-light group-hover:translate-x-1 transition-all duration-200 inline-block">
                →
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </section>
  );
}
