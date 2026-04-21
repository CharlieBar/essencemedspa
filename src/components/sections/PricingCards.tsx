import { Check } from "lucide-react";
import type { PricingTier } from "@/types/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

interface PricingCardsProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  tiers: PricingTier[];
  disclaimer?: string;
  number?: string;
  surface?: "black" | "soft";
}

export function PricingCards({
  eyebrow,
  headline,
  subheadline,
  tiers,
  disclaimer,
  number,
  surface = "black",
}: PricingCardsProps) {
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
          {tiers.map((tier, i) => {
            const popular = tier.popular;
            return (
              <Reveal key={tier.name} delay={i * 0.06}>
                <article
                  className={`group relative flex h-full flex-col ${cardBg} p-10 transition-colors duration-500 ${
                    popular ? "ring-1 ring-essence-accent" : cardHoverBg
                  }`}
                >
                  {!popular && (
                    <span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:scale-x-100" />
                  )}
                  {popular && (
                    <span className="absolute -top-px left-0 right-0 mx-auto w-fit bg-essence-accent px-4 py-1 text-[0.6rem] uppercase tracking-brand text-essence-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl leading-tight text-essence-white">
                    {tier.name}
                  </h3>
                  <div className="mt-6 font-display text-5xl text-essence-white leading-none">
                    {tier.price}
                  </div>
                  <p className="mt-6 text-[0.95rem] leading-[1.7] text-essence-white-off">
                    {tier.description}
                  </p>
                  {tier.includes && tier.includes.length > 0 && (
                    <ul className="mt-8 space-y-3 text-[0.85rem] text-essence-white-off">
                      {tier.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-3">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-essence-accent"
                            strokeWidth={1.5}
                          />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        {disclaimer && (
          <Reveal delay={0.2}>
            <p className="mx-auto mt-12 max-w-3xl text-center text-[0.8rem] italic text-essence-muted">
              {disclaimer}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
