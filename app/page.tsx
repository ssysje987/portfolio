import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center pt-16">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-32 flex flex-col gap-6">
        <p className="text-xs tracking-[0.2em] text-sub uppercase">
          Frontend Developer & Designer
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-body leading-[1.1]">
          Crafting digital<br />
          <span className="text-accent">experiences</span><br />
          that matter.
        </h1>

        <p className="text-base text-sub max-w-md leading-relaxed mt-2">
          인터랙티브하고 아름다운 웹 경험을 설계합니다.
          디자인과 개발의 경계에서 일합니다.
        </p>

        <div className="flex gap-4 mt-4">
          <Link
            href="/work"
            className="px-6 py-3 bg-cobalt text-body text-sm font-medium tracking-wider hover:bg-cobalt/80 transition-colors duration-200"
          >
            VIEW WORK
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 border border-border text-sub text-sm font-medium tracking-wider hover:text-body hover:border-sub transition-colors duration-200"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="border-t border-border" />
      </div>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: "3+", label: "Years Experience" },
          { value: "20+", label: "Projects Completed" },
          { value: "10+", label: "Clients Served" },
          { value: "∞", label: "Cups of Coffee" },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="text-3xl font-semibold text-accent">{value}</span>
            <span className="text-xs text-sub tracking-wider uppercase">{label}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
