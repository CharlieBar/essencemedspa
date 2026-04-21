import { cn } from "@/lib/cn";

interface HeadlineProps {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
}

/**
 * Renders a headline string and converts inline `*word*` segments into
 * gold italic Instrument Serif emphasis spans. Used for Bodoni headings.
 */
export function Headline({ text, as: Tag = "h2", className, id }: HeadlineProps) {
  const parts = parseEmphasis(text);
  return (
    <Tag id={id} className={cn("headline font-display text-essence-white", className)}>
      {parts.map((part, i) =>
        part.italic ? (
          <em key={i}>{part.text}</em>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </Tag>
  );
}

function parseEmphasis(s: string): { text: string; italic: boolean }[] {
  // Convert *word* → italic emphasis. Headlines that don't use markers
  // simply render as one normal span.
  const result: { text: string; italic: boolean }[] = [];
  const regex = /\*([^*]+)\*/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(s)) !== null) {
    if (m.index > lastIndex) {
      result.push({ text: s.slice(lastIndex, m.index), italic: false });
    }
    result.push({ text: m[1], italic: true });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < s.length) {
    result.push({ text: s.slice(lastIndex), italic: false });
  }
  return result.length ? result : [{ text: s, italic: false }];
}
