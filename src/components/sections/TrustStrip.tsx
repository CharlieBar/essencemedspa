import { ShieldCheck, Award, Sparkles, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface TrustItem {
  icon: "shield" | "award" | "sparkle" | "clock";
  label: string;
}

const ICONS = {
  shield: ShieldCheck,
  award: Award,
  sparkle: Sparkles,
  clock: Clock,
};

interface TrustStripProps {
  items?: TrustItem[];
}

const DEFAULT_ITEMS: TrustItem[] = [
  { icon: "award", label: "4.9★ · 463+ Google Reviews" },
  { icon: "shield", label: "Licensed & Trained Specialists" },
  { icon: "sparkle", label: "Free Consultations" },
  { icon: "clock", label: "Transparent, Per-Unit Pricing" },
];

export function TrustStrip({ items = DEFAULT_ITEMS }: TrustStripProps) {
  return (
    <section className="relative w-full border-y border-white/5 bg-essence-black-soft">
      <div className="px-page py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.label} delay={i * 0.04}>
                <div className="flex items-center gap-4 text-essence-white-off">
                  <Icon className="h-5 w-5 shrink-0 text-essence-accent" strokeWidth={1.5} />
                  <span className="text-[0.75rem] uppercase tracking-brand">
                    {item.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
