import { Calendar, Building, Trophy } from "lucide-react";
import { achievements } from "./data";

const iconMap = [Calendar, Building, Trophy];

export function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-gradient-to-br from-[#0e2c36] to-[#08191f] py-5 sm:py-6 lg:py-7 text-[#effaf8] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] scroll-mt-20">
      {/* Subtle ambient lighting glows */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#bfe3e0]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#ecd0c3]/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* Side Heading Header */}
        <div className="mb-4 sm:mb-5">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#ecd0c3]">
              Our Track Record
            </span>
            <span className="text-[#ecd0c3]/70">·</span>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
              Our Achievements
            </h2>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-[#cfe8e5] max-w-2xl">
            Decades of dedicated service in building consultancy, structural stability, and infrastructure.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 sm:gap-7">
          {achievements.map((item, idx) => {
            const Icon = iconMap[idx] || Trophy;
            return (
              <div
                key={item.label}
                className="card-glow-dark group relative flex flex-col items-center rounded-[28px] border border-white/20 bg-white/10 p-7 text-center backdrop-blur-md shadow-[0_16px_36px_rgba(0,0,0,0.2)] cursor-pointer"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-[#ecd0c3] mb-4">
                  <Icon size={24} />
                </div>
                <p className="font-display text-4xl sm:text-5xl font-normal text-white">
                  {item.value}
                </p>
                <h3 className="mt-2 font-display text-lg sm:text-xl text-[#ecd0c3]">
                  {item.label}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#cfe8e5]/80">
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
