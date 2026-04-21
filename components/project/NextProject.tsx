"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, imageReveal, viewport } from "@/lib/animations";
import type { Project } from "@/lib/data";

interface Props {
  prev: Project | null;
  next: Project | null;
}

export default function NextProject({ prev, next }: Props) {
  if (!prev && !next) return null;

  return (
    <section className="border-t border-border">
      <div className="max-w-content mx-auto px-20 max-md:px-6">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="t-label text-gray-2 py-10 border-b border-border"
        >
          More Projects
        </motion.p>

        <div className="grid grid-cols-2 max-md:grid-cols-1 divide-x divide-border max-md:divide-x-0 max-md:divide-y max-md:divide-border">
          {/* Prev */}
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group block py-12 pr-12 max-md:pr-0 max-md:pb-10">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="flex flex-col gap-4"
              >
                <p className="t-label text-gray-3 flex items-center gap-2">
                  <span>←</span> PREV
                </p>
                <motion.div
                  variants={imageReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  className="aspect-video bg-surface relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-cobalt/0 group-hover:bg-cobalt/8 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="t-label text-gray-3 tracking-[0.4em]">{prev.title}</span>
                  </div>
                </motion.div>
                <div>
                  <h3 className="t-h3 text-white group-hover:text-cobalt-light transition-colors duration-200">
                    {prev.title}
                  </h3>
                  <p className="t-caption text-gray-2 mt-1">{prev.subtitle}</p>
                </div>
              </motion.div>
            </Link>
          ) : (
            <div />
          )}

          {/* Next */}
          {next ? (
            <Link href={`/work/${next.slug}`} className="group block py-12 pl-12 max-md:pl-0 max-md:pt-10">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="flex flex-col gap-4"
              >
                <p className="t-label text-gray-3 flex items-center gap-2 justify-end">
                  NEXT <span>→</span>
                </p>
                <motion.div
                  variants={imageReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  className="aspect-video bg-surface relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-cobalt/0 group-hover:bg-cobalt/8 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="t-label text-gray-3 tracking-[0.4em]">{next.title}</span>
                  </div>
                </motion.div>
                <div className="text-right">
                  <h3 className="t-h3 text-white group-hover:text-cobalt-light transition-colors duration-200">
                    {next.title}
                  </h3>
                  <p className="t-caption text-gray-2 mt-1">{next.subtitle}</p>
                </div>
              </motion.div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
