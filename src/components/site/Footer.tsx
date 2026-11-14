import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { contact, navLinks, services } from "./data";
import { Logo } from "./Logo";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    btnClass: "bg-[#1877F2] hover:shadow-[0_0_18px_rgba(24,119,242,0.7)]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    btnClass:
      "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:shadow-[0_0_18px_rgba(225,48,108,0.7)]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${contact.whatsapp}`,
    btnClass: "bg-[#25D366] hover:shadow-[0_0_18px_rgba(37,211,102,0.7)]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5.5 w-5.5 fill-white">
        <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.95.556 3.774 1.517 5.322L2 22l4.81-1.474a10.007 10.007 0 0 0 5.221 1.463c5.536 0 10.031-4.495 10.031-10.031C22.062 6.495 17.567 2 12.031 2zm0 18.283c-1.637 0-3.172-.452-4.493-1.236l-.322-.191-3.332 1.022 1.042-3.25-.21-.334A8.24 8.24 0 0 1 3.75 12.03c0-4.566 3.715-8.281 8.281-8.281 4.566 0 8.281 3.715 8.281 8.281 0 4.566-3.715 8.283-8.281 8.283zm4.539-6.208c-.249-.124-1.472-.726-1.7-.809-.228-.083-.394-.124-.56.124-.166.249-.643.809-.788.975-.145.166-.29.187-.539.062-.249-.124-1.052-.388-2.003-1.237-.74-.66-1.24-1.475-1.385-1.724-.145-.249-.015-.383.109-.507.112-.111.249-.29.373-.435.124-.145.166-.249.249-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.349-.768-1.847-.202-.485-.407-.419-.56-.427l-.477-.008c-.166 0-.436.062-.664.311-.228.249-.871.851-.871 2.075s.892 2.407 1.017 2.573c.124.166 1.755 2.68 4.252 3.758.594.257 1.058.41 1.42.525.597.19 1.14.163 1.57.099.479-.072 1.472-.602 1.68-1.183.207-.581.207-1.079.145-1.183-.062-.104-.228-.166-.477-.29z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-[#041218] text-[#9fbcc2] border-t border-[#1f4650]">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 py-12 sm:py-16 sm:grid-cols-2 lg:grid-cols-4 sm:px-8 lg:px-10">
        {/* Brand Column */}
        <div className="space-y-4">
          <Link to="/" className="inline-flex items-center gap-2">
            <Logo className="h-12 w-12 rounded-full border border-white/30" />
            <b className="font-display text-xl font-normal tracking-[2px] text-[#ecd0c3]">
              DEVI CONSULTANCY
            </b>
          </Link>
          <p className="text-xs sm:text-sm leading-relaxed text-[#9fbcc2]/90 text-justify">
            Architects &amp; Engineers, Builders &amp; Valuers · Serving clients across Telangana since 2000.
          </p>
          <div className="pt-2">
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#ecd0c3] mb-3">
              Official Social Channels
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`grid h-10 w-10 place-items-center rounded-full shadow-md transition-all duration-300 hover:scale-110 ${s.btnClass}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-base text-[#ecd0c3] tracking-wider uppercase">
            Quick Navigation
          </h4>
          <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <Link
                  to={l.path}
                  className="transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-base text-[#ecd0c3] tracking-wider uppercase">
            Core Services
          </h4>
          <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.id}>
                <Link
                  to="/services"
                  className="transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="font-display text-base text-[#ecd0c3] tracking-wider uppercase">
            Contact
          </h4>
          <p className="text-xs sm:text-sm text-[#9fbcc2] leading-relaxed">
            {contact.address}
          </p>
          <p className="text-xs sm:text-sm text-[#effaf8]">
            Phone: +91 {contact.phone}
          </p>
          <p className="text-xs sm:text-sm text-[#effaf8] break-all">
            Email: {contact.email}
          </p>
        </div>
      </div>

      {/* Bottom Bar matching reference footer */}
      <div className="border-t border-[#1f4650] py-6 text-center text-xs text-[#9fbcc2]/80">
        <div className="mx-auto max-w-[1240px] px-5">
          <p className="leading-relaxed">
            © 2026 DEVI CONSULTANCY. All rights reserved. Vastu Compliant Architecture &amp; Engineering.
          </p>
        </div>
      </div>
    </footer>
  );
}
