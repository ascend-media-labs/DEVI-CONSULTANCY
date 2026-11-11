import { Mail, Phone, MapPin } from "lucide-react";
import { contact, navLinks, services } from "./data";
import { Logo } from "./Logo";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-[#1877F2]">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    hoverClass: "hover:border-[#1877F2]/60 hover:bg-[#1877F2]/15 hover:shadow-[0_0_15px_rgba(24,119,242,0.4)]",
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5">
        <defs>
          <radialGradient id="footer-ig-grad" cx="0.3" cy="1.05" r="1.1">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <path
          fill="url(#footer-ig-grad)"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
        />
      </svg>
    ),
    hoverClass: "hover:border-[#E1306C]/60 hover:bg-[#E1306C]/15 hover:shadow-[0_0_15px_rgba(225,48,108,0.4)]",
  },
  {
    name: "X (Twitter)",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    hoverClass: "hover:border-white/60 hover:bg-white/15 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-[#0A66C2]">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    hoverClass: "hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/15 hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]",
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5">
        <path
          fill="#FF0000"
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
        />
        <path fill="#FFFFFF" d="m9.545 15.568 6.273-3.568-6.273-3.568z" />
      </svg>
    ),
    hoverClass: "hover:border-[#FF0000]/60 hover:bg-[#FF0000]/15 hover:shadow-[0_0_15px_rgba(255,0,0,0.4)]",
  },
];

export function Footer() {
  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "#home");
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${targetId}`);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  };

  return (
    <footer className="bg-navy-deep text-primary-foreground/75">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo className="h-20 w-20 transition-transform duration-300 hover:scale-105" />
          <p className="mt-4 text-xs leading-relaxed text-primary-foreground/75 sm:text-sm text-justify">
            DEVI CONSULTANCY — Leaders in Quality Construction &amp; Infrastructure, serving clients since 2000.
          </p>
          {/* Real Official Social Brand Icons + X */}
          <div className="mt-5 flex items-center gap-2.5">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className={`grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/15 bg-primary-foreground/5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95 ${s.hoverClass}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-primary-foreground sm:text-base">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => navigateTo(e, l.id)}
                  className="transition-colors hover:text-brand"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-primary-foreground sm:text-base">Our Services</h4>
          <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
            {services.map((s) => (
              <li key={s.title}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => navigateTo(e, s.id)}
                  className="transition-colors hover:text-brand"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-primary-foreground sm:text-base">Contact Info</h4>
          <ul className="mt-4 space-y-3.5 text-xs sm:text-sm">
            <li className="flex gap-2.5">
              <Phone size={17} className="shrink-0 text-brand" />
              <span>{contact.phone}</span>
            </li>
            <li className="flex gap-2.5">
              <Mail size={17} className="shrink-0 text-brand" />
              <span className="break-all">{contact.email}</span>
            </li>
            <li className="flex gap-2.5">
              <MapPin size={17} className="shrink-0 text-brand" />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} DEVI CONSULTANCY. All rights reserved.
      </div>
    </footer>
  );
}
