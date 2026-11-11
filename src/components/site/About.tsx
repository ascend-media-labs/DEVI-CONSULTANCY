import { useEffect, useRef, useState } from "react";
import { Eye, Target, Phone, Mail } from "lucide-react";
import { aboutData, images, consultants } from "./data";

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

interface AboutProps {
  isDedicatedPage?: boolean;
}

export function About({ isDedicatedPage = false }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Dedicated /about page layout:
  // Top row: Construction Image (2nd image) & Text + Vision/Mission (1st image) are EQUAL in height.
  // Bottom row: 3 Consultant Cards (3rd image) placed underneath them across full width.
  if (isDedicatedPage) {
    return (
      <section
        ref={sectionRef}
        id="about"
        className="bg-background py-8 sm:py-12 lg:py-14 overflow-hidden"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Row: 2nd Image (Left) & 1st Image (Right) - Equal in Height */}
          <div className="grid w-full items-stretch gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-12">
            {/* Left Column: Image with Experience Badge */}
            <div
              className={`relative mx-auto w-full flex flex-col justify-center transition-all duration-1000 ease-out transform ${
                inView ? "translate-x-0 opacity-100" : "-translate-x-12 sm:-translate-x-20 opacity-0 pointer-events-none"
              }`}
            >
              <div className="relative h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[440px] overflow-hidden rounded-3xl border border-border/80 shadow-[0_16px_40px_rgba(11,28,56,0.12)]">
                <img
                  src={images.about}
                  alt="DEVI CONSULTANCY professional engineers on construction site"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="card-glow-dark absolute -bottom-3 right-3 sm:-bottom-4 sm:right-4 rounded-2xl border border-brand/30 bg-navy/95 p-3.5 text-primary-foreground shadow-[0_12px_32px_rgba(11,28,56,0.3)] backdrop-blur-md cursor-pointer sm:p-4 xl:p-5">
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

            {/* Right Column: Narrative, Vision & Mission (Equal Height to Image) */}
            <div className="flex flex-col justify-center h-full">
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
                className={`mt-3 text-xs leading-relaxed text-muted-foreground sm:mt-4 sm:text-sm xl:text-base text-justify transition-all duration-1000 delay-300 ease-out transform ${
                  inView ? "translate-x-0 opacity-100" : "-translate-x-10 sm:-translate-x-16 opacity-0"
                }`}
              >
                {aboutData.aboutUs}
              </p>

              {/* 3. VISION & 4. MISSION in 2 columns */}
              <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
                {/* VISION */}
                <div
                  className={`transition-all duration-1000 delay-450 ease-out transform ${
                    inView ? "translate-x-0 opacity-100" : "-translate-x-10 sm:-translate-x-16 opacity-0"
                  }`}
                >
                  <div className="group card-glow h-full flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm cursor-pointer">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_0_15px_rgba(0,163,224,0.4)]">
                      <Eye size={20} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-navy transition-colors group-hover:text-brand sm:text-base">Our Vision</h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground text-justify">
                        {aboutData.vision}
                      </p>
                    </div>
                  </div>
                </div>

                {/* MISSION */}
                <div
                  className={`transition-all duration-1000 delay-600 ease-out transform ${
                    inView ? "translate-x-0 opacity-100" : "-translate-x-10 sm:-translate-x-16 opacity-0"
                  }`}
                >
                  <div className="group card-glow h-full flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm cursor-pointer">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_0_15px_rgba(0,163,224,0.4)]">
                      <Target size={20} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-navy transition-colors group-hover:text-brand sm:text-base">Our Mission</h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground text-justify">
                        {aboutData.mission}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: 3 Consultant Cards underneath them ("vaati kinda raavali") */}
          <div className="mt-12 sm:mt-16 lg:mt-18">
            <div className="text-center mb-6 sm:mb-8">
              <p className="eyebrow inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Leadership &amp; Key Consultants
              </p>
              <h3 className="mt-1.5 text-xl font-bold tracking-tight text-navy sm:text-2xl lg:text-3xl">
                Certified Structural &amp; Consulting Team
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
              {consultants.map((c, idx) => (
                <div
                  key={c.name}
                  className={`transition-all duration-1000 ${
                    idx === 0 ? "delay-650" : idx === 1 ? "delay-750" : "delay-850"
                  } ease-out transform ${
                    inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="group card-glow h-full flex flex-col justify-between items-center rounded-3xl border border-brand/25 bg-gradient-to-b from-card via-card to-brand/5 p-6 text-center shadow-md hover:shadow-xl hover:border-brand/50 transition-all duration-300 cursor-pointer">
                    <div className="flex flex-col items-center w-full">
                      {/* Photo */}
                      <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-brand/40 shadow-md">
                        <img
                          src={c.image}
                          alt={`${c.name} - ${c.role}`}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Details */}
                      <h4 className="font-display mt-3.5 text-base sm:text-lg font-bold text-navy transition-colors group-hover:text-brand">
                        {c.name}
                      </h4>
                      <p className="mt-1 text-xs font-bold text-brand uppercase tracking-wider leading-snug">
                        {c.role}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed font-medium text-muted-foreground">
                        {c.qualifications}
                      </p>
                    </div>

                    {/* Contact links */}
                    <div className="mt-4 flex items-center justify-center gap-3 border-t border-border/70 pt-3.5 text-xs w-full">
                      <a
                        href={`tel:${c.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-1.5 font-semibold text-navy transition-colors hover:text-brand"
                      >
                        <Phone size={13} className="text-brand shrink-0" />
                        <span>Call</span>
                      </a>
                      <span className="text-border">•</span>
                      <a
                        href={`mailto:${c.email}`}
                        className="inline-flex items-center gap-1.5 font-semibold text-navy transition-colors hover:text-brand"
                      >
                        <Mail size={13} className="text-brand shrink-0" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default Home Page Layout (Unchanged)
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

          <div className="mt-4 grid gap-3 sm:mt-5 sm:gap-3.5">
            {/* 3. VISION & 4. MISSION in 2 columns */}
            <div className="grid gap-3 sm:grid-cols-2">
              {/* VISION */}
              <div
                className={`transition-all duration-1000 delay-450 ease-out transform ${
                  inView ? "translate-x-0 opacity-100" : "-translate-x-10 sm:-translate-x-16 opacity-0"
                }`}
              >
                <div className="group card-glow h-full flex items-start gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-sm cursor-pointer sm:p-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_0_15px_rgba(0,163,224,0.4)] sm:h-10 sm:w-10">
                    <Eye size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-navy transition-colors group-hover:text-brand sm:text-base">Our Vision</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground text-justify">
                      {aboutData.vision}
                    </p>
                  </div>
                </div>
              </div>

              {/* MISSION */}
              <div
                className={`transition-all duration-1000 delay-600 ease-out transform ${
                  inView ? "translate-x-0 opacity-100" : "-translate-x-10 sm:-translate-x-16 opacity-0"
                }`}
              >
                <div className="group card-glow h-full flex items-start gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-sm cursor-pointer sm:p-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_0_15px_rgba(0,163,224,0.4)] sm:h-10 sm:w-10">
                    <Target size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-navy transition-colors group-hover:text-brand sm:text-base">Our Mission</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground text-justify">
                      {aboutData.mission}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. CONSULTING & STRUCTURAL ENGINEERING TEAM */}
            <div className="grid gap-2.5 sm:grid-cols-3 sm:gap-3">
              {consultants.map((c, idx) => (
                <div
                  key={c.name}
                  className={`transition-all duration-1000 ${
                    idx === 0 ? "delay-650" : idx === 1 ? "delay-750" : "delay-850"
                  } ease-out transform ${
                    inView ? "translate-x-0 opacity-100" : "-translate-x-10 sm:-translate-x-16 opacity-0"
                  }`}
                >
                  <div className="group card-glow h-full flex flex-col justify-between items-center rounded-2xl border border-brand/25 bg-gradient-to-b from-card via-card to-brand/5 p-3 text-center shadow-sm cursor-pointer sm:p-3.5">
                    <div className="flex flex-col items-center w-full">
                      {/* Photo */}
                      <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-xl border-2 border-brand/40 shadow-sm sm:h-20 sm:w-20">
                        <img
                          src={c.image}
                          alt={`${c.name} - ${c.role}`}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Details */}
                      <h3 className="font-display mt-2 text-xs font-bold text-navy transition-colors group-hover:text-brand sm:text-sm">
                        {c.name}
                      </h3>
                      <p className="mt-0.5 text-[10px] font-bold text-brand uppercase tracking-wider leading-tight sm:text-[11px]">
                        {c.role}
                      </p>
                      <p className="mt-1 text-[9px] leading-tight font-semibold text-muted-foreground sm:text-[10px]">
                        {c.qualifications}
                      </p>
                    </div>

                    {/* Contact links */}
                    <div className="mt-2.5 flex items-center justify-center gap-2 border-t border-border/60 pt-2 text-[10px] w-full">
                      <a
                        href={`tel:${c.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-1 font-semibold text-navy transition-colors hover:text-brand"
                      >
                        <Phone size={11} className="text-brand shrink-0" />
                        <span>Call</span>
                      </a>
                      <span className="text-border">•</span>
                      <a
                        href={`mailto:${c.email}`}
                        className="inline-flex items-center gap-1 font-semibold text-navy transition-colors hover:text-brand"
                      >
                        <Mail size={11} className="text-brand shrink-0" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
