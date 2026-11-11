import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Achievements } from "@/components/site/Achievements";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

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
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
