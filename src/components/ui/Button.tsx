import Link from "next/link";
import { cn } from "@/lib/cn";
import type { CTA } from "@/types/content";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "default" | "sm" | "lg";

interface ButtonProps {
  cta?: CTA;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
}

const base =
  "relative inline-flex items-center justify-center font-body uppercase tracking-hero-btn text-[0.75rem] font-medium overflow-hidden transition-colors duration-500 ease-essence rounded-none whitespace-nowrap select-none group";

const sizeMap: Record<Size, string> = {
  sm: "px-6 py-3",
  default: "px-12 py-5",
  lg: "px-16 py-7 text-[0.8rem] tracking-btn",
};

const variantMap: Record<Variant, { wrapper: string; fill: string }> = {
  primary: {
    wrapper:
      "bg-essence-accent text-essence-white border border-essence-accent hover:text-essence-black",
    fill: "bg-essence-white origin-left scale-x-0 group-hover:scale-x-100",
  },
  secondary: {
    wrapper:
      "bg-essence-white text-essence-black border border-essence-white hover:text-essence-white",
    fill: "bg-essence-accent origin-bottom scale-y-0 group-hover:scale-y-100",
  },
  ghost: {
    wrapper:
      "bg-transparent text-essence-white border border-white/40 hover:text-essence-black",
    fill: "bg-essence-white origin-left scale-x-0 group-hover:scale-x-100",
  },
  outline: {
    wrapper:
      "bg-transparent text-essence-white border border-essence-accent hover:text-essence-white",
    fill: "bg-essence-accent origin-bottom scale-y-0 group-hover:scale-y-100",
  },
};

export function Button({
  cta,
  href,
  variant,
  size = "default",
  className,
  children,
  ariaLabel,
}: ButtonProps) {
  const v: Variant = variant ?? cta?.variant ?? "primary";
  const styles = variantMap[v];
  const target = href ?? cta?.href ?? "#";
  const label = children ?? cta?.text;

  const isExternal = target.startsWith("http") || target.startsWith("tel:") || target.startsWith("mailto:");

  const inner = (
    <>
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 transition-transform duration-500 ease-essence",
          styles.fill,
        )}
      />
      <span className="relative z-10">{label}</span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={target}
        className={cn(base, sizeMap[size], styles.wrapper, className)}
        target={target.startsWith("http") ? "_blank" : undefined}
        rel={target.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      href={target}
      className={cn(base, sizeMap[size], styles.wrapper, className)}
      aria-label={ariaLabel}
    >
      {inner}
    </Link>
  );
}
