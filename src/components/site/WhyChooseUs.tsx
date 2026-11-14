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

const processSteps = [
  { step: "1", title: "Plan", desc: "Site study, approvals liaison and budget optimization." },
  { step: "2", title: "Design", desc: "Vastu-compliant architecture, structural engineering and refined interiors." },
  { step: "3", title: "Build", desc: "Rigorous quality-controlled execution and milestone tracking." },
  { step: "4", title: "Handover", desc: "A finished, ready-to-move space delivered on time and within budget." },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#08191f] text-[#eaf6f4] py-5 sm:py-6 lg:py-7 overflow-hidden scroll-mt-20">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* Section 1: Our Process */}
        <div className="mb-4 sm:mb-5">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#cf9f8a]">
              Our Process
            </span>
            <span className="text-[#cf9f8a]/70">·</span>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#eaf6f4] tracking-tight">
              Simple, transparent, reliable
            </h2>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-[#9fbcc2] max-w-2xl">
            A structured four-step journey turning your architectural vision into reality.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-7">
          {processSteps.map((s) => (
            <div
              key={s.step}
              className="glass-card p-6 text-center rounded-[24px] hover:-translate-y-1.5 transition-all duration-300 shadow-[0_16px_36px_rgba(0,0,0,0.35)] !border-[#1f4650]"
            >
              {/* Number Circle in Rose Gradient */}
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-b from-[#e8c4b3] to-[#cf9f8a] text-[#3a1f14] font-display text-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_18px_rgba(207,159,138,0.4)]">
                {s.step}
              </div>
              <h3 className="font-display text-xl text-[#eaf6f4]">{s.title}</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#9fbcc2] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section 2: Why Choose Us Reasons Marquee */}
        <div className="mt-5 sm:mt-6 lg:mt-7">
          <div className="flex flex-wrap items-baseline gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#cf9f8a]">
              Why Choose Us
            </span>
            <span className="text-[#cf9f8a]/70">·</span>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#eaf6f4] tracking-tight">
              Committed to Quality, Precision &amp; Trust
            </h2>
          </div>

          <div className="relative w-full overflow-hidden">
            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#08191f] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#08191f] to-transparent" />

            <div className="flex animate-marquee-left hover:[animation-play-state:paused] gap-5 py-3">
              {[...whyChooseUs, ...whyChooseUs].map((item, idx) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] || ShieldCheck;
                return (
                  <div
                    key={`${item.title}-${idx}`}
                    className="glass-card w-[290px] shrink-0 p-5 rounded-[22px] shadow-sm hover:shadow-md transition-shadow cursor-pointer !border-[#1f4650]"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#16414b] text-[#bfe3e0] mb-3">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-lg text-[#eaf6f4]">{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#9fbcc2] text-justify">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
