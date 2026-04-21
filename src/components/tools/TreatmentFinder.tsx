"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowUpRight, RotateCcw, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/content/global/site";
import {
  steps,
  quizMeta,
  treatmentResults,
  type ConcernId,
  type TimelineId,
  type DowntimeId,
  type BudgetId,
  type TreatmentResult,
} from "@/content/tools/treatment-finder";

// ---------------------------------------------------------------------------
// Recommendation engine
// Pure function: (concern, timeline, downtime, budget) → 3 service slugs
// ---------------------------------------------------------------------------
function getRecommendations(
  concern: ConcernId,
  timeline: TimelineId,
  downtime: DowntimeId,
  budget: BudgetId,
): string[] {
  // Matrix logic: concern is the primary driver, timeline/downtime/budget refine
  switch (concern) {
    case "wrinkles":
      if (timeline === "urgent" && downtime === "none")
        return budget === "starter"
          ? ["red-carpet-anti-aging-facial", "hydrofacial", "oxygen-facial"]
          : ["red-carpet-anti-aging-facial", "botox", "hydrofacial"];
      if (timeline === "urgent")
        return ["botox", "red-carpet-anti-aging-facial", "hydrofacial"];
      if (downtime === "some" || budget === "premium")
        return ["botox", "rf-microneedling-facial", "vampire-facial"];
      if (budget === "mid")
        return ["botox", "rf-microneedling-facial", "essence-signature-facelift-facial"];
      return ["botox", "hydrofacial", "custom-facial"];

    case "acne-texture":
      if (timeline === "long-term" && downtime === "some")
        return ["rf-microneedling-facial", "jet-plasma-facial", "custom-peel"];
      if (downtime === "none")
        return ["hydrofacial", "custom-facial", "oxygen-facial"];
      if (budget === "premium")
        return ["rf-microneedling-facial", "prp-facial", "custom-peel"];
      return ["custom-peel", "rf-microneedling-facial", "hydrofacial"];

    case "dull-skin":
      if (timeline === "urgent")
        return ["red-carpet-anti-aging-facial", "oxygen-facial", "hydrofacial"];
      if (budget === "premium")
        return ["iv-therapy-cosmetic", "rf-microneedling-facial", "brightening-facial"];
      return ["brightening-facial", "hydrofacial", "microdermabrasion-facial"];

    case "dark-spots":
      if (downtime === "some")
        return ["custom-peel", "brightening-facial", "rf-microneedling-facial"];
      if (budget === "premium")
        return ["brightening-facial", "custom-peel", "iv-therapy-cosmetic"];
      return ["brightening-facial", "microdermabrasion-facial", "custom-facial"];

    case "hollow-eyes":
      // Fillers are the primary solution regardless of other factors
      return ["juvederm-fillers", "prp-facial", "hydrofacial"];

    case "hair-thinning":
      // Hair restoration is the primary treatment across budgets
      if (budget === "premium")
        return ["hair-restoration", "prp-facial", "iv-therapy-cosmetic"];
      return ["hair-restoration", "prp-facial", "iv-therapy-cosmetic"];

    case "stubborn-fat":
      if (budget === "premium")
        return ["lipo-sculpt", "meso-contour", "iv-therapy-cosmetic"];
      return ["lipo-sculpt", "meso-contour", "custom-facial"];

    case "muscle-tension":
      if (budget === "premium")
        return ["deep-tissue-massage", "cupping-massage", "iv-therapy-cosmetic"];
      if (downtime === "none")
        return ["swedish-massage", "deep-tissue-massage", "cupping-massage"];
      return ["deep-tissue-massage", "cupping-massage", "swedish-massage"];

    default:
      return ["hydrofacial", "custom-facial", "red-carpet-anti-aging-facial"];
  }
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round(((current) / total) * 100);
  return (
    <div className="mb-10">
      <div className="eyebrow mb-3 flex items-center justify-between text-essence-muted">
        <span>
          {quizMeta.progressLabel} {current} {quizMeta.ofLabel} {total}
        </span>
        <span className="text-essence-accent">{pct}%</span>
      </div>
      <div className="h-px w-full bg-white/10" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div
          className="h-full bg-essence-accent transition-all duration-500 ease-essence"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function OptionCard<T extends string>({
  option,
  selected,
  onSelect,
}: {
  option: { id: T; label: string; description: string };
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "group relative w-full border p-5 text-left transition-all duration-300 ease-essence",
        selected
          ? "border-essence-accent bg-essence-accent/10"
          : "border-white/10 bg-essence-black-soft hover:border-essence-accent/50 hover:bg-white/5",
      )}
    >
      <div className="flex items-start gap-4">
        {/* Checkbox indicator */}
        <div
          aria-hidden
          className={cn(
            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border transition-all duration-300",
            selected
              ? "border-essence-accent bg-essence-accent"
              : "border-white/30 group-hover:border-essence-accent/50",
          )}
        >
          {selected && <Check className="h-3 w-3 text-essence-white" strokeWidth={2.5} />}
        </div>
        <div>
          <p className={cn("font-body text-[0.9rem] font-medium transition-colors", selected ? "text-essence-white" : "text-essence-white-off")}>
            {option.label}
          </p>
          <p className="mt-1 text-[0.8rem] leading-[1.6] text-essence-muted">{option.description}</p>
        </div>
      </div>
    </button>
  );
}

function ResultCard({ treatment, index }: { treatment: TreatmentResult; index: number }) {
  return (
    <div className="group border border-white/10 bg-essence-black-soft p-6 transition-all duration-500 hover:border-essence-accent/30">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-display text-[0.75rem] text-essence-muted">0{index + 1}</span>
        <span className="eyebrow-sm border border-white/10 px-2 py-0.5 text-essence-muted">
          Recommended
        </span>
      </div>
      <h3 className="font-display text-xl text-essence-white">{treatment.name}</h3>
      <p className="mt-2 text-[0.875rem] leading-[1.7] text-essence-white-off">{treatment.tagline}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[0.8rem] text-essence-gold">{treatment.startingPrice}</span>
        <Link
          href={`/services/${treatment.slug}`}
          className="group/link inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-eyebrow text-essence-accent transition-all duration-300 hover:gap-3"
          aria-label={`Learn more about ${treatment.name}`}
        >
          {quizMeta.learnMoreLabel}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

type Answers = {
  concern: ConcernId | null;
  timeline: TimelineId | null;
  downtime: DowntimeId | null;
  budget: BudgetId | null;
};

export function TreatmentFinder() {
  const [step, setStep] = useState(0); // 0-indexed; 4 = results
  const [answers, setAnswers] = useState<Answers>({
    concern: null,
    timeline: null,
    downtime: null,
    budget: null,
  });

  const TOTAL_STEPS = steps.length;
  const isResults = step === TOTAL_STEPS;

  const currentStep = !isResults ? steps[step] : null;

  const answerKeys: (keyof Answers)[] = ["concern", "timeline", "downtime", "budget"];
  const currentKey = !isResults ? answerKeys[step] : null;

  function handleSelect(id: string) {
    if (!currentKey) return;
    setAnswers((prev) => ({ ...prev, [currentKey]: id }));
  }

  function handleNext() {
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
  }

  function handleBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  function handleReset() {
    setStep(0);
    setAnswers({ concern: null, timeline: null, downtime: null, budget: null });
  }

  const currentAnswer = currentKey ? answers[currentKey] : null;
  const canProceed = currentAnswer !== null;

  // Build results
  let recommendations: TreatmentResult[] = [];
  if (isResults && answers.concern && answers.timeline && answers.downtime && answers.budget) {
    const slugs = getRecommendations(
      answers.concern,
      answers.timeline,
      answers.downtime,
      answers.budget,
    );
    recommendations = slugs
      .map((slug) => treatmentResults[slug])
      .filter((t): t is TreatmentResult => Boolean(t));
  }

  return (
    <section id="quiz" className="bg-essence-black section-y">
      <div className="px-page mx-auto max-w-3xl">
        {/* Quiz card */}
        <div className="border border-white/10 bg-essence-black-soft p-8 md:p-12">
          {!isResults ? (
            <>
              <ProgressBar current={step + 1} total={TOTAL_STEPS} />

              <div className="mb-8">
                <h2 className="font-display text-2xl text-essence-white md:text-3xl">
                  {currentStep?.headline}
                </h2>
                {currentStep?.subheadline && (
                  <p className="mt-3 text-[0.9rem] text-essence-muted">{currentStep.subheadline}</p>
                )}
              </div>

              <div className="grid gap-3 sm:grid-cols-2" role="group" aria-label={currentStep?.headline}>
                {currentStep?.options.map((option) => (
                  <OptionCard
                    key={option.id}
                    option={option}
                    selected={currentAnswer === option.id}
                    onSelect={() => handleSelect(option.id)}
                  />
                ))}
              </div>

              {/* Navigation */}
              <div className="mt-10 flex items-center justify-between gap-4">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-eyebrow text-essence-muted transition-colors hover:text-essence-white"
                    aria-label="Go to previous question"
                  >
                    <ChevronRight className="h-3.5 w-3.5 rotate-180" strokeWidth={1.5} />
                    {quizMeta.backLabel}
                  </button>
                ) : (
                  <span />
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed}
                  className={cn(
                    "inline-flex items-center gap-2 border px-8 py-4 text-[0.75rem] uppercase tracking-hero-btn font-medium transition-all duration-300",
                    canProceed
                      ? "border-essence-accent bg-essence-accent text-essence-white hover:bg-transparent hover:text-essence-accent"
                      : "cursor-not-allowed border-white/20 text-essence-muted",
                  )}
                  aria-label={step < TOTAL_STEPS - 1 ? quizMeta.nextLabel : quizMeta.seeResultsLabel}
                >
                  {step < TOTAL_STEPS - 1 ? quizMeta.nextLabel : quizMeta.seeResultsLabel}
                  <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </>
          ) : (
            /* Results */
            <>
              <div className="mb-10">
                <div className="eyebrow mb-4 inline-flex items-center gap-3 text-essence-accent">
                  <span className="h-px w-8 bg-essence-accent" aria-hidden />
                  <span>Your Results</span>
                </div>
                <h2 className="font-display text-2xl text-essence-white md:text-3xl">
                  {quizMeta.resultsHeadline}
                </h2>
                <p className="mt-3 text-[0.9rem] leading-[1.7] text-essence-white-off">
                  {quizMeta.resultsSubheadline}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {recommendations.map((treatment, i) => (
                  <ResultCard key={treatment.slug} treatment={treatment} index={i} />
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row">
                <a
                  href={site.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center border border-essence-accent bg-essence-accent px-10 py-5 font-body text-[0.75rem] uppercase tracking-hero-btn text-essence-white transition-colors duration-500 hover:bg-transparent hover:text-essence-accent"
                >
                  {quizMeta.bookConsultLabel}
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-eyebrow text-essence-muted transition-colors hover:text-essence-white"
                  aria-label="Start the quiz over"
                >
                  <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {quizMeta.startOverLabel}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
