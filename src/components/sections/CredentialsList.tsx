import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

interface CredentialsListProps {
  eyebrow?: string;
  number?: string;
  headline: string;
  items: string[];
}

export function CredentialsList({
  eyebrow,
  number,
  headline,
  items,
}: CredentialsListProps) {
  return (
    <section className="relative bg-essence-black section-y">
      <div className="px-page">
        <SectionHeader
          number={number}
          eyebrow={eyebrow}
          headline={headline}
          className="mb-16"
        />
        <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item} delay={(i % 2) * 0.06}>
              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-essence-accent"
                  strokeWidth={1.5}
                />
                <span className="font-body text-[1rem] leading-[1.7] text-essence-white-off">
                  {item}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
