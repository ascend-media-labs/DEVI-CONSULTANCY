import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials | DEVI CONSULTANCY" },
      {
        name: "description",
        content:
          "Read verified reviews and testimonials from our valued clients, developers, and property owners.",
      },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div className="mt-20 min-h-[calc(100vh-5rem)]">
      <Testimonials />
    </div>
  );
}

