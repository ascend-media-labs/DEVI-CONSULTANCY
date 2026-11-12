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
    <section id="projects" className="bg-background py-6 sm:py-8">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Side Heading Layout with reduced spacing */}
        <div className="text-left">
          <p className="eyebrow inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Project Categories
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Our Diverse Project Portfolio
          </h2>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            Explore our architectural and structural engineering work across major sectors.
          </p>
        </div>

        {/* Filter buttons - Left-aligned with compact gaps */}
        <div className="mt-3.5 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 sm:px-4 sm:py-2 sm:text-sm ${
                filter === c
                  ? "bg-navy text-primary-foreground shadow-[0_2px_12px_rgba(11,28,56,0.25)]"
                  : "bg-secondary text-navy hover:bg-brand hover:text-white hover:shadow-sm"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Project cards with compact margin */}
        <div className="mt-4 sm:mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => {
            const idx = projects.indexOf(p);
            return (
              <button
                key={p.title}
                onClick={() => setOpen(idx)}
                className="group card-glow animate-fade-up relative aspect-[4/3] overflow-hidden rounded-2xl text-left border border-border/80 shadow-sm cursor-pointer"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/35 to-transparent transition-opacity group-hover:from-navy-deep" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="rounded-full bg-brand/90 backdrop-blur-sm px-2.5 py-0.5 text-xs font-bold text-accent-foreground shadow-sm">
                    {p.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-primary-foreground sm:text-xl transition-colors duration-200 group-hover:text-cyan-200">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-primary-foreground/85 line-clamp-2 text-justify">
                    {p.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {sel && open !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/85 backdrop-blur-md p-4 sm:p-6 md:p-8 animate-fade-in"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl xl:max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-navy-deep shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-navy-deep/80 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:bg-brand hover:scale-105 shadow-lg cursor-pointer"
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
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-navy-deep/80 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:bg-brand hover:scale-110 shadow-lg cursor-pointer"
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
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-navy-deep/80 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:bg-brand hover:scale-110 shadow-lg cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>

            {/* Image Frame with curved corners enforced by parent rounded-3xl overflow-hidden */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[66vh] w-full overflow-hidden bg-slate-950">
              <img
                src={sel.image}
                alt={sel.title}
                className="h-full w-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent pointer-events-none" />
            </div>

            {/* Bottom Caption Bar with seamless matching rounded corners */}
            <div className="p-5 sm:p-6 bg-navy-deep border-t border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-white shadow-sm uppercase tracking-wider">
                    {sel.category}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                    {sel.title}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-white/50 tracking-wider">
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
