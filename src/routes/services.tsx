import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | DEVI CONSULTANCY" },
      {
        name: "description",
        content:
          "Explore DEVI CONSULTANCY's comprehensive construction services: architectural modeling, structural design, interior & exterior designs, bank estimation, pre-construction planning, construction management, surveying, and turnkey services.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="mt-20 min-h-[calc(100vh-5rem)]">
      <Services />
    </div>
  );
}

