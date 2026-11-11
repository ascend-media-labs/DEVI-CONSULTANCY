import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
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
            className={`h-full w-full object-cover brightness-[0.48] contrast-[1.05] ${
              idx === i ? "animate-ken-burns" : ""
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/45 to-navy-deep/60 backdrop-blur-[0.5px]" />
        </div>
      ))}

      {/* Subtle ambient lighting accent matching logo cyan brand - reduced blue opacity */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-96 w-[650px] rounded-full bg-[#00a3e0]/5 blur-3xl animate-pulse-glow" />

      {/* Centered Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 pt-12 pb-6 text-center sm:px-6 sm:pt-16 sm:pb-8 lg:px-8">
        <div key={i} className="flex flex-col items-center">
          {/* Eyebrow badge */}
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-black/50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200 backdrop-blur-md sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#00a3e0] animate-pulse shadow-[0_0_10px_rgba(0,163,224,0.9)]" />
            {cur.eyebrow}
          </p>

          {/* 2-Tone Headline */}
          <h1 className="animate-fade-up mt-4 text-3xl font-extrabold tracking-tight text-white drop-shadow-md [animation-delay:120ms] sm:mt-5 sm:text-5xl lg:text-6xl xl:text-7xl">
            {cur.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-[#00a3e0] to-sky-300 bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(0,163,224,0.5)]">
              {cur.titleAccent}
            </span>
          </h1>

          {/* Crisp, simple quote/tagline */}
          <p className="animate-fade-up mt-4 max-w-2xl text-sm font-normal leading-relaxed text-slate-200/90 drop-shadow-sm [animation-delay:240ms] sm:mt-5 sm:text-base lg:text-lg">
            {cur.quote}
          </p>

          {/* Action Buttons */}
          <div className="animate-fade-up mt-6 flex flex-wrap items-center justify-center gap-3.5 [animation-delay:360ms] sm:mt-7 sm:gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00a3e0] to-[#0284c7] px-6 py-3 text-xs font-bold text-white shadow-[0_4px_22px_rgba(0,163,224,0.45)] transition-all duration-300 hover:from-cyan-400 hover:to-[#00a3e0] hover:shadow-[0_6px_28px_rgba(0,163,224,0.65)] hover:-translate-y-0.5 active:translate-y-0 sm:px-7 sm:py-3.5 sm:text-sm cursor-pointer"
            >
              Get Free Quote
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/60 px-6 py-3 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-950/40 hover:-translate-y-0.5 active:translate-y-0 sm:px-7 sm:py-3.5 sm:text-sm cursor-pointer"
            >
              View Projects
              <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
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
                    ? "h-1.5 w-8 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,163,224,0.9)]"
                    : "h-2 w-2 rounded-full bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Docked Bottom Stats Bar: 5 Glassmorphism Metric Cards */}
      <div className="relative z-10 w-full px-4 pb-6 sm:px-6 md:px-8 lg:px-10 xl:px-12 sm:pb-8">
        <div className="mx-auto grid w-full max-w-[1800px] grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3.5 lg:grid-cols-5 lg:gap-4 xl:gap-5">
          {heroStats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center rounded-2xl border border-cyan-500/20 bg-slate-950/65 p-3.5 sm:p-5 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-950/80 hover:shadow-[0_8px_30px_rgba(0,163,224,0.2)] hover:-translate-y-0.5 ${
                idx === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span className="text-xl font-extrabold tracking-tight text-cyan-400 drop-shadow-[0_2px_12px_rgba(0,163,224,0.35)] sm:text-2xl lg:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-300 sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
