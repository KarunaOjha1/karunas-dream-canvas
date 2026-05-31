import { Brain, Code2, GraduationCap, Target } from "lucide-react";
import { Section } from "./Section";

const cards = [
  { icon: GraduationCap, title: "BCSIT Student", desc: "4th semester at SAIM College, Pokhara University." },
  { icon: Code2, title: "Programmer", desc: "Hands-on with Python, Java, C, PHP, and JavaScript." },
  { icon: Brain, title: "Curious Mind", desc: "Deep love for mathematics, logic and problem solving." },
  { icon: Target, title: "Future Vision", desc: "Aiming to grow in AI, ML and intelligent software." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="A student-developer with big curiosity"
      subtitle="I'm Karuna — passionate about coding, mathematics, and exploring how machines learn. Always eager to build, break, and rebuild."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.title}
            className="glass shadow-soft group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="bg-primary-gradient inline-flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground shadow-soft">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
