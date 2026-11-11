import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | DEVI CONSULTANCY" },
      {
        name: "description",
        content:
          "Get in touch with DEVI CONSULTANCY for architectural design, structural engineering, valuation, and turnkey construction consultation.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mt-20 min-h-[calc(100vh-5rem)]">
      <Contact />
    </div>
  );
}
