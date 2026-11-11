import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | DEVI CONSULTANCY" },
      {
        name: "description",
        content:
          "Learn about DEVI CONSULTANCY, our 26+ years legacy, certified consulting engineers, vision, and mission.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mt-20 min-h-[calc(100vh-5rem)]">
      <About />
    </div>
  );
}
