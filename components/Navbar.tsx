'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'Services',   href: '#services' },
  { label: 'Why Enovo',  href: '#why-enovo' },
  { label: 'How It Works', href: '#process' },
  { label: 'FAQs',       href: '#faqs' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur ${
        scrolled
          ? 'bg-white/95 shadow-[0_1px_10px_rgba(15,23,42,0.07)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="focus:outline-none shrink-0"
          aria-label="Enovo — go to top"
        >
          <Image
            src={scrolled
              ? '/enovoweb/assets/images/logos/Enovo_Logo_Jpeg-01.jpg'
              : '/enovoweb/assets/images/logos/ENOVO_Png@4x_copy.png'}
            alt="Enovo IP Consulting"
            width={110}
            height={34}
            className="h-8 w-auto object-contain"
            priority
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-[#475569] hover:text-[#16C79A]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <button onClick={() => handleNav('#contact')} className="btn-primary">
            Book Free Consultation
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-xl transition-colors ${
            scrolled ? 'text-[#374151] hover:bg-[#F1F5F9]' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] shadow-lg">
          <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-3 rounded-xl text-sm font-medium text-[#374151] hover:bg-[#F7FAFC] hover:text-[#16C79A] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-2 pt-3 border-t border-[#E2E8F0]">
              <button
                onClick={() => handleNav('#contact')}
                className="btn-primary w-full justify-center"
              >
                Book Free Consultation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
