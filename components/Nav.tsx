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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled ? "bg-bg/95 backdrop-blur-md" : "bg-bg/60"
      }`}
    >
      <nav className="max-w-content mx-auto px-20 max-md:px-6 min-h-16 flex items-center justify-between relative">
        <Link
          href="/"
          className="t-label text-white tracking-[0.2em] hover:text-cobalt-light transition-colors duration-200"
        >
          SONG SEYOUNG
        </Link>

        <button
          type="button"
          className="md:hidden t-label text-gray-2 hover:text-white transition-colors duration-200"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>

        <ul className="hidden md:flex items-center gap-10">
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

      <div
        id="mobile-nav-menu"
        className={`md:hidden border-t border-border overflow-hidden transition-[max-height] duration-300 ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-3 flex flex-col gap-1 bg-bg/95 backdrop-blur-md">
          {links.map(({ label, href }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`block py-3 t-label tracking-[0.15em] transition-colors duration-200 ${
                    isActive ? "text-cobalt-light" : "text-gray-2 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
