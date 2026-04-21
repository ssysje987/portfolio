const projects = [
  {
    id: "01",
    title: "Project Alpha",
    category: "Web Design & Development",
    year: "2024",
    description:
      "브랜드 아이덴티티를 반영한 인터랙티브 웹 경험. Next.js와 Framer Motion을 활용해 구현했습니다.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "02",
    title: "Project Beta",
    category: "UI/UX Design",
    year: "2024",
    description:
      "사용자 중심 설계로 전환율을 40% 향상시킨 SaaS 대시보드 리디자인 프로젝트.",
    tags: ["Figma", "React", "D3.js"],
  },
  {
    id: "03",
    title: "Project Gamma",
    category: "Full Stack",
    year: "2023",
    description:
      "실시간 협업이 가능한 문서 편집 플랫폼. WebSocket과 CRDT 알고리즘을 활용했습니다.",
    tags: ["Next.js", "WebSocket", "PostgreSQL"],
  },
  {
    id: "04",
    title: "Project Delta",
    category: "Motion & Interaction",
    year: "2023",
    description:
      "스크롤 기반 스토리텔링을 활용한 브랜드 캠페인 마이크로사이트.",
    tags: ["GSAP", "Three.js", "WebGL"],
  },
];

export default function WorkPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.2em] text-sub uppercase mb-4">Selected Works</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-body tracking-tight">
            Projects
          </h1>
        </div>

        {/* Project List */}
        <div className="flex flex-col">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border-t border-border py-8 flex flex-col md:flex-row md:items-start gap-6 hover:bg-white/[0.01] transition-colors duration-200 cursor-pointer"
            >
              {/* Number */}
              <span className="text-xs text-sub font-mono w-8 pt-1 shrink-0">
                {project.id}
              </span>

              {/* Main Info */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h2 className="text-xl font-semibold text-body group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h2>
                  <span className="text-xs text-sub">{project.year}</span>
                </div>

                <p className="text-xs tracking-wider text-sub uppercase">
                  {project.category}
                </p>

                <p className="text-sm text-sub leading-relaxed max-w-xl">
                  {project.description}
                </p>

                <div className="flex gap-2 flex-wrap mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-sub border border-border px-2 py-1 tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="md:pt-1 shrink-0 text-sub group-hover:text-accent transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}

          {/* Last border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </div>
  );
}
