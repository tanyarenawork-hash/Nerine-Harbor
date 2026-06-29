import { createFileRoute } from "@tanstack/react-router";
import { PageShell, CalloutDisclaimer } from "@/components/site";
import { ExternalLink, Download } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Nerine Harbor" },
      { name: "description", content: "A curated directory of trusted educational organizations, downloadable PDFs, and interactive preparedness tools." },
      { property: "og:title", content: "Resources — Nerine Harbor" },
      { property: "og:description", content: "Curated directories of trusted educational resources." },
    ],
  }),
  component: Resources,
});

const categories = [
  {
    title: "Educational Organizations",
    items: [
      "National safety and preparedness educators",
      "Women-focused community education programs",
      "Established nonprofits offering safety workshops",
      "University extension safety education programs",
    ],
  },
  {
    title: "Downloadable PDFs",
    items: [
      "Home preparedness checklist",
      "Travel planning worksheet",
      "Campus move-in safety guide",
      "Digital privacy starter pack",
    ],
  },
  {
    title: "Interactive Preparedness Tools",
    items: [
      "Custom emergency contact card generator",
      "Trip-planning checklist builder",
      "Personal preparedness self-assessment",
      "Apartment move-in walkthrough guide",
    ],
  },
];

function Resources() {
  return (
    <PageShell
      eyebrow="Resources"
      title="A trusted, curated library."
      intro="Educational PDFs, interactive tools, and a directory pointing you toward established organizations doing important work."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {categories.map((c) => (
          <div key={c.title} className="surface-card p-6">
            <h3 className="font-display text-xl text-charcoal">{c.title}</h3>
            <ul className="mt-4 space-y-3">
              {c.items.map((i) => (
                <li key={i} className="flex items-start justify-between gap-3 text-sm text-foreground/85 border-b border-border/60 pb-3 last:border-0 last:pb-0">
                  <span>{i}</span>
                  {c.title === "Downloadable PDFs" ? (
                    <Download className="h-4 w-4 text-charcoal/60 shrink-0 mt-0.5" />
                  ) : (
                    <ExternalLink className="h-4 w-4 text-charcoal/60 shrink-0 mt-0.5" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-border bg-gold-soft/50 p-8">
        <div className="text-xs uppercase tracking-wider text-charcoal/70">Directory note</div>
        <p className="mt-2 text-sm text-charcoal/85 leading-relaxed max-w-3xl">
          We point readers toward established, reputable organizations for services we don't provide ourselves —
          including counseling, legal aid, victim advocacy, and emergency response. Linking does not constitute endorsement of any specific outcome.
        </p>
      </div>

      <CalloutDisclaimer />
    </PageShell>
  );
}
