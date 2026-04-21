import Link from "next/link";

const socials = [
  { label: "GITHUB", href: "https://github.com" },
  { label: "INSTAGRAM", href: "https://instagram.com" },
  { label: "LINKEDIN", href: "https://linkedin.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border mt-section">
      <div className="max-w-content mx-auto px-20 max-md:px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* Left: CTA */}
          <div className="flex flex-col gap-4 max-w-sm">
            <p className="t-h2 text-white leading-tight">
              함께 작업할<br />준비가 되셨나요?
            </p>
            <a
              href="mailto:hello@seyoung.dev"
              className="t-contact text-cobalt-light hover:text-white transition-colors duration-200 tracking-[0.12em]"
            >
              hello@seyoung.dev
            </a>
          </div>

          {/* Right: Nav + Socials */}
          <div className="flex flex-col gap-10 items-start md:items-end">
            {/* Page links */}
            <nav className="flex flex-col gap-3 items-start md:items-end">
              {[
                { label: "HOME", href: "/" },
                { label: "WORK", href: "/work" },
                { label: "ABOUT", href: "/about" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="t-label text-gray-2 hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Socials */}
            <div className="flex gap-6">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-label text-gray-3 hover:text-cobalt-light transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="t-caption text-gray-3">
            © {year} Song Seyoung. All rights reserved.
          </p>
          <p className="t-caption text-gray-3">
            Seoul, South Korea
          </p>
        </div>
      </div>
    </footer>
  );
}
