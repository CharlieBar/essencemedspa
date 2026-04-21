import { Reveal } from "@/components/ui/Reveal";
import type { Stat } from "@/types/content";

interface StatsBarProps {
  stats: Stat[];
  variant?: "dark" | "accent";
}

export function StatsBar({ stats, variant = "dark" }: StatsBarProps) {
  const bg = variant === "accent" ? "bg-essence-accent text-essence-black" : "bg-essence-black text-essence-white";
  const labelColor = variant === "accent" ? "text-essence-black/70" : "text-essence-muted";
  return (
    <section className={`relative w-full border-y border-white/5 ${bg}`}>
      <div className="px-page py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div>
                <div className="font-display text-5xl md:text-6xl leading-none">
                  {s.value}
                  {s.suffix && <span className="text-essence-accent">{s.suffix}</span>}
                </div>
                <div className={`mt-3 text-[0.7rem] uppercase tracking-brand ${labelColor}`}>
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
