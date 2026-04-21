"use client";

import { useState } from "react";
import { Check, Info } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/content/global/site";
import {
  areas,
  unitPrice,
  calculatorMeta,
} from "@/content/tools/botox-calculator";

// ---------------------------------------------------------------------------
// Area checkbox item
// ---------------------------------------------------------------------------

function AreaCheckbox({
  area,
  checked,
  onToggle,
}: {
  area: { id: string; label: string; min: number; max: number; description: string };
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <label
      htmlFor={`area-${area.id}`}
      className={cn(
        "group flex cursor-pointer items-start gap-4 border p-4 transition-all duration-300",
        checked
          ? "border-essence-accent bg-essence-accent/10"
          : "border-white/10 bg-essence-black-soft hover:border-essence-accent/40 hover:bg-white/5",
      )}
    >
      {/* Hidden checkbox for accessibility */}
      <input
        type="checkbox"
        id={`area-${area.id}`}
        checked={checked}
        onChange={onToggle}
        className="sr-only"
        aria-describedby={`area-${area.id}-desc`}
      />
      {/* Visual checkbox */}
      <div
        aria-hidden
        className={cn(
          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border transition-all duration-300",
          checked
            ? "border-essence-accent bg-essence-accent"
            : "border-white/30 group-hover:border-essence-accent/50",
        )}
      >
        {checked && <Check className="h-3 w-3 text-essence-white" strokeWidth={2.5} />}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2 flex-wrap">
          <p className={cn("font-body text-[0.9rem] font-medium", checked ? "text-essence-white" : "text-essence-white-off")}>
            {area.label}
          </p>
          <span className="shrink-0 text-[0.75rem] text-essence-gold">
            {area.min}–{area.max} units
          </span>
        </div>
        <p id={`area-${area.id}-desc`} className="mt-1 text-[0.8rem] leading-[1.5] text-essence-muted">
          {area.description}
        </p>
      </div>
    </label>
  );
}

// ---------------------------------------------------------------------------
// Summary panel
// ---------------------------------------------------------------------------

function SummaryPanel({
  selectedIds,
}: {
  selectedIds: Set<string>;
}) {
  const selected = areas.filter((a) => selectedIds.has(a.id));
  const totalMin = selected.reduce((sum, a) => sum + a.min, 0);
  const totalMax = selected.reduce((sum, a) => sum + a.max, 0);
  const costMin = totalMin * unitPrice;
  const costMax = totalMax * unitPrice;

  const hasSelection = selected.length > 0;

  const formatCurrency = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <aside
      className="border border-white/10 bg-essence-black-soft p-6 md:p-8"
      aria-label="Cost estimate summary"
      aria-live="polite"
      aria-atomic="true"
    >
      <h3 className="font-display text-lg text-essence-white mb-6">{calculatorMeta.summaryHeadline}</h3>

      {!hasSelection ? (
        <p className="text-[0.875rem] leading-[1.7] text-essence-muted">
          {calculatorMeta.selectAreasPrompt}
        </p>
      ) : (
        <>
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-white/5">
            {/* Units */}
            <div className="bg-essence-black p-4">
              <p className="eyebrow-sm text-essence-muted mb-2">
                {calculatorMeta.unitsLabel}
              </p>
              <p className="font-display text-2xl text-essence-white">
                {totalMin}–{totalMax}
              </p>
            </div>
            {/* Cost */}
            <div className="bg-essence-black p-4">
              <p className="eyebrow-sm text-essence-muted mb-2">
                {calculatorMeta.costLabel}
              </p>
              <p className="font-display text-2xl text-essence-gold">
                {formatCurrency(costMin)}–{formatCurrency(costMax)}
              </p>
            </div>
            {/* Duration */}
            <div className="bg-essence-black p-4">
              <p className="eyebrow-sm text-essence-muted mb-2">
                {calculatorMeta.durationLabel}
              </p>
              <p className="font-display text-xl text-essence-white">{calculatorMeta.durationValue}</p>
            </div>
            {/* Results last */}
            <div className="bg-essence-black p-4">
              <p className="eyebrow-sm text-essence-muted mb-2">
                {calculatorMeta.resultsLastLabel}
              </p>
              <p className="font-display text-xl text-essence-white">{calculatorMeta.resultsLastValue}</p>
            </div>
          </div>

          {/* Unit price note */}
          <p className="mt-4 text-[0.75rem] text-essence-muted">
            {calculatorMeta.unitPriceNote}{" "}
            <span className="text-essence-gold">${unitPrice}/unit</span>
          </p>

          {/* Selected areas list */}
          <div className="mt-6 border-t border-white/10 pt-6">
            <p className="eyebrow mb-3 text-essence-muted">
              Selected Areas
            </p>
            <ul className="space-y-1.5">
              {selected.map((area) => (
                <li key={area.id} className="flex items-center justify-between text-[0.8rem]">
                  <span className="text-essence-white-off">{area.label}</span>
                  <span className="text-essence-muted">{area.min}–{area.max} u</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <a
            href={site.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full border border-essence-accent bg-essence-accent py-4 text-center font-body text-[0.75rem] uppercase tracking-hero-btn text-essence-white transition-colors duration-300 hover:bg-transparent hover:text-essence-accent"
            aria-label="Book your Botox consultation at Essence Medspa"
          >
            {calculatorMeta.bookLabel}
          </a>
        </>
      )}

      {/* Disclaimer */}
      <div className="mt-6 flex items-start gap-2.5 border-t border-white/10 pt-5">
        <Info className="h-4 w-4 shrink-0 text-essence-muted mt-0.5" strokeWidth={1.5} aria-hidden />
        <p className="text-[0.75rem] leading-[1.7] text-essence-muted">
          {calculatorMeta.disclaimer}
        </p>
      </div>
    </aside>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function BotoxCalculator() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  function toggleArea(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <section id="calculator" className="bg-essence-black section-y">
      <div className="px-page">
        <div className="mb-10">
          <h2 className="font-display text-2xl text-essence-white md:text-3xl">
            {calculatorMeta.headline}
          </h2>
          <p className="mt-3 text-[0.9rem] text-essence-muted">{calculatorMeta.subheadline}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
          {/* Area checkboxes */}
          <fieldset className="border-0 p-0 m-0">
            <legend className="sr-only">Select Botox treatment areas</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {areas.map((area) => (
                <AreaCheckbox
                  key={area.id}
                  area={area}
                  checked={selectedIds.has(area.id)}
                  onToggle={() => toggleArea(area.id)}
                />
              ))}
            </div>
          </fieldset>

          {/* Summary panel — sticky on desktop */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SummaryPanel selectedIds={selectedIds} />
          </div>
        </div>
      </div>
    </section>
  );
}
