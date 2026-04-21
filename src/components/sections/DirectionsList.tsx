import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

interface DirectionsListProps {
  eyebrow?: string;
  number?: string;
  headline: string;
  items: { method: string; description: string }[];
}

export function DirectionsList({
  eyebrow,
  number,
  headline,
  items,
}: DirectionsListProps) {
  return (
    <section className="relative bg-essence-black-soft section-y">
      <div className="px-page">
        <SectionHeader
          number={number}
          eyebrow={eyebrow}
          headline={headline}
          className="mb-20"
        />
        <div className="grid gap-px bg-white/5 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.method} delay={i * 0.08}>
              <div className="flex h-full flex-col bg-essence-black-soft p-10 transition-colors duration-500 hover:bg-essence-black">
                <h3 className="font-display text-xl text-essence-white mb-4">
                  {item.method}
                </h3>
                <p className="text-[0.95rem] leading-[1.8] text-essence-white-off">
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
