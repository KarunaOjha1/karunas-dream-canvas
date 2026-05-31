import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Goals } from "@/components/portfolio/Goals";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karuna Ojha — BCSIT Student & Aspiring Data Scientist" },
      {
        name: "description",
        content:
          "Portfolio of Karuna Ojha, a BCSIT student at SAIM College passionate about programming, mathematics, AI and Machine Learning.",
      },
      { property: "og:title", content: "Karuna Ojha — Portfolio" },
      {
        property: "og:description",
        content:
          "BCSIT student & aspiring Data Scientist exploring programming, mathematics and machine learning.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
