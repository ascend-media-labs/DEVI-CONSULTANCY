import { useState } from "react";
import { X } from "lucide-react";
import { categories, projects } from "./data";

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);

  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const sel = open !== null ? projects[open] : undefined;

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
      {sel && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-navy-deep/90 p-4"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-primary-foreground text-navy shadow-lg"
          >
            <X size={20} />
          </button>
          <figure className="max-w-5xl 2xl:max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={sel.image}
              alt={sel.title}
              className="max-h-[75vh] w-full rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-primary-foreground">
              <span className="mr-2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-accent-foreground">
                {sel.category}
              </span>
              <span className="text-lg font-bold">{sel.title}</span>
              <p className="mt-1 text-sm text-primary-foreground/75">{sel.description}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
