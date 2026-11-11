import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { contact, contactSectionData } from "./data";

const field =
  "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-xs sm:text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-ring/30";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  const items = [
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: "Address", value: contact.address },
  ];

  return (
    <section id="contact" className="bg-secondary py-6 sm:py-8">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Side Heading Layout with reduced spacing */}
        <div className="text-left">
          <p className="eyebrow inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Contact Us
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {contactSectionData.title}
          </h2>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            {contactSectionData.subtitle}
          </p>
        </div>

        <div className="mt-4 sm:mt-5 grid gap-6 lg:grid-cols-5">
          <div className="space-y-3.5 lg:col-span-2">
            {items.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="group card-glow flex items-start gap-3.5 rounded-2xl border border-border bg-card p-4 shadow-sm cursor-pointer"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(0,163,224,0.4)] sm:h-11 sm:w-11">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="break-words text-xs font-semibold text-navy transition-colors group-hover:text-brand sm:text-sm">
                      {value}
                    </a>
                  ) : (
                    <p className="text-xs font-semibold text-navy sm:text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="card-glow rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
              <h4 className="text-xs font-bold text-navy sm:text-sm">Working Hours</h4>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Monday – Saturday: 9:00 AM – 7:00 PM<br />
                Sunday: By Appointment
              </p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="card-glow rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-xs font-semibold text-navy sm:text-sm">
                Name
                <input required name="name" className={field} placeholder="Your name" />
              </label>
              <label className="grid gap-1.5 text-xs font-semibold text-navy sm:text-sm">
                Email
                <input required type="email" name="email" className={field} placeholder="you@example.com" />
              </label>
              <label className="grid gap-1.5 text-xs font-semibold text-navy sm:col-span-2 sm:text-sm">
                Phone Number
                <input required type="tel" name="phone" className={field} placeholder="+91 98765 43210" />
              </label>
              <label className="grid gap-1.5 text-xs font-semibold text-navy sm:col-span-2 sm:text-sm">
                Project Category
                <select name="category" className={field}>
                  <option value="Residential Villas">Residential Villas</option>
                  <option value="Commercial Complexes">Commercial Complexes</option>
                  <option value="Institutional Buildings">Institutional Buildings</option>
                  <option value="Hospitals">Hospitals</option>
                  <option value="Conventional Halls">Conventional Halls</option>
                  <option value="Other">Other Services</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-xs font-semibold text-navy sm:col-span-2 sm:text-sm">
                Message
                <textarea
                  required
                  name="message"
                  rows={3}
                  className={field}
                  placeholder="Tell us about your project requirements..."
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-brand hover:shadow-[0_4px_16px_rgba(0,163,224,0.4)] hover:-translate-y-0.5 active:translate-y-0 sm:text-sm"
            >
              Send Message <Send size={15} />
            </button>
            {sent && (
              <p className="mt-3 flex items-center gap-2 text-xs font-medium text-brand sm:text-sm">
                <CheckCircle2 size={16} /> Thank you! We have received your inquiry and will contact you promptly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
