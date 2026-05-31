import { Banknote, Hospital, Network, UtensilsCrossed } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    icon: UtensilsCrossed,
    semester: "2nd Semester",
    title: "Chulo — Restaurant Management System",
    desc: "An online food ordering system with cart, quantity controls, total price calculation, and payment integration concepts using eSewa & Khalti.",
    tags: ["HTML", "CSS", "JavaScript", "JSON"],
  },
  {
    icon: Hospital,
    semester: "3rd Semester",
    title: "Hospital Appointment Management",
    desc: "Appointment booking system with UML diagrams and OOAD-based design covering patients, doctors and schedules.",
    tags: ["PHP", "OOAD", "UML"],
  },
  {
    icon: Banknote,
    semester: "1st Semester",
    title: "Banking Application System",
    desc: "A C-language banking app supporting deposit, withdraw, balance enquiry, transfers and branch-wise reports for customer data.",
    tags: ["C Language", "File I/O"],
  },
  {
    icon: Network,
    semester: "4th Semester",
    title: "LAN Design & Network Architecture",
    desc: "System design and architectural planning for a local area network — focusing on structure, topology and analysis.",
    tags: ["Networking", "System Design"],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built so far"
      subtitle="Coursework and personal builds that helped me grow as a developer and problem-solver."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="glass shadow-soft group relative overflow-hidden rounded-3xl p-7 transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="bg-primary-gradient absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10 transition-transform group-hover:scale-150" />
            <div className="bg-primary-gradient inline-flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground shadow-soft">
              <p.icon className="h-6 w-6" />
            </div>
            <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-primary">
              {p.semester}
            </div>
            <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
