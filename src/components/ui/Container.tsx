import { cn } from "@/lib/cn";

interface ContainerProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  alt?: boolean;
  children: React.ReactNode;
}

export function Container({
  as: Tag = "div",
  className,
  alt = false,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn(alt ? "px-page-alt" : "px-page", "w-full", className)}>
      {children}
    </Tag>
  );
}
