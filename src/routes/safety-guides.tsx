import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CalloutDisclaimer } from "@/components/site";
import { Home, GraduationCap, Plane, Wifi, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/safety-guides")({
  head: () => ({
    meta: [
      { title: "Safety Guides — Nerine Harbor" },
      { name: "description", content: "Practical educational guides covering personal, home, campus, travel, digital, and relationship safety." },
      { property: "og:title", content: "Safety Guides — Nerine Harbor" },
      { property: "og:description", content: "A calm, organized library of educational safety guides." },
    ],
  }),
  component: SafetyGuides,
});

const guides = [
  { to: "/preparedness", icon: Home, title: "Apartment & Home Safety", body: "Door, lock, lighting, and routine awareness for renters and homeowners." },
  { to: "/campus-safety", icon: GraduationCap, title: "Campus Safety", body: "Dorm life, late-night study, transit, and social environments." },
  { to: "/travel-safety", icon: Plane, title: "Travel Safety", body: "Solo, group, and international travel preparation." },
  { to: "/digital-safety", icon: Wifi, title: "Digital Privacy", body: "Accounts, passwords, devices, and social presence." },
] as const;

function SafetyGuides() {
  return (
    <PageShell
      eyebrow="Safety Guides"
      title="Calm, practical knowledge — organized for everyday life."
      intro="Each guide is grounded in established educational practices. Browse the topics that feel most relevant to you right now."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {guides.map((g) => (
          <Link key={g.title} to={g.to} className="group">
            <div className="surface-card p-6 h-full hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-lavender-soft mb-4">
                <g.icon className="h-5 w-5 text-charcoal" strokeWidth={1.5} />
              </span>
              <h3 className="font-display text-xl text-charcoal">{g.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-charcoal/80 group-hover:gap-2 transition-all">
                Read guide <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <CalloutDisclaimer />
    </PageShell>
  );
}
