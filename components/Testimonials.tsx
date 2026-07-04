import { Quote } from 'lucide-react';

const testimonials = [
  {
    initials: 'MR',
    name: 'Michael R.',
    role: 'Patent Attorney',
    company: 'US Law Firm',
    quote: 'Enovo consistently delivers high-quality patent drafts that meet USPTO standards. Their technical accuracy, claim structure, and prompt turnaround make them our preferred Indian associate.',
  },
  {
    initials: 'RK',
    name: 'Rajesh K.',
    role: 'Founder & CEO',
    company: 'Deep Tech Startup, Pune',
    quote: 'Enovo not only drafted an excellent patent application but also identified additional IP opportunities we hadn\'t considered. Truly strategic partners who understand both technology and business.',
  },
  {
    initials: 'ST',
    name: 'Sarah T.',
    role: 'IP Director',
    company: 'MedTech Company, UK',
    quote: 'Outstanding service for our Indian patent prosecution needs. Their expertise in medical device technology combined with clear communication made the entire process seamless.',
  },
  {
    initials: 'VM',
    name: 'Vikram M.',
    role: 'Co-founder',
    company: 'EV Startup, Bangalore',
    quote: 'Enovo\'s deep understanding of battery and EV systems resulted in well-crafted patent claims. They also helped us access startup fee concessions, which was extremely helpful.',
  },
  {
    initials: 'PS',
    name: 'Priya S.',
    role: 'R&D Head',
    company: 'Manufacturing MSME, Pune',
    quote: 'From trademark to design registration and patents — Enovo handled our entire IP portfolio professionally. Their guidance made IP protection accessible and understandable.',
  },
  {
    initials: 'DL',
    name: 'David L.',
    role: 'Senior Patent Agent',
    company: 'IP Firm, Canada',
    quote: 'Enovo stands out for their technical depth, responsive communication, and drafting quality. Highly recommended for India-based filing and prosecution work.',
  },
];

export default function Testimonials() {
  return (
    /* Testimonials — white section */
    <section className="section-pad bg-white-sec" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="section-label">Client Testimonials</span>
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl">What Clients Say</h2>
          <p className="mt-3 text-[#64748B] leading-relaxed">
            From startups in Pune to patent attorneys in the US — hear from those who trust
            Enovo with their most valuable assets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <article key={t.name} className="card-premium p-6 flex flex-col">
              <Quote size={18} className="mb-3 shrink-0" style={{ color: 'var(--c-accent)' }} aria-hidden="true" />
              <p className="text-sm text-[#475569] leading-relaxed flex-1">&quot;{t.quote}&quot;</p>
              <div className="mt-5 pt-4 border-t border-[#F1F5F9] flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: 'var(--c-accent-bg)', color: 'var(--c-primary)' }}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold truncate" style={{ color: 'var(--c-text)' }}>{t.name}</div>
                  <div className="text-xs text-[#94A3B8] truncate">{t.role} &middot; {t.company}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
