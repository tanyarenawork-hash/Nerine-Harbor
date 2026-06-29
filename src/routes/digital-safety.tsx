import { createFileRoute } from "@tanstack/react-router";
import { PageShell, ChecklistCard, CalloutDisclaimer } from "@/components/site";

export const Route = createFileRoute("/digital-safety")({
  head: () => ({
    meta: [
      { title: "Digital Safety — Nerine Harbor" },
      { name: "description", content: "Educational guidance on digital privacy, account security, social media, and protecting personal information online." },
      { property: "og:title", content: "Digital Safety — Nerine Harbor" },
      { property: "og:description", content: "Protect your digital presence with simple, durable habits." },
    ],
  }),
  component: DigitalSafety,
});

function DigitalSafety() {
  return (
    <PageShell
      eyebrow="Digital Safety"
      title="Your digital life, protected with care."
      intro="A few thoughtful habits make a meaningful difference. These foundational steps help protect your accounts, devices, and personal data."
    >
      <div className="grid md:grid-cols-2 gap-5">
        <ChecklistCard title="Accounts & Passwords" items={[
          "Use a reputable password manager",
          "Create unique passwords for every important account",
          "Turn on two-factor authentication wherever offered",
          "Review recovery emails and phone numbers yearly",
          "Watch for sign-in alerts from unfamiliar locations",
        ]} />
        <ChecklistCard title="Devices" items={[
          "Keep your operating system and apps updated",
          "Use a screen lock with a strong passcode or biometrics",
          "Encrypt your phone and laptop (often on by default)",
          "Avoid public USB charging ports; use your own adapter",
          "Be cautious on unfamiliar public Wi-Fi — consider a VPN",
        ]} />
        <ChecklistCard title="Social Media" items={[
          "Review privacy settings on each platform you use",
          "Be mindful about sharing real-time location",
          "Limit posts that reveal home, school, or work address",
          "Audit who can see your followers and friends list",
          "Pause before posting — would you share this with a stranger?",
        ]} />
        <ChecklistCard title="Personal Information" items={[
          "Search yourself periodically to see what's public",
          "Request removal from people-search sites you find",
          "Use email aliases for sign-ups when possible",
          "Shred mail with personal info before recycling",
          "Be cautious about unsolicited calls or texts asking for info",
        ]} />
      </div>
      <CalloutDisclaimer />
    </PageShell>
  );
}
