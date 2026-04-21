"use client";

import { useState } from "react";

interface NewsletterCTAProps {
  headline: string;
  subheadline: string;
  placeholder: string;
  submitText: string;
  privacyNote?: string;
  successMessage?: string;
}

export function NewsletterCTA({
  headline,
  subheadline,
  placeholder,
  submitText,
  privacyNote,
  successMessage = "Thanks for subscribing!",
}: NewsletterCTAProps) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-essence-black section-y">
      <div className="px-page mx-auto max-w-3xl text-center">
        <h2 className="font-display text-fluid-about leading-[1.05] text-essence-white">
          {headline}
        </h2>
        <p className="mt-6 text-[1.05rem] leading-[1.9] text-essence-white-off">
          {subheadline}
        </p>

        {submitted ? (
          <p className="mt-10 font-body text-[0.9rem] uppercase tracking-brand text-essence-gold">
            {successMessage}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-end"
            aria-label="Newsletter signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="flex-1 bg-transparent border-b border-white/20 px-0 py-4 text-essence-white placeholder:text-essence-muted focus:border-essence-accent focus:outline-none transition-colors duration-300"
            />
            <button
              type="submit"
              className="relative inline-flex items-center justify-center font-body uppercase tracking-hero-btn text-[0.75rem] font-medium overflow-hidden transition-colors duration-500 ease-essence rounded-none whitespace-nowrap select-none group bg-essence-accent text-essence-white border border-essence-accent hover:text-essence-black px-12 py-5"
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-essence-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-essence"
              />
              <span className="relative z-10">{submitText}</span>
            </button>
          </form>
        )}

        {privacyNote && (
          <p className="mt-6 text-[0.7rem] uppercase tracking-brand text-essence-muted">
            {privacyNote}
          </p>
        )}
      </div>
    </section>
  );
}
