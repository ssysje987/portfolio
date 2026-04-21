"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

export default function AboutSnippet() {
  return (
    <section className="max-w-content mx-auto px-20 max-md:px-6 py-section border-t border-border">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid md:grid-cols-2 gap-16 items-start"
      >
        {/* Left */}
        <div className="flex flex-col gap-6">
          <motion.p variants={fadeInUp} className="t-label text-gray-2">
            About
          </motion.p>
          <motion.h2 variants={fadeInUp} className="t-h1 text-white leading-tight">
            공간이 말을<br />할 때까지.
          </motion.h2>
        </div>

        {/* Right */}
        <motion.div
          variants={staggerContainer}
          className="flex flex-col gap-6 pt-2 md:pt-16"
        >
          <motion.p variants={fadeInUp} className="t-body text-gray-1">
            상업공간 설계와 VMD 디렉션을 전문으로 하는 공간 디자이너입니다.
            브랜드의 정체성을 물리적 공간과 시각적 경험으로 번역하는 과정에서
            가장 큰 즐거움을 느낍니다.
          </motion.p>
          <motion.p variants={fadeInUp} className="t-body text-gray-2">
            세부적인 소재 선택부터 전체적인 공간 동선까지—모든 결정이
            브랜드 경험을 형성한다는 믿음으로 작업합니다.
          </motion.p>
          <motion.div variants={fadeInUp} className="pt-2">
            <Link
              href="/about"
              className="t-label text-cobalt-light hover:text-white transition-colors duration-200 flex items-center gap-2 group"
            >
              MORE ABOUT ME
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
