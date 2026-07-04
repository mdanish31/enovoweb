'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'What is a Patent and why do I need one?',
    a: 'A patent grants exclusive rights to manufacture, use, and sell an invention for up to 20 years. It protects your innovation from being copied by competitors and creates a legally defensible competitive advantage.' },
  { q: 'How long does Patent Registration take in India?',
    a: 'The Indian patent process typically takes 3–5 years from filing to grant, depending on technology field and examination queue. From day one of filing, you receive legal protection with a priority date.' },
  { q: 'What is Trademark Registration and how long does it take?',
    a: 'Trademark registration protects your brand name, logo, or slogan. In India, the process takes 18–24 months. Upon registration, you receive ® rights valid for 10 years, renewable indefinitely.' },
  { q: 'What is the difference between a Patent and a Trademark?',
    a: 'A patent protects inventions (products, processes, compositions), while a trademark protects brand identifiers (names, logos, slogans). Patents last 20 years; trademarks last indefinitely with renewals.' },
  { q: 'What is Industrial Design Registration?',
    a: 'Industrial Design registration protects the visual features of a product — shape, pattern, ornamentation. It prevents others from copying your product\'s appearance. Valid for 10 years (extendable by 5) in India.' },
  { q: 'Can foreign companies file patents in India?',
    a: 'Yes. Foreign companies and individuals can file patents in India directly or via the PCT route. Enovo has experience supporting international law firms and foreign associates with India-based filing and prosecution.' },
  { q: 'Can startups apply for patents with fee concessions?',
    a: 'Yes. DPIIT-recognised startups are eligible for up to 80% fee reduction at the Indian Patent Office. Enovo helps startups identify patentable innovations and navigate the concession process.' },
  { q: 'How much does IP protection cost in India?',
    a: 'Costs vary by service type and entity. Startups and individuals receive significant government fee concessions. Book a free consultation for a transparent, customised quote for your specific needs.' },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    /* FAQs — site-bg, alternates from white testimonials */
    <section id="faqs" className="section-pad" style={{ backgroundColor: 'var(--c-bg)' }} aria-labelledby="faq-heading">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="section-label">FAQs</span>
          <h2 id="faq-heading" className="text-4xl md:text-5xl">Common Questions</h2>
          <p className="mt-3 text-[#64748B] leading-relaxed">Quick answers about IP protection in India.</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="card-premium overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-${i}`}
              >
                <span className="text-sm font-semibold" style={{ color: 'var(--c-text)' }}>{faq.q}</span>
                <ChevronDown
                  size={15}
                  className={`shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                  style={{ color: 'var(--c-accent)' }}
                  aria-hidden="true"
                />
              </button>
              {open === i && (
                <div id={`faq-${i}`} className="px-5 pb-4">
                  <p className="text-sm text-[#64748B] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
