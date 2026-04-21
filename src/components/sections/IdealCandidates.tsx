import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

interface IdealCandidatesProps {
  eyebrow?: string;
  headline: string;
  good: string[];
  alternatives?: { concern: string; recommendation: string }[];
  number?: string;
  surface?: "black" | "soft";
}

export function IdealCandidates({
  eyebrow,
  headline,
  good,
  alternatives,
  number,
  surface = "soft",
}: IdealCandidatesProps) {
  const isBlack = surface === "black";
  const sectionBg = isBlack ? "bg-essence-black" : "bg-essence-black-soft";
  const cardBg = isBlack ? "bg-essence-black-soft" : "bg-essence-black";
  return (
    <section className={`relative ${sectionBg} section-y`}>
      <div className="px-page">
        <SectionHeader
          number={number}
          eyebrow={eyebrow}
          headline={headline}
          className="mb-16"
        />

        <div className="grid gap-px bg-white/5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full bg-essence-black-soft p-10">
              <h3 className="text-[0.7rem] uppercase tracking-brand text-essence-accent">
                Good Candidates If
              </h3>
              <ul className="mt-8 space-y-5">
                {good.map((g) => (
                  <li key={g} className="flex items-start gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center border border-essence-accent text-essence-accent">
                      <Check className="h-3 w-3" strokeWidth={2} />
                    </span>
                    <span className="text-[0.95rem] leading-[1.7] text-essence-white-off">
                      {g}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {alternatives && alternatives.length > 0 && (
            <Reveal delay={0.1}>
              <div className={`h-full ${cardBg} p-10`}>
                <h3 className="text-[0.7rem] uppercase tracking-brand text-essence-gold">
                  Better Alternatives For
                </h3>
                <ul className="mt-8 space-y-6">
                  {alternatives.map((alt) => (
                    <li key={alt.concern} className="border-l border-essence-gold/40 pl-5">
                      <div className="font-display text-base text-essence-white">
                        {alt.concern}
                      </div>
                      <div className="mt-2 flex items-start gap-2 text-[0.85rem] leading-[1.7] text-essence-white-off">
                        <ArrowRight
                          className="mt-1 h-3.5 w-3.5 shrink-0 text-essence-gold"
                          strokeWidth={1.5}
                        />
                        <span>{alt.recommendation}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
