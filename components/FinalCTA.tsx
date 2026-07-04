'use client';

export default function FinalCTA() {
  return (
    <section
      className="section-pad bg-dark-sec relative overflow-hidden"
      aria-label="Call to action"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[280px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(56,224,195,0.07), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-7">
        <div>
          <span className="inline-block text-xs font-bold text-[#38E0C3] uppercase tracking-widest mb-4">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Protect Your Innovation.
            <br />
            <span className="gradient-text">Start Today.</span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Every day without IP protection is a risk. Book a free, no-obligation consultation
            and let our experts guide you through the right strategy.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base px-8 py-4"
          >
            Book Free Consultation
          </button>
          <a
            href="tel:+919209582896"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white border border-white/15 hover:bg-white/[0.06] transition-all"
          >
            Call +91 9209582896
          </a>
        </div>
      </div>
    </section>
  );
}
