import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./data";

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
      className="relative mt-20 h-[calc(100vh-5rem)] min-h-[480px] max-h-[920px] overflow-hidden bg-navy-deep"
    >
      {/* Background slide images with ken-burns & gradient overlay */}
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"
            }`}
          aria-hidden={idx !== i}
        >
          <img
            src={s.image}
            alt={s.title}
            width={1920}
            height={1088}
            className={`h-full w-full object-cover ${idx === i ? "animate-ken-burns" : ""}`}
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
      ))}

      {/* Hero Content - Perfectly vertically centered above bottom controls */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 pb-16 sm:px-6 sm:pb-20 lg:pb-12 xl:pb-0 lg:px-8">
        {/* Subtle ambient lighting accent */}
        <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-brand/15 blur-3xl animate-pulse-glow" />

        <div key={i} className="relative z-10 max-w-2xl text-primary-foreground">
          <p className="eyebrow animate-fade-up inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand backdrop-blur-sm sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            {cur.eyebrow}
          </p>
          <h1 className="animate-fade-up mt-3 text-2xl font-extrabold tracking-tight text-white drop-shadow-sm [animation-delay:120ms] sm:mt-4 sm:text-4xl lg:text-5xl xl:text-6xl">
            {cur.title}
          </h1>
          <p className="animate-fade-up mt-3 max-w-xl text-sm font-normal text-white/90 drop-shadow-sm text-justify [animation-delay:240ms] sm:mt-4 sm:text-base lg:text-lg xl:text-xl">
            {cur.text}
          </p>
          <div className="animate-fade-up mt-5 flex flex-wrap items-center gap-3 [animation-delay:360ms] sm:mt-7 sm:gap-3.5">
            <a
              href="#services"
              className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-white shadow-[0_4px_20px_rgba(0,163,224,0.35)] transition-all duration-300 hover:shadow-[0_6px_25px_rgba(0,163,224,0.5)] hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 sm:px-6.5 sm:py-3.5 sm:text-base"
            >
              Our Services
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white hover:-translate-y-0.5 active:translate-y-0 sm:px-6.5 sm:py-3.5 sm:text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Controls: Slide Indicators (left) & Navigation Arrows (right) */}
      <div className="absolute inset-x-0 bottom-6 z-20 mx-auto flex max-w-7xl items-center justify-between px-4 pr-24 sm:bottom-8 sm:px-6 sm:pr-24 lg:bottom-10 lg:px-8 lg:pr-28">
        {/* Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => go(idx)}
              className={`h-1.5 rounded-full transition-all duration-400 ${idx === i
                  ? "w-8 bg-brand shadow-[0_0_12px_rgba(0,163,224,0.8)] sm:w-10"
                  : "w-4 bg-white/40 hover:bg-white/70 sm:w-5"
                }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Previous slide"
            onClick={() => go(i - 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:border-brand hover:bg-brand hover:shadow-[0_0_15px_rgba(0,163,224,0.4)] sm:h-11 sm:w-11"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Next slide"
            onClick={() => go(i + 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:border-brand hover:bg-brand hover:shadow-[0_0_15px_rgba(0,163,224,0.4)] sm:h-11 sm:w-11"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
