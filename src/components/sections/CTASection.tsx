import { Reveal } from "@/components/ui/Reveal";
import { Headline } from "@/components/ui/Headline";
import { Button } from "@/components/ui/Button";
import type { CTA } from "@/types/content";

interface CTASectionProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  badge?: string;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
  surface?: "black" | "soft";
}

export function CTASection({
  eyebrow,
  headline,
  subheadline,
  badge,
  primaryCTA,
  secondaryCTA,
  surface = "soft",
}: CTASectionProps) {
  const sectionBg = surface === "black" ? "bg-essence-black" : "bg-essence-black-soft";
  return (
    <section className={`relative ${sectionBg} section-y overflow-hidden`}>
      {/* Decorative side rule */}
      <div aria-hidden className="absolute left-0 top-1/2 h-32 w-px -translate-y-1/2 bg-essence-accent" />
      <div aria-hidden className="absolute right-0 top-1/2 h-32 w-px -translate-y-1/2 bg-essence-accent" />

      <div className="px-page-alt mx-auto max-w-4xl text-center">
        {eyebrow && (
          <Reveal>
            <div className="eyebrow mb-8 inline-flex items-center gap-3 text-essence-accent">
              <span className="h-px w-8 bg-essence-accent" aria-hidden />
              <span>{eyebrow}</span>
              <span className="h-px w-8 bg-essence-accent" aria-hidden />
            </div>
          </Reveal>
        )}
        <Reveal delay={0.1}>
          <Headline
            text={headline}
            className="text-fluid-cta leading-[1.05] font-normal"
          />
        </Reveal>
        {subheadline && (
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-cta-text text-[1.1rem] leading-[1.9] text-essence-white-off">
              {subheadline}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Button cta={primaryCTA} size="lg" />
            {secondaryCTA && <Button cta={secondaryCTA} size="lg" />}
          </div>
        </Reveal>
        {badge && (
          <Reveal delay={0.4}>
            <p className="mt-8 text-[0.75rem] uppercase tracking-brand text-essence-gold">
              {badge}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
