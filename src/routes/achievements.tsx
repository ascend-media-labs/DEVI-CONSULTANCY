import { createFileRoute } from "@tanstack/react-router";
import { Achievements } from "@/components/site/Achievements";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements & Track Record | DEVI CONSULTANCY" },
      {
        name: "description",
        content:
          "26+ years of engineering excellence, 350+ completed projects, 25+ lakh sq ft executed with 100% structural precision.",
      },
    ],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <div className="mt-20 min-h-[calc(100vh-5rem)]">
      <Achievements />
    </div>
  );
}
