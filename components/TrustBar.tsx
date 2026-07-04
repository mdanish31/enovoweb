/* TrustBar — white background, sits immediately below dark hero */
const trustItems = [
  { icon: '🏢', label: 'Indian Startups & MSMEs' },
  { icon: '⚖️', label: 'International Patent Attorneys' },
  { icon: '🏭', label: 'Manufacturing Companies' },
  { icon: '💡', label: 'Individual Inventors' },
  { icon: '💻', label: 'Technology Businesses' },
  { icon: '🌐', label: 'Global IP Associates' },
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-white border-b border-[#E2E8F0]" aria-label="Trusted by">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.15em] mb-8">
          Trusted by
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F7FAFC] border border-[#E2E8F0] hover:border-[#38E0C3] hover:bg-[#ECFDF5] transition-all group cursor-default"
            >
              <span className="text-sm" aria-hidden="true">{item.icon}</span>
              <span className="text-sm font-medium text-[#475569] group-hover:text-[#16C79A] transition-colors whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
