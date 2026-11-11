import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { heroStats, slides } from "./data";

export function Hero() {
  const [i, setI] = useState(0);
  const go = useCallback((n: number) => setI((n + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [i]);

  const cur = slides[i]!;

  return (
    <section
      id="home"
      className="relative mt-20 min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden bg-navy-deep"
    >
      {/* Background slide images with ken-burns & gradient overlay */}
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={idx !== i}
        >
          <img
            src={s.image}
            alt={`${s.titlePrefix} ${s.titleAccent}`}
            width={1920}
            height={1088}
            className={`h-full w-full object-cover brightness-[0.38] contrast-[1.05] ${
              idx === i ? "animate-ken-burns" : ""
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/75 backdrop-blur-[1px]" />
        </div>
      ))}

      {/* Subtle ambient lighting accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-96 w-[600px] rounded-full bg-amber-500/10 blur-3xl animate-pulse-glow" />

      {/* Centered Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 pt-12 pb-6 text-center sm:px-6 sm:pt-16 sm:pb-8 lg:px-8">
        <div key={i} className="flex flex-col items-center">
          {/* Eyebrow badge */}
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            {cur.eyebrow}
          </p>

          {/* 2-Tone Headline */}
          <h1 className="animate-fade-up mt-4 text-3xl font-extrabold tracking-tight text-white drop-shadow-md [animation-delay:120ms] sm:mt-5 sm:text-5xl lg:text-6xl xl:text-7xl">
            {cur.titlePrefix}{" "}
            <span className="text-amber-400 drop-shadow-[0_2px_16px_rgba(245,158,11,0.35)]">
              {cur.titleAccent}
            </span>
          </h1>

          {/* Crisp, simple quote/tagline */}
          <p className="animate-fade-up mt-4 max-w-2xl text-sm font-normal leading-relaxed text-white/85 drop-shadow-sm [animation-delay:240ms] sm:mt-5 sm:text-base lg:text-lg">
            {cur.quote}
          </p>

          {/* Action Buttons */}
          <div className="animate-fade-up mt-6 flex flex-wrap items-center justify-center gap-3.5 [animation-delay:360ms] sm:mt-7 sm:gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-xs font-bold text-slate-950 shadow-[0_4px_20px_rgba(245,158,11,0.35)] transition-all duration-300 hover:bg-amber-300 hover:shadow-[0_6px_25px_rgba(245,158,11,0.5)] hover:-translate-y-0.5 active:translate-y-0 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Get Free Quote
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-6 py-3 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              View Projects
              <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Centered Slide Dots under buttons */}
          <div className="mt-6 flex items-center justify-center gap-2 sm:mt-7">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => go(idx)}
                className={`transition-all duration-300 ${
                  idx === i
                    ? "h-1.5 w-7 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]"
                    : "h-2 w-2 rounded-full bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Docked Bottom Stats Bar: 5 Glassmorphism Metric Cards */}
      <div className="relative z-10 w-full px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3.5 lg:grid-cols-5 lg:gap-4">
          {heroStats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 p-3.5 sm:p-5 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:border-amber-400/40 hover:bg-slate-950/75 hover:-translate-y-0.5 ${
                idx === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span className="text-xl font-extrabold tracking-tight text-amber-400 sm:text-2xl lg:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
