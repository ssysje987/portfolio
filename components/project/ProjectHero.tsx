"use client";

import { motion } from "framer-motion";
import { fadeInUp, imageReveal, staggerContainer, viewport } from "@/lib/animations";
import type { Project } from "@/lib/data";

interface Props {
  project: Project;
}

export default function ProjectHero({ project }: Props) {
  return (
    <section className="pt-16">
      {/* Full-bleed image */}
      <motion.div
        variants={imageReveal}
        initial="hidden"
        animate="visible"
        className="w-full aspect-[21/9] max-md:aspect-video bg-surface relative overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="t-label text-gray-3 tracking-[0.6em] text-lg">
            {project.title}
          </span>
        </div>
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </motion.div>

      {/* Project header */}
      <div className="max-w-content mx-auto px-20 max-md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="pt-12 pb-16 border-b border-border grid md:grid-cols-3 gap-12"
        >
          {/* Title block */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <motion.p variants={fadeInUp} className="t-label text-gray-2">
              {project.category} — {project.year}
            </motion.p>
            <motion.h1 variants={fadeInUp} className="t-h1 text-white leading-tight">
              {project.title}
            </motion.h1>
            <motion.p variants={fadeInUp} className="t-body text-gray-2 max-w-xl mt-2">
              {project.description}
            </motion.p>
          </div>

          {/* Meta block */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-6 pt-2">
            {[
              { label: "Client", value: project.client },
              { label: "Year", value: project.year },
              { label: "Category", value: project.category },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="t-label text-gray-3">{label}</span>
                <span className="t-body text-gray-1">{value}</span>
              </div>
            ))}

            <div className="flex flex-col gap-2 mt-2">
              <span className="t-label text-gray-3">Tags</span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="t-label text-[10px] text-gray-2 border border-border px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
