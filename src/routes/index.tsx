import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DEVI CONSULTANCY | Leaders in Quality Construction & Infrastructure" },
      {
        name: "description",
        content:
          "DEVI CONSULTANCY — Leaders in Quality Construction & Infrastructure since 2000. Professional construction consultancy, architectural design, and infrastructure solutions.",
      },
      { property: "og:title", content: "DEVI CONSULTANCY | Leaders in Quality Construction & Infrastructure" },
      {
        property: "og:description",
        content:
          "Leaders in Quality Construction & Infrastructure since 2000. Professional construction consultancy, architectural design, and infrastructure solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <Hero />
    </div>
  );
}
