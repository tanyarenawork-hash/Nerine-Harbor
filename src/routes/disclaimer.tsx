import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Nerine Harbor" },
      { name: "description", content: "Educational purpose, no professional advice, third-party links, warranties, liability, and intellectual property notices for Nerine Harbor." },
      { property: "og:title", content: "Disclaimer — Nerine Harbor" },
      { property: "og:description", content: "Legal disclaimer for the Nerine Harbor educational platform." },
    ],
  }),
  component: DisclaimerPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="surface-card p-6 md:p-8">
      <h2 className="font-display text-2xl text-charcoal">{title}</h2>
      <div className="mt-3 text-sm text-charcoal/85 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function DisclaimerPage() {
  return (
    <PageShell
      eyebrow="Disclaimer"
      title="Legal Disclaimer"
      intro="Please read this disclaimer carefully before using the Nerine Harbor website or any of its content."
    >
      <div className="grid gap-5">
        <Section title="Educational Purpose Only">
          <p>
            Nerine Harbor is an educational platform dedicated to women's safety awareness, preparedness, and access to vetted public information. All content on this website — including articles, checklists, downloadable PDFs, interactive tools, and resource directories — is provided strictly for general educational and informational purposes.
          </p>
          <p>
            Nothing on this website is intended to diagnose, treat, prevent, or respond to any specific situation, condition, threat, or emergency.
          </p>
        </Section>

        <Section title="No Professional Advice">
          <p>
            Nerine Harbor does not provide legal advice, medical advice, mental health treatment, counseling, victim advocacy, emergency response, law enforcement services, or any other professional service.
          </p>
          <p>
            Information on this website is not a substitute for advice or care from licensed attorneys, physicians, mental health professionals, certified counselors, or other qualified experts. Always consult an appropriate licensed professional regarding your specific circumstances.
          </p>
        </Section>

        <Section title="Third-Party Links Disclaimer">
          <p>
            This website contains links to third-party websites and resources provided for educational convenience. These organizations operate independently of Nerine Harbor and are not under our control.
          </p>
          <p>
            Unless explicitly stated, Nerine Harbor is not affiliated with, endorsed by, sponsored by, or in formal partnership with any linked organization. We do not monitor, review, or guarantee the accuracy, completeness, availability, security, or privacy practices of any third-party website. Use of any external resource is at your own discretion and risk.
          </p>
        </Section>

        <Section title="No Warranties">
          <p>
            All content on this website is provided "as is" and "as available," without warranties of any kind, whether express or implied, including but not limited to warranties of accuracy, completeness, reliability, suitability, availability, merchantability, or fitness for a particular purpose.
          </p>
          <p>
            Nerine Harbor makes no representations or warranties that the website will be uninterrupted, secure, or free of errors.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            To the fullest extent permitted by applicable law, Nerine Harbor, its volunteers, contributors, and affiliates shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from or related to your access to, use of, or reliance on this website or any linked third-party resource.
          </p>
          <p>
            This includes, without limitation, any loss or damage related to personal injury, property damage, lost data, or any decision made or action taken based on information found on this website.
          </p>
        </Section>

        <Section title="Accuracy of Information">
          <p>
            While Nerine Harbor strives to share information that is thoughtful, current, and drawn from reputable sources, laws, best practices, organizational policies, and contact details change over time. We do not guarantee that the information presented here is accurate, complete, or up to date at the time of viewing.
          </p>
          <p>
            Please verify important details directly with the relevant organization or a qualified professional.
          </p>
        </Section>

        <Section title="Intellectual Property">
          <p>
            All original content on this website — including text, graphics, downloadable materials, and design elements — is the property of Nerine Harbor or its contributors and is protected by applicable intellectual property laws.
          </p>
          <p>
            Visitors may view, download, and share materials for personal, non-commercial educational use, provided that attribution to Nerine Harbor is preserved. Commercial use, redistribution, or modification of any content without prior written permission is prohibited.
          </p>
        </Section>

        <Section title="Contact Information">
          <p>
            If you have questions about this disclaimer or wish to request permission to use our content, please reach out through our{" "}
            <Link to="/contact" className="underline hover:text-foreground">contact page</Link>.
          </p>
          <p>
            For emergencies, do not contact Nerine Harbor. Call <strong>911</strong> or your local emergency services immediately.
          </p>
        </Section>
      </div>
    </PageShell>
  );
}
