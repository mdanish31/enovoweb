'use client';

import { FileText, TrendingUp, PenTool, Copyright } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Patent Services',
    subtitle: 'Protect your inventions',
    desc: 'End-to-end patent support — from search and drafting to filing, prosecution and international coverage.',
    items: ['Provisional & Complete Filing', 'Patent Drafting & Claims', 'Prior Art Search', 'Patent Prosecution', 'International PCT Filing', 'US / EP Patent Support'],
  },
  {
    icon: TrendingUp,
    title: 'Trademark Services',
    subtitle: 'Protect your brand',
    desc: 'Build and defend a strong brand identity with comprehensive trademark registration and monitoring.',
    items: ['Trademark Search', 'Trademark Registration', 'Brand Protection Strategy', 'Trademark Opposition', 'International Filing', 'Trademark Renewal'],
  },
  {
    icon: PenTool,
    title: 'Industrial Design',
    subtitle: 'Protect your product look',
    desc: 'Secure exclusive rights over the visual aesthetics of your products in India and globally.',
    items: ['Design Search', 'Design Registration India', 'International Design Filing', 'Design Prosecution', 'Portfolio Management', 'Locarno Classification'],
  },
  {
    icon: Copyright,
    title: 'Copyright Services',
    subtitle: 'Protect your creative work',
    desc: 'Protect original works — software, literary content, digital assets and creative media.',
    items: ['Software Copyright', 'Literary Works', 'Creative Content', 'Digital Asset Protection', 'Copyright Assignment', 'Licensing Agreements'],
  },
];

export default function Services() {
  return (
    /* Services — alt-bg section */
    <section id="services" className="section-pad bg-alt" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="section-label">Our Services</span>
          <h2 id="services-heading" className="text-4xl md:text-5xl">Complete IP Protection</h2>
          <p className="mt-3 text-[#64748B] leading-relaxed">
            Everything your business needs to protect its intellectual property — in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <article key={svc.title} className="card-premium p-6 flex flex-col">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shrink-0 transition-colors group-hover:bg-[#16C79A]"
                  style={{ background: 'var(--c-accent-bg)' }}
                >
                  <Icon size={20} style={{ color: 'var(--c-primary)' }} aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold mb-0.5" style={{ color: 'var(--c-text)' }}>{svc.title}</h3>
                <p className="text-xs font-medium text-[#94A3B8] mb-3">{svc.subtitle}</p>
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">{svc.desc}</p>
                <ul className="space-y-1.5 flex-1">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#475569]">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--c-accent)' }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-outline mt-5 w-full text-xs py-2.5"
                >
                  Book Consultation
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
