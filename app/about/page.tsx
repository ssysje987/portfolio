const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Design", items: ["Figma", "Adobe XD", "Motion Design", "Design Systems"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "Prisma", "REST API"] },
  { category: "Tools", items: ["Git", "Vercel", "AWS", "Storybook"] },
];

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.2em] text-sub uppercase mb-4">About Me</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-body tracking-tight">
            Song Seyoung
          </h1>
        </div>

        {/* Bio + Skills */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Bio */}
          <div className="flex flex-col gap-6">
            <p className="text-base text-body leading-relaxed">
              프론트엔드 개발자이자 디자이너로, 사용자 경험과 시각적 완성도를
              모두 중요하게 생각합니다.
            </p>
            <p className="text-sm text-sub leading-relaxed">
              디자인과 개발의 경계에서 작업하며, 단순히 기능하는 것을 넘어
              기억에 남는 인터페이스를 만드는 것을 목표로 합니다.
              세부적인 인터랙션과 타이포그래피에 주의를 기울입니다.
            </p>
            <p className="text-sm text-sub leading-relaxed">
              현재 서울을 기반으로 활동하고 있으며, 프리랜서 및 풀타임 기회에
              열려 있습니다.
            </p>

            {/* Info */}
            <div className="flex flex-col gap-3 mt-4 border-t border-border pt-8">
              {[
                { label: "Location", value: "Seoul, South Korea" },
                { label: "Available", value: "Open to opportunities" },
                { label: "Email", value: "hello@seyoung.dev" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="text-xs text-sub tracking-wider uppercase">{label}</span>
                  <span className="text-sm text-body">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-8">
            {skills.map(({ category, items }) => (
              <div key={category}>
                <p className="text-xs tracking-[0.15em] text-sub uppercase mb-3">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-body border border-border px-3 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mt-24">
          <p className="text-xs tracking-[0.2em] text-sub uppercase mb-10">Experience</p>
          <div className="flex flex-col">
            {[
              {
                role: "Frontend Developer",
                company: "Studio XYZ",
                period: "2023 — Present",
                desc: "인터랙티브 웹 경험 제작 및 디자인 시스템 구축을 담당했습니다.",
              },
              {
                role: "UI/UX Designer & Developer",
                company: "Agency ABC",
                period: "2022 — 2023",
                desc: "다수의 브랜드 캠페인 마이크로사이트와 SaaS 제품 UI를 설계했습니다.",
              },
              {
                role: "Freelance Developer",
                company: "Self-employed",
                period: "2021 — 2022",
                desc: "스타트업과 소규모 기업을 대상으로 웹 개발 프리랜서로 활동했습니다.",
              },
            ].map((exp, i) => (
              <div key={i} className="border-t border-border py-8 grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-body">{exp.role}</p>
                  <p className="text-xs text-accent mt-1">{exp.company}</p>
                </div>
                <p className="text-sm text-sub">{exp.desc}</p>
                <p className="text-xs text-sub md:text-right">{exp.period}</p>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
