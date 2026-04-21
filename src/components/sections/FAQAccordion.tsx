"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FAQItem } from "@/types/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/sections/SectionHeader";

interface FAQAccordionProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  faqs: FAQItem[];
  number?: string;
  surface?: "black" | "soft";
}

export function FAQAccordion({
  eyebrow,
  headline,
  subheadline,
  faqs,
  number,
  surface = "soft",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const ease = [0.65, 0, 0.35, 1] as const;
  const sectionBg = surface === "black" ? "bg-essence-black" : "bg-essence-black-soft";

  return (
    <section className={`relative ${sectionBg} section-y`}>
      <div className="px-page-alt">
        <SectionHeader
          number={number}
          eyebrow={eyebrow}
          headline={headline}
          subheadline={subheadline}
          align="center"
          className="mb-16"
        />

        <Reveal>
          <div className="mx-auto max-w-3xl divide-y divide-white/10 border-t border-b border-white/10">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.question} className="group relative">
                  <span
                    aria-hidden
                    className={`absolute left-0 top-0 bottom-0 w-0.5 bg-essence-accent origin-top transition-transform duration-500 ease-essence ${
                      isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                    }`}
                  />
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-7 pl-5 text-left transition-colors hover:text-essence-accent"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-xl leading-snug text-essence-white transition-colors group-hover:text-essence-accent">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-essence-accent transition-all duration-500 ease-essence ${
                          isOpen ? "rotate-45 border-essence-accent bg-essence-accent/10" : ""
                        }`}
                        aria-hidden
                      >
                        <Plus className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.4, ease }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pl-5 pr-16 text-[0.95rem] leading-[1.85] text-essence-white-off">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
