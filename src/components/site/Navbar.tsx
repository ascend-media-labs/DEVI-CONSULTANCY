import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navLinks } from "./data";
import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // On home page, track which section is currently in view to move the active glowing bubble
      if (location.pathname === "/") {
        // If near the top, home is active
        if (window.scrollY < 200) {
          setActiveSection("home");
          return;
        }

        // If reached near bottom of page, contact is active
        const isBottom =
          window.innerHeight + Math.round(window.scrollY) >=
          document.documentElement.scrollHeight - 100;
        if (isBottom) {
          setActiveSection("contact");
          return;
        }

        let current = "home";
        for (const l of navLinks) {
          const el = document.getElementById(l.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            // Header is 80px high, 200px offset gives responsive trigger
            if (rect.top <= 200 && rect.bottom > 120) {
              current = l.id;
            }
          }
        }
        setActiveSection(current);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  // When route changes, close mobile menu and scroll to top smoothly
  useEffect(() => {
    setOpen(false);
    if (location.pathname === "/") {
      setActiveSection("home");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const isLinkActive = (l: (typeof navLinks)[number]) => {
    if (location.pathname === "/") {
      return activeSection === l.id;
    }
    return location.pathname === l.path;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08191f]/95 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md border-b border-[#1f4650]"
          : "bg-[#08191f]/90 backdrop-blur-md border-b border-[#1f4650]/80"
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-[1800px] items-center justify-between gap-1 sm:gap-2 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-2 sm:gap-2.5 xl:gap-3 cursor-pointer"
        >
          <div className="transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-md">
            <Logo className="h-10 w-10 sm:h-12 sm:w-12 xl:h-13 xl:w-13 rounded-full border border-white/60 shadow-xs" />
          </div>
          <span className="font-display text-base font-normal tracking-[2px] text-[#eaf6f4] uppercase whitespace-nowrap transition-colors duration-200 group-hover:text-[#bfe3e0] sm:text-lg lg:text-lg xl:text-xl">
            Devi <i className="not-italic text-[#cf9f8a]">·</i> Consultancy
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navLinks.map((l) => {
            const isActive = isLinkActive(l);
            return (
              <li key={l.id} className="shrink-0">
                <Link
                  to={l.path}
                  className={`inline-flex items-center rounded-full px-2.5 py-1.5 text-xs lg:text-[13px] xl:px-4 xl:py-2 xl:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white/10 text-white font-semibold border border-[#bfe3e0]/50 shadow-[0_0_15px_rgba(191,227,224,0.25)]"
                      : "text-[#9fbcc2] hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}

          {/* Call to action button */}
          <li className="ml-2 shrink-0 lg:ml-3 xl:ml-4">
            <Link
              to="/contact"
              className="btn-petrol whitespace-nowrap !py-2.5 !px-5 text-xs xl:text-sm"
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-[#eaf6f4] bg-[#10303a] border border-[#1f4650] hover:bg-[#16414b] lg:hidden cursor-pointer"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`grid overflow-hidden border-t border-[#1f4650] bg-[#08191f]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-transparent opacity-0"
        }`}
      >
        <ul className="min-h-0 px-4 py-3 sm:px-6">
          {navLinks.map((l) => {
            const isActive = isLinkActive(l);
            return (
              <li key={l.id}>
                <Link
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 my-1 text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white/10 text-white font-semibold border border-[#bfe3e0]/50"
                      : "text-[#9fbcc2] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-3 pb-4">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-petrol block w-full text-center cursor-pointer"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
