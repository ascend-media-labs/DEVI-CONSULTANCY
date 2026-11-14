import { Quote, Star } from "lucide-react";
import { testimonialsData } from "./data";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f3f8f7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <p className="eyebrow inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[3px] text-[#cf9f8a]">
            Client Feedback
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-[#0f2e38] tracking-tight">
            {testimonialsData.sectionTitle}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#587078]">
            {testimonialsData.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.list.map((item) => (
            <div
              key={item.id}
              className="glass-card flex flex-col justify-between p-6 sm:p-7 rounded-[26px] hover:-translate-y-1.5 transition-all duration-300 shadow-[0_16px_36px_rgba(12,63,80,0.08)] cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#cf9f8a]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-[#166079]/30" />
                </div>
                <p className="text-sm leading-relaxed text-[#0f2e38] text-justify font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3.5 border-t border-[#d3e4e2] pt-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#1a6c88] to-[#0c3f50] text-xs font-bold text-white shadow-xs">
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-display text-base text-[#0f2e38]">
                    {item.author}
                  </p>
                  <p className="text-xs text-[#587078]">
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
