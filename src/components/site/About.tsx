import { useEffect, useRef, useState } from "react";
import { Eye, Target, Phone, Mail, X, Briefcase, MessageCircle } from "lucide-react";
import { aboutData, consultants } from "./data";

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
  const [selectedConsultant, setSelectedConsultant] = useState<(typeof consultants)[number] | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedConsultant(null);
    };
    if (selectedConsultant) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedConsultant]);

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
      className="bg-[#f3f8f7] py-6 sm:py-8 lg:py-10 section-glow-ambient"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* Top Row: Narrative (Left) & Vision/Mission (Right) */}
        <div className="grid w-full items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Eyebrow, Heading & Story */}
          <div
            className={`transition-all duration-1000 ease-out transform ${
              inView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="flex flex-wrap items-baseline gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#cf9f8a]">
                About Us
              </span>
              <span className="text-[#cf9f8a]/70">·</span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0f2e38] tracking-tight leading-[1.15]">
                Building better lives since 2000
              </h2>
            </div>

            <div className="mt-3.5 space-y-2.5 text-sm sm:text-base leading-relaxed text-[#587078] text-justify">
              <p>
                Devi Consultancy is one of the leading construction and consulting firms in
                Karimnagar, recognized across Telangana for turning ideas into well-built,
                Vastu-compliant properties.
              </p>
              <p>
                From homes and hospitals to commercial complexes, convention halls and temple
                layouts, every project is delivered on time, within budget and to the highest quality
                standards.
              </p>
            </div>

            {/* Founded badge */}
            <div className="mt-4 inline-flex items-center gap-3 rounded-2xl bg-white/80 border border-[#d3e4e2] px-4 py-2 shadow-xs">
              <span className="font-display text-2xl text-[#166079] font-normal">
                <YearsCounter />
              </span>
              <span className="text-xs text-[#587078] font-medium leading-tight">
                Years of engineering excellence
                <br />
                Established in {aboutData.establishedYear}
              </span>
            </div>
          </div>

          {/* Right Column: Vision & Mission Glass Cards */}
          <div
            className={`flex flex-col gap-3 sm:gap-3.5 transition-all duration-1000 delay-200 ease-out transform ${
              inView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            {/* Vision */}
            <div className="glass-card !rounded-[20px] !border-l-[4px] !border-l-[#cf9f8a] p-4.5 sm:p-5 shadow-[0_12px_30px_rgba(12,63,80,0.07)] hover:shadow-[0_16px_36px_rgba(12,63,80,0.12)] transition-shadow">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#e2f0ee] text-[#166079]">
                  <Eye size={16} />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-[#0f2e38]">Our Vision</h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-[#587078] text-justify">
                {aboutData.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="glass-card !rounded-[20px] !border-l-[4px] !border-l-[#cf9f8a] p-4.5 sm:p-5 shadow-[0_12px_30px_rgba(12,63,80,0.07)] hover:shadow-[0_16px_36px_rgba(12,63,80,0.12)] transition-shadow">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#e2f0ee] text-[#166079]">
                  <Target size={16} />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-[#0f2e38]">Our Mission</h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-[#587078] text-justify">
                {aboutData.mission}
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div id="team" className="mt-5 sm:mt-6 lg:mt-7">
          <div className="mb-4 sm:mb-5 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 sm:gap-3">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#cf9f8a]">
                Leadership
              </span>
              <span className="text-[#cf9f8a]/70">·</span>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#0f2e38] tracking-tight">
                The experts behind every project
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#587078]">
              Decades of structural precision, government-approved valuations, and turnkey project delivery.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7">
            {consultants.map((c) => (
              <div
                key={c.name}
                onClick={() => setSelectedConsultant(c)}
                className="glass-card group flex flex-col justify-between p-6 sm:p-7 text-center rounded-[28px] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-[0_16px_36px_rgba(12,63,80,0.09)] hover:shadow-[0_24px_50px_rgba(12,63,80,0.16)]"
              >
                <div>
                  {/* Avatar with circular glowing ring */}
                  <div className="relative mx-auto mb-4 h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-4 border-white shadow-[0_0_0_3px_#cf9f8a,0_12px_24px_rgba(12,63,80,0.18)] transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  <h3 className="font-display text-xl text-[#0f2e38] transition-colors group-hover:text-[#166079]">
                    {c.name}
                  </h3>
                  <div className="mt-1 text-xs font-bold text-[#cf9f8a] tracking-wide uppercase">
                    {c.role}
                  </div>
                  <div className="mt-1 text-[11px] text-[#587078] font-medium leading-snug">
                    {c.qualifications}
                  </div>

                  {c.bio && c.bio.length > 0 && (
                    <p className="mt-3 text-xs text-[#587078] leading-relaxed line-clamp-3 text-justify">
                      {c.bio[0]}
                    </p>
                  )}

                  {/* Highlights list with rose diamond bullet */}
                  {c.portfolio && (
                    <ul className="mt-4 text-left text-xs text-[#587078] space-y-1.5 border-t border-[#d3e4e2]/80 pt-3">
                      {c.portfolio.slice(0, 4).map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-[#cf9f8a] font-bold">◇</span>
                          <span className="leading-snug">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-[#d3e4e2]/60 flex items-center justify-center">
                  <span className="text-xs font-semibold text-[#166079] group-hover:underline">
                    View Full Profile &amp; Contact →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Consultant Details Modal in Pearl & Petrol Theme */}
      {selectedConsultant && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0c3f50]/60 p-4 sm:p-6 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedConsultant(null)}
        >
          <div
            className="relative w-full max-w-5xl lg:max-w-6xl max-h-[94vh] overflow-y-auto rounded-[28px] sm:rounded-[32px] border border-white/80 bg-white p-5 sm:p-7 lg:p-8 shadow-[0_25px_60px_-15px_rgba(12,63,80,0.35)] isolate text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              aria-label="Close details"
              onClick={() => setSelectedConsultant(null)}
              className="absolute right-4 top-4 sm:right-5 sm:top-5 z-30 grid h-9 w-9 place-items-center rounded-full bg-[#e2f0ee] text-[#0c3f50] hover:bg-[#0c3f50] hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 pb-4 border-b border-[#d3e4e2]">
              <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-[0_0_0_3px_#cf9f8a,0_10px_20px_rgba(12,63,80,0.15)]">
                <img
                  src={selectedConsultant.image}
                  alt={selectedConsultant.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0 pr-8">
                <span className="inline-flex items-center rounded-full bg-[#e2f0ee] px-3 py-0.5 text-xs font-bold text-[#166079] uppercase tracking-wider">
                  {selectedConsultant.role}
                </span>
                <h3 className="mt-1.5 font-display text-2xl sm:text-3xl text-[#0f2e38]">
                  {selectedConsultant.name}
                </h3>
                <p className="mt-0.5 text-xs sm:text-sm font-semibold text-[#cf9f8a]">
                  {selectedConsultant.designation || selectedConsultant.role}
                </p>
                <p className="mt-0.5 text-xs font-medium text-[#587078] leading-relaxed">
                  {selectedConsultant.qualifications}
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="mt-5 grid gap-5 lg:grid-cols-12 items-start">
              <div className="lg:col-span-7 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-[2px] text-[#166079]">
                  Professional Background
                </h4>
                {selectedConsultant.bio?.map((paragraph, idx) => (
                  <p key={idx} className="text-xs sm:text-sm leading-relaxed text-[#587078] text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>

              {selectedConsultant.portfolio && (
                <div className="lg:col-span-5 rounded-2xl border border-[#d3e4e2] bg-[#f3f8f7] p-4 sm:p-5">
                  <h4 className="text-xs font-bold uppercase tracking-[2px] text-[#0c3f50] mb-2.5 flex items-center gap-2">
                    <Briefcase size={14} className="text-[#cf9f8a]" />
                    <span>{selectedConsultant.portfolioTitle || "Key Specializations:"}</span>
                  </h4>
                  <div className={`grid gap-2 text-xs text-[#0f2e38] ${selectedConsultant.portfolio.length > 5 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
                    {selectedConsultant.portfolio.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#cf9f8a] font-bold">◇</span>
                        <span className="leading-snug font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-5 pt-4 border-t border-[#d3e4e2] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={`tel:${selectedConsultant.phone.replace(/\s/g, "")}`}
                  className="btn-petrol !py-2 !px-4 text-xs"
                >
                  <Phone size={13} />
                  Call
                </a>
                <a
                  href={`mailto:${selectedConsultant.email}`}
                  className="btn-outline-petrol !py-2 !px-4 text-xs"
                >
                  <Mail size={13} />
                  Email
                </a>
                <a
                  href={`https://wa.me/919440133003`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#20b858] transition-colors"
                >
                  <MessageCircle size={13} />
                  WhatsApp
                </a>
              </div>
              <button
                onClick={() => setSelectedConsultant(null)}
                className="rounded-full border border-[#d3e4e2] px-5 py-2 text-xs font-semibold text-[#587078] hover:bg-[#e2f0ee] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
