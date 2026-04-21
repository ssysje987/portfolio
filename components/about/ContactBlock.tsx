"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

export default function ContactBlock() {
  return (
    <section className="max-w-content mx-auto px-20 max-md:px-6 py-section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="flex flex-col gap-8"
      >
        <motion.p variants={fadeInUp} className="t-label text-gray-2">
          Contact
        </motion.p>

        <motion.h2 variants={fadeInUp} className="t-h1 text-white leading-tight max-w-xl">
          새로운 프로젝트가<br />있으신가요?
        </motion.h2>

        <motion.a
          variants={fadeInUp}
          href="mailto:hello@seyoung.dev"
          className="t-display max-md:text-4xl text-cobalt-light hover:text-white transition-colors duration-300 inline-block leading-none"
        >
          hello@<br className="md:hidden" />seyoung.dev
        </motion.a>

        <motion.div
          variants={fadeInUp}
          className="flex gap-6 pt-4 border-t border-border"
        >
          {[
            { label: "Instagram", href: "https://instagram.com" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "GitHub", href: "https://github.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="t-contact text-gray-2 hover:text-cobalt-light transition-colors duration-200 tracking-[0.12em]"
            >
              {label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
