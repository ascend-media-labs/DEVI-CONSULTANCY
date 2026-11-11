import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/site/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Project Categories | DEVI CONSULTANCY" },
      {
        name: "description",
        content:
          "Browse DEVI CONSULTANCY's project categories across residential villas, commercial complexes, institutional edifices, and healthcare facilities.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mt-20 min-h-[calc(100vh-5rem)]">
      <Projects />
    </div>
  );
}

