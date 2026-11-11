import { Calendar, Building, Trophy } from "lucide-react";
import { achievements } from "./data";

const iconMap = [Calendar, Building, Trophy];

export function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-navy-deep py-6 text-primary-foreground sm:py-8">
      {/* Subtle ambient lighting glows */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand/15 blur-3xl animate-pulse-glow" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-float" />

      <div className="relative mx-auto w-full max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Side Heading Layout with reduced spacing */}
        <div className="text-left">
          <p className="eyebrow inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Our Track Record
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Our Achievements
          </h2>
          <p className="mt-1 text-xs text-primary-foreground/75 sm:text-sm">
            Decades of dedicated service in building consultancy and infrastructure.
          </p>
        </div>

        <div className="mt-4 sm:mt-5 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {achievements.map((item, idx) => {
            const Icon = iconMap[idx] || Trophy;
            return (
              <div
                key={item.label}
                className="group card-glow-dark relative flex flex-col items-center rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 text-center backdrop-blur-md cursor-pointer sm:p-7"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/20 text-brand shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_0_15px_rgba(0,163,224,0.5)] sm:h-14 sm:w-14">
                  <Icon size={26} />
                </div>
                <p className="mt-4 font-display text-3xl font-extrabold bg-gradient-to-r from-brand to-cyan-300 bg-clip-text text-transparent drop-shadow-sm sm:text-4xl">
                  {item.value}
                </p>
                <h3 className="mt-1.5 text-base font-bold text-primary-foreground sm:text-lg">
                  {item.label}
                </h3>
                <p className="mt-1 text-xs text-primary-foreground/70 sm:text-sm">
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
