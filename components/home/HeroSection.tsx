"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-16 md:pb-20 pt-16">
      <div className="max-w-content mx-auto px-20 max-md:px-6 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8"
        >
          {/* Label */}
          <motion.p variants={fadeInUp} className="t-label text-gray-2">
            Space Designer & Visual Director
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="t-display text-white leading-[1.05] max-w-4xl"
          >
            공간을 통해<br />
            <span className="text-cobalt-light">브랜드의 언어</span>를<br />
            번역합니다.
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeInUp}
            className="t-body text-gray-2 max-w-md"
          >
            상업공간 설계와 VMD 디렉션을 중심으로,
            브랜드 경험을 물리적 공간으로 구현하는 작업을 합니다.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 md:gap-6 mt-2 md:mt-4">
            <Link
              href="/work"
              className="px-6 md:px-8 py-3.5 md:py-4 bg-cobalt text-white t-label tracking-[0.18em] border border-cobalt hover:bg-cobalt/80 transition-colors duration-300"
            >
              WORK
            </Link>
            <Link
              href="/about"
              className="t-label text-gray-2 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
            >
              ABOUT
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 md:mt-24 flex items-center gap-3"
        >
          <div className="w-8 h-px bg-gray-3" />
          <span className="t-label text-gray-3">SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
}
