"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, ArrowUpRight, Info } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/content/global/site";
import {
  milestones,
  plannerMeta,
  seasonalNote,
  type TimelineMilestone,
} from "@/content/tools/pre-event-planner";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function addDays(base: Date, days: number): Date {
  const d = new Date(base);
  d.setDate(d.getDate() - days);
  return d;
}

function formatRelativeTime(days: number): string {
  if (days === 0) return plannerMeta.dayOfEventLabel;
  if (days === 1) return `1 ${plannerMeta.daysLabel}`;
  if (days < 7) return `${days} ${plannerMeta.daysLabel}`;
  if (days === 7) return `1 ${plannerMeta.weekLabel}`;
  if (days < 30) {
    const weeks = Math.round(days / 7);
    return `${weeks} ${plannerMeta.weeksLabel}`;
  }
  if (days === 30) return `1 ${plannerMeta.monthLabel}`;
  const months = Math.round(days / 30);
  return `${months} ${plannerMeta.monthsLabel}`;
}

// ---------------------------------------------------------------------------
// Timeline item
// ---------------------------------------------------------------------------

function TimelineItem({
  milestone,
  scheduledDate,
  isLast,
  isFirst,
}: {
  milestone: TimelineMilestone;
  scheduledDate: Date;
  isLast: boolean;
  isFirst: boolean;
}) {
  const isDayOf = milestone.daysBeforeEvent === 0;

  return (
    <div className="relative flex gap-6 pb-8">
      {/* Vertical connector line */}
      {!isLast && (
        <div
          aria-hidden
          className="absolute left-[11px] top-6 bottom-0 w-px bg-white/10"
        />
      )}

      {/* Dot */}
      <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center">
        <div
          className={cn(
            "h-3 w-3 rounded-full border-2 transition-colors",
            isDayOf
              ? "border-essence-gold bg-essence-gold"
              : isFirst
              ? "border-essence-accent bg-essence-accent"
              : "border-white/30 bg-essence-black",
          )}
        />
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        {/* Timing badges */}
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <span
            className={cn(
              "eyebrow-sm",
              isDayOf ? "text-essence-gold" : isFirst ? "text-essence-accent" : "text-essence-muted",
            )}
          >
            {formatRelativeTime(milestone.daysBeforeEvent)}
          </span>
          <span className="eyebrow-sm text-essence-muted">
            {formatDate(scheduledDate)}
          </span>
          {milestone.isOptional && (
            <span className="border border-white/10 px-2 py-0.5 text-[0.6rem] uppercase tracking-eyebrow text-essence-muted">
              Optional
            </span>
          )}
        </div>

        <h3 className="font-display text-lg text-essence-white">{milestone.treatmentName}</h3>
        <p className="mt-2 text-[0.875rem] leading-[1.7] text-essence-white-off">
          {milestone.description}
        </p>

        {milestone.slug && (
          <Link
            href={`/services/${milestone.slug}`}
            className="mt-3 inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-eyebrow text-essence-accent transition-all duration-300 hover:gap-3"
            aria-label={`Learn more about ${milestone.treatmentName}`}
          >
            {plannerMeta.learnMoreLabel}
            <ArrowUpRight className="h-3 w-3" strokeWidth={1.5} />
          </Link>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Seasonal note panel
// ---------------------------------------------------------------------------

function SeasonalNote() {
  return (
    <div className="mt-16 border border-white/10 bg-essence-black-soft p-6 md:p-8">
      <div className="mb-5 flex items-center gap-3">
        <Info className="h-4 w-4 shrink-0 text-essence-muted" strokeWidth={1.5} aria-hidden />
        <h3 className="font-display text-base text-essence-white">{seasonalNote.headline}</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {seasonalNote.tips.map((tip) => (
          <div key={tip.season} className="border-l border-white/10 pl-4">
            <p className="eyebrow mb-1 text-essence-gold">
              {tip.season}
            </p>
            <p className="text-[0.8rem] leading-[1.6] text-essence-muted">{tip.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function PreEventPlanner() {
  const [eventDate, setEventDate] = useState<string>("");

  // Compute days until event
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedDate = eventDate ? new Date(eventDate + "T00:00:00") : null;
  const daysUntil = selectedDate
    ? Math.floor((selectedDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    : null;

  // Filter milestones that fit within the remaining window
  const visibleMilestones: TimelineMilestone[] =
    daysUntil !== null && daysUntil > 0
      ? milestones.filter((m) => m.daysBeforeEvent <= daysUntil)
      : [];

  // Min date for the input = tomorrow
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const isPastOrToday = daysUntil !== null && daysUntil <= 0;

  return (
    <section id="planner" className="bg-essence-black section-y">
      <div className="px-page mx-auto max-w-3xl">
        {/* Date input */}
        <div className="mb-12 border border-white/10 bg-essence-black-soft p-6 md:p-8">
          <label
            htmlFor="event-date"
            className="eyebrow mb-4 flex items-center gap-3 text-essence-muted"
          >
            <Calendar className="h-4 w-4 text-essence-accent" strokeWidth={1.5} aria-hidden />
            {plannerMeta.dateLabel}
          </label>
          <input
            id="event-date"
            type="date"
            value={eventDate}
            min={minDate}
            onChange={(e) => setEventDate(e.target.value)}
            aria-describedby="event-date-hint"
            className={cn(
              "w-full border bg-essence-black px-4 py-4 font-body text-[1rem] text-essence-white transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-essence-accent",
              eventDate ? "border-essence-accent/50" : "border-white/10",
              // Style the date picker
              "[color-scheme:dark]",
            )}
          />
          <p id="event-date-hint" className="mt-3 text-[0.75rem] text-essence-muted">
            Enter your event date and we&apos;ll build a personalized treatment timeline.
          </p>
        </div>

        {/* States */}
        {!eventDate && (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <Calendar className="h-10 w-10 text-white/10" strokeWidth={1} aria-hidden />
            <p className="font-display text-xl text-essence-muted">{plannerMeta.emptyHeadline}</p>
            <p className="text-[0.875rem] text-essence-muted">{plannerMeta.emptyMessage}</p>
          </div>
        )}

        {isPastOrToday && (
          <div className="border border-white/10 bg-essence-black-soft p-6 text-center">
            <p className="text-[0.9rem] text-essence-white-off">{plannerMeta.pastDateMessage}</p>
          </div>
        )}

        {daysUntil !== null && daysUntil > 0 && (
          <>
            {/* Timeline header */}
            <div className="mb-10">
              <div className="eyebrow mb-3 inline-flex items-center gap-3 text-essence-accent">
                <span className="h-px w-8 bg-essence-accent" aria-hidden />
                <span>
                  {daysUntil} days until your event
                </span>
              </div>
              <h2 className="font-display text-2xl text-essence-white">
                {plannerMeta.timelineHeadline}
              </h2>
              <p className="mt-3 text-[0.875rem] leading-[1.7] text-essence-white-off">
                {plannerMeta.timelineSubheadline}
              </p>
            </div>

            {/* Timeline */}
            {visibleMilestones.length > 0 ? (
              <div role="list" aria-label="Treatment timeline">
                {visibleMilestones.map((milestone, index) => {
                  const scheduledDate = selectedDate
                    ? addDays(selectedDate, milestone.daysBeforeEvent)
                    : new Date();
                  return (
                    <div key={`${milestone.daysBeforeEvent}-${milestone.slug}`} role="listitem">
                      <TimelineItem
                        milestone={milestone}
                        scheduledDate={scheduledDate}
                        isFirst={index === 0}
                        isLast={index === visibleMilestones.length - 1}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="border border-white/10 bg-essence-black-soft p-6">
                <p className="text-[0.875rem] text-essence-white-off">
                  Your event is very soon! Contact us directly and we&apos;ll recommend the best same-week treatments.
                </p>
              </div>
            )}

            {/* Book CTA */}
            <div className="mt-10">
              <a
                href={site.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-essence-accent bg-essence-accent px-10 py-5 font-body text-[0.75rem] uppercase tracking-hero-btn text-essence-white transition-colors duration-300 hover:bg-transparent hover:text-essence-accent"
                aria-label="Book a consultation to lock in your event schedule"
              >
                {plannerMeta.bookLabel}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              </a>
            </div>

            <SeasonalNote />
          </>
        )}
      </div>
    </section>
  );
}
