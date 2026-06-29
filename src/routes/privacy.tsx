import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Nerine Harbor" },
      { name: "description", content: "How Nerine Harbor handles information collected through our educational website." },
      { property: "og:title", content: "Privacy Policy — Nerine Harbor" },
      { property: "og:description", content: "Privacy practices for the Nerine Harbor educational platform." },
    ],
  }),
  component: PrivacyPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="surface-card p-6 md:p-8">
      <h2 className="font-display text-2xl text-charcoal">{title}</h2>
      <div className="mt-3 text-sm text-charcoal/85 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="Nerine Harbor respects your privacy. This policy explains what information we collect through our educational website and how it is used."
    >
      <div className="grid gap-5">
        <Section title="Information We Collect">
          <p>
            Nerine Harbor is an educational platform and does not require account registration to access our content. We may collect limited information that you voluntarily provide — for example, when you submit a message through our contact form — and basic, non-identifying technical information such as browser type, device, and pages visited.
          </p>
        </Section>
        <Section title="How We Use Information">
          <p>
            Voluntarily submitted information is used solely to respond to your inquiry or to improve the educational resources we offer. Aggregated technical information helps us understand which materials are most helpful to visitors.
          </p>
          <p>We do not sell, rent, or trade personal information.</p>
        </Section>
        <Section title="Third-Party Resources">
          <p>
            This site links to independent organizations whose websites have their own privacy practices. Nerine Harbor is not responsible for the privacy policies of any third party. Please review the privacy notices of any external site you visit.
          </p>
        </Section>
        <Section title="Cookies and Analytics">
          <p>
            We may use minimal cookies or privacy-respecting analytics to understand site usage in aggregate. You may disable cookies in your browser settings without losing access to our educational content.
          </p>
        </Section>
        <Section title="Children's Privacy">
          <p>
            Our content is intended for a general adult audience. We do not knowingly collect personal information from children under 13.
          </p>
        </Section>
        <Section title="Updates to This Policy">
          <p>
            This policy may be updated periodically to reflect changes in our practices or applicable law. Material changes will be reflected on this page.
          </p>
        </Section>
        <Section title="Contact">
          <p>
            Questions about this policy may be sent through our{" "}
            <Link to="/contact" className="underline hover:text-foreground">contact page</Link>.
          </p>
        </Section>
      </div>
    </PageShell>
  );
}
