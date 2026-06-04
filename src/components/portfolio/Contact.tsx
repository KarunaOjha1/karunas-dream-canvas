import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Section } from "./Section";

const EMAILJS_SERVICE_ID = "service_2uth8ih";
const EMAILJS_TEMPLATE_ID = "template_dl0dy3s";
const EMAILJS_PUBLIC_KEY = "oDZm56yguAa8tXa-9";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
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
            { icon: Mail, label: "Email", value: "ojhakaruna296@gmail.com" },
            { icon: Phone, label: "Phone", value: "+977 9763202739" },
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
            <a
              href="https://github.com/KarunaOjha1"
              target="_blank"
              rel="noopener noreferrer"
              className="glass shadow-soft flex h-12 w-12 items-center justify-center rounded-xl text-foreground transition-transform hover:scale-110 hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/karunaojha"
              target="_blank"
              rel="noopener noreferrer"
              className="glass shadow-soft flex h-12 w-12 items-center justify-center rounded-xl text-foreground transition-transform hover:scale-110 hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ojhakaruna296@gmail.com"
              className="glass shadow-soft flex h-12 w-12 items-center justify-center rounded-xl text-foreground transition-transform hover:scale-110 hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={async (e) => {
            e.preventDefault();
            if (!formRef.current) return;
            setStatus("sending");
            try {
              await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: EMAILJS_PUBLIC_KEY },
              );
              setStatus("sent");
              formRef.current.reset();
              setTimeout(() => setStatus("idle"), 4000);
            } catch (err) {
              console.error("EmailJS error:", err);
              setStatus("error");
              setTimeout(() => setStatus("idle"), 4000);
            }
          }}
          className="glass shadow-soft space-y-4 rounded-3xl p-8 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              name="from_name"
              placeholder="Your name"
              className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <input
              required
              type="email"
              name="reply_to"
              placeholder="Your email"
              className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <input
            name="subject"
            placeholder="Subject"
            className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Your message..."
            className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-primary-gradient shadow-soft inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
          >
            {status === "sending" && "Sending..."}
            {status === "sent" && "Message sent — thank you!"}
            {status === "error" && "Something went wrong — try again"}
            {status === "idle" && (<>Send Message <Send className="h-4 w-4" /></>)}
          </button>
        </form>
      </div>
    </Section>
  );
}
