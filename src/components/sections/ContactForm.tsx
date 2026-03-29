"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { cn } from "@/lib/cn";

type ContactFormProps = {
  email: string;
  subjectPrefix: string;
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm({ email, subjectPrefix }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");

  function validate(values: FormState) {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please share your name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please share your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "A short project brief helps.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("Please review the highlighted fields.");
      return;
    }

    // Mailto keeps the contact flow zero-config for Vercel while still feeling polished.
    const subject = `${subjectPrefix}: ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email app with a prefilled draft.");
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={cn(
            "h-12 w-full rounded-2xl border bg-white px-4 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[rgba(16,88,255,0.12)]",
            errors.name ? "border-red-300" : "border-[var(--color-line)]",
          )}
          placeholder="Your name"
        />
        {errors.name ? (
          <p id="name-error" className="mt-2 text-sm text-red-600">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(
            "h-12 w-full rounded-2xl border bg-white px-4 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[rgba(16,88,255,0.12)]",
            errors.email ? "border-red-300" : "border-[var(--color-line)]",
          )}
          placeholder="you@company.com"
        />
        {errors.email ? (
          <p id="email-error" className="mt-2 text-sm text-red-600">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "min-h-40 w-full rounded-[1.5rem] border bg-white px-4 py-3 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[rgba(16,88,255,0.12)]",
            errors.message ? "border-red-300" : "border-[var(--color-line)]",
          )}
          placeholder="Project scope, timeline, goals, or anything useful for context."
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(16,88,255,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
      >
        Start a Conversation
      </button>

      <p aria-live="polite" className="text-sm text-[var(--color-muted)]">
        {status}
      </p>
    </form>
  );
}
