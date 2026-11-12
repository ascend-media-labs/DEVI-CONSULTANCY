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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-background py-8 sm:py-12 lg:py-14 overflow-hidden"
    >
        <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          {/* Top Row: 2nd Image (Left) & 1st Image (Right) - Exactly Equal in Height */}
          <div className="grid w-full items-stretch gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-12">
            {/* Left Column: Image with Experience Badge */}
            <div
              className={`relative mx-auto w-full flex flex-col transition-all duration-1000 ease-out transform ${
                inView ? "translate-x-0 opacity-100" : "-translate-x-12 sm:-translate-x-20 opacity-0 pointer-events-none"
              }`}
            >
              <div className="relative h-full min-h-[260px] sm:min-h-[320px] lg:min-h-0 w-full overflow-hidden rounded-3xl border border-border/80 shadow-[0_16px_40px_rgba(11,28,56,0.12)]">
                <img
                  src={images.about}
                  alt="DEVI CONSULTANCY professional engineers on construction site"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* 26+ Experience Badge neatly docked inside bottom-right corner */}
                <div className="card-glow-dark absolute bottom-3 right-3 sm:bottom-4 sm:right-4 rounded-2xl border border-brand/30 bg-navy/95 p-3 text-primary-foreground shadow-[0_12px_32px_rgba(11,28,56,0.3)] backdrop-blur-md cursor-pointer sm:p-3.5 xl:p-4">
                  <p className="font-display text-2xl font-extrabold text-brand drop-shadow-sm sm:text-3xl">
                    <YearsCounter />
                  </p>
                  <p className="mt-0.5 text-[10px] font-medium text-primary-foreground/80 sm:text-xs">
                    Years of experience
                    <br />
                    Since {aboutData.establishedYear}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative, Vision & Mission (Equal Height to Image) */}
            <div className="flex flex-col justify-between h-full">
              <div>
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
              </div>

              {/* 3. VISION & 4. MISSION in column-wise line by line */}
              <div className="mt-4 sm:mt-5 flex flex-col gap-3 sm:gap-3.5">
                {/* VISION */}
                <div
                  className={`transition-all duration-1000 delay-450 ease-out transform ${
                    inView ? "translate-x-0 opacity-100" : "-translate-x-10 sm:-translate-x-16 opacity-0"
                  }`}
                >
                  <div className="group card-glow flex items-start gap-3.5 rounded-2xl border border-border bg-card p-3.5 sm:p-4 shadow-sm cursor-pointer">
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
                  <div className="group card-glow flex items-start gap-3.5 rounded-2xl border border-border bg-card p-3.5 sm:p-4 shadow-sm cursor-pointer">
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
