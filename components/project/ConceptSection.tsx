"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";
import type { Project } from "@/lib/data";

interface Props {
  project: Project;
}

export default function ConceptSection({ project }: Props) {
  return (
    <section className="max-w-content mx-auto px-20 max-md:px-6 py-section border-b border-border">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid md:grid-cols-12 gap-8"
      >
        {/* Label */}
        <motion.div variants={fadeInUp} className="md:col-span-2 pt-1">
          <p className="t-label text-gray-2">Concept</p>
        </motion.div>

        {/* Content */}
        <div className="md:col-span-10 flex flex-col gap-8">
          <motion.p
            variants={fadeInUp}
            className="t-h2 text-white leading-snug"
          >
            {project.concept}
          </motion.p>

          {/* Divider line */}
          <motion.div
            variants={fadeInUp}
            className="w-16 h-px bg-cobalt-light"
          />

          {/* Tags as concept keywords */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap gap-x-8 gap-y-3"
          >
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                variants={fadeInUp}
                className="t-label text-gray-2"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
