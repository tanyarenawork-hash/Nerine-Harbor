import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ChecklistCard, CalloutDisclaimer } from "@/components/site";
import { Download } from "lucide-react";

export const Route = createFileRoute("/preparedness")({
  head: () => ({
    meta: [
      { title: "Preparedness — Nerine Harbor" },
      { name: "description", content: "Educational checklists and frameworks for everyday preparedness — home, emergencies, and personal planning." },
      { property: "og:title", content: "Preparedness — Nerine Harbor" },
      { property: "og:description", content: "Calm, practical preparedness checklists." },
    ],
  }),
  component: Preparedness,
});

function Preparedness() {
  return (
    <PageShell
      eyebrow="Preparedness"
      title="Planning is a quiet form of care."
      intro="Use these checklists to think ahead in small, manageable steps. Preparedness isn't about anticipating the worst — it's about freeing yourself to live confidently."
    >
      <div className="grid md:grid-cols-2 gap-5">
        <ChecklistCard title="Home & Apartment" items={[
          "Confirm locks on all entry doors and ground-floor windows",
          "Install or test smoke and CO detectors",
          "Identify two exit routes from your home",
          "Keep a small flashlight and backup batteries accessible",
          "Save building management and trusted neighbor contacts",
        ]} />
        <ChecklistCard title="Emergency Planning" items={[
          "Designate an out-of-area contact everyone can call",
          "Keep a printed list of emergency numbers",
          "Prepare a small go-bag with essentials and copies of IDs",
          "Store digital copies of important documents securely",
          "Discuss a meet-up plan with people you live with",
        ]} />
        <ChecklistCard title="Personal Planning" items={[
          "Share your general schedule with someone you trust",
          "Keep your phone charged before heading out",
          "Memorize a few key phone numbers",
          "Carry a small amount of cash and a backup card",
          "Note nearby safe public spaces in routes you take often",
        ]} />
        <ChecklistCard title="Daily Awareness" items={[
          "Pause to observe surroundings when entering new spaces",
          "Trust early instincts — they're informational, not anxious",
          "Have a calm exit plan for any situation that feels off",
          "Keep one hand free when walking in unfamiliar areas",
          "Acknowledge what's already going well in your routine",
        ]} />
      </div>

      <div className="mt-12 rounded-3xl border border-border bg-lavender-soft/60 p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-charcoal/70">Downloadable</div>
          <h3 className="mt-1 font-display text-2xl text-charcoal">Printable Preparedness Checklist</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl">
            A clean, printable PDF version of these checklists for your fridge, planner, or travel folder.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-charcoal text-primary-foreground px-6 py-3 text-sm hover:opacity-90 transition self-start md:self-auto">
          <Download className="h-4 w-4" /> Download PDF
        </button>
      </div>

      <CalloutDisclaimer />
    </PageShell>
  );
}
