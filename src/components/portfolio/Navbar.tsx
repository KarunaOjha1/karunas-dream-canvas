import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.querySelector(l.href));
      for (const s of sections) {
        if (!s) continue;
        const rect = (s as HTMLElement).getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive((s as HTMLElement).id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all sm:px-6 ${
          scrolled || open ? "glass shadow-soft" : "glass/50"
        }`}
        style={{ backdropFilter: "blur(12px)" }}
      >
        <a href="#home" className="font-display text-xl font-bold text-foreground">
          Karuna<span className="text-gradient">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === l.href.slice(1)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105 sm:inline-block"
          >
            Let's Talk
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition hover:bg-background lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-4 lg:hidden">
          <ul className="glass shadow-soft flex flex-col gap-1 rounded-2xl p-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active === l.href.slice(1)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-primary/5"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
