'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HamburgerIcon, CloseIcon } from './icons';

const navigationLinks = [
  { label: 'S\'outiller', href: '/s-outiller' },
  { label: 'Formations', href: '#formations' },
  { label: 'Livre', href: '#livre' },
  { label: 'Presse & Médias', href: '#presse' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E5E5E5]">
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/lena-profile.jpg"
                alt="Lena Ben Ahmed"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-[18px] md:text-[22px] font-serif italic text-[#1A1A1A]">
              Lena Ben Ahmed
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-[#1A1A1A] hover:text-[#E8B4A8] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[14px] font-semibold px-6 py-2 rounded bg-[#E8B4A8] text-white hover:bg-[#D4A5A0] transition-colors duration-200"
          >
            TRAVAILLONS ENSEMBLE
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-6 h-6 text-[#1A1A1A]"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-[#E5E5E5] bg-white">
          <div className="px-4 py-4 space-y-4">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-[14px] text-[#1A1A1A] hover:text-[#E8B4A8] transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block text-[14px] font-semibold px-6 py-2 rounded bg-[#E8B4A8] text-white hover:bg-[#D4A5A0] transition-colors duration-200 text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              TRAVAILLONS ENSEMBLE
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
