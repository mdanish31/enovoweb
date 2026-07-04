/* Industries — white section */
const industries = [
  { name: 'Healthcare & MedTech',       icon: '🏥' },
  { name: 'Manufacturing',               icon: '🏭' },
  { name: 'Electronics',                 icon: '⚡' },
  { name: 'Software & SaaS',             icon: '💻' },
  { name: 'Artificial Intelligence',     icon: '🤖' },
  { name: 'Automotive & EVs',            icon: '🚗' },
  { name: 'Consumer Products',           icon: '📦' },
  { name: 'Chemical Industry',           icon: '🧪' },
  { name: 'Mechanical Engineering',      icon: '⚙️' },
  { name: 'Educational Institutions',    icon: '🎓' },
  { name: 'Research Organizations',      icon: '🔬' },
  { name: 'Startups & MSMEs',            icon: '🚀' },
];

export default function Industries() {
  return (
    <section className="section-pad bg-white-sec" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="section-label">Industries We Serve</span>
          <h2 id="industries-heading" className="text-4xl md:text-5xl">Serving Every Sector</h2>
          <p className="mt-3 text-[#64748B] leading-relaxed">
            Cross-domain expertise enabling us to serve innovators across virtually every industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="card-premium flex items-center gap-3 p-4 cursor-default hover:!bg-[#ECFDF5]"
            >
              <span className="text-xl shrink-0" aria-hidden="true">{ind.icon}</span>
              <span className="text-sm font-medium text-[#374151] leading-tight">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
