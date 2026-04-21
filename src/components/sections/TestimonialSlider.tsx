"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import type { TestimonialItem } from "@/types/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

interface TestimonialSliderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
}

export function TestimonialSlider({
  eyebrow,
  headline,
  subheadline,
  testimonials,
}: TestimonialSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  const t = testimonials[index];

  return (
    <section className="relative bg-essence-black section-y overflow-hidden">
      <div className="px-page-alt">
        <SectionHeader
          number="04"
          eyebrow={eyebrow}
          headline={headline}
          subheadline={subheadline}
          align="center"
          className="mb-16"
        />

        <div className="relative mx-auto max-w-testimonial">
          <Quote
            aria-hidden
            className="mx-auto h-16 w-16 text-essence-accent/30"
            strokeWidth={1}
          />
          <Reveal>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                className="text-center"
              >
                <p className="font-editorial italic text-fluid-quote leading-[1.4] text-essence-white">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-12 flex flex-col items-center gap-2">
                  {t.rating && (
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-essence-gold text-essence-gold" strokeWidth={1} />
                      ))}
                    </div>
                  )}
                  <div className="font-body text-[0.85rem] uppercase tracking-brand text-essence-gold">
                    {t.author}
                  </div>
                  {t.location && (
                    <div className="text-[0.75rem] tracking-role text-essence-muted">
                      {t.location}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-essence-white transition-all duration-300 hover:border-essence-accent hover:text-essence-accent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-1.5 w-8 transition-all duration-300 ${
                    i === index ? "bg-essence-accent" : "bg-white/10 hover:bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-essence-white transition-all duration-300 hover:border-essence-accent hover:text-essence-accent"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
