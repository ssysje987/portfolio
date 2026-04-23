import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import { getFeaturedProject, getSpaceProjects } from "@/lib/projects";

export default function Home() {
  const featured = getFeaturedProject();
  const spaceProjects = getSpaceProjects().slice(0, 3);

  return (
    <>
      <section className="relative min-h-screen bg-[#0A0A0A] flex flex-col">
        {featured && (
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2">
            <ImageWithFallback
              src={featured.thumbnail}
              alt={featured.title}
              width={960}
              height={1080}
            />
          </div>
        )}
        <div className="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-20">
          <div className="text-[12px] tracking-[0.35em] text-[#1E2B7A] mb-4">
            COMMERCIAL SPACE DESIGNER
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] text-white whitespace-pre-line">
            WHERE{"\n"}SUBCULTURES{"\n"}FLOW INTO{"\n"}
            <span className="text-[#A5B4FC]">ONE NODE.</span>
          </h1>
          <p className="mt-6 text-[13px] text-[#6A6A6A] tracking-[0.1em]">
            리테일 경험을 바탕으로 브랜드 공간을 설계합니다.
          </p>
          <div className="absolute bottom-8 left-6 md:left-20 right-6 md:right-20 flex justify-between text-[12px] text-[#4A4A4A]">
            <span>SCROLL ↓</span>
            <span>ssysje987@gmail.com · 010.2445.3683</span>
          </div>
        </div>
      </section>

      {featured && (
        <section className="bg-[#0A0A0A] py-16 px-6 md:px-20">
          <div className="text-[12px] tracking-[0.35em] text-[#1E2B7A] mb-6">
            01 · FEATURED PROJECT
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <ImageWithFallback
                src={featured.thumbnail}
                alt={featured.title}
                width={960}
                height={720}
              />
            </div>
            <div className="md:col-span-2 border-l border-[#2A2A2A] pl-8 flex flex-col justify-between">
              <div>
                <div className="text-[11px] tracking-[0.3em] text-[#4A4A4A] uppercase mb-1">
                  {featured.year} · {featured.label}
                </div>
                <h2 className="text-[36px] font-semibold text-white mb-1">
                  {featured.title}
                </h2>
                <div className="text-[13px] tracking-[0.2em] text-[#1E2B7A] mb-2">
                  {featured.titleKo}
                </div>
                <div className="w-10 h-px bg-[#1E2B7A] mb-4"></div>
                <p className="text-[13px] text-[#8A8A8A] leading-[1.75] mb-4">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featured.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#2A2A2A] text-[#4A4A4A] text-[10px] px-[10px] py-[4px] tracking-[0.25em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={`/work/${featured.slug}`}
                className="text-[11px] tracking-[0.25em] text-[#1E2B7A]"
              >
                VIEW PROJECT →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#0A0A0A] py-16 px-6 md:px-20">
        <div className="flex justify-between items-center mb-6">
          <div className="text-[12px] tracking-[0.35em] text-[#1E2B7A]">
            02 · SPACE PLANNING
          </div>
          <Link href="/work" className="text-[12px] tracking-[0.25em] text-[#1E2B7A]">
            VIEW ALL →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {spaceProjects.map((project) => (
            <Link
              href={`/work/${project.slug}`}
              key={project.slug}
              className="border border-transparent hover:border-[#1E2B7A] transition-colors duration-200"
            >
              <ImageWithFallback
                src={project.thumbnail}
                alt={project.title}
                width={400}
                height={300}
              />
              <div className="p-5">
                <div className="text-[10px] tracking-[0.3em] text-[#4A4A4A] uppercase mb-1">
                  {project.label}
                </div>
                <div className="text-[14px] font-medium text-white mb-1">
                  {project.title}
                </div>
                <div className="text-[11px] text-[#6A6A6A] mb-4">
                  {project.description}
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span>{project.year}</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-16 px-6 md:px-20 grid md:grid-cols-2 gap-8">
        <div>
          <div className="text-[12px] tracking-[0.35em] text-[#1E2B7A] mb-4">ABOUT</div>
          <h3 className="text-[22px] font-medium text-white mb-2">
            리테일 경험을 바탕으로 브랜드 공간을 설계하는{' '}
            <span className="text-[#A5B4FC]">공간 디자이너</span>
          </h3>
          <div className="w-10 h-px bg-[#1E2B7A] mb-4"></div>
          <p className="text-[12px] text-[#8A8A8A] leading-[1.8]">
            약 7년간 상업 VMD로 근무하며 SI 인테리어와 VM을 담당했습니다.
            <br />
            <span className="text-[#D5D5D5]">
              NODE는 VMD 감각과 공간 디자인이 처음 만난 결절점입니다.
            </span>
          </p>
        </div>
        <div className="border-l border-[#2A2A2A] pl-12 flex flex-col gap-8">
          <div>
            <div className="flex items-end gap-2">
              <span className="text-[28px] font-medium text-white">7</span>
              <span className="text-[14px] text-[#1E2B7A]">YRS</span>
            </div>
            <div className="text-[11px] text-[#4A4A4A] tracking-[0.2em]">
              COMMERCIAL VMD EXPERIENCE
            </div>
          </div>
          <div>
            <div className="flex items-end gap-2">
              <span className="text-[28px] font-medium text-white">12+</span>
              <span className="text-[14px] text-[#1E2B7A]">PJT</span>
            </div>
            <div className="text-[11px] text-[#4A4A4A] tracking-[0.2em]">
              BRAND SPACE · DISPLAY PROJECTS
            </div>
          </div>
          <div>
            <div className="flex items-end gap-2">
              <span className="text-[28px] font-medium text-white">3</span>
              <span className="text-[14px] text-[#1E2B7A]">BRD</span>
            </div>
            <div className="text-[11px] text-[#4A4A4A] tracking-[0.2em]">
              MAJOR RETAIL BRAND EXPERIENCE
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
