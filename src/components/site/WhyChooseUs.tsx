import {
  Briefcase,
  Sparkles,
  ShieldCheck,
  Coins,
  Clock,
  HeartHandshake,
  Headphones,
} from "lucide-react";
import { whyChooseUs } from "./data";

const iconMap = {
  Briefcase,
  Sparkles,
  ShieldCheck,
  Coins,
  Clock,
  HeartHandshake,
  Headphones,
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-secondary py-6 sm:py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Side Heading Layout with reduced spacing */}
        <div className="text-left">
          <p className="eyebrow inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Why Choose Us?
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Committed to Quality, Precision &amp; Trust
          </h2>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm lg:whitespace-nowrap">
            Here is why clients across residential, commercial, and institutional domains place their confidence in DEVI CONSULTANCY.
          </p>
        </div>

        {/* Single Row with Right-to-Left Slide Animation */}
        <div className="relative mt-4 sm:mt-5 w-full overflow-hidden">
          {/* Subtle edge fades for smooth entrance/exit */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-secondary to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-secondary to-transparent sm:w-24" />

          {/* Sliding track moving from right to left */}
          <div className="flex animate-marquee-left hover:[animation-play-state:paused] gap-5 py-2">
            {[...whyChooseUs, ...whyChooseUs].map((item, idx) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || ShieldCheck;
              return (
                <div
                  key={`${item.title}-${idx}`}
                  className="group card-glow w-[280px] shrink-0 rounded-2xl border border-border bg-card p-5 shadow-sm cursor-pointer sm:w-[320px]"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(0,163,224,0.45)] sm:h-11 sm:w-11">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-3.5 text-base font-bold text-navy transition-colors duration-200 group-hover:text-brand sm:text-lg">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm text-justify">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
