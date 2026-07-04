'use client';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0F172A 0%, #0F2027 55%, #0D1117 100%)' }}
      aria-label="Hero"
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,224,195,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,224,195,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '52px 52px',
        }}
        aria-hidden="true"
      />

      {/* Soft radial glow — top right */}
      <div
        className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-2xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 15%, rgba(56,224,195,0.09) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      {/* Soft radial glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[35vw] h-[35vw] max-w-xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 15% 85%, rgba(22,199,154,0.05) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Abstract floating rings */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full border border-[#38E0C3]/10"
          style={{ width: 440, height: 440, top: '18%', right: '8%', transform: 'translate(50%,-50%)' }}
        />
        <div
          className="absolute rounded-full border border-[#38E0C3]/06"
          style={{ width: 280, height: 280, top: '18%', right: '8%', transform: 'translate(50%,-50%)' }}
        />
        <div className="absolute w-2 h-2 rounded-full bg-[#38E0C3]/25" style={{ top: '30%', right: '25%' }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-[#16C79A]/35" style={{ top: '65%', right: '18%' }} />
        <div className="absolute w-1 h-1 rounded-full bg-[#38E0C3]/50" style={{ top: '50%', right: '12%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#38E0C3]/10 border border-[#38E0C3]/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38E0C3]" aria-hidden="true" />
            <span className="text-[#38E0C3] text-xs font-semibold tracking-widest uppercase">
              India&apos;s Modern IP Partner
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white mb-6 leading-[1.08]">
            Protect Your Ideas.
            <br />
            <span className="gradient-text">Build Your Future.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
            Modern Intellectual Property services for Indian businesses and global clients —
            patents, trademarks, industrial designs and copyrights, handled with precision
            and strategic expertise.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-12">
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-primary text-base px-8 py-4"
            >
              Book Free Consultation
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo('#services')}
              className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1.5"
            >
              Explore Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Service chips */}
          <div className="flex flex-wrap gap-2">
            {['Patent', 'Trademark', 'Industrial Design', 'Copyright', 'IP Strategy'].map((chip) => (
              <span
                key={chip}
                className="px-3.5 py-1.5 rounded-full text-sm font-medium border border-white/10 text-slate-300 bg-white/[0.05] hover:border-[#38E0C3]/40 hover:text-[#38E0C3] transition-all cursor-default"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-25"
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-white" />
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 9l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
