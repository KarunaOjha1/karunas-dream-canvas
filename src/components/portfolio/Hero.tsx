import { ArrowRight, Mail, Sparkles } from "lucide-react";
import heroImg from "@/assets/karuna-hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="bg-hero-gradient absolute inset-0 -z-10" />
      <div className="blob -z-10 left-[-10%] top-[10%] h-72 w-72 bg-primary/40" />
      <div className="blob -z-10 right-[-5%] top-[30%] h-80 w-80 bg-accent/40" style={{ animationDelay: "3s" }} />
      <div className="blob -z-10 left-[30%] bottom-[-10%] h-72 w-72 bg-secondary-foreground/20" style={{ animationDelay: "6s" }} />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="reveal">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Available for opportunities
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-7xl">
            Hi, I'm <span className="text-gradient">Karuna Ojha</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-muted-foreground md:text-xl">
            BCSIT Student · Aspiring Data Scientist & ML Enthusiast
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            A passionate Computer Science student at SAIM College, Pokhara University,
            in love with mathematics, programming, and the endless possibilities of AI &
            Machine Learning.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <div className="mt-10 flex gap-8">
            {[
              { n: "7+", l: "Languages" },
              { n: "4+", l: "Projects" },
              { n: "4th", l: "Semester" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-gradient font-display text-3xl font-bold">{s.n}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-md" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-4 rounded-[2.5rem] bg-primary-gradient opacity-20 blur-2xl" />
          <div className="bg-accent-gradient absolute -right-6 -top-6 h-32 w-32 rounded-3xl opacity-80 [transform:rotate(12deg)]" />
          <div className="bg-primary-gradient absolute -bottom-6 -left-6 h-40 w-40 rounded-3xl opacity-70 [transform:rotate(-8deg)]" />
          <div className="relative overflow-hidden rounded-[2rem] glass shadow-glow">
            <img
              src={heroImg}
              alt="Karuna Ojha - portrait"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="glass shadow-soft absolute -bottom-6 -right-2 rounded-2xl px-5 py-4">
            <div className="font-display text-2xl font-bold text-gradient">AI/ML</div>
            <div className="text-xs text-muted-foreground">Future Focus</div>
          </div>
          <div className="glass shadow-soft absolute -left-4 top-10 rounded-2xl px-4 py-3">
            <div className="text-xs text-muted-foreground">Currently learning</div>
            <div className="text-sm font-semibold">Data Science</div>
          </div>
        </div>
      </div>
    </section>
  );
}
