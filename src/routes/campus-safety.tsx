import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ChecklistCard, CalloutDisclaimer } from "@/components/site";

export const Route = createFileRoute("/campus-safety")({
  head: () => ({
    meta: [
      { title: "Campus Safety — Nerine Harbor" },
      { name: "description", content: "Educational guidance for students navigating dorms, study spaces, transit, and campus social life." },
      { property: "og:title", content: "Campus Safety — Nerine Harbor" },
      { property: "og:description", content: "Practical campus safety knowledge for students." },
    ],
  }),
  component: CampusSafety,
});

function CampusSafety() {
  return (
    <PageShell
      eyebrow="Campus Safety"
      title="Confidence on campus."
      intro="College years are about growth, learning, and independence. These resources help you feel grounded as you explore them."
    >
      <div className="grid md:grid-cols-2 gap-5">
        <ChecklistCard title="In Your Dorm or Apartment" items={[
          "Lock your door — even for short trips down the hall",
          "Know your RA and building security contacts",
          "Keep valuables out of sight from windows",
          "Test smoke detectors and identify exits",
          "Be thoughtful about who you grant entry to common areas",
        ]} />
        <ChecklistCard title="Walking on Campus" items={[
          "Use well-lit, well-traveled paths after dark",
          "Save your campus escort or safety service number",
          "Keep one earbud out so you can hear surroundings",
          "Walk with friends when possible — it's also more fun",
          "Note blue-light emergency phones along your routes",
        ]} />
        <ChecklistCard title="Social Settings" items={[
          "Watch your drink being made; keep it with you",
          "Set a check-in plan with a friend before going out",
          "Trust your instincts about people and situations",
          "Know how you're getting home before you leave",
          "Look out for friends — and let them look out for you",
        ]} />
        <ChecklistCard title="Campus Resources" items={[
          "Bookmark your campus safety department's site",
          "Learn what counseling and health services are offered",
          "Save Title IX and student advocacy contacts",
          "Know where the nearest hospital or urgent care is",
          "Take advantage of any free safety workshops on campus",
        ]} />
      </div>
      <CalloutDisclaimer />
    </PageShell>
  );
}
