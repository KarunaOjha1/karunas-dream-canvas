import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's connect and build"
      subtitle="Got an opportunity, a project idea, or just want to say hi? My inbox is open."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Mail, label: "Email", value: "karuna.ojha@example.com" },
            { icon: Phone, label: "Phone", value: "+977 98XXXXXXXX" },
            { icon: MapPin, label: "Location", value: "Pokhara, Nepal" },
          ].map((c) => (
            <div key={c.label} className="glass shadow-soft flex items-center gap-4 rounded-2xl p-5">
              <div className="bg-primary-gradient flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{c.label}</div>
                <div className="text-sm font-semibold">{c.value}</div>
              </div>
            </div>
          ))}
          <div className="flex gap-3 pt-2">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="glass shadow-soft flex h-12 w-12 items-center justify-center rounded-xl text-foreground transition-transform hover:scale-110 hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
          }}
          className="glass shadow-soft space-y-4 rounded-3xl p-8 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <input
            placeholder="Subject"
            className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <textarea
            required
            rows={5}
            placeholder="Your message..."
            className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="submit"
            className="bg-primary-gradient shadow-soft inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            {sent ? "Message sent — thank you!" : (<>Send Message <Send className="h-4 w-4" /></>)}
          </button>
        </form>
      </div>
    </Section>
  );
}
