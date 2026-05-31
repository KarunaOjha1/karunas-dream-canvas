import { Section } from "./Section";

const programming = [
  { name: "Python", level: 75 },
  { name: "Java", level: 70 },
  { name: "PHP", level: 70 },
  { name: "C Language", level: 65 },
  { name: "JavaScript", level: 60 },
  { name: "MySQL", level: 70 },
];

const groups = [
  {
    title: "Web Technologies",
    items: ["HTML", "CSS", "JavaScript", "JSON"],
  },
  {
    title: "Mathematics & Logic",
    items: ["Problem Solving", "Logical Reasoning", "Analytical Thinking"],
  },
  {
    title: "Soft Skills",
    items: ["Communication", "Smart Working", "Team Collaboration", "Passionate"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I love to work with"
      subtitle="A growing toolbox of languages, technologies and habits picked up across semesters and personal projects."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass shadow-soft rounded-3xl p-8">
          <h3 className="mb-6 text-xl font-semibold">Programming & Databases</h3>
          <div className="space-y-5">
            {programming.map((s) => (
              <div key={s.name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="bg-primary-gradient h-full rounded-full transition-all duration-1000"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {groups.map((g) => (
            <div key={g.title} className="glass shadow-soft rounded-3xl p-7">
              <h3 className="mb-4 text-lg font-semibold">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
