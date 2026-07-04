/* TechExpertise — white section after dark WhyEnovo */
const groups = [
  { category: 'Software & Digital',         domains: ['Software', 'Cloud Computing', 'Cybersecurity', 'IoT'] },
  { category: 'AI & Emerging Tech',         domains: ['Artificial Intelligence', 'Machine Learning', 'Blockchain', 'Drone Technology'] },
  { category: 'Mechanical & Manufacturing', domains: ['Mechanical Engineering', 'Manufacturing', 'Robotics', 'Aerospace'] },
  { category: 'Electronics & Chips',        domains: ['Electronics', 'Semiconductors', 'Battery Technology', 'Electric Vehicles'] },
  { category: 'Medical & Chemistry',        domains: ['Medical Devices', 'Health Tech', 'Chemistry', 'Biotechnology'] },
  { category: 'Automotive & Energy',        domains: ['Automobile Engineering', 'Renewable Energy', 'HVAC', 'Fluid Mechanics'] },
];

export default function TechExpertise() {
  return (
    <section className="section-pad bg-white-sec" aria-labelledby="tech-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="section-label">Technology Domains</span>
          <h2 id="tech-heading" className="text-4xl md:text-5xl">Deep Technical Expertise</h2>
          <p className="mt-3 text-[#64748B] leading-relaxed">
            Hands-on engineering knowledge across every major technology sector — ensuring
            accurate, well-crafted IP applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((group) => (
            <div
              key={group.category}
              className="card-premium p-5"
            >
              <h3 className="text-sm font-semibold mb-3 pb-2.5 border-b border-[#E2E8F0]" style={{ color: 'var(--c-text)' }}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.domains.map((d) => (
                  <span key={d} className="chip">{d}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
