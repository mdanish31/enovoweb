'use client';

import Image from 'next/image';
import { Linkedin, Instagram, Phone, Mail, Facebook } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Enovo', href: '#why-enovo' },
  { label: 'How It Works', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  { label: 'Patent Services',               href: '#services' },
  { label: 'Trademark Services',            href: '#services' },
  { label: 'Industrial Design',             href: '#services' },
  { label: 'Copyright Services',            href: '#services' },
  { label: 'IP Strategy',                   href: '#services' },
  { label: 'International Filing',          href: '#services' },
];

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[#0D1117] border-t border-white/[0.06]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/enovoweb/assets/images/logos/ENOVO_Png@4x_copy.png"
              alt="Enovo IP Consulting — Patent and Trademark services, Pune India"
              width={120}
              height={36}
              className="h-9 w-auto object-contain"
              loading="lazy"
            />
            <p className="text-sm leading-relaxed text-slate-400">
              India&apos;s modern Intellectual Property consulting firm. Helping innovators,
              startups and global clients protect patents, trademarks, designs and copyrights.
            </p>
            <div className="flex gap-2">
              {[
                { href: 'https://wa.me/919209582896', label: 'WhatsApp', bg: 'rgba(37,211,102,0.15)', content: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                )},
                { href: 'https://www.linkedin.com/company/enovo-ip', label: 'LinkedIn', bg: 'rgba(255,255,255,0.06)', content: <Linkedin size={14} className="text-[#0077b5]" aria-hidden="true" /> },
                { href: 'https://www.instagram.com/enovo.ip', label: 'Instagram', bg: 'rgba(255,255,255,0.06)', content: <Instagram size={14} className="text-pink-400" aria-hidden="true" /> },
                { href: 'https://www.facebook.com/enovo.ip', label: 'Facebook', bg: 'rgba(255,255,255,0.06)', content: <Facebook size={14} className="text-[#1877F2]" aria-hidden="true" /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ background: s.bg }}
                  aria-label={s.label}
                >
                  {s.content}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)} className="text-sm text-slate-400 hover:text-[#38E0C3] transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <button onClick={() => scrollTo(s.href)} className="text-sm text-slate-400 hover:text-[#38E0C3] transition-colors text-left">
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-3">
              <li><a href="tel:+919209582896" className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#38E0C3] transition-colors"><Phone size={12} className="text-[#38E0C3] shrink-0" aria-hidden="true" />+91 9209582896</a></li>
              <li><a href="tel:+917020653868" className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#38E0C3] transition-colors"><Phone size={12} className="text-[#38E0C3] shrink-0" aria-hidden="true" />+91 7020653868</a></li>
              <li><a href="mailto:connect@enovoinsights.com" className="flex items-start gap-2 text-sm text-slate-400 hover:text-[#38E0C3] transition-colors"><Mail size={12} className="text-[#38E0C3] shrink-0 mt-0.5" aria-hidden="true" />connect@enovoinsights.com</a></li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#38E0C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="leading-snug">Office No. 206, Royal Exotica,<br />Kondhwa, Pune – 411048</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Enovo IP Consulting. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-slate-400 transition-colors">Privacy Policy</button>
            <button className="hover:text-slate-400 transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
