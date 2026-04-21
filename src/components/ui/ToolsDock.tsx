"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Calculator, Calendar, Sparkles, Target, X } from "lucide-react";

const tools = [
  {
    id: "treatment-finder",
    label: "Treatment Finder",
    tagline: "4 questions · 2 min",
    href: "/tools/treatment-finder",
    Icon: Target,
  },
  {
    id: "botox-calculator",
    label: "Botox Calculator",
    tagline: "Instant estimate",
    href: "/tools/botox-calculator",
    Icon: Calculator,
  },
  {
    id: "pre-event-planner",
    label: "Event Planner",
    tagline: "Glow-up timeline",
    href: "/tools/pre-event-planner",
    Icon: Calendar,
  },
];

export function ToolsDock() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!mounted) return null;
  if (pathname?.startsWith("/tools")) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[999] print:hidden">
      {open && (
        <div
          role="dialog"
          aria-label="Free tools menu"
          className="mb-4 w-[19rem] border border-white/10 bg-essence-black-soft/95 shadow-2xl backdrop-blur-nav"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2 text-essence-accent">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span className="eyebrow-sm">Free Tools</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close tools menu"
              className="p-1 text-essence-muted transition-colors duration-300 hover:text-essence-white"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
          <ul className="divide-y divide-white/5">
            {tools.map((tool) => (
              <li key={tool.id}>
                <Link
                  href={tool.href}
                  className="group flex items-center gap-4 px-5 py-4 transition-colors duration-300 hover:bg-essence-black"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-essence-accent/40 text-essence-accent transition-all duration-300 group-hover:border-essence-accent group-hover:bg-essence-accent group-hover:text-essence-white">
                    <tool.Icon className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-display text-[1rem] text-essence-white leading-tight transition-colors duration-300 group-hover:text-essence-accent">
                      {tool.label}
                    </span>
                    <span className="mt-1 block text-[0.7rem] text-essence-muted">
                      {tool.tagline}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-essence-muted transition-all duration-300 group-hover:text-essence-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/tools"
            className="block border-t border-white/10 px-5 py-3 text-center eyebrow-sm text-essence-white-off transition-colors duration-300 hover:text-essence-accent"
          >
            View All Tools →
          </Link>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close tools menu" : "Open free tools"}
        className="group relative flex h-14 w-14 items-center justify-center border border-essence-accent bg-essence-accent text-essence-white shadow-lg shadow-essence-accent/30 transition-all duration-500 ease-essence hover:bg-essence-accent-dark"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-1 border border-essence-accent/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {open ? (
          <X className="h-5 w-5" strokeWidth={1.75} />
        ) : (
          <Sparkles className="h-5 w-5" strokeWidth={1.75} />
        )}
        {!open && (
          <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap border border-white/10 bg-essence-black-soft px-3 py-1.5 text-[0.65rem] uppercase tracking-eyebrow text-essence-white-off opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Free Tools
          </span>
        )}
      </button>
    </div>
  );
}
