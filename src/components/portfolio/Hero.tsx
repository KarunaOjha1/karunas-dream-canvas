import { ArrowRight, BrainCircuit, Code2, Database, Download, Sparkles } from "lucide-react";
import heroImg from "@/assets/karuna-hero.jpg";

const stack = [
  "Python", "Machine Learning", "Java", "Data Science", "MySQL",
  "JavaScript", "PHP", "Problem Solving", "C", "AI",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="bg-hero-gradient absolute inset-0 -z-20" />
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="blob -z-10 left-[-10%] top-[10%] h-72 w-72 bg-primary/40" />
      <div className="blob -z-10 right-[-5%] top-[25%] h-80 w-80 bg-accent/40" style={{ animationDelay: "3s" }} />
      <div className="blob -z-10 left-[40%] bottom-[-10%] h-72 w-72 bg-secondary-foreground/15" style={{ animationDelay: "6s" }} />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to internships & collaborations
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
            Hi, I'm <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="text-gradient">Karuna Ojha</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 9 C 80 2, 160 2, 298 8"
                  stroke="url(#hg)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="hg" x1="0" x2="1">
                    <stop offset="0" stopColor="oklch(0.58 0.21 290)" />
                    <stop offset="1" stopColor="oklch(0.72 0.16 340)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <div className="mt-6 inline-flex flex-wrap items-center gap-2">
            <span className="glass rounded-full px-3 py-1 text-sm font-medium">BCSIT Student</span>
            <span className="glass rounded-full px-3 py-1 text-sm font-medium">Aspiring Data Scientist</span>
            <span className="glass rounded-full px-3 py-1 text-sm font-medium">ML Enthusiast</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Computer Science student at <span className="font-semibold text-foreground">SAIM College, Pokhara University</span> — exploring the intersection of mathematics, code and intelligent systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:scale-105 hover:shadow-glow"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-105"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
            {[
              { n: "7+", l: "Languages" },
              { n: "4+", l: "Projects" },
              { n: "4th", l: "Semester" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl px-4 py-3 text-center shadow-soft">
                <div className="text-gradient font-display text-2xl font-bold md:text-3xl">{s.n}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-md" style={{ animationDelay: "0.15s" }}>
          <svg
            className="spin-slow absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] opacity-40"
            viewBox="0 0 100 100"
            aria-hidden
          >
            <defs>
              <path id="circ" d="M 50,50 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
            </defs>
            <text fontSize="4.5" fill="oklch(0.45 0.15 290)" letterSpacing="3">
              <textPath href="#circ">
                CODE · MATH · MACHINE LEARNING · DATA · DESIGN · CODE · MATH · ML · DATA ·
              </textPath>
            </text>
          </svg>

          <div className="bg-accent-gradient absolute -right-4 -top-4 h-32 w-32 rounded-3xl opacity-80 blur-[2px] [transform:rotate(12deg)]" />
          <div className="bg-primary-gradient absolute -bottom-6 -left-6 h-40 w-40 rounded-3xl opacity-70 [transform:rotate(-8deg)]" />

          <div className="tilt glass relative overflow-hidden rounded-[2rem] shadow-glow">
            <img
              src={heroImg}
              alt="Karuna Ojha"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>

          <div className="glass shadow-soft absolute -left-5 top-12 flex items-center gap-3 rounded-2xl px-4 py-3 reveal" style={{ animationDelay: "0.5s" }}>
            <div className="bg-primary-gradient flex h-9 w-9 items-center justify-center rounded-xl text-primary-foreground">
              <Code2 className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Now Coding</div>
              <div className="text-sm font-semibold">Python · ML</div>
            </div>
          </div>

          <div className="glass shadow-soft absolute -right-4 top-1/2 flex items-center gap-3 rounded-2xl px-4 py-3 reveal" style={{ animationDelay: "0.7s" }}>
            <div className="bg-accent-gradient flex h-9 w-9 items-center justify-center rounded-xl text-accent-foreground">
              <BrainCircuit className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Focus</div>
              <div className="text-sm font-semibold">AI / Data Science</div>
            </div>
          </div>

          <div className="glass shadow-soft absolute -bottom-4 left-6 flex items-center gap-3 rounded-2xl px-4 py-3 reveal" style={{ animationDelay: "0.9s" }}>
            <div className="bg-primary-gradient flex h-9 w-9 items-center justify-center rounded-xl text-primary-foreground">
              <Database className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Toolkit</div>
              <div className="text-sm font-semibold">MySQL · PHP · Java</div>
            </div>
          </div>

          <span className="glass absolute -right-2 -top-2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold text-primary shadow-soft">
            <Sparkles className="h-3 w-3" /> 2026
          </span>
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {[...stack, ...stack].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              <span>{t}</span>
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
