import { createFileRoute } from "@tanstack/react-router";
import { PageShell, CalloutDisclaimer } from "@/components/site";
import { Mail, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nerine Harbor" },
      { name: "description", content: "Get in touch with Nerine Harbor — for educational inquiries, partnerships, and feedback. Not for emergencies." },
      { property: "og:title", content: "Contact — Nerine Harbor" },
      { property: "og:description", content: "Reach our team for educational and partnership inquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell
      eyebrow="Contact"
      title="We'd love to hear from you."
      intro="For educational inquiries, partnership ideas, or feedback on our content. For emergencies, please call 911 or your local emergency number."
    >
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-10">
        <div className="space-y-6">
          <div className="surface-card p-6">
            <div className="text-xs uppercase tracking-wider text-charcoal/60">General inquiries</div>
            <a href="mailto:hello@nerineharbor.org" className="mt-2 inline-flex items-center gap-2 text-charcoal hover:text-charcoal/70">
              <Mail className="h-4 w-4" /> hello@nerineharbor.org
            </a>
          </div>
          <div className="surface-card p-6">
            <div className="text-xs uppercase tracking-wider text-charcoal/60">Partnerships</div>
            <a href="mailto:partners@nerineharbor.org" className="mt-2 inline-flex items-center gap-2 text-charcoal hover:text-charcoal/70">
              <Mail className="h-4 w-4" /> partners@nerineharbor.org
            </a>
          </div>
          <div className="rounded-2xl border border-rose/40 bg-rose-soft/60 p-6 text-sm text-charcoal/80 leading-relaxed">
            <strong className="text-charcoal">Please note:</strong> we cannot provide emergency response, legal advice, medical care, or psychological counseling.
            For these needs, contact qualified professionals or call 911.
          </div>
        </div>

        <form className="surface-card p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm text-charcoal/80">Name</span>
              <input type="text" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block">
              <span className="text-sm text-charcoal/80">Email</span>
              <input type="email" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
          </div>
          <label className="block">
            <span className="text-sm text-charcoal/80">Subject</span>
            <input type="text" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </label>
          <label className="block">
            <span className="text-sm text-charcoal/80">Message</span>
            <textarea rows={6} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
          </label>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-charcoal text-primary-foreground px-6 py-3 text-sm hover:opacity-90 transition">
            <Send className="h-4 w-4" /> Send message
          </button>
        </form>
      </div>

      <CalloutDisclaimer />
    </PageShell>
  );
}
