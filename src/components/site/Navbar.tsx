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
          ? "bg-background/90 shadow-[0_4px_24px_rgba(11,28,56,0.08)] backdrop-blur-md border-b border-border/70"
          : "bg-background/95 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-1 sm:gap-2 px-3 sm:px-6 lg:px-6 xl:px-8">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-2 sm:gap-2.5 xl:gap-3 cursor-pointer"
        >
          <div className="transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-md">
            <Logo className="h-10 w-10 sm:h-12 sm:w-12 xl:h-14 xl:w-14" />
          </div>
          <span className="font-display text-sm font-bold tracking-tight text-navy whitespace-nowrap transition-colors duration-200 group-hover:text-brand sm:text-base lg:text-base xl:text-xl">
            DEVI CONSULTANCY
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1.5">
          {navLinks.map((l) => {
            const isActive = isLinkActive(l);
            return (
              <li key={l.id} className="shrink-0">
                <Link
                  to={l.path}
                  className={`inline-flex items-center rounded-full px-2 py-1 text-[11px] lg:px-2.5 lg:py-1.5 lg:text-xs xl:px-3.5 xl:py-1.5 xl:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-brand/15 text-brand border border-brand/35 shadow-[0_0_16px_rgba(0,163,224,0.35)] backdrop-blur-sm"
                      : "text-navy hover:text-brand hover:bg-secondary/80 border border-transparent"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}

          {/* Call to action button */}
          <li className="ml-1 shrink-0 lg:ml-2 xl:ml-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-navy px-3 py-1.5 text-[11px] lg:px-3.5 lg:py-1.5 lg:text-xs xl:px-5.5 xl:py-2 xl:text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-brand hover:shadow-[0_4px_16px_rgba(0,163,224,0.4)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-navy hover:bg-secondary lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`grid overflow-hidden border-t border-border bg-background transition-all duration-300 lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-transparent opacity-0"
        }`}
      >
        <ul className="min-h-0 px-4 py-2 sm:px-6">
          {navLinks.map((l) => {
            const isActive = isLinkActive(l);
            return (
              <li key={l.id}>
                <Link
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-3.5 py-2.5 my-1 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-brand/15 text-brand border border-brand/35 shadow-xs"
                      : "text-navy hover:bg-secondary"
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
              className="block w-full text-center rounded-full bg-navy py-3 text-sm font-semibold text-primary-foreground hover:bg-brand cursor-pointer"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
