'use client';

import { CheckCircle2 } from 'lucide-react';

const reasons = [
  'High-quality drafting meeting USPTO, EPO and PCT standards',
  'Cost-effective compared to US/EU rates — without quality compromise',
  'Strong technical backgrounds ensuring accurate claim drafting',
  'Reliable turnaround times that respect your filing deadlines',
  'Transparent communication with regular status updates',
  'Experience working with US patent attorneys and international law firms',
  'Coverage across all major technology domains',
  'Strict confidentiality — NDA available on request',
];

export default function InternationalClients() {
  return (
    /* International — mint-tint for soft visual variety */
    <section className="section-pad bg-mint-tint" aria-labelledby="intl-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <div className="space-y-5">
            <span className="section-label">For International Clients</span>
            <h2 id="intl-heading" className="text-4xl md:text-[2.6rem] leading-tight">
              Your Trusted Indian
              <br />
              <span className="gradient-text">IP Associate</span>
            </h2>
            <p className="text-[#475569] leading-relaxed">
              We serve as a reliable, cost-effective Indian IP partner for US patent attorneys,
              international law firms, and foreign associates. Whether you need patent drafting
              support, Indian prosecution assistance, or India-based filing services, Enovo
              delivers with the professionalism global clients expect.
            </p>
            <ul className="space-y-2.5">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: 'var(--c-accent)' }} aria-hidden="true" />
                  <span className="text-[#475569] text-sm">{r}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Start a Collaboration
            </button>
          </div>

          {/* Dark panel */}
          <div className="rounded-3xl p-8 border border-slate-700/30" style={{ background: 'var(--c-dark)' }}>
            <h3 className="text-base font-semibold text-white mb-4">Countries We Support</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['India', 'USA', 'Europe (EPO)', 'UK', 'Canada', 'Australia', 'Japan', 'UAE', 'PCT International'].map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs text-slate-300 font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="h-px bg-white/[0.07] mb-5" />
            <div className="space-y-3.5">
              {[
                { label: 'Avg. Drafting Turnaround', value: '5–7 Business Days' },
                { label: 'Communication',             value: 'English (Fluent)' },
                { label: 'Confidentiality',           value: 'NDA on Request' },
                { label: 'Time Zone',                 value: 'IST (UTC+5:30)' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">{item.label}</span>
                  <span className="text-xs font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
