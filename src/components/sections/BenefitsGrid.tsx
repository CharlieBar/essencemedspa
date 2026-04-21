import type { BenefitItem } from "@/types/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

interface BenefitsGridProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  items: BenefitItem[];
  number?: string;
  surface?: "black" | "soft";
}

export function BenefitsGrid({ eyebrow, headline, subheadline, items, number, surface = "black" }: BenefitsGridProps) {
  const isBlack = surface === "black";
  const sectionBg = isBlack ? "bg-essence-black" : "bg-essence-black-soft";
  const cardBg = isBlack ? "bg-essence-black-soft" : "bg-essence-black";
  const cardHoverBg = isBlack ? "hover:bg-essence-black" : "hover:bg-essence-black-soft";
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
        <div className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((b, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={b.area} delay={(i % 3) * 0.06}>
                <div className={`group relative h-full overflow-hidden ${cardBg} p-10 transition-colors duration-500 ${cardHoverBg}`}>
                  <span
                    aria-hidden
                    className="absolute right-8 top-8 font-display text-5xl leading-none text-essence-accent/10 transition-colors group-hover:text-essence-accent/30"
                  >
                    {num}
                  </span>
                  <h3 className="font-display text-2xl leading-tight text-essence-white">
                    {b.area}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-[1.8] text-essence-white-off">
                    {b.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
