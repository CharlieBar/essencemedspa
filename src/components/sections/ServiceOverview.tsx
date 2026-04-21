import type { KeyFact } from "@/types/content";
import { Reveal } from "@/components/ui/Reveal";
import { Headline } from "@/components/ui/Headline";
import { KeyFactsSidebar } from "@/components/sections/KeyFactsSidebar";

interface ServiceOverviewProps {
  headline: string;
  body: string;
  keyFacts: KeyFact[];
  number?: string;
  eyebrow?: string;
}

export function ServiceOverview({
  headline,
  body,
  keyFacts,
  number = "01",
  eyebrow = "Overview",
}: ServiceOverviewProps) {
  const paragraphs = body.split(/\n\n+/).filter(Boolean);
  return (
    <section className="relative bg-essence-black section-y">
      <div className="px-page">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          <div>
            <Reveal>
              <div className="eyebrow mb-6 flex items-center gap-4 text-essence-accent">
                <span className="font-display text-essence-muted">{number}</span>
                <span className="h-px w-8 bg-essence-accent" aria-hidden />
                <span>{eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <Headline
                text={headline}
                className="text-fluid-about font-normal leading-[1.05]"
              />
            </Reveal>
            <div className="mt-10 max-w-2xl space-y-6">
              {paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="text-[1.05rem] leading-[1.95] text-essence-white-off">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:pt-32">
            <KeyFactsSidebar facts={keyFacts} />
          </div>
        </div>
      </div>
    </section>
  );
}
