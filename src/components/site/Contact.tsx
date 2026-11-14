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
    <section id="contact" className="bg-[#08191f] text-[#eaf6f4] py-5 sm:py-6 lg:py-7 scroll-mt-20">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* Contact Container Matching Reference (.ct) */}
        <div className="glass-card !rounded-[32px] sm:!rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-[0_24px_54px_rgba(0,0,0,0.35)] !border-[#1f4650]">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Left Column: Information */}
            <div>
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-[2px] text-[#cf9f8a]">
                  Contact Us
                </span>
                <span className="text-[#cf9f8a]/70">·</span>
                <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#eaf6f4] tracking-tight">
                  Let’s plan your space
                </h2>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-[#9fbcc2] leading-relaxed">
                Tell us about your project and our expert engineering team will get back to you.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#16414b] text-[#bfe3e0]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9fbcc2]">
                      Phone
                    </span>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="block text-sm sm:text-base font-semibold text-[#eaf6f4] hover:text-[#bfe3e0] transition-colors"
                    >
                      +91 {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#16414b] text-[#bfe3e0]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9fbcc2]">
                      Email
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="block text-sm sm:text-base font-semibold text-[#eaf6f4] hover:text-[#bfe3e0] transition-colors break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#16414b] text-[#bfe3e0]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9fbcc2]">
                      Office Address
                    </span>
                    <p className="text-xs sm:text-sm text-[#eaf6f4] leading-relaxed max-w-md">
                      {contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#16414b] text-[#bfe3e0]">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9fbcc2]">
                      Working Hours
                    </span>
                    <p className="text-xs sm:text-sm text-[#eaf6f4] leading-relaxed">
                      Mon–Sat 9:00 AM – 7:00 PM · Sunday by appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <form onSubmit={onSubmit} className="flex flex-col gap-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#eaf6f4] mb-1.5">
                  Your Name
                </label>
                <input
                  required
                  placeholder="Your full name"
                  className="w-full rounded-[14px] border border-[#1f4650] bg-[#10303a] px-4 py-3 text-sm text-[#eaf6f4] outline-none transition focus:border-[#bfe3e0] focus:ring-2 focus:ring-[#bfe3e0]/20 placeholder-[#9fbcc2]/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#eaf6f4] mb-1.5">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 94401 33003"
                  className="w-full rounded-[14px] border border-[#1f4650] bg-[#10303a] px-4 py-3 text-sm text-[#eaf6f4] outline-none transition focus:border-[#bfe3e0] focus:ring-2 focus:ring-[#bfe3e0]/20 placeholder-[#9fbcc2]/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#eaf6f4] mb-1.5">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-[14px] border border-[#1f4650] bg-[#10303a] px-4 py-3 text-sm text-[#eaf6f4] outline-none transition focus:border-[#bfe3e0] focus:ring-2 focus:ring-[#bfe3e0]/20 placeholder-[#9fbcc2]/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#eaf6f4] mb-1.5">
                  Project Description
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  className="w-full rounded-[14px] border border-[#1f4650] bg-[#10303a] px-4 py-3 text-sm text-[#eaf6f4] outline-none transition focus:border-[#bfe3e0] focus:ring-2 focus:ring-[#bfe3e0]/20 placeholder-[#9fbcc2]/50 resize-none"
                />
              </div>

              {sent ? (
                <div className="flex items-center gap-2 rounded-[14px] bg-[#16414b] border border-[#1f4650] p-3 text-xs font-semibold text-[#bfe3e0]">
                  <CheckCircle2 size={16} className="text-[#bfe3e0]" />
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
