import { useEffect, useRef, useState } from "react";
import { Eye, Target } from "lucide-react";
import { aboutData, images } from "./data";

function YearsCounter() {
  const target = new Date().getFullYear() - aboutData.establishedYear;
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1500, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{n}+</span>;
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="flex items-center bg-background py-6 sm:py-8 lg:py-10 overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 xl:gap-12 lg:px-8">
        {/* Left Column: Image with Experience Badge - Slides from Left to Right */}
        <div
          className={`relative mx-auto w-full max-w-lg lg:max-w-none transition-all duration-1000 ease-out transform ${
            inView ? "translate-x-0 opacity-100" : "-translate-x-12 sm:-translate-x-20 opacity-0 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden rounded-3xl border border-border/80 shadow-[0_16px_40px_rgba(11,28,56,0.12)] transition-transform duration-500 hover:scale-[1.01]">
            <img
              src={images.about}
              alt="DEVI CONSULTANCY professional engineers on construction site"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[380px] lg:h-[400px] xl:h-[480px]"
            />
          </div>
          <div className="card-glow-dark absolute -bottom-4 right-3 rounded-2xl border border-brand/30 bg-navy/95 p-3.5 text-primary-foreground shadow-[0_12px_32px_rgba(11,28,56,0.3)] backdrop-blur-md cursor-pointer sm:-bottom-5 sm:right-4 sm:p-4 xl:p-5">
            <p className="font-display text-2xl font-extrabold text-brand drop-shadow-sm sm:text-3xl xl:text-4xl">
              <YearsCounter />
            </p>
            <p className="mt-0.5 text-[11px] font-medium text-primary-foreground/80 sm:text-xs xl:text-sm">
              Years of experience
              <br />
              Since {aboutData.establishedYear}
            </p>
          </div>
        </div>

        {/* Right Column: Narrative, Vision & Mission - Slides from Left to Right */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow & Heading */}
          <div
            className={`transition-all duration-1000 delay-150 ease-out transform ${
              inView ? "translate-x-0 opacity-100" : "-translate-x-10 sm:-translate-x-16 opacity-0"
            }`}
          >
            <p className="eyebrow inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              About Us
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-3xl xl:text-4xl">
              Excellence in Construction &amp; Consultancy
            </h2>
          </div>

          {/* Description text */}
          <p
            className={`mt-2.5 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm xl:text-base text-justify transition-all duration-1000 delay-300 ease-out transform ${
              inView ? "translate-x-0 opacity-100" : "-translate-x-10 sm:-translate-x-16 opacity-0"
            }`}
          >
            {aboutData.aboutUs}
          </p>

          <div className="mt-4 grid gap-2.5 sm:mt-5 sm:gap-3.5 xl:gap-4">
            {/* 3. VISION */}
            <div
              className={`transition-all duration-1000 delay-450 ease-out transform ${
                inView ? "translate-x-0 opacity-100" : "-translate-x-10 sm:-translate-x-16 opacity-0"
              }`}
            >
              <div className="group card-glow flex items-start gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-sm cursor-pointer sm:gap-3.5 sm:p-4 xl:p-5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_0_15px_rgba(0,163,224,0.4)] sm:h-10 sm:w-10 xl:h-11 xl:w-11">
                  <Eye size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-navy transition-colors group-hover:text-brand sm:text-base xl:text-lg">Our Vision</h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground text-justify sm:mt-1 sm:text-sm">
                    {aboutData.vision}
                  </p>
                </div>
              </div>
            </div>

            {/* 4. MISSION */}
            <div
              className={`transition-all duration-1000 delay-600 ease-out transform ${
                inView ? "translate-x-0 opacity-100" : "-translate-x-10 sm:-translate-x-16 opacity-0"
              }`}
            >
              <div className="group card-glow flex items-start gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-sm cursor-pointer sm:gap-3.5 sm:p-4 xl:p-5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_0_15px_rgba(0,163,224,0.4)] sm:h-10 sm:w-10 xl:h-11 xl:w-11">
                  <Target size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-navy transition-colors group-hover:text-brand sm:text-base xl:text-lg">Our Mission</h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground text-justify sm:mt-1 sm:text-sm">
                    {aboutData.mission}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
