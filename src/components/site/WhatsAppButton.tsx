import { contact } from "./data";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Real Phone Call Floating Action Button */}
      <a
        href={`tel:${contact.phone.replace(/\s/g, "")}`}
        aria-label="Call DEVI CONSULTANCY"
        className="group relative grid h-12 w-12 place-items-center rounded-full bg-navy text-white shadow-[0_6px_20px_rgba(11,28,56,0.35)] transition-all duration-300 hover:scale-110 hover:bg-brand hover:shadow-[0_8px_25px_rgba(0,163,224,0.5)] active:scale-95 sm:h-13 sm:w-13"
      >
        {/* Pulsating radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-brand/40 animate-ping opacity-60" />

        <svg
          viewBox="0 0 24 24"
          className="relative z-10 h-5 w-5 fill-white transition-transform duration-300 animate-phone-ring group-hover:scale-120"
        >
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.57 3.9a1 1 0 00-1-1H4a1 1 0 00-1 1C3 13.06 10.93 21 20.01 21a1 1 0 001-1v-3.62a1 1 0 00-1-1z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="pointer-events-none absolute right-full mr-2.5 whitespace-nowrap rounded-lg bg-navy px-2.5 py-1 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
          Call Us
        </span>
      </a>

      {/* Real Official WhatsApp Floating Action Button */}
      <a
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative grid h-13 w-13 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_6px_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_32px_rgba(37,211,102,0.65)] active:scale-95 sm:h-14 sm:w-14"
      >
        {/* Subtle pulsating radar ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-60" />

        {/* Authentic WhatsApp SVG Logo */}
        <svg
          viewBox="0 0 24 24"
          className="relative z-10 h-7 w-7 fill-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="pointer-events-none absolute right-full mr-2.5 whitespace-nowrap rounded-lg bg-[#25D366] px-2.5 py-1 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
