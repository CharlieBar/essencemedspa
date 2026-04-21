"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { HeroSection as HeroData } from "@/types/content";
import { Button } from "@/components/ui/Button";

interface HeroSectionProps {
  data: HeroData;
  variant?: "home" | "page";
}

export function HeroSection({ data, variant = "home" }: HeroSectionProps) {
  const reduce = useReducedMotion();
  const ease = [0.65, 0, 0.35, 1] as const;

  const titleWords = splitToLines(data.headline);

  return (
    <section
      className="relative isolate flex min-h-[700px] w-full items-center overflow-hidden bg-essence-black"
      style={{ height: variant === "home" ? "100vh" : "auto", minHeight: variant === "home" ? "700px" : "640px" }}
    >
      {/* Background image */}
      {data.image && (
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduce ? 0 : 1.0, delay: reduce ? 0 : 0.1, ease }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[55%]">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          {/* Desktop horizontal gradient overlay */}
          <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-essence-black via-essence-black/95 via-40% to-transparent" />
          {/* Mobile vertical overlay */}
          <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-essence-black via-essence-black/85 to-essence-black/40" />
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 px-page w-full">
        <div className="max-w-hero-content">
          {data.eyebrow && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.2, ease }}
              className="mb-12 flex items-center gap-6"
            >
              <span className="h-px w-12 bg-essence-accent" aria-hidden />
              <span className="eyebrow text-essence-white-off">
                {data.eyebrow}
              </span>
            </motion.div>
          )}

          <h1 className="headline font-display text-fluid-hero font-normal text-essence-white" style={{ lineHeight: 0.95 }}>
            {titleWords.map((line, lineIndex) => (
              <span key={lineIndex} className="block">
                {line.map((word, wordIndex) => {
                  const totalWordIndex = titleWords.slice(0, lineIndex).reduce((a, b) => a + b.length, 0) + wordIndex;
                  return (
                    <span key={wordIndex} className="inline-block overflow-hidden align-bottom mr-3 last:mr-0">
                      <motion.span
                        initial={reduce ? false : { y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: reduce ? 0 : 0.7,
                          delay: reduce ? 0 : 0.3 + totalWordIndex * 0.05,
                          ease,
                        }}
                        className="inline-block"
                      >
                        {renderEmphasis(word)}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          {data.subheadline && (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.55, ease }}
              className="mt-8 max-w-2xl text-[1.1rem] leading-[1.9] text-essence-white-off"
            >
              {data.subheadline}
            </motion.p>
          )}

          {data.badge && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.65, ease }}
              className="mt-8 inline-flex items-center gap-2 border border-essence-gold/40 px-4 py-2 text-[0.7rem] uppercase tracking-brand text-essence-gold"
            >
              {data.badge}
            </motion.div>
          )}

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.75, ease }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <Button cta={data.primaryCTA} size="lg" />
            {data.secondaryCTA && (
              <a
                href={data.secondaryCTA.href}
                className="group inline-flex items-center gap-3 font-body text-[0.75rem] uppercase tracking-hero-btn text-essence-white"
              >
                <span className="relative">
                  {data.secondaryCTA.text}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-essence-accent transition-transform duration-500 ease-essence group-hover:origin-left group-hover:scale-x-100" />
                </span>
                <ArrowRight className="h-4 w-4 text-essence-accent transition-transform duration-500 ease-essence group-hover:translate-x-2" strokeWidth={1.5} />
              </a>
            )}
          </motion.div>

          {data.stats && data.stats.length > 0 && variant === "home" && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.9, ease }}
              className="mt-16 hidden md:flex items-end gap-12 border-l border-essence-accent pl-8"
            >
              {data.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl text-essence-white">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="mt-1 text-[0.7rem] uppercase tracking-ls-nav text-essence-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll cue */}
      {variant === "home" && (
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 1.0 }}
          className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-essence-muted"
          aria-hidden
        >
          <span className="text-[0.65rem] uppercase tracking-brand">Scroll to Explore</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-essence-accent" strokeWidth={1.5} />
        </motion.div>
      )}
    </section>
  );
}

function splitToLines(headline: string): string[][] {
  // Naïve split: break headlines into 2–3 lines based on word count
  const words = headline.split(/\s+/);
  if (words.length <= 4) return [words];
  if (words.length <= 7) {
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid), words.slice(mid)];
  }
  const third = Math.ceil(words.length / 3);
  return [words.slice(0, third), words.slice(third, third * 2), words.slice(third * 2)];
}

function renderEmphasis(word: string): React.ReactNode {
  // Word may contain *...* segments
  if (!word.includes("*")) return word;
  const parts: React.ReactNode[] = [];
  const re = /\*([^*]+)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(word)) !== null) {
    if (m.index > last) parts.push(<span key={key++}>{word.slice(last, m.index)}</span>);
    parts.push(
      <em key={key++} className="font-editorial italic text-essence-gold">
        {m[1]}
      </em>,
    );
    last = re.lastIndex;
  }
  if (last < word.length) parts.push(<span key={key++}>{word.slice(last)}</span>);
  return parts;
}
