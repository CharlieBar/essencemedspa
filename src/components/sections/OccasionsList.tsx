import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

interface OccasionsListProps {
  number?: string;
  eyebrow?: string;
  headline: string;
  items: { occasion: string; description: string }[];
}

export function OccasionsList({
  number,
  eyebrow,
  headline,
  items,
}: OccasionsListProps) {
  return (
    <section className="bg-essence-black-soft section-y">
      <div className="px-page">
        <SectionHeader
          number={number}
          eyebrow={eyebrow}
          headline={headline}
          className="mb-16"
        />
        <div className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.occasion} delay={(i % 3) * 0.05}>
              <div className="bg-essence-black p-10 h-full">
                <h3 className="font-display text-2xl text-essence-white">
                  {item.occasion}
                </h3>
                <p className="text-[0.95rem] leading-[1.8] text-essence-white-off mt-4">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
