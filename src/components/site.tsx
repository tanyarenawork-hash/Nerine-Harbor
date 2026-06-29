import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Anchor } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/safety-guides", label: "Safety Guides" },
  { to: "/preparedness", label: "Preparedness" },
  { to: "/travel-safety", label: "Travel Safety" },
  { to: "/campus-safety", label: "Campus Safety" },
  { to: "/digital-safety", label: "Digital Safety" },
  { to: "/resources", label: "Resources" },
  { to: "/emergency-contacts", label: "Emergency Contacts" },
  { to: "/contact", label: "Contact" },
  { to: "/legal", label: "Legal" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="grid place-items-center h-9 w-9 rounded-full bg-lavender-soft">
            <Anchor className="h-4 w-4 text-charcoal" strokeWidth={1.5} />
          </span>
          <span className="font-display text-lg tracking-tight text-charcoal">Nerine Harbor</span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1 text-sm">
          {navLinks.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              activeProps={{ className: "px-3 py-2 rounded-full text-foreground bg-muted" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/emergency-contacts"
          className="hidden xl:inline-flex items-center rounded-full bg-charcoal text-primary-foreground px-4 py-2 text-sm hover:opacity-90 transition"
        >
          Emergency Info
        </Link>

        <button
          aria-label="Toggle menu"
          className="xl:hidden grid place-items-center h-10 w-10 rounded-full hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <nav className="mx-auto max-w-7xl px-6 py-4 grid gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm text-foreground hover:bg-muted"
                activeProps={{ className: "px-3 py-2.5 rounded-lg text-sm bg-muted text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function DisclaimerBanner() {
  return (
    <div className="bg-rose-soft border-b border-rose/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-2.5 text-xs sm:text-sm text-charcoal/85 text-center text-balance">
        <strong className="font-medium">In an emergency, call 911</strong> or your local emergency services.
        Nerine Harbor is an educational resource — not a substitute for emergency, legal, medical, or psychological services.
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center h-9 w-9 rounded-full bg-lavender-soft">
              <Anchor className="h-4 w-4 text-charcoal" strokeWidth={1.5} />
            </span>
            <span className="font-display text-lg text-charcoal">Nerine Harbor</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Educational resources that empower women through safety knowledge, preparedness, and trusted community information.
          </p>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-charcoal/70">Learn</div>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.slice(2, 7).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-foreground">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-charcoal/70">Organization</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link to="/resources" className="text-muted-foreground hover:text-foreground">Resources</Link></li>
            <li><Link to="/emergency-contacts" className="text-muted-foreground hover:text-foreground">Emergency Contacts</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            <li><Link to="/legal" className="text-muted-foreground hover:text-foreground">Legal Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 grid gap-3 md:flex md:items-center md:justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Nerine Harbor. Educational content only.</p>
          <p className="max-w-2xl md:text-right text-balance">
            Disclaimer: Information on this site is for educational purposes only and is not legal, medical, or psychological advice. No liability is assumed for any loss or damage arising from use of this content. In an emergency, dial 911. See our{" "}
            <Link to="/legal" className="underline hover:text-foreground">Legal Disclaimer</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children, eyebrow, title, intro }: { children: React.ReactNode; eyebrow?: string; title: string; intro?: string }) {
  return (
    <div>
      <section className="gradient-hero border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 pt-20 pb-16 text-center">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1 text-xs tracking-wide uppercase text-charcoal/70">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {eyebrow}
            </div>
          )}
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl text-charcoal text-balance">{title}</h1>
          {intro && <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground text-balance leading-relaxed">{intro}</p>}
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16">{children}</div>
    </div>
  );
}

export function FeatureCard({ title, body, icon: Icon }: { title: string; body: string; icon?: React.ComponentType<{ className?: string; strokeWidth?: number }> }) {
  return (
    <div className="surface-card p-6 hover:shadow-[var(--shadow-elegant)] transition-shadow">
      {Icon && (
        <span className="grid place-items-center h-10 w-10 rounded-xl bg-lavender-soft mb-4">
          <Icon className="h-5 w-5 text-charcoal" strokeWidth={1.5} />
        </span>
      )}
      <h3 className="font-display text-xl text-charcoal">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

export function ChecklistCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="surface-card p-6">
      <h3 className="font-display text-xl text-charcoal">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-sm text-foreground/85">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CalloutDisclaimer() {
  return (
    <div className="mt-12 rounded-2xl border border-rose/40 bg-rose-soft/60 p-6 text-sm text-charcoal/80 leading-relaxed">
      <p className="font-medium text-charcoal">Important reminder</p>
      <p className="mt-1">
        Nerine Harbor provides educational information only. It is not a substitute for emergency response, legal counsel, medical care, or licensed mental-health services.
        If you are in immediate danger, call <strong>911</strong> or your local emergency number.
      </p>
    </div>
  );
}
