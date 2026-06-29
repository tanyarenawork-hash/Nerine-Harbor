import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site";
import { Scale, AlertTriangle, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal Disclaimer — Nerine Harbor" },
      { name: "description", content: "Legal disclaimer, terms of use, and liability notice for Nerine Harbor educational content." },
      { property: "og:title", content: "Legal Disclaimer — Nerine Harbor" },
      { property: "og:description", content: "Read our legal disclaimer and terms of use." },
    ],
  }),
  component: Legal,
});

function Legal() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Disclaimer &amp; Terms of Use"
      intro="Please read the following information carefully. By using this website, you acknowledge and agree to these terms."
    >
      <div className="space-y-12">
        <section className="surface-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-rose-soft">
              <AlertTriangle className="h-5 w-5 text-charcoal" strokeWidth={1.5} />
            </span>
            <h2 className="font-display text-2xl text-charcoal">Not Professional Advice</h2>
          </div>
          <div className="text-sm leading-relaxed text-muted-foreground space-y-4">
            <p>
              The information provided on Nerine Harbor is for <strong>general educational and informational purposes only</strong>.
              It is not intended to be, and should not be construed as, professional advice of any kind — including but not limited to legal, medical, psychological, or safety advice.
            </p>
            <p>
              Always seek the advice of qualified professionals with any questions you may have regarding a legal matter, medical condition, mental health concern, or personal safety situation.
              Never disregard professional advice or delay seeking it because of something you have read on this website.
            </p>
          </div>
        </section>

        <section className="surface-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-lavender-soft">
              <Scale className="h-5 w-5 text-charcoal" strokeWidth={1.5} />
            </span>
            <h2 className="font-display text-2xl text-charcoal">No Liability</h2>
          </div>
          <div className="text-sm leading-relaxed text-muted-foreground space-y-4">
            <p>
              Nerine Harbor, its founders, contributors, and affiliates make <strong>no representations or warranties</strong> of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website.
            </p>
            <p>
              In no event will Nerine Harbor be liable for any loss or damage — including, without limitation, indirect or consequential loss or damage — arising out of, or in connection with, the use of this website or reliance on any information contained herein.
            </p>
            <p>
              Your use of any information or materials on this website is entirely at your own risk, for which Nerine Harbor shall not be liable.
            </p>
          </div>
        </section>

        <section className="surface-card p-8">
          <h2 className="font-display text-2xl text-charcoal mb-4">Emergency Situations</h2>
          <div className="text-sm leading-relaxed text-muted-foreground space-y-4">
            <p>
              Nerine Harbor is <strong>not an emergency response organization</strong>. If you are in immediate danger or experiencing a medical or mental health emergency, call <strong>911</strong> (or your local emergency number) immediately.
            </p>
            <p>
              The content on this site is not a substitute for emergency services, crisis intervention, or immediate professional assistance.
            </p>
          </div>
        </section>

        <section className="surface-card p-8">
          <h2 className="font-display text-2xl text-charcoal mb-4">External Links</h2>
          <div className="text-sm leading-relaxed text-muted-foreground space-y-4">
            <p>
              This website may contain links to external websites that are not provided or maintained by Nerine Harbor. We do not endorse, guarantee, or assume responsibility for the accuracy, relevance, timeliness, or completeness of any information on these external sites.
            </p>
            <p>
              Please review the terms and privacy policies of any third-party websites you visit.
            </p>
          </div>
        </section>

        <section className="surface-card p-8">
          <h2 className="font-display text-2xl text-charcoal mb-4">Copyright &amp; Use of Content</h2>
          <div className="text-sm leading-relaxed text-muted-foreground space-y-4">
            <p>
              All content on Nerine Harbor — including text, graphics, checklists, and downloadable resources — is the property of Nerine Harbor unless otherwise noted. You may share and print materials for <strong>personal, non-commercial educational use</strong>.
            </p>
            <p>
              Redistribution, resale, or republication of our content for commercial purposes without written permission is prohibited.
            </p>
          </div>
        </section>

        <section className="surface-card p-8">
          <h2 className="font-display text-2xl text-charcoal mb-4">Changes to This Disclaimer</h2>
          <div className="text-sm leading-relaxed text-muted-foreground space-y-4">
            <p>
              We may update this disclaimer from time to time. Changes will be posted on this page with an updated effective date. Your continued use of the website after any changes constitutes acceptance of the revised terms.
            </p>
            <p className="text-xs text-charcoal/60">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
          </div>
        </section>

        <div className="rounded-2xl border border-rose/40 bg-rose-soft/60 p-6 text-sm text-charcoal/80 leading-relaxed">
          <p className="font-medium text-charcoal">Questions about this disclaimer?</p>
          <p className="mt-1">
            If you have questions about these terms, please{" "}
            <Link to="/contact" className="underline hover:text-charcoal/60">contact us</Link>.
            For emergencies, always call <strong>911</strong>.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
