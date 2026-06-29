import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ChecklistCard, CalloutDisclaimer } from "@/components/site";

export const Route = createFileRoute("/travel-safety")({
  head: () => ({
    meta: [
      { title: "Travel Safety — Nerine Harbor" },
      { name: "description", content: "Educational guidance for solo, group, and international travel — planning, packing, and on-the-ground awareness." },
      { property: "og:title", content: "Travel Safety — Nerine Harbor" },
      { property: "og:description", content: "Plan thoughtful, confident travel." },
    ],
  }),
  component: TravelSafety,
});

function TravelSafety() {
  return (
    <PageShell
      eyebrow="Travel Safety"
      title="Travel thoughtfully. Arrive confidently."
      intro="Whether you're heading across town or across an ocean, a little preparation transforms how you experience the journey."
    >
      <div className="grid md:grid-cols-2 gap-5">
        <ChecklistCard title="Before You Go" items={[
          "Research your destination — neighborhoods, customs, transit",
          "Share your itinerary with a trusted person",
          "Photograph passport, ID, and key documents; store securely",
          "Note the local emergency number and nearest embassy",
          "Set up an international plan or eSIM if traveling abroad",
        ]} />
        <ChecklistCard title="What to Pack" items={[
          "Portable charger and the right plug adapter",
          "A small flashlight or headlamp",
          "Copies of reservations and contact info on paper",
          "Basic first-aid items and personal medications",
          "A door wedge or portable door lock for unfamiliar lodging",
        ]} />
        <ChecklistCard title="At Your Destination" items={[
          "Identify two routes back to your lodging",
          "Use licensed taxis or trusted ride apps",
          "Keep one hand free; avoid distractions in new areas",
          "Trust your instincts — leave situations that feel off",
          "Check in with someone at home daily",
        ]} />
        <ChecklistCard title="Solo Travel" items={[
          "Choose accommodations with strong reviews on safety",
          "Carry only one card and ID when out exploring",
          "Walk with purpose — even when you're lost",
          "Befriend hotel staff; they often know the area best",
          "Celebrate small wins — solo travel is empowering",
        ]} />
      </div>
      <CalloutDisclaimer />
    </PageShell>
  );
}
