import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <div id="home" className="relative mt-20 overflow-hidden">
      {/* Hero Section with Pearl & Petrol Background and Ambient Glow */}
      <header className="relative pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 overflow-hidden bg-[radial-gradient(circle_at_80%_20%,#bfe3e0,transparent_45%),radial-gradient(circle_at_5%_90%,#ecd0c3,transparent_40%),#f3f8f7]">
        {/* Soft glowing radial accents */}
        <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-[#bfe3e0]/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[#ecd0c3]/35 blur-3xl" />

        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Left Content Column */}
            <div className="animate-fade-up text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 tracking-[4px] uppercase text-xs text-[#166079] font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#166079]" />
                Architects · Engineers · Builders · Valuers
              </div>

              {/* Main Headline */}
              <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-[#0f2e38] leading-[1.12] tracking-tight">
                Clean design. Honest building.{" "}
                <em className="not-italic text-[#cf9f8a]">Lasting trust.</em>
              </h1>

              {/* Subtitle */}
              <p className="mt-5 text-base sm:text-lg text-[#587078] leading-relaxed max-w-xl text-justify">
                Vastu-compliant architecture, refined interiors and turnkey construction, delivered
                with 26 years of experience across Telangana.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-petrol">
                  Book a Consultation
                  <ArrowRight size={17} />
                </Link>
                <Link to="/projects" className="btn-outline-petrol">
                  View Our Work
                  <ChevronRight size={17} />
                </Link>
              </div>
            </div>

            {/* Right Column: Layered Glassmorphic Floating Cards */}
            <div className="relative h-[360px] sm:h-[420px] lg:h-[440px] w-full">
              {/* Main Petrol Card (.v1) */}
              <div className="absolute inset-0 right-[16%] bottom-[18%] rounded-[28px] bg-gradient-to-br from-[#1a6c88] to-[#0c3f50] p-6 text-white text-center flex flex-col items-center justify-center shadow-[0_24px_50px_rgba(12,63,80,0.22)] border border-white/20 overflow-hidden isolate">
                {/* Glass reflection */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-transparent" />
                <b className="font-display font-normal text-7xl sm:text-8xl leading-none bg-gradient-to-br from-white to-[#ecd0c3] bg-clip-text text-transparent block">
                  26
                </b>
                <span className="mt-2 tracking-[4px] uppercase text-[11px] sm:text-xs text-[#effaf8] font-medium">
                  Years of experience
                </span>
              </div>

              {/* Floating Card 2 (.v2) */}
              <div className="absolute right-0 top-6 sm:top-10 w-[48%] sm:w-[44%] rounded-[24px] glass-float p-4 sm:p-5 text-center shadow-[0_20px_45px_rgba(12,63,80,0.14)] animate-float">
                <b className="font-display font-normal text-2xl sm:text-3xl text-[#166079] block">
                  2500+
                </b>
                <span className="text-xs text-[#587078] font-medium mt-0.5 block">
                  Projects completed
                </span>
              </div>

              {/* Floating Card 3 (.v3) */}
              <div
                className="absolute right-[4%] bottom-0 w-[68%] sm:w-[62%] rounded-[24px] glass-float p-4 sm:p-5 text-center shadow-[0_24px_50px_rgba(12,63,80,0.16)] grid grid-cols-2 gap-3"
                style={{ animationDelay: "1.5s" }}
              >
                <div>
                  <b className="font-display font-normal text-xl sm:text-2xl text-[#166079] block">
                    15L+
                  </b>
                  <span className="text-[11px] sm:text-xs text-[#587078] font-medium block">
                    Sq ft executed
                  </span>
                </div>
                <div className="border-l border-[#d3e4e2] pl-2">
                  <b className="font-display font-normal text-xl sm:text-2xl text-[#166079] block">
                    100%
                  </b>
                  <span className="text-[11px] sm:text-xs text-[#587078] font-medium block">
                    Vastu compliant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Strip */}
      <div className="bg-white border-y border-[#d3e4e2] py-4 shadow-xs">
        <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-4 px-5 text-xs sm:text-sm font-semibold text-[#587078]">
          <span className="inline-flex items-center gap-2">
            <i className="not-italic text-[#cf9f8a]">◇</i>
            Founded 2000
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="not-italic text-[#cf9f8a]">◇</i>
            Karimnagar, Telangana
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="not-italic text-[#cf9f8a]">◇</i>
            IBBI Registered Valuer
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="not-italic text-[#cf9f8a]">◇</i>
            Turnkey Delivery
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="not-italic text-[#cf9f8a]">◇</i>
            100% Structural Precision
          </span>
        </div>
      </div>
    </div>
  );
}
