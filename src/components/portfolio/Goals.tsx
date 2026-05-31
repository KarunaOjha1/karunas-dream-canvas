import { BrainCircuit, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import { Section } from "./Section";

const goals = [
  { icon: BrainCircuit, title: "Become a Data Scientist", desc: "Build a deep foundation in ML, statistics and modern AI frameworks." },
  { icon: Rocket, title: "Build Real-world AI", desc: "Apply machine learning to solve practical, impactful problems." },
  { icon: TrendingUp, title: "Master the Math", desc: "Strengthen mathematics, algorithms and analytical reasoning." },
  { icon: Lightbulb, title: "Keep Learning", desc: "Always exploring new tools, languages and technologies." },
];

export function Goals() {
  return (
    <Section
      id="goals"
      eyebrow="Future vision"
      title="Where I'm heading next"
      subtitle="Clear goals to guide every line of code and every concept I study."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {goals.map((g) => (
          <div
            key={g.title}
            className="glass shadow-soft rounded-2xl p-6 transition-all hover:-translate-y-1"
          >
            <div className="bg-accent-gradient inline-flex h-12 w-12 items-center justify-center rounded-xl text-accent-foreground shadow-soft">
              <g.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{g.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
