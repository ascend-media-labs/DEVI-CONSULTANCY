import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, Clock } from "lucide-react";
import { contact } from "./data";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-[#f3f8f7] py-8 sm:py-10 lg:py-12 section-glow-ambient">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* Contact Container Matching Reference (.ct) */}
        <div className="glass-card !rounded-[32px] sm:!rounded-[36px] p-6 sm:p-9 lg:p-11 shadow-[0_24px_54px_rgba(12,63,80,0.12)] border border-white/85">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
            {/* Left Column: Information */}
            <div>
              <p className="eyebrow inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[3px] text-[#cf9f8a]">
                Contact Us
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-[#0f2e38] tracking-tight">
                Let’s plan your space
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#587078] leading-relaxed">
                Tell us about your project and our expert engineering team will get back to you.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e2f0ee] text-[#166079]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#587078]">
                      Phone
                    </span>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="block text-sm sm:text-base font-semibold text-[#0f2e38] hover:text-[#166079] transition-colors"
                    >
                      +91 {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e2f0ee] text-[#166079]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#587078]">
                      Email
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="block text-sm sm:text-base font-semibold text-[#0f2e38] hover:text-[#166079] transition-colors break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e2f0ee] text-[#166079]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#587078]">
                      Office Address
                    </span>
                    <p className="text-xs sm:text-sm text-[#0f2e38] leading-relaxed max-w-md">
                      {contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e2f0ee] text-[#166079]">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#587078]">
                      Working Hours
                    </span>
                    <p className="text-xs sm:text-sm text-[#0f2e38] leading-relaxed">
                      Mon–Sat 9:00 AM – 7:00 PM · Sunday by appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <form onSubmit={onSubmit} className="flex flex-col gap-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2e38] mb-1.5">
                  Your Name
                </label>
                <input
                  required
                  placeholder="Your full name"
                  className="w-full rounded-[14px] border border-[#d3e4e2] bg-white px-4 py-3 text-sm text-[#0f2e38] outline-none transition focus:border-[#166079] focus:ring-2 focus:ring-[#166079]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2e38] mb-1.5">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 94401 33003"
                  className="w-full rounded-[14px] border border-[#d3e4e2] bg-white px-4 py-3 text-sm text-[#0f2e38] outline-none transition focus:border-[#166079] focus:ring-2 focus:ring-[#166079]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2e38] mb-1.5">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-[14px] border border-[#d3e4e2] bg-white px-4 py-3 text-sm text-[#0f2e38] outline-none transition focus:border-[#166079] focus:ring-2 focus:ring-[#166079]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2e38] mb-1.5">
                  Project Description
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  className="w-full rounded-[14px] border border-[#d3e4e2] bg-white px-4 py-3 text-sm text-[#0f2e38] outline-none transition focus:border-[#166079] focus:ring-2 focus:ring-[#166079]/20 resize-none"
                />
              </div>

              {sent ? (
                <div className="flex items-center gap-2 rounded-[14px] bg-[#e2f0ee] border border-[#bfe3e0] p-3 text-xs font-semibold text-[#0c3f50]">
                  <CheckCircle2 size={16} className="text-[#166079]" />
                  <span>Thank you! Your message has been sent. Our team will contact you shortly.</span>
                </div>
              ) : (
                <button type="submit" className="btn-petrol w-full mt-2">
                  <Send size={15} />
                  Send Message
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
