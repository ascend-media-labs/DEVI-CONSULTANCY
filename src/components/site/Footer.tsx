import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { contact, navLinks, services } from "./data";
import { Logo } from "./Logo";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 drop-shadow-sm">
        <circle cx="12" cy="12" r="12" fill="#1877F2" />
        <path
          fill="#FFFFFF"
          d="M15.117 12.012l.379-2.47H13.12V7.938c0-.677.332-1.336 1.394-1.336h1.079V4.498s-.979-.167-1.915-.167c-1.954 0-3.23 1.185-3.23 3.327v1.884H8.281v2.47h2.167v5.972a12.07 12.07 0 0 0 2.672 0v-5.972h2z"
        />
      </svg>
    ),
    hoverClass: "hover:border-[#1877F2]/80 hover:bg-[#1877F2]/20 hover:shadow-[0_0_18px_rgba(24,119,242,0.5)]",
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 drop-shadow-sm">
        <defs>
          <radialGradient id="footer-ig-grad" cx="30%" cy="105%" r="105%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6.5" fill="url(#footer-ig-grad)" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
        <rect width="14" height="14" x="5" y="5" rx="3.8" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
        <circle cx="16.2" cy="7.8" r="1.1" fill="#FFFFFF" />
      </svg>
    ),
    hoverClass: "hover:border-[#E1306C]/80 hover:bg-[#E1306C]/20 hover:shadow-[0_0_18px_rgba(225,48,108,0.5)]",
  },
  {
    name: "X (Twitter)",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white drop-shadow-sm">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    hoverClass: "hover:border-white/80 hover:bg-white/20 hover:shadow-[0_0_18px_rgba(255,255,255,0.4)]",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 drop-shadow-sm">
        <rect width="24" height="24" rx="5" fill="#0A66C2" />
        <path
          fill="#FFFFFF"
          d="M7.8 9.3H5.3v7.4h2.5V9.3zm-1.25-3.7a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zm11.95 6.7c0-2.3-1.2-3.4-2.8-3.4-1.3 0-1.9.7-2.2 1.2V9.3h-2.5v7.4h2.5v-4.1c0-.2.02-.4.07-.6.17-.4.56-.8 1.23-.8.87 0 1.25.7 1.25 1.7v3.8h2.5v-4.2z"
        />
      </svg>
    ),
    hoverClass: "hover:border-[#0A66C2]/80 hover:bg-[#0A66C2]/20 hover:shadow-[0_0_18px_rgba(10,102,194,0.5)]",
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 drop-shadow-sm">
        <path
          fill="#FF0000"
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
        />
        <path fill="#FFFFFF" d="m9.545 15.568 6.273-3.568-6.273-3.568z" />
      </svg>
    ),
    hoverClass: "hover:border-[#FF0000]/80 hover:bg-[#FF0000]/20 hover:shadow-[0_0_18px_rgba(255,0,0,0.5)]",
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground/75">
      <div className="mx-auto grid w-full max-w-[1800px] gap-8 px-4 py-8 sm:py-10 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-10 xl:px-12">
        <div>
          <Link to="/" className="inline-block">
            <Logo className="h-20 w-20 transition-transform duration-300 hover:scale-105" />
          </Link>
          <p className="mt-4 text-xs leading-relaxed text-primary-foreground/75 sm:text-sm text-justify">
            DEVI CONSULTANCY — Leaders in Quality Construction &amp; Infrastructure, serving clients since 2000.
          </p>
          {/* Real Official Social Brand Icons + X */}
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className={`grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95 ${s.hoverClass}`}
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
                <Link
                  to={l.path}
                  className="transition-colors hover:text-brand"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-primary-foreground sm:text-base">Our Services</h4>
          <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
            {services.map((s) => (
              <li key={s.title}>
                <Link
                  to="/services"
                  hash={s.id}
                  className="transition-colors hover:text-brand"
                >
                  {s.title}
                </Link>
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
