import { Quote, Star } from "lucide-react";
import { testimonialsData } from "./data";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#08191f] text-[#eaf6f4] py-5 sm:py-6 lg:py-7 scroll-mt-20">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* Side Heading Header */}
        <div className="mb-4 sm:mb-5 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 sm:gap-3">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#cf9f8a]">
              Client Feedback
            </span>
            <span className="text-[#cf9f8a]/70">·</span>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#eaf6f4] tracking-tight">
              {testimonialsData.sectionTitle}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9fbcc2] max-w-md">
            {testimonialsData.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.list.map((item) => (
            <div
              key={item.id}
              className="glass-card flex flex-col justify-between p-6 sm:p-7 rounded-[26px] hover:-translate-y-1.5 transition-all duration-300 shadow-[0_16px_36px_rgba(0,0,0,0.35)] cursor-pointer !border-[#1f4650]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#cf9f8a]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-[#bfe3e0]/30" />
                </div>
                <p className="text-sm leading-relaxed text-[#eaf6f4] text-justify font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3.5 border-t border-[#1f4650] pt-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#16414b] to-[#0c3f50] text-xs font-bold text-[#eaf6f4] shadow-xs">
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-display text-base text-[#eaf6f4]">
                    {item.author}
                  </p>
                  <p className="text-xs text-[#9fbcc2]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
