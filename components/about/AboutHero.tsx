"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutHero() {
  return (
    <section className="pt-16 border-b border-border">
      <div className="max-w-content mx-auto px-20 max-md:px-6 py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.p variants={fadeInUp} className="t-label text-gray-2">
            About
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="t-display max-md:text-5xl text-white leading-[1.05] max-w-3xl"
          >
            Song<br />
            <span className="text-cobalt-light">Seyoung</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="t-body text-gray-2 max-w-lg mt-2">
            Space Designer & Visual Director.<br />
            Seoul-based.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
