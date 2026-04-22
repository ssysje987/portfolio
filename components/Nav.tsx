'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'HOME', href: '/' },
    { label: 'WORK', href: '/work' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CONTACT', href: '/contact' },
  ];

  const linkClass = (href: string) =>
    'text-[12px] font-medium uppercase tracking-[0.25em] transition-colors duration-200 ' +
    (pathname === href ? 'text-white' : 'text-[#8A8A8A] hover:text-white');

  const mobileLinkClass = (href: string) =>
    'mb-6 text-[32px] font-medium uppercase tracking-[0.25em] transition-colors duration-200 ' +
    (pathname === href ? 'text-white' : 'text-[#8A8A8A] hover:text-white');

  let navClasses = 'sticky top-0 z-50 border-b border-[#2A2A2A] ';
  navClasses += scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur ' : 'bg-[#0A0A0A] ';
  navClasses += 'py-6 px-20';

  return (
    <nav className={navClasses}>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link href='/' className='text-white text-[16px] font-medium tracking-[0.12em]'>SONG SEYOUNG</Link>
        <div className='hidden md:flex items-center gap-10'>
          {links.map(({ label, href }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
        </div>
        <button
          className='md:hidden text-[#8A8A8A] hover:text-white'
          onClick={() => setMenuOpen(true)}
          aria-label='Open Menu'
        >
          <Menu size={24} />
        </button>
      </div>
      {menuOpen && (
        <div className='fixed inset-0 bg-[#0A0A0A] flex flex-col items-center justify-center z-40'>
          <button
            className='absolute top-8 right-8 text-[#8A8A8A] hover:text-white'
            onClick={() => setMenuOpen(false)}
            aria-label='Close Menu'
          >
            <X size={32} />
          </button>
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={mobileLinkClass(href)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
