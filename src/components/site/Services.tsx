import { DraftingCompass, Building2, Layers, FileSpreadsheet, ClipboardCheck } from "lucide-react";
import { services } from "./data";

const iconMap = {
  DraftingCompass,
  Building2,
  Layers,
  FileSpreadsheet,
  ClipboardCheck,
};

export function Services() {
  return (
    <section id="services" className="bg-secondary py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Side Heading Layout with single-line subtitle directly underneath */}
        <div className="text-left">
          <p className="eyebrow inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Our Services
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Comprehensive Construction Solutions
          </h2>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm lg:whitespace-nowrap">
            End-to-end expertise delivering precision, safety, and modern design standards for all project phases.
          </p>
        </div>

        {/* Compact Services Grid */}
        <div className="mt-4 sm:mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] || Building2;
            return (
              <article
                key={s.title}
                className="group card-glow overflow-hidden rounded-2xl border border-border bg-card shadow-sm cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden sm:h-44">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute -bottom-5 left-5 grid h-11 w-11 place-items-center rounded-xl bg-navy text-brand shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(0,163,224,0.45)] sm:h-12 sm:w-12">
                    <Icon size={22} />
                  </div>
                </div>
                <div className="p-5 pt-8">
                  <h3 className="text-lg font-bold text-navy transition-colors duration-200 group-hover:text-brand">{s.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm text-justify">
                    {s.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
