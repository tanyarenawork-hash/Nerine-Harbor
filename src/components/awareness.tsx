import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

export function useIsOctober() {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(new Date().getMonth() === 9), []);
  return on;
}

export function PinkRibbon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" className={className} aria-hidden="true" fill="none">
      <path
        d="M12 2c-3 0-5 2.2-5 5 0 2.4 1.4 4.6 3 7L4 28l3.5 1.5L12 19l4.5 10.5L20 28l-6-14c1.6-2.4 3-4.6 3-7 0-2.8-2-5-5-5Zm0 3c1.3 0 2 .9 2 2.1 0 1.2-.8 2.6-2 4.4-1.2-1.8-2-3.2-2-4.4C10 5.9 10.7 5 12 5Z"
        className="fill-pink-ribbon"
      />
    </svg>
  );
}

export function AwarenessStrip() {
  const on = useIsOctober();
  if (!on) return null;
  return (
    <div className="bg-pink-ribbon-soft border-b border-pink-ribbon/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-2 flex items-center justify-center gap-2 text-xs sm:text-sm text-charcoal text-center">
        <PinkRibbon className="h-4 w-3 shrink-0" />
        <span>October is <strong className="font-medium">Breast Cancer Awareness Month</strong>.</span>
        <a href="https://www.nationalbreastcancer.org/early-detection-of-breast-cancer/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-80 inline-flex items-center gap-1">
          Learn about early detection <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

export function HeaderRibbon() {
  const on = useIsOctober();
  if (!on) return null;
  return <span title="Breast Cancer Awareness Month"><PinkRibbon className="h-5 w-4" /></span>;
}

export function FooterRibbon() {
  const on = useIsOctober();
  if (!on) return null;
  return (
    <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
      <PinkRibbon className="h-4 w-3" /> Standing in awareness during Breast Cancer Awareness Month.
    </p>
  );
}

export function AwarenessCard() {
  const on = useIsOctober();
  if (!on) return null;
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20">
      <div className="rounded-3xl border border-pink-ribbon/30 bg-pink-ribbon-soft p-8 md:p-12 grid md:grid-cols-[auto_1fr] gap-8 items-center">
        <span className="grid place-items-center h-20 w-20 rounded-full bg-background shadow-[var(--shadow-soft)]">
          <PinkRibbon className="h-12 w-9" />
        </span>
        <div>
          <div className="text-xs uppercase tracking-wider text-charcoal/70">In awareness · October</div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl text-charcoal text-balance">Breast Cancer Awareness Month</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl text-balance">
            Early detection saves lives. We stand with survivors, those in treatment, and the families who love them. Learn about screenings and talk with your healthcare provider about what's right for you.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a href="https://www.nationalbreastcancer.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-charcoal text-primary-foreground px-5 py-2.5 hover:opacity-90">
              National Breast Cancer Foundation <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a href="https://www.cancer.org/cancer/types/breast-cancer.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 hover:bg-muted">
              American Cancer Society <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Educational information only — not medical advice. Please consult a healthcare professional.</p>
        </div>
      </div>
    </section>
  );
}
