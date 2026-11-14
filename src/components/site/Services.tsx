import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  DraftingCompass,
  Building2,
  Layers,
  FileSpreadsheet,
  ClipboardCheck,
  HardHat,
  Compass,
  KeyRound,
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
  HardHat,
  Compass,
  KeyRound,
};

type ServiceCategory = "All" | "Design" | "Engineering" | "Valuation" | "Construction";

export function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("All");
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

  const getCategoryForService = (id: string): ServiceCategory => {
    if (id.includes("architectural") || id.includes("interior")) return "Design";
    if (id.includes("structural") || id.includes("planning") || id.includes("surveying")) return "Engineering";
    if (id.includes("estimation") || id.includes("valuation")) return "Valuation";
    if (id.includes("management") || id.includes("turnkey")) return "Construction";
    return "Engineering";
  };

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => getCategoryForService(s.id) === activeCategory);

  return (
    <section id="services" className="bg-[linear-gradient(180deg,#e2f0ee,#f3f8f7)] py-8 sm:py-10 lg:py-12 section-glow-ambient">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <p className="eyebrow inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[3px] text-[#cf9f8a]">
            Our Services
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-[#0f2e38] tracking-tight">
            Expertise for every stage
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#587078]">
            Vastu-compliant architecture, robust structural engineering, precision bank valuations, and turnkey execution.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8">
          {(["All", "Design", "Engineering", "Valuation", "Construction"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-b from-[#1a6c88] to-[#0c3f50] text-white shadow-[0_8px_20px_rgba(12,63,80,0.25)] border-transparent"
                  : "bg-white text-[#587078] border border-[#d3e4e2] hover:bg-[#e2f0ee] hover:text-[#0c3f50]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredServices.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] || Building2;
            const isHighlighted = highlightedId === s.id;

            return (
              <article
                key={s.title}
                id={s.id}
                onClick={() => setSelectedService(s)}
                className={`glass-card group relative flex flex-col justify-between p-5 sm:p-6 rounded-[26px] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-[0_16px_36px_rgba(12,63,80,0.08)] hover:shadow-[0_24px_50px_rgba(12,63,80,0.16)] scroll-mt-24 ${
                  isHighlighted
                    ? "border-[#166079] ring-4 ring-[#bfe3e0] shadow-[0_0_35px_rgba(191,227,224,0.6)]"
                    : "hover:border-[#166079]/40"
                }`}
              >
                <div>
                  {/* Top Photo Frame with Icon Overlay */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-slate-950 shadow-inner">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c3f50]/70 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[1px]">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0c3f50] shadow-md">
                        <Maximize2 size={12} /> View Details
                      </span>
                    </div>

                    {/* Rose Dot Accent */}
                    <div className="absolute top-3 left-3 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#ecd0c3] to-[#cf9f8a] shadow-xs" />

                    {/* Icon Badge */}
                    <div className="absolute bottom-2.5 right-2.5 grid h-9 w-9 place-items-center rounded-xl bg-white/90 text-[#166079] shadow-sm">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Title & Points */}
                  <div className="pt-4">
                    <h3 className="font-display text-lg sm:text-xl text-[#0f2e38] transition-colors group-hover:text-[#166079]">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#587078] leading-relaxed line-clamp-2 text-justify">
                      {s.text}
                    </p>

                    <ul className="mt-3.5 space-y-1.5 text-xs text-[#587078]">
                      {s.points?.slice(0, 3).map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#cf9f8a] font-bold">◇</span>
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#d3e4e2]/70 flex items-center justify-between text-xs font-semibold text-[#166079]">
                  <span>Explore full specifications</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Signature Service Banner (.ft from reference design) */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div className="relative rounded-[32px] sm:rounded-[36px] bg-gradient-to-br from-[#1a6c88] to-[#0c3f50] p-6 sm:p-10 lg:p-12 text-[#effaf8] shadow-[0_30px_60px_rgba(12,63,80,0.3)] overflow-hidden isolate">
            {/* Ambient glass highlight */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center relative z-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[3px] text-[#ecd0c3]">
                  Signature Service
                </p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  Interiors that feel <em className="not-italic text-[#ecd0c3]">effortlessly calm</em>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cfe8e5] leading-relaxed text-justify max-w-xl">
                  Our interior designers work alongside our structural engineers, so every space is
                  Vastu-compliant, practical and beautifully finished.
                </p>
                <div className="mt-6">
                  <Link to="/contact" className="btn-rose">
                    Plan My Interiors
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <ul className="space-y-3.5 border-t lg:border-t-0 lg:border-l border-[#ecd0c3]/25 pt-6 lg:pt-0 lg:pl-8 text-sm sm:text-base text-[#effaf8]">
                <li className="flex items-start gap-3">
                  <span className="text-[#ecd0c3] font-bold">◇</span>
                  <span>Bespoke space planning and functional zoning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ecd0c3] font-bold">◇</span>
                  <span>Designer false ceilings and ambient lighting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ecd0c3] font-bold">◇</span>
                  <span>Contemporary facade elevation and cladding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ecd0c3] font-bold">◇</span>
                  <span>Premium material and hardware specifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-[#0c3f50]/70 p-4 sm:p-6 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[32px] border border-white/80 bg-white shadow-[0_25px_60px_-15px_rgba(12,63,80,0.35)] isolate"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close details"
              onClick={() => setSelectedService(null)}
              className="absolute right-4 top-4 z-30 grid h-9 w-9 place-items-center rounded-full bg-[#e2f0ee] text-[#0c3f50] hover:bg-[#0c3f50] hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <X size={18} />
            </button>

            <div className="grid lg:grid-cols-12 items-stretch">
              <div className="relative min-h-[220px] lg:col-span-5 bg-slate-950 overflow-hidden lg:rounded-l-[32px]">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c3f50]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-flex items-center rounded-full bg-[#166079] px-3 py-1 text-xs font-bold text-white shadow-xs">
                    DEVI CONSULTANCY
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[2px] text-[#166079]">
                    Technical Overview
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#587078] leading-relaxed text-justify">
                    {selectedService.detailedText || selectedService.text}
                  </p>

                  {selectedService.deliverables && (
                    <div className="mt-4 rounded-2xl bg-[#f3f8f7] border border-[#d3e4e2] p-4">
                      <h4 className="text-xs font-bold uppercase tracking-[2px] text-[#0c3f50] mb-2">
                        Deliverables &amp; Scope:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#0f2e38]">
                        {selectedService.deliverables.map((d, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#cf9f8a] font-bold">◇</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#d3e4e2] flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="rounded-full border border-[#d3e4e2] px-5 py-2 text-xs font-semibold text-[#587078] hover:bg-[#e2f0ee]"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    onClick={() => setSelectedService(null)}
                    className="btn-petrol !py-2 !px-5 text-xs"
                  >
                    Book Consultation
                    <ArrowRight size={14} />
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
