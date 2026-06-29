import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, BookOpen, Compass, GraduationCap, Wifi, Heart, Users, Download, Sparkles, ArrowRight } from "lucide-react";
import { FeatureCard, CalloutDisclaimer } from "@/components/site";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nerine Harbor — Knowledge Creates Confidence" },
      { name: "description", content: "Educational safety, preparedness, and awareness resources empowering women through practical knowledge and trusted information." },
      { property: "og:title", content: "Nerine Harbor — Knowledge Creates Confidence" },
      { property: "og:description", content: "Educational safety, preparedness, and awareness resources for women." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const topics = [
  { icon: ShieldCheck, title: "Personal Safety Education", body: "Foundational awareness practices for everyday environments and routines." },
  { icon: BookOpen, title: "Emergency Planning", body: "Checklists and frameworks to help you prepare a calm, clear plan in advance." },
  { icon: GraduationCap, title: "Campus Safety", body: "Guidance for students navigating dorms, study spaces, and campus life." },
  { icon: Compass, title: "Travel Preparation", body: "Plan thoughtfully — from solo trips to international travel essentials." },
  { icon: Wifi, title: "Digital Privacy", body: "Protect your accounts, devices, and personal data with simple habits." },
  { icon: Heart, title: "Healthy Relationships", body: "Educational material on boundaries, consent, and recognizing patterns." },
  { icon: Users, title: "Community Resources", body: "Curated directories pointing to trusted, established organizations." },
  { icon: Download, title: "Downloadable PDFs", body: "Printable checklists and guides you can save, share, or keep offline." },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 gradient-hero" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1 text-xs tracking-wide uppercase text-charcoal/70">
              <Sparkles className="h-3 w-3 text-gold" /> Educational resource
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl text-charcoal text-balance leading-[1.05]">
              Knowledge creates <em className="not-italic text-charcoal/90 [font-style:italic]">confidence.</em>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl text-balance">
              Nerine Harbor provides educational resources that help women prepare for everyday situations through practical knowledge, safety planning, and trusted information.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/safety-guides" className="inline-flex items-center gap-2 rounded-full bg-charcoal text-primary-foreground px-6 py-3 text-sm hover:opacity-90 transition">
                Explore Safety Guides <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/resources" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm text-foreground hover:bg-muted transition">
                Browse Resources
              </Link>
            </div>
            <p className="mt-8 text-xs text-muted-foreground max-w-md">
              Nerine Harbor is not an emergency, legal, medical, or counseling service. For emergencies, call 911.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] border border-border">
              <img src={heroImg} alt="Soft morning light through sheer curtains evoking calm and safety" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block surface-card px-5 py-4 max-w-[220px]">
              <div className="text-xs uppercase tracking-wider text-charcoal/60">Nerine + Harbor</div>
              <div className="mt-1 text-sm text-charcoal">Resilience, hope, and a place of refuge.</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid md:grid-cols-3 gap-10">
          {[
            { k: "Nerine", v: "Resilience, hope, and beauty." },
            { k: "Harbor", v: "Safety, refuge, and protection." },
            { k: "Purpose", v: "Education that empowers — not fear." },
          ].map((i) => (
            <div key={i.k}>
              <div className="text-xs uppercase tracking-wider text-gold">{i.k}</div>
              <p className="mt-2 font-display text-2xl text-charcoal text-balance">{i.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOPICS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-wider text-charcoal/60">What you'll find</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-charcoal text-balance">A library of calm, practical knowledge.</h2>
          <p className="mt-4 text-muted-foreground text-balance">
            Each topic is designed to be approachable, useful, and grounded — so you can build confidence at your own pace.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topics.map((t) => (
            <FeatureCard key={t.title} icon={t.icon} title={t.title} body={t.body} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="rounded-3xl bg-charcoal text-primary-foreground p-10 md:p-16 grid md:grid-cols-[1fr_auto] gap-8 items-center shadow-[var(--shadow-elegant)]">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-balance">Start with a preparedness checklist.</h2>
            <p className="mt-3 text-primary-foreground/70 max-w-xl text-balance">
              Download printable guides, explore travel and campus modules, or browse our resource directory of trusted organizations.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/preparedness" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm hover:bg-muted transition">
              Preparedness <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/emergency-contacts" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm hover:bg-primary-foreground/10 transition">
              Emergency Info
            </Link>
          </div>
        </div>
        <CalloutDisclaimer />
      </section>
    </div>
  );
}
