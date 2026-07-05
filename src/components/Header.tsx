'use client';

import { useState } from 'react';
import { HamburgerIcon, CloseIcon } from './icons';

const navigationLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Shop', href: '/shop' },
  { label: 'Programs', href: '/programs' },
  { label: 'MarieTV', href: '/marietv' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'About', href: '/about' },
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
          <a href="/" className="text-[18px] md:text-[24px] font-serif font-bold text-[#1A1A1A]">
            MARIE FORLEO
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] text-[#1A1A1A] hover:text-[#E8B4A8] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
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
          </div>
        </nav>
      )}
    </header>
  );
}
