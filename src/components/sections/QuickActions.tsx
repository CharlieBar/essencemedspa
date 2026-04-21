import { Calendar, Phone, Mail, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import type { CTA } from "@/types/content";

const iconMap: Record<string, LucideIcon> = {
  calendar: Calendar,
  phone: Phone,
  mail: Mail,
};

interface QuickActionsItem {
  icon: string;
  title: string;
  description: string;
  cta: CTA;
}

interface QuickActionsProps {
  items: QuickActionsItem[];
}

export function QuickActions({ items }: QuickActionsProps) {
  return (
    <section className="relative bg-essence-black section-y">
      <div className="px-page">
        <div className="grid gap-px bg-white/5 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Calendar;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex h-full flex-col bg-essence-black p-10 transition-colors duration-500 hover:bg-essence-black-soft">
                  {/* Icon circle */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-essence-accent/40 text-essence-accent">
                    <Icon className="h-6 w-6" strokeWidth={1.25} />
                  </div>

                  <h3 className="font-display text-2xl text-essence-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[0.9rem] leading-[1.8] text-essence-white-off mb-8 flex-1">
                    {item.description}
                  </p>

                  <Button cta={item.cta} variant="outline" size="sm" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
