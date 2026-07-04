/* Process — alt-bg section */
const steps = [
  { num: '01', title: 'Consultation',  desc: 'Free strategy call to understand your innovation and IP needs.' },
  { num: '02', title: 'IP Search',     desc: 'Thorough prior art or trademark search to assess viability.' },
  { num: '03', title: 'Strategy',      desc: 'Custom IP strategy aligned with your business roadmap.' },
  { num: '04', title: 'Drafting',      desc: 'Expert preparation of your patent, trademark or design application.' },
  { num: '05', title: 'Filing',        desc: 'Official filing with the Indian Patent Office or relevant authority.' },
  { num: '06', title: 'Prosecution',   desc: 'Handling objections, examiner communication and responses.' },
  { num: '07', title: 'Registration',  desc: 'Securing grant or registration of your IP rights.' },
  { num: '08', title: 'Ongoing Support', desc: 'Portfolio management, renewals, enforcement and licensing.' },
];

export default function Process() {
  return (
    <section id="process" className="section-pad bg-alt" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="section-label">How It Works</span>
          <h2 id="process-heading" className="text-4xl md:text-5xl">From Idea to Protected IP</h2>
          <p className="mt-3 text-[#64748B] leading-relaxed">
            A clear, transparent process keeping you informed at every step.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-[2rem] left-[5%] right-[5%] h-px bg-[#E2E8F0]" aria-hidden="true" />
          <div className="grid grid-cols-8 gap-2">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center group">
                <div className="relative z-10 w-[3.25rem] h-[3.25rem] rounded-full bg-white border-2 border-[#E2E8F0] group-hover:border-[#38E0C3] flex items-center justify-center mb-3 shadow-sm transition-colors">
                  <span className="text-xs font-bold" style={{ color: 'var(--c-accent)' }}>{step.num}</span>
                </div>
                <h3 className="text-xs font-semibold mb-1" style={{ color: 'var(--c-text)' }}>{step.title}</h3>
                <p className="text-[10px] text-[#94A3B8] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-white border-2 border-[#E2E8F0] flex items-center justify-center shrink-0 shadow-sm">
                  <span className="text-xs font-bold" style={{ color: 'var(--c-accent)' }}>{step.num}</span>
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 min-h-6 bg-[#E2E8F0] my-1" />}
              </div>
              <div className="pb-4 pt-1.5">
                <h3 className="text-sm font-semibold" style={{ color: 'var(--c-text)' }}>{step.title}</h3>
                <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
