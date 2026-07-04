'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram } from 'lucide-react';

const serviceOptions = [
  'Patent Services', 'Trademark Services', 'Industrial Design Registration',
  'Copyright Services', 'IP Strategy Consulting', 'International Patent Filing',
  'Patent Search', 'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 900);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#1E293B] placeholder-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#38E0C3]/25 focus:border-[#38E0C3] transition-all";

  return (
    /* Contact — white section after dark FinalCTA */
    <section id="contact" className="section-pad bg-white-sec" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="section-label">Contact Us</span>
          <h2 id="contact-heading" className="text-4xl md:text-5xl">Let&apos;s Talk IP</h2>
          <p className="mt-3 text-[#64748B] leading-relaxed">
            Book a free consultation or reach out directly. We respond within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-4">
            {[
              {
                icon: Phone, label: 'Phone',
                content: (
                  <div className="space-y-0.5">
                    <a href="tel:+919209582896" className="block text-sm font-semibold text-[#1E293B] hover:text-[#16C79A] transition-colors">+91 9209582896</a>
                    <a href="tel:+917020653868" className="block text-sm font-semibold text-[#1E293B] hover:text-[#16C79A] transition-colors">+91 7020653868</a>
                  </div>
                ),
              },
              {
                icon: Mail, label: 'Email',
                content: (
                  <a href="mailto:connect@enovoinsights.com" className="text-sm font-semibold text-[#1E293B] hover:text-[#16C79A] transition-colors">
                    connect@enovoinsights.com
                  </a>
                ),
              },
              {
                icon: MapPin, label: 'Office Address',
                content: (
                  <div className="text-sm text-[#475569] leading-snug">
                    Office No. 206, Royal Exotica,<br />
                    Kondhwa, Pune – 411048,<br />
                    Maharashtra, India
                  </div>
                ),
              },
              {
                icon: Clock, label: 'Working Hours',
                content: (
                  <div className="text-sm text-[#475569] leading-snug">
                    Mon – Fri: 9:00 AM – 6:00 PM IST<br />
                    Sat: 10:00 AM – 2:00 PM (by appointment)
                  </div>
                ),
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4 p-4 rounded-2xl border border-[#E2E8F0] bg-[#F7FAFC]">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--c-accent-bg)' }}>
                    <Icon size={16} style={{ color: 'var(--c-primary)' }} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">{item.label}</div>
                    {item.content}
                  </div>
                </div>
              );
            })}

            {/* Social */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <a
                href="https://wa.me/919209582896?text=Hi%20Enovo%2C%20I%20would%20like%20a%20free%20consultation"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all"
                style={{ background: '#25D366' }}
                aria-label="WhatsApp Enovo"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a href="https://www.linkedin.com/company/enovo-ip" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-[#0077b5] hover:bg-[#006099] transition-all" aria-label="LinkedIn">
                <Linkedin size={14} aria-hidden="true" /> LinkedIn
              </a>
              <a href="https://www.instagram.com/enovo.ip" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all"
                style={{ background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }} aria-label="Instagram">
                <Instagram size={14} aria-hidden="true" /> Instagram
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl border border-[#E2E8F0] h-40 bg-[#F7FAFC] flex items-center justify-center">
              <div className="text-center space-y-1">
                <MapPin size={20} className="mx-auto" style={{ color: 'var(--c-accent)' }} aria-hidden="true" />
                <p className="text-sm font-medium text-[#374151]">Office No. 206, Royal Exotica</p>
                <p className="text-xs text-[#94A3B8]">Kondhwa, Pune – 411048</p>
                <a
                  href="https://maps.google.com/?q=Kondhwa+Pune+411048+Maharashtra+India"
                  target="_blank" rel="noopener noreferrer"
                  className="text-xs font-medium hover:underline" style={{ color: 'var(--c-primary)' }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl p-8 border border-[#E2E8F0]" style={{ background: 'var(--c-bg)' }}>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-14">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'var(--c-accent-bg)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16C79A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--c-text)' }}>Message Sent!</h3>
                <p className="text-sm text-[#64748B] max-w-xs">Thank you. We&apos;ll be in touch within one business day.</p>
                <button onClick={() => setSubmitted(false)} className="btn-primary mt-2">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--c-text)' }}>Book a Free Consultation</h3>
                <p className="text-xs text-[#94A3B8] mb-4">Fill in your details and we&apos;ll reach out within one business day.</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#64748B] mb-1.5">Full Name <span className="text-red-400">*</span></label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#64748B] mb-1.5">Email Address <span className="text-red-400">*</span></label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#64748B] mb-1.5">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-[#64748B] mb-1.5">Service Needed</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange} className={inputClass}>
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#64748B] mb-1.5">Message <span className="text-red-400">*</span></label>
                  <textarea id="message" name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="Briefly describe your invention or IP need..." className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" disabled={loading} className="btn-primary w-full text-base py-4">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                <p className="text-xs text-[#94A3B8] text-center">Your information is kept strictly confidential.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
