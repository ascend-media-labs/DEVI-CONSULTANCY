import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  DraftingCompass,
  Building2,
  Layers,
  FileSpreadsheet,
  ClipboardCheck,
  Check,
  X,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { services } from "./data";

const iconMap = {
  DraftingCompass,
  Building2,
  Layers,
  FileSpreadsheet,
  ClipboardCheck,
};

export function Services() {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        if (hash.startsWith("service-")) {
          setHighlightedId(hash);
          clearTimeout(timer);
          timer = setTimeout(() => setHighlightedId(null), 3500);
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  return (
    <section id="services" className="bg-secondary py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Side Heading Layout */}
        <div className="text-left">
          <p className="eyebrow inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Our Services
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl">
            Comprehensive Construction Solutions
          </h2>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm lg:whitespace-nowrap">
            End-to-end expertise delivering precision, safety, and modern design standards for all project phases.
          </p>
        </div>

        {/* Services Grid with Image-2 Card Model */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] || Building2;
            const isHighlighted = highlightedId === s.id;

            return (
              <article
                key={s.title}
                id={s.id}
                onClick={() => setSelectedService(s)}
                className={`group card-glow relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-card p-5 sm:p-6 shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 scroll-mt-24 sm:scroll-mt-28 ${
                  isHighlighted
                    ? "border-brand ring-4 ring-brand/40 shadow-[0_0_35px_rgba(0,163,224,0.45)] scale-[1.02]"
                    : "border-border hover:border-brand/50 hover:shadow-lg"
                }`}
              >
                <div>
                  {/* Top Image Frame with Click Cue */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-inner">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                    {/* View Details Hint on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg border border-white/20">
                        <Maximize2 size={13} /> View Details
                      </span>
                    </div>

                    {/* Floating Icon Badge on Bottom-Left */}
                    <div className="absolute -bottom-1 left-4 grid h-12 w-12 place-items-center rounded-2xl bg-navy text-brand shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(0,163,224,0.45)]">
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Title & Key Checklist Features (Exact Image 2 Model) */}
                  <div className="pt-6">
                    <h3 className="font-display text-lg font-bold text-navy transition-colors duration-200 group-hover:text-brand sm:text-xl">
                      {s.title}
                    </h3>

                    {/* Checklist Points matching Image 2 reference */}
                    <ul className="mt-3.5 space-y-2.5">
                      {s.points?.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 leading-snug"
                        >
                          <Check size={16} className="shrink-0 text-brand mt-0.5 stroke-[2.5]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Subtle Click Footer Cue */}
                <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-brand">
                  <span>Explore full specifications</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Details Modal when clicked on image/card */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-navy-deep/85 p-3 sm:p-6 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-5xl xl:max-w-6xl overflow-hidden rounded-3xl border border-border/80 bg-card shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] isolate"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button top-right */}
            <button
              aria-label="Close details"
              onClick={() => setSelectedService(null)}
              className="absolute right-4 top-4 z-30 grid h-9 w-9 place-items-center rounded-full bg-secondary text-navy transition-all duration-200 hover:bg-navy hover:text-white hover:scale-105 cursor-pointer shadow-md"
            >
              <X size={18} />
            </button>

            {/* 2-Column Wide Grid for Zero-Scroll & Perfect Card Fit */}
            <div className="grid lg:grid-cols-12 items-stretch overflow-hidden rounded-3xl">
              {/* Left Column (5 cols): High-res Image & Hero Overlay */}
              <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[480px] lg:col-span-5 bg-slate-950 overflow-hidden lg:rounded-l-3xl">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="h-full w-full object-cover brightness-[0.88] lg:rounded-l-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy-deep/70" />

                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/90 px-3 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-sm">
                    DEVI CONSULTANCY • SERVICE DETAILS
                  </span>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white drop-shadow-md">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Right Column (7 cols): Full Details, Deliverables & Actions */}
              <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-7 lg:p-8 bg-card lg:rounded-r-3xl overflow-hidden">
                <div className="space-y-4 pr-6 sm:pr-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand">
                      Technical Overview
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-700 text-justify">
                      {selectedService.detailedText || selectedService.text}
                    </p>
                  </div>

                  {/* Deliverables Checklist in 2 columns */}
                  {selectedService.deliverables && (
                    <div className="rounded-2xl border border-brand/20 bg-brand/5 p-4 sm:p-4.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-navy">
                        Key Deliverables &amp; Engineering Scope
                      </h4>
                      <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
                        {selectedService.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-800 leading-snug">
                            <Check size={15} className="shrink-0 text-brand mt-0.5 stroke-[2.5]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer Buttons */}
                <div className="mt-5 pt-4 border-t border-border flex flex-wrap items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="rounded-full border border-border px-5 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-secondary cursor-pointer transition-colors"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    onClick={() => setSelectedService(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-brand/90 hover:shadow-lg transition-all cursor-pointer"
                  >
                    Book Consultation for this Service
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
