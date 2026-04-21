"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

const skills = [
  { category: "공간 설계", items: ["상업공간 디자인", "공간 브랜딩", "조명 계획", "소재 선택", "동선 설계"] },
  { category: "VMD", items: ["VM 전략 수립", "쇼윈도우 디자인", "디스플레이 시스템", "시즌 기획"] },
  { category: "디자인", items: ["AutoCAD", "SketchUp", "Rhino", "Adobe Suite", "Figma"] },
];

const experience = [
  {
    role: "Space Designer & VMD Director",
    company: "Freelance",
    period: "2023 — Present",
    desc: "독립 프리랜서로 다수의 브랜드와 협업하여 상업공간 설계 및 VMD 디렉션을 진행했습니다.",
  },
  {
    role: "Space Designer",
    company: "Studio XYZ",
    period: "2022 — 2023",
    desc: "복합문화공간과 리테일 매장의 설계를 담당하며 브랜드 아이덴티티의 공간적 번역 작업을 주도했습니다.",
  },
  {
    role: "VMD Designer",
    company: "Agency ABC",
    period: "2021 — 2022",
    desc: "패션 브랜드의 VM 전략 수립과 시즌별 디스플레이 기획을 담당했습니다.",
  },
];

export default function Bio() {
  return (
    <>
      {/* Bio + Skills */}
      <section className="max-w-content mx-auto px-20 max-md:px-6 py-section border-b border-border">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 gap-20"
        >
          {/* Bio */}
          <div className="flex flex-col gap-6">
            <motion.p variants={fadeInUp} className="t-label text-gray-2">Profile</motion.p>
            <motion.p variants={fadeInUp} className="t-body text-gray-1 leading-relaxed">
              상업공간 설계와 VMD 디렉션을 전문으로 합니다.
              브랜드의 가치와 정체성을 물리적 공간으로 번역하는 것이
              핵심 작업 방식입니다.
            </motion.p>
            <motion.p variants={fadeInUp} className="t-body text-gray-2">
              소재의 촉감부터 공간의 향기까지, 오감에 영향을 미치는 모든 요소를
              하나의 통합된 브랜드 경험으로 구성하는 데 집중합니다.
            </motion.p>
            <motion.p variants={fadeInUp} className="t-body text-gray-2">
              현재 서울을 베이스로 국내외 브랜드와 프로젝트 단위 협업을 진행 중입니다.
            </motion.p>

            {/* Meta */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 pt-4 border-t border-border">
              {[
                { label: "Location", value: "Seoul, South Korea" },
                { label: "Status", value: "Available for projects" },
                { label: "Contact", value: "hello@seyoung.dev" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="t-label text-gray-3">{label}</span>
                  <span className="t-caption text-gray-1">{value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div variants={staggerContainer} className="flex flex-col gap-10">
            {skills.map(({ category, items }) => (
              <motion.div key={category} variants={fadeInUp}>
                <p className="t-label text-gray-2 mb-4">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="t-caption text-gray-1 border border-border px-3 py-1.5 hover:border-cobalt-light hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Experience */}
      <section className="max-w-content mx-auto px-20 max-md:px-6 py-section border-b border-border">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="t-label text-gray-2 mb-12"
        >
          Experience
        </motion.p>

        <div className="flex flex-col">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-border py-10 grid md:grid-cols-12 gap-6"
            >
              <div className="md:col-span-3 flex flex-col gap-1">
                <p className="t-caption text-gray-2">{exp.period}</p>
                <p className="t-caption text-cobalt-light">{exp.company}</p>
              </div>
              <div className="md:col-span-4">
                <p className="text-white font-medium t-h3">{exp.role}</p>
              </div>
              <div className="md:col-span-5">
                <p className="t-body text-gray-2">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </section>
    </>
  );
}
