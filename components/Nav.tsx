"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "HOME", href: "/" },
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled ? "bg-bg/95 backdrop-blur-md" : "bg-bg/60"
      }`}
    >
      <nav className="max-w-content mx-auto px-20 max-md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="t-label text-white tracking-[0.2em] hover:text-cobalt-light transition-colors duration-200"
        >
          SONG SEYOUNG
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-10">
          {links.map(({ label, href }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`relative t-label transition-colors duration-200
                    after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0
                    after:bg-cobalt-light after:transition-all after:duration-200
                    hover:after:w-full hover:text-white
                    ${isActive ? "text-cobalt-light after:w-full" : "text-gray-2"}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
