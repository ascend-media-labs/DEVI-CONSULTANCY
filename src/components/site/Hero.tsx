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
    <div id="home" className="relative mt-20">
      <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden bg-[#0c3f50]">
        {/* Background slide images with ken-burns & Petrol gradient overlay */}
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
              className={`h-full w-full object-cover brightness-[0.45] contrast-[1.08] ${
                idx === i ? "animate-ken-burns" : ""
              }`}
            />
            {/* Deep Petrol overlay with subtle aqua and rose tones */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c3f50] via-[#0c3f50]/55 to-[#0c3f50]/70 backdrop-blur-[0.5px]" />
          </div>
        ))}

        {/* Ambient lighting accent with soft aqua glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-80 w-[600px] rounded-full bg-[#bfe3e0]/12 blur-3xl animate-pulse-glow" />

        {/* Centered Hero Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-4 py-2 sm:py-4 text-center sm:px-6 lg:px-8">
          <div key={i} className="flex flex-col items-center">
            {/* Eyebrow badge */}
            <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#bfe3e0]/30 bg-[#0c3f50]/80 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#bfe3e0] backdrop-blur-md sm:text-xs shadow-md">
              <span className="h-2 w-2 rounded-full bg-[#cf9f8a] animate-pulse shadow-[0_0_10px_rgba(207,159,138,0.9)]" />
              {cur.eyebrow}
            </p>

            {/* 2-Tone Headline */}
            <h1 className="animate-fade-up mt-2 sm:mt-3 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white drop-shadow-md [animation-delay:120ms] leading-[1.15]">
              {cur.titlePrefix}{" "}
              <span className="bg-gradient-to-r from-white via-[#bfe3e0] to-[#ecd0c3] bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(191,227,224,0.4)]">
                {cur.titleAccent}
              </span>
            </h1>

            {/* Crisp, simple quote/tagline */}
            <p className="animate-fade-up mt-2 sm:mt-2.5 max-w-2xl text-xs sm:text-sm lg:text-base font-normal leading-relaxed text-[#effaf8]/90 drop-shadow-sm [animation-delay:240ms]">
              {cur.quote}
            </p>

            {/* Action Buttons */}
            <div className="animate-fade-up mt-3.5 sm:mt-4.5 flex flex-wrap items-center justify-center gap-3 [animation-delay:360ms] sm:gap-4">
              <Link
                to="/contact"
                className="btn-petrol !py-2.5 !px-6 text-xs sm:text-sm shadow-[0_6px_24px_rgba(12,63,80,0.5)] cursor-pointer"
              >
                Get Free Quote
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#bfe3e0]/60 hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0 sm:px-6 sm:text-sm cursor-pointer shadow-sm"
              >
                View Projects
                <ChevronRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Centered Slide Dots under buttons */}
            <div className="mt-3 sm:mt-3.5 flex items-center justify-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => go(idx)}
                  className={`transition-all duration-300 cursor-pointer ${
                    idx === i
                      ? "h-1.5 w-7 rounded-full bg-[#ecd0c3] shadow-[0_0_12px_rgba(236,208,195,0.9)]"
                      : "h-1.5 w-1.5 rounded-full bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Docked Bottom Stats Bar: 5 Glassmorphism Metric Cards */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6 pt-2">
          <div className="mx-auto grid w-full max-w-5xl xl:max-w-6xl grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5 lg:gap-3 xl:gap-4">
            {heroStats.map((stat, idx) => (
              <div
                key={idx}
                className={`card-glow-dark flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border border-[#bfe3e0]/30 bg-[#0c3f50]/85 p-2 sm:p-2.5 lg:p-3 text-center shadow-[0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-md cursor-pointer ${
                  idx === 4 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <span className="font-display text-lg sm:text-2xl lg:text-3xl font-normal text-[#ecd0c3] drop-shadow-[0_2px_12px_rgba(236,208,195,0.35)] leading-tight">
                  {stat.value}
                </span>
                <span className="mt-0.5 text-[9px] sm:text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-[#effaf8]/85 whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-[#0d2730] border-y border-[#1f4650] py-3.5 shadow-xs">
        <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-4 px-5 text-xs sm:text-sm font-semibold text-[#9fbcc2]">
          <span className="inline-flex items-center gap-2">
            <i className="not-italic text-[#cf9f8a]">◇</i>
            Founded 2000
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="not-italic text-[#cf9f8a]">◇</i>
            Karimnagar, Telangana
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="not-italic text-[#cf9f8a]">◇</i>
            IBBI Registered Valuer
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="not-italic text-[#cf9f8a]">◇</i>
            Turnkey Delivery
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="not-italic text-[#cf9f8a]">◇</i>
            100% Structural Precision
          </span>
        </div>
      </div>
    </div>
  );
}
