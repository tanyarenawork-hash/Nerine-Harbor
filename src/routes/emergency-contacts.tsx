import { createFileRoute } from "@tanstack/react-router";
import { PageShell, CalloutDisclaimer } from "@/components/site";
import { Phone, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/emergency-contacts")({
  head: () => ({
    meta: [
      { title: "Emergency Contacts — Nerine Harbor" },
      { name: "description", content: "If you are in immediate danger, call 911. Reference list of well-known national hotlines and resources." },
      { property: "og:title", content: "Emergency Contacts — Nerine Harbor" },
      { property: "og:description", content: "Important emergency numbers and trusted national hotlines." },
    ],
  }),
  component: EmergencyContacts,
});

const contacts = [
  { name: "Emergency Services (U.S.)", number: "911", note: "Police, fire, and medical emergencies." },
  { name: "National Domestic Violence Hotline", number: "1-800-799-7233", note: "24/7 confidential support." },
  { name: "RAINN — Sexual Assault Hotline", number: "1-800-656-4673", note: "24/7 confidential support." },
  { name: "988 Suicide & Crisis Lifeline", number: "988", note: "24/7 mental health support in the U.S." },
  { name: "Poison Control (U.S.)", number: "1-800-222-1222", note: "Free, confidential, 24/7." },
  { name: "SAMHSA National Helpline", number: "1-800-662-4357", note: "Substance use and mental health referrals." },
];

function EmergencyContacts() {
  return (
    <PageShell
      eyebrow="Emergency Contacts"
      title="If you are in immediate danger, call 911."
      intro="Nerine Harbor is not an emergency service. The numbers below are well-known U.S. hotlines provided for reference. Please verify local numbers for your area."
    >
      <div className="rounded-3xl border border-rose/50 bg-rose-soft/70 p-6 md:p-8 flex items-start gap-4">
        <AlertCircle className="h-6 w-6 text-charcoal shrink-0 mt-0.5" />
        <div>
          <p className="font-display text-2xl text-charcoal">In an emergency, call 911.</p>
          <p className="mt-2 text-sm text-charcoal/80 leading-relaxed">
            For immediate danger or medical emergencies in the United States, contact your local emergency number right away.
            Outside the U.S., dial your country's local emergency number.
          </p>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {contacts.map((c) => (
          <div key={c.name} className="surface-card p-6">
            <div className="text-xs uppercase tracking-wider text-charcoal/60">{c.note}</div>
            <h3 className="mt-1 font-display text-lg text-charcoal">{c.name}</h3>
            <a href={`tel:${c.number.replace(/[^0-9]/g, "")}`} className="mt-3 inline-flex items-center gap-2 text-charcoal hover:text-charcoal/70">
              <Phone className="h-4 w-4" /> <span className="text-lg">{c.number}</span>
            </a>
          </div>
        ))}
      </div>

      <CalloutDisclaimer />
    </PageShell>
  );
}
