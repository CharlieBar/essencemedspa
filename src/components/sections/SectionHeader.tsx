import { Reveal } from "@/components/ui/Reveal";
import { Headline } from "@/components/ui/Headline";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  number?: string;
  headline: string;
  subheadline?: string;
  align?: "left" | "center";
  size?: "default" | "large";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  number,
  headline,
  subheadline,
  align = "left",
  size = "default",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {(eyebrow || number) && (
        <Reveal>
          <div
            className={cn(
              "eyebrow mb-6 flex items-center gap-4 text-essence-accent",
              align === "center" && "justify-center",
            )}
          >
            {number && (
              <span className="font-display text-essence-muted">{number}</span>
            )}
            <span className="h-px w-8 bg-essence-accent" aria-hidden />
            {eyebrow && <span>{eyebrow}</span>}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <Headline
          text={headline}
          className={cn(
            "font-normal leading-[1.05]",
            size === "large" ? "text-fluid-services" : "text-fluid-about",
          )}
        />
      </Reveal>
      {subheadline && (
        <Reveal delay={0.2}>
          <p
            className={cn(
              "mt-8 text-[1.05rem] leading-[1.9] text-essence-white-off",
              align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
            )}
          >
            {subheadline}
          </p>
        </Reveal>
      )}
    </div>
  );
}
