import type { KeyFact } from "@/types/content";
import { Reveal } from "@/components/ui/Reveal";

interface KeyFactsSidebarProps {
  facts: KeyFact[];
  title?: string;
}

export function KeyFactsSidebar({ facts, title = "Quick Facts" }: KeyFactsSidebarProps) {
  return (
    <Reveal>
      <aside className="border border-white/10 bg-essence-black p-10">
        <h3 className="text-[0.7rem] uppercase tracking-brand text-essence-accent">
          {title}
        </h3>
        <dl className="mt-8 divide-y divide-white/10">
          {facts.map((f) => (
            <div key={f.label} className="flex items-baseline justify-between gap-6 py-4 first:pt-0 last:pb-0">
              <dt className="text-[0.7rem] uppercase tracking-brand text-essence-muted">
                {f.label}
              </dt>
              <dd className="font-display text-base text-essence-white text-right">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </aside>
    </Reveal>
  );
}
