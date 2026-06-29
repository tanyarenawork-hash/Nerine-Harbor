import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Nerine Harbor" },
      { name: "description", content: "The terms governing your use of the Nerine Harbor educational website." },
      { property: "og:title", content: "Terms of Use — Nerine Harbor" },
      { property: "og:description", content: "Terms of use for the Nerine Harbor educational platform." },
    ],
  }),
  component: TermsPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="surface-card p-6 md:p-8">
      <h2 className="font-display text-2xl text-charcoal">{title}</h2>
      <div className="mt-3 text-sm text-charcoal/85 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms"
      title="Terms of Use"
      intro="By accessing this website you agree to the following terms. Please read them carefully."
    >
      <div className="grid gap-5">
        <Section title="Acceptance of Terms">
          <p>
            Your access to and use of Nerine Harbor is conditioned on your acceptance of and compliance with these Terms of Use, our{" "}
            <Link to="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>, and our{" "}
            <Link to="/disclaimer" className="underline hover:text-foreground">Disclaimer</Link>.
          </p>
        </Section>
        <Section title="Educational Use">
          <p>
            All materials are provided for personal, non-commercial educational use. Nothing on this website constitutes legal, medical, psychological, or emergency advice.
          </p>
        </Section>
        <Section title="Acceptable Use">
          <p>
            You agree not to misuse the website, attempt to disrupt its operation, misrepresent affiliation with Nerine Harbor, or use its materials in any manner that is unlawful or harmful to others.
          </p>
        </Section>
        <Section title="Intellectual Property">
          <p>
            Original content is owned by Nerine Harbor or its contributors. You may download and share materials for personal educational use with attribution preserved. Commercial use or modification requires prior written permission.
          </p>
        </Section>
        <Section title="Third-Party Links">
          <p>
            Links to third-party organizations are provided for educational convenience and do not imply endorsement, sponsorship, or partnership.
          </p>
        </Section>
        <Section title="Disclaimer and Liability">
          <p>
            The website is provided "as is" without warranties of any kind. To the fullest extent permitted by law, Nerine Harbor disclaims liability for any damages arising from your use of this site. See our full{" "}
            <Link to="/disclaimer" className="underline hover:text-foreground">Disclaimer</Link>.
          </p>
        </Section>
        <Section title="Changes to These Terms">
          <p>
            These terms may be updated from time to time. Continued use of the website after any changes constitutes acceptance of the updated terms.
          </p>
        </Section>
        <Section title="Contact">
          <p>
            Questions about these terms may be sent through our{" "}
            <Link to="/contact" className="underline hover:text-foreground">contact page</Link>.
          </p>
        </Section>
      </div>
    </PageShell>
  );
}
