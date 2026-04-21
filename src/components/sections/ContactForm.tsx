"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

interface ContactFormProps {
  eyebrow?: string;
  number?: string;
  headline: string;
  subheadline?: string;
  fields: FormField[];
  submitText: string;
  privacyNote?: string;
}

const inputClass =
  "w-full bg-transparent border-b border-white/20 px-0 py-4 text-essence-white placeholder:text-essence-muted focus:border-essence-accent focus:outline-none transition-colors duration-300";

const labelClass =
  "text-[0.7rem] uppercase tracking-brand text-essence-accent mb-2 block";

export function ContactForm({
  eyebrow,
  number,
  headline,
  subheadline,
  fields,
  submitText,
  privacyNote,
}: ContactFormProps) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.name, ""])),
  );
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative bg-essence-black section-y">
      <div className="px-page">
        <SectionHeader
          number={number}
          eyebrow={eyebrow}
          headline={headline}
          subheadline={subheadline}
          className="mb-16"
        />

        <Reveal delay={0.15}>
          <div className="max-w-2xl">
            {submitted ? (
              <div className="border border-essence-accent/40 bg-essence-black-soft p-12 text-center">
                <p className="font-display text-2xl text-essence-white mb-4">
                  Thank you
                </p>
                <p className="font-body text-[1rem] leading-[1.8] text-essence-white-off">
                  {"Thanks — we'll be in touch!"}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-10">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className={labelClass}>
                      {field.label}
                      {field.required && (
                        <span className="ml-1 text-essence-accent" aria-hidden>
                          *
                        </span>
                      )}
                    </label>

                    {field.type === "select" ? (
                      <select
                        id={field.name}
                        name={field.name}
                        value={values[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="" disabled className="bg-essence-black">
                          Select an option
                        </option>
                        {field.options?.map((opt) => (
                          <option
                            key={opt}
                            value={opt}
                            className="bg-essence-black"
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={values[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                        className={`${inputClass} min-h-[160px] resize-none`}
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={values[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder}
                        className={inputClass}
                      />
                    )}
                  </div>
                ))}

                <div className="pt-4 space-y-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center font-body uppercase tracking-hero-btn text-[0.8rem] font-medium overflow-hidden transition-colors duration-500 ease-essence rounded-none whitespace-nowrap select-none px-16 py-7 bg-essence-accent text-essence-white border border-essence-accent hover:bg-essence-white hover:text-essence-black"
                  >
                    {submitText}
                  </button>

                  {privacyNote && (
                    <p className="text-[0.7rem] uppercase tracking-brand text-essence-muted">
                      {privacyNote}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
