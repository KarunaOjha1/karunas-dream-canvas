import { GraduationCap, School } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: GraduationCap,
    period: "2023 — Present",
    title: "Bachelor of Computer System & IT (BCSIT)",
    place: "SAIM College, Pokhara University · Pokhara",
    desc: "Currently in 4th semester. Studying programming, system design, databases, networking and mathematics.",
  },
  {
    icon: School,
    period: "Completed",
    title: "+2 / Higher Secondary Education",
    place: "Kailali Model Secondary College · Dhangadhi",
    desc: "Built the foundation in science, mathematics and analytical thinking.",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="My learning journey"
      subtitle="From hometown classrooms in Dhangadhi to a computer science degree in Pokhara."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="bg-primary-gradient absolute left-6 top-2 h-[calc(100%-1rem)] w-0.5 rounded-full opacity-40 md:left-1/2" />
        {items.map((it, i) => (
          <div
            key={it.title}
            className={`relative mb-10 grid gap-6 md:grid-cols-2 ${
              i % 2 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className={`pl-16 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                {it.period}
              </span>
              <h3 className="mt-1 text-xl font-semibold">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.place}</p>
            </div>
            <div className={`pl-16 md:pl-12 ${i % 2 ? "md:pl-0 md:pr-12 md:text-right" : ""}`}>
              <p className="text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
            <div className="bg-primary-gradient shadow-glow absolute left-2 top-0 flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground md:left-1/2 md:-translate-x-1/2">
              <it.icon className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
