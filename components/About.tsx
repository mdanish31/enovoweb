import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Over a decade of IP consulting experience in India',
  'Technical background spanning engineering and science disciplines',
  'Seamless collaboration with US patent attorneys and international law firms',
  'Client-first philosophy — your business goals drive our IP strategy',
  'Affordable, transparent pricing tailored for startups and MSMEs',
  'Serving clients across India and internationally with equal commitment',
];

export default function About() {
  return (
    /* About — soft site-bg, alternates from white TrustBar */
    <section id="about" className="section-pad" style={{ backgroundColor: 'var(--c-bg)' }} aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Founder image */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="w-72 md:w-80 h-80 md:h-96 rounded-[1.5rem] overflow-hidden shadow-2xl shadow-slate-200/80">
                <Image
                  src="/enovoweb/assets/images/contact/WhatsApp_Image_2026-07-04_at_2.26.35_PM.jpeg"
                  alt="Founder of Enovo IP Consulting — Patent and IP expert in Pune, India"
                  fill
                  sizes="(max-width: 768px) 288px, 320px"
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-5 -right-4 bg-white rounded-2xl shadow-md px-5 py-3.5 border border-[#E2E8F0]">
                <div className="text-2xl font-extrabold" style={{ color: 'var(--c-text)' }}>10+</div>
                <div className="text-xs font-medium text-[#94A3B8] mt-0.5 whitespace-nowrap">Years of Excellence</div>
              </div>
              {/* Dot accent */}
              <div
                className="absolute -top-5 -left-5 w-20 h-20 opacity-40"
                style={{
                  backgroundImage: 'radial-gradient(circle, #38E0C3 1px, transparent 1px)',
                  backgroundSize: '8px 8px',
                }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5 order-1 lg:order-2">
            <span className="section-label">About Enovo</span>
            <h2 id="about-heading" className="text-4xl md:text-[2.6rem] leading-tight">
              Indian Expertise.
              <br />
              <span className="gradient-text">Global Standards.</span>
            </h2>
            <p className="text-[#475569] leading-relaxed">
              Enovo is a modern intellectual property consulting firm based in Pune, India.
              We help startups, inventors, manufacturers and global businesses transform
              ideas into protected, strategic assets.
            </p>
            <p className="text-[#475569] leading-relaxed">
              With a strong technical foundation and over a decade of IP experience, we combine
              deep domain knowledge with a strategic, business-first mindset — delivering
              world-class results at India-competitive costs.
            </p>
            <ul className="space-y-2.5 pt-1">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--c-accent)' }} aria-hidden="true" />
                  <span className="text-[#475569] text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
