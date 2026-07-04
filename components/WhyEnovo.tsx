import {
  Globe,
  Award,
  Heart,
  DollarSign,
  Zap,
  Lock,
  BadgeCheck,
  Target,
} from 'lucide-react';

const reasons = [
  { icon: Globe,      title: 'Global Experience',       desc: 'Trusted by US patent attorneys, international law firms, and foreign associates.' },
  { icon: Award,      title: 'Industry Experts',        desc: 'Deep technical knowledge across 20+ engineering and science domains.' },
  { icon: Heart,      title: 'Client First',            desc: 'Every IP strategy is aligned to your actual business goals — not just procedure.' },
  { icon: DollarSign, title: 'Affordable',              desc: 'Transparent pricing with startup-friendly structures and government concessions.' },
  { icon: Zap,        title: 'Fast Turnaround',         desc: 'Efficient drafting and filing that respects your product launch timelines.' },
  { icon: Lock,       title: 'Confidential',            desc: 'Your innovations stay strictly confidential. NDA available on request.' },
  { icon: BadgeCheck, title: 'International Standards', desc: 'Drafting quality that meets USPTO, EPO, and PCT filing requirements.' },
  { icon: Target,     title: 'Personalized Strategy',   desc: 'Tailored IP strategies based on your industry, stage, and competitive position.' },
];

export default function WhyEnovo() {
  return (
    /* Why Enovo — dark section for contrast after light About */
    <section id="why-enovo" className="section-pad bg-dark-sec" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold text-[#38E0C3] uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2 id="why-heading" className="text-4xl md:text-5xl font-bold text-white">
            Why Clients Trust Enovo
          </h2>
          <p className="mt-3 text-slate-400 leading-relaxed">
            Technical depth, legal expertise, and a strategic mindset — all under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-5 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.07] hover:border-[#38E0C3]/30 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-[#38E0C3]/10 flex items-center justify-center mb-3.5 group-hover:bg-[#38E0C3]/20 transition-colors">
                  <Icon size={17} className="text-[#38E0C3]" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
