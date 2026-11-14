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
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-96 w-[650px] rounded-full bg-[#bfe3e0]/12 blur-3xl animate-pulse-glow" />

        {/* Centered Hero Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 pt-12 pb-6 text-center sm:px-6 sm:pt-16 sm:pb-8 lg:px-8">
          <div key={i} className="flex flex-col items-center">
            {/* Eyebrow badge */}
            <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#bfe3e0]/30 bg-[#0c3f50]/75 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#bfe3e0] backdrop-blur-md sm:text-xs shadow-md">
              <span className="h-2 w-2 rounded-full bg-[#cf9f8a] animate-pulse shadow-[0_0_10px_rgba(207,159,138,0.9)]" />
              {cur.eyebrow}
            </p>

            {/* 2-Tone Headline */}
            <h1 className="animate-fade-up mt-4 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-white drop-shadow-md [animation-delay:120ms]">
              {cur.titlePrefix}{" "}
              <span className="bg-gradient-to-r from-white via-[#bfe3e0] to-[#ecd0c3] bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(191,227,224,0.4)]">
                {cur.titleAccent}
              </span>
            </h1>

            {/* Crisp, simple quote/tagline */}
            <p className="animate-fade-up mt-4 max-w-2xl text-sm font-normal leading-relaxed text-[#effaf8]/90 drop-shadow-sm [animation-delay:240ms] sm:mt-5 sm:text-base lg:text-lg">
              {cur.quote}
            </p>

            {/* Action Buttons */}
            <div className="animate-fade-up mt-6 flex flex-wrap items-center justify-center gap-3.5 [animation-delay:360ms] sm:mt-7 sm:gap-4">
              <Link
                to="/contact"
                className="btn-petrol sm:text-sm shadow-[0_6px_24px_rgba(12,63,80,0.5)] !py-3 !px-7 cursor-pointer"
              >
                Get Free Quote
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#bfe3e0]/60 hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0 sm:px-7 sm:py-3.5 sm:text-sm cursor-pointer shadow-sm"
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
                  className={`transition-all duration-300 cursor-pointer ${
                    idx === i
                      ? "h-1.5 w-8 rounded-full bg-[#ecd0c3] shadow-[0_0_12px_rgba(236,208,195,0.9)]"
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
                className={`flex flex-col items-center justify-center rounded-2xl border border-[#bfe3e0]/25 bg-[#0c3f50]/80 p-3.5 sm:p-5 text-center shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:border-[#bfe3e0]/55 hover:bg-[#0c3f50]/95 hover:shadow-[0_8px_30px_rgba(191,227,224,0.22)] hover:-translate-y-0.5 ${
                  idx === 4 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-[#ecd0c3] drop-shadow-[0_2px_12px_rgba(236,208,195,0.35)]">
                  {stat.value}
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#effaf8]/85 sm:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-white border-y border-[#d3e4e2] py-4 shadow-xs">
        <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-4 px-5 text-xs sm:text-sm font-semibold text-[#587078]">
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
