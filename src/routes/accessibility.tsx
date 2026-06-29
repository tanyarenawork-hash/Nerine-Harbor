import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility — Nerine Harbor" },
      { name: "description", content: "Nerine Harbor's commitment to an accessible educational experience for all visitors." },
      { property: "og:title", content: "Accessibility — Nerine Harbor" },
      { property: "og:description", content: "Accessibility statement for the Nerine Harbor educational platform." },
    ],
  }),
  component: AccessibilityPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="surface-card p-6 md:p-8">
      <h2 className="font-display text-2xl text-charcoal">{title}</h2>
      <div className="mt-3 text-sm text-charcoal/85 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function AccessibilityPage() {
  return (
    <PageShell
      eyebrow="Accessibility"
      title="Accessibility Statement"
      intro="Nerine Harbor is committed to making our educational resources usable by the widest possible audience, regardless of ability or technology."
    >
      <div className="grid gap-5">
        <Section title="Our Commitment">
          <p>
            We strive to follow widely recognized accessibility guidelines, including the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, as we design, build, and improve this site.
          </p>
        </Section>
        <Section title="Ongoing Improvement">
          <p>
            Accessibility is an ongoing effort. We regularly review color contrast, keyboard navigation, semantic structure, and assistive-technology compatibility, and we welcome feedback that helps us improve.
          </p>
        </Section>
        <Section title="Third-Party Content">
          <p>
            Some resources we link to are operated by independent organizations. We are not able to guarantee the accessibility of third-party websites, but we try to link to organizations that share our commitment to inclusion.
          </p>
        </Section>
        <Section title="Feedback">
          <p>
            If you encounter an accessibility barrier on this site, please let us know through our{" "}
            <Link to="/contact" className="underline hover:text-foreground">contact page</Link>{" "}
            so we can address it.
          </p>
        </Section>
      </div>
    </PageShell>
  );
}
