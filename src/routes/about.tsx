import { createFileRoute } from "@tanstack/react-router";
import { PageShell, FeatureCard, CalloutDisclaimer } from "@/components/site";
import { Heart, Compass, BookOpen, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nerine Harbor" },
      { name: "description", content: "Nerine Harbor is an educational organization dedicated to empowering women through safety education, preparedness, and trusted resources." },
      { property: "og:title", content: "About — Nerine Harbor" },
      { property: "og:description", content: "Our mission, our name, and how we approach safety education." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell
      eyebrow="About"
      title="An educational harbor for women."
      intro="Nerine Harbor exists to empower women through safety education, preparedness, and awareness — not through fear."
    >
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-5 text-foreground/85 leading-relaxed">
          <p>
            <strong className="text-charcoal">Nerine</strong> is a flower that symbolizes resilience, hope, and beauty — qualities we believe live in every woman.
            <strong className="text-charcoal"> Harbor</strong> represents safety, refuge, and protection — the calm, steady place from which confidence grows.
          </p>
          <p>
            Together, the name reflects our purpose: a calm, trustworthy place to learn practical knowledge that supports your sense of preparedness and well-being.
          </p>
          <p>
            We believe education is one of the most powerful tools a person can carry. When information is approachable and well-organized, it becomes confidence — and confidence shapes how we move through the world.
          </p>
        </div>
        <div className="surface-card p-8">
          <div className="text-xs uppercase tracking-wider text-gold">Our promise</div>
          <h3 className="mt-2 font-display text-2xl text-charcoal">What we are — and aren't.</h3>
          <ul className="mt-5 space-y-3 text-sm text-foreground/85">
            <li><strong className="text-charcoal">We are</strong> an educational publisher of safety, preparedness, and awareness content.</li>
            <li><strong className="text-charcoal">We aren't</strong> an emergency response organization, law-enforcement agency, counseling service, or legal service.</li>
            <li><strong className="text-charcoal">We always</strong> direct readers to qualified professionals and emergency services when appropriate.</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <FeatureCard icon={Heart} title="Empowering" body="Content rooted in dignity, autonomy, and strength — never in fear." />
        <FeatureCard icon={BookOpen} title="Educational" body="Practical, plainspoken material built around real-life situations." />
        <FeatureCard icon={Compass} title="Trustworthy" body="Sources, references, and links to established organizations." />
        <FeatureCard icon={Users} title="Community-minded" body="Curated directories of resources from organizations doing meaningful work." />
      </div>

      <CalloutDisclaimer />
    </PageShell>
  );
}
