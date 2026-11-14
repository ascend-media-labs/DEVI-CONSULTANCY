import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { categories, projects } from "./data";

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);

  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const sel = open !== null ? projects[open] : undefined;

  // Lock body scroll and handle keyboard navigation when modal is open
  useEffect(() => {
    if (open === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") {
        setOpen((curr) => (curr !== null ? (curr > 0 ? curr - 1 : projects.length - 1) : null));
      }
      if (e.key === "ArrowRight") {
        setOpen((curr) => (curr !== null ? (curr < projects.length - 1 ? curr + 1 : 0) : null));
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <section id="projects" className="bg-[#08191f] text-[#eaf6f4] py-5 sm:py-6 lg:py-7 section-glow-ambient scroll-mt-20">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* Side Heading Header */}
        <div className="mb-4 sm:mb-5 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 sm:gap-3">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#cf9f8a]">
              Portfolio
            </span>
            <span className="text-[#cf9f8a]/70">·</span>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#eaf6f4] tracking-tight">
              Spaces we’re proud of
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9fbcc2] max-w-xl">
            Explore our architectural and structural engineering work across major sectors in Telangana.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-2.5 mb-4 sm:mb-5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === c
                  ? "bg-gradient-to-b from-[#1a6c88] to-[#0c3f50] text-white shadow-[0_8px_20px_rgba(0,0,0,0.4)] border-transparent"
                  : "bg-[#10303a] text-[#9fbcc2] border border-[#1f4650] hover:bg-[#16414b] hover:text-[#eaf6f4]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => {
            const idx = projects.indexOf(p);
            return (
              <button
                key={p.title}
                onClick={() => setOpen(idx)}
                className="card-glow group relative aspect-[4/3] overflow-hidden rounded-[26px] text-left border border-white/80 shadow-[0_16px_36px_rgba(12,63,80,0.08)] cursor-pointer isolate"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c3f50]/95 via-[#0c3f50]/35 to-transparent transition-opacity group-hover:from-[#0c3f50]" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="rounded-full bg-[#166079]/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white shadow-xs">
                    {p.category}
                  </span>
                  <h3 className="mt-2.5 font-display text-xl sm:text-2xl font-normal text-white transition-colors duration-200 group-hover:text-[#ecd0c3]">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/80 line-clamp-2 text-justify">
                    {p.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal in Pearl & Petrol Theme with curved edges */}
      {sel && open !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0c3f50]/80 backdrop-blur-md p-4 sm:p-6 md:p-8 animate-fade-in"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl xl:max-w-5xl overflow-hidden rounded-[32px] border border-white/30 bg-[#0c3f50] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)] isolate"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:bg-[#166079] hover:scale-105 shadow-lg cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Previous Button */}
            <button
              type="button"
              onClick={() =>
                setOpen((curr) => (curr !== null ? (curr > 0 ? curr - 1 : projects.length - 1) : null))
              }
              aria-label="Previous project"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:bg-[#166079] hover:scale-110 shadow-lg cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={() =>
                setOpen((curr) => (curr !== null ? (curr < projects.length - 1 ? curr + 1 : 0) : null))
              }
              aria-label="Next project"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:bg-[#166079] hover:scale-110 shadow-lg cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>

            {/* Image Frame with curved corners enforced by parent rounded-[32px] overflow-hidden */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[66vh] w-full overflow-hidden bg-slate-950">
              <img
                src={sel.image}
                alt={sel.title}
                className="h-full w-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c3f50] via-[#0c3f50]/20 to-transparent pointer-events-none" />
            </div>

            {/* Bottom Caption Bar */}
            <div className="p-5 sm:p-7 bg-[#0c3f50] border-t border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#cf9f8a] px-3.5 py-1 text-xs font-bold text-[#3a1f14] shadow-sm uppercase tracking-wider">
                    {sel.category}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-normal text-white tracking-tight">
                    {sel.title}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-[#ecd0c3]/70 tracking-wider">
                  {open + 1} / {projects.length}
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed text-justify sm:text-left">
                {sel.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
