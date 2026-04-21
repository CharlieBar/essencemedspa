interface MarqueeStripProps {
  items?: string[];
}

const DEFAULT_ITEMS = [
  "Botox · $15/unit",
  "Hydrofacial",
  "Juvederm Fillers",
  "PRP Hair Restoration",
  "Deep Tissue Massage",
  "RF Micro-Needling",
  "IV Therapy",
  "Jet Plasma",
  "Custom Facial",
  "Bamboo Suite",
];

export function MarqueeStrip({ items = DEFAULT_ITEMS }: MarqueeStripProps) {
  const doubled = [...items, ...items];
  return (
    <div className="w-full overflow-hidden bg-essence-accent py-5">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center pr-16 font-display text-base uppercase tracking-marquee text-essence-black"
          >
            <span>{item}</span>
            <span aria-hidden className="ml-16 h-px w-8 bg-essence-black/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
