"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryFilter from "./CategoryFilter";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";

type Category = "전체" | "상업공간" | "VMD";

const counts: Record<Category, number> = {
  전체: projects.length,
  상업공간: projects.filter((p) => p.category === "상업공간").length,
  VMD: projects.filter((p) => p.category === "VMD").length,
};

export default function ProjectList() {
  const [active, setActive] = useState<Category>("전체");

  const filtered =
    active === "전체" ? projects : projects.filter((p) => p.category === active);

  // 첫 번째(large)는 메인 그리드, 나머지는 보조 그리드
  const [mainProjects, subProjects] = [filtered.slice(0, 2), filtered.slice(2)];

  return (
    <div className="flex flex-col gap-12">
      {/* Filter */}
      <div className="flex items-center justify-between border-b border-border pb-6">
        <CategoryFilter active={active} onChange={setActive} counts={counts} />
        <span className="t-caption text-gray-2">
          {filtered.length}개 프로젝트
        </span>
      </div>

      {/* Main 2-col grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-card"
        >
          {mainProjects.length > 0 && (
            <div className="grid grid-cols-project-main max-md:grid-cols-1 gap-card">
              {mainProjects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          )}

          {/* Sub 3-col grid */}
          {subProjects.length > 0 && (
            <div className="grid grid-cols-project-sub max-md:grid-cols-1 gap-card">
              {subProjects.map((project, i) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  variant="small"
                  index={i + 2}
                />
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <p className="t-body text-gray-2 py-20 text-center">
              해당 카테고리의 프로젝트가 없습니다.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
