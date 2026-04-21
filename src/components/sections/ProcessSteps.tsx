import type { ProcessStep } from "@/types/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

interface ProcessStepsProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  steps: ProcessStep[];
  number?: string;
  surface?: "black" | "soft";
}

export function ProcessSteps({ eyebrow, headline, subheadline, steps, number, surface = "soft" }: ProcessStepsProps) {
  const sectionBg = surface === "black" ? "bg-essence-black" : "bg-essence-black-soft";
  return (
    <section className={`relative ${sectionBg} section-y`}>
      <div className="px-page">
        <SectionHeader
          number={number}
          eyebrow={eyebrow}
          headline={headline}
          subheadline={subheadline}
          className="mb-20"
        />

        <ol className="relative mx-auto max-w-4xl">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.06}>
              <li className="relative grid gap-8 border-t border-white/10 py-12 first:border-t-0 md:grid-cols-[140px_1fr] md:gap-12">
                <div className="flex flex-col gap-2">
                  <span className="font-display text-5xl text-essence-accent leading-none">
                    {s.step}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-brand text-essence-muted">
                    Step {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-essence-white md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-[1rem] leading-[1.85] text-essence-white-off">
                    {s.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
