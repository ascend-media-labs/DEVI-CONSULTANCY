import { Quote, Star } from "lucide-react";
import { testimonialsData } from "./data";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-6 sm:py-8">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Side Heading Layout with reduced spacing */}
        <div className="text-left">
          <p className="eyebrow inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Client Feedback
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {testimonialsData.sectionTitle}
          </h2>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            {testimonialsData.subtitle}
          </p>
        </div>

        {/* 3 Review Cards in a Single Row */}
        <div className="mt-4 sm:mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.list.map((item) => (
            <div
              key={item.id}
              className="group card-glow flex flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" className="drop-shadow-xs" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-brand/25 transition-colors duration-300 group-hover:text-brand" />
                </div>
                <p className="mt-3.5 text-xs leading-relaxed text-navy/90 sm:text-sm text-justify">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-5 flex items-center gap-3 border-t border-border pt-3.5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold text-navy transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_0_12px_rgba(0,163,224,0.4)]">
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs font-bold text-navy transition-colors duration-200 group-hover:text-brand sm:text-sm">
                    {item.author}
                  </p>
                  <p className="truncate text-[11px] text-muted-foreground sm:text-xs">
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
