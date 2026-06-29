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

type Item = { label: string; definition: string; href?: string };
type Category = { title: string; blurb: string; items: Item[]; kind: "link" | "pdf" };

const categories: Category[] = [
  {
    title: "Educational Organizations",
    blurb: "Established nonprofits and agencies that publish trusted safety education and preparedness material.",
    kind: "link",
    items: [
      {
        label: "Ready.gov — National preparedness",
        definition: "The U.S. government's official site for personal and household emergency preparedness education.",
        href: "https://www.ready.gov/",
      },
      {
        label: "Red Cross — Safety education",
        definition: "Free guides on first aid, home fire safety, and disaster preparedness from the American Red Cross.",
        href: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies.html",
      },
      {
        label: "RAINN — Sexual violence education",
        definition: "The nation's largest anti-sexual-violence organization, offering education, statistics, and support information.",
        href: "https://www.rainn.org/",
      },
      {
        label: "National Domestic Violence Hotline",
        definition: "Educational articles on healthy relationships, warning signs, and safety planning.",
        href: "https://www.thehotline.org/",
      },
    ],
  },
  {
    title: "Digital Privacy & Safety",
    blurb: "Plain-language guides for protecting accounts, devices, and personal information online.",
    kind: "link",
    items: [
      {
        label: "EFF Surveillance Self-Defense",
        definition: "The Electronic Frontier Foundation's free guide to digital privacy, encryption, and account security.",
        href: "https://ssd.eff.org/",
      },
      {
        label: "Consumer Reports Security Planner",
        definition: "A personalized, free tool that recommends online safety steps based on your situation.",
        href: "https://securityplanner.consumerreports.org/",
      },
      {
        label: "FTC IdentityTheft.gov",
        definition: "Federal Trade Commission resource for reporting and recovering from identity theft.",
        href: "https://www.identitytheft.gov/",
      },
      {
        label: "StaySafeOnline (NCA)",
        definition: "The National Cybersecurity Alliance's library of consumer-friendly online safety articles.",
        href: "https://staysafeonline.org/",
      },
    ],
  },
  {
    title: "Travel & Campus Resources",
    blurb: "Authoritative starting points for travel planning and campus-specific safety information.",
    kind: "link",
    items: [
      {
        label: "U.S. State Department — Travel Advisories",
        definition: "Official country-by-country travel advisories, entry requirements, and safety guidance.",
        href: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html",
      },
      {
        label: "Smart Traveler Enrollment Program (STEP)",
        definition: "Free U.S. government program that lets travelers register trips abroad to receive safety alerts.",
        href: "https://step.state.gov/",
      },
      {
        label: "Clery Center — Campus safety",
        definition: "Educational nonprofit focused on campus safety policy and student awareness under the Clery Act.",
        href: "https://clerycenter.org/",
      },
      {
        label: "Know Your IX",
        definition: "Survivor- and youth-led educational project on student rights under Title IX.",
        href: "https://www.knowyourix.org/",
      },
    ],
  },
];

const downloads: Item[] = [
  { label: "Home preparedness checklist", definition: "A printable one-page list covering locks, alarms, exits, and emergency contacts." },
  { label: "Travel planning worksheet", definition: "A pre-trip worksheet for itineraries, documents, contacts, and packing essentials." },
  { label: "Campus move-in safety guide", definition: "A walkthrough of dorm setup, transit awareness, and campus resource bookmarks." },
  { label: "Digital privacy starter pack", definition: "A short guide to password managers, two-factor authentication, and account audits." },
];

function Resources() {
  return (
    <PageShell
      eyebrow="Resources"
      title="A trusted, curated library."
      intro="Educational links, downloadable PDFs, and pointers toward established organizations doing important work. Each item includes a short definition so you know what you're opening."
    >
      <div className="grid gap-5">
        {categories.map((c) => (
          <div key={c.title} className="surface-card p-6 md:p-8">
            <div className="md:flex md:items-end md:justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl text-charcoal">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-2xl">{c.blurb}</p>
              </div>
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-8">
              {c.items.map((i) => (
                <li key={i.label} className="py-4 border-b border-border/60 last:border-0 sm:[&:nth-last-child(2)]:border-0">
                  <a
                    href={i.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="text-sm font-medium text-charcoal group-hover:text-charcoal/70">{i.label}</div>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{i.definition}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-charcoal/50 shrink-0 mt-1 group-hover:text-charcoal" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="surface-card p-6 md:p-8">
          <h3 className="font-display text-2xl text-charcoal">Downloadable PDFs</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Printable checklists you can save offline, post on the fridge, or keep with your travel documents.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-x-8">
            {downloads.map((i) => (
              <li key={i.label} className="py-4 border-b border-border/60 last:border-0 sm:[&:nth-last-child(2)]:border-0">
                <button className="group w-full text-left flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium text-charcoal group-hover:text-charcoal/70">{i.label}</div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{i.definition}</p>
                  </div>
                  <Download className="h-4 w-4 text-charcoal/50 shrink-0 mt-1 group-hover:text-charcoal" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 rounded-3xl border border-border bg-gold-soft/50 p-8">
        <div className="text-xs uppercase tracking-wider text-charcoal/70">Directory note</div>
        <p className="mt-2 text-sm text-charcoal/85 leading-relaxed max-w-3xl">
          We link to established, reputable organizations for services we don't provide ourselves —
          including counseling, legal aid, victim advocacy, and emergency response. External links open in a new tab.
        </p>
      </div>

      <div className="mt-6 rounded-3xl border border-border bg-rose-soft/50 p-8">
        <div className="text-xs uppercase tracking-wider text-charcoal/70">About these resources</div>
        <div className="mt-3 text-sm text-charcoal/85 leading-relaxed max-w-3xl space-y-3">
          <p>
            <strong>No endorsement.</strong> Nerine Harbor does not endorse, recommend, or guarantee any specific organization, service, or outcome listed here. Links are provided solely for educational convenience.
          </p>
          <p>
            <strong>Independent content.</strong> We do not control, review, or assume responsibility for the content, privacy practices, or accuracy of third-party websites. Their views and policies are their own.
          </p>
          <p>
            <strong>No partnership.</strong> Inclusion in this directory does not imply a formal partnership, sponsorship, or affiliation with Nerine Harbor.
          </p>
          <p>
            <strong>Accuracy.</strong> While we aim to share reliable starting points, information changes. Please verify details directly with the organization before acting on any guidance.
          </p>
          <p>
            <strong>Not a substitute.</strong> These resources are educational pointers only. They do not replace professional legal, medical, psychological, or emergency services. If you are in immediate danger, please call 911 or your local emergency number.
          </p>
        </div>
      </div>

      <CalloutDisclaimer />
    </PageShell>
  );
}
