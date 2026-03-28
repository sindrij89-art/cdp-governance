"use client";

import { useState, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  channel: string;
  description: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  channel?: string;
  description?: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  company: "",
  channel: "",
  description: "",
};

export default function OgiForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): FieldErrors {
    const errors: FieldErrors = {};
    if (!form.name.trim()) errors.name = "Name is required.";
    if (!form.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Valid work email address is required.";
    }
    if (!form.channel) errors.channel = "Primary outbound channel is required.";
    if (!form.description.trim()) errors.description = "Please describe your current outbound.";
    return errors;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage("");
    setFieldErrors({});

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/ogi-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data.fields) setFieldErrors(data.fields);
        throw new Error(
          data.message || data.error || "Something went wrong. Please try again."
        );
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <section
        id="ogi-form"
        aria-labelledby="ogi-form-heading"
        className="section-padding bg-[color:var(--bg)]"
      >
        <div className="container-max">
          <div className="mx-auto max-w-xl rounded-2xl border border-[color:var(--success-border)] bg-[color:var(--success-bg)] p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--success-icon-bg)]">
              <svg
                className="h-6 w-6 text-[color:var(--success-icon)]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 id="ogi-form-heading" className="text-xl font-semibold text-[color:var(--success-heading)]">
              Fit Review Requested
            </h3>
            <p className="mt-2 text-[color:var(--success-text)]">
              Request received &mdash; we&apos;ll review and respond within 48 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const inputBase =
    "mt-1 block w-full rounded-lg border bg-[color:var(--input-bg)] px-4 py-2.5 text-[color:var(--input-text)] shadow-sm transition-colors placeholder:text-[color:var(--input-placeholder)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--ring-offset)]";
  const inputNormal = `${inputBase} border-[color:var(--input-border)]`;
  const inputError = `${inputBase} border-red-500`;

  return (
    <section
      id="ogi-form"
      aria-labelledby="ogi-form-heading"
      className="section-padding bg-[color:var(--bg)]"
    >
      <div className="container-max">
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <h2
              id="ogi-form-heading"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Request a Fit Review
            </h2>
            <p className="mt-4 text-lg text-[color:var(--text-muted)]">
              Tell us about your outbound and we&apos;ll confirm whether the install is a match.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
            noValidate
            aria-label="OGI fit review request"
          >
            {/* Full Name */}
            <div>
              <label htmlFor="ogi-name" className="block text-sm font-medium text-[color:var(--text)]">
                Full Name <span className="text-[color:var(--error-text)]">*</span>
              </label>
              <input
                type="text"
                id="ogi-name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className={fieldErrors.name ? inputError : inputNormal}
                placeholder="Jane Smith"
                aria-describedby={fieldErrors.name ? "ogi-name-error" : undefined}
              />
              {fieldErrors.name && (
                <p id="ogi-name-error" className="mt-1 text-sm text-[color:var(--error-text)]" role="alert">
                  {fieldErrors.name}
                </p>
              )}
            </div>

            {/* Work Email */}
            <div>
              <label htmlFor="ogi-email" className="block text-sm font-medium text-[color:var(--text)]">
                Work Email <span className="text-[color:var(--error-text)]">*</span>
              </label>
              <input
                type="email"
                id="ogi-email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className={fieldErrors.email ? inputError : inputNormal}
                placeholder="jane@company.com"
                aria-describedby={fieldErrors.email ? "ogi-email-error" : undefined}
              />
              {fieldErrors.email && (
                <p id="ogi-email-error" className="mt-1 text-sm text-[color:var(--error-text)]" role="alert">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            {/* Company (optional) */}
            <div>
              <label htmlFor="ogi-company" className="block text-sm font-medium text-[color:var(--text)]">
                Company
              </label>
              <input
                type="text"
                id="ogi-company"
                name="company"
                value={form.company}
                onChange={handleChange}
                className={inputNormal}
                placeholder="Acme Insurance Ltd"
              />
            </div>

            {/* Primary Outbound Channel */}
            <div>
              <label htmlFor="ogi-channel" className="block text-sm font-medium text-[color:var(--text)]">
                Primary Outbound Channel <span className="text-[color:var(--error-text)]">*</span>
              </label>
              <select
                id="ogi-channel"
                name="channel"
                required
                value={form.channel}
                onChange={handleChange}
                className={fieldErrors.channel ? inputError : inputNormal}
                aria-describedby={fieldErrors.channel ? "ogi-channel-error" : undefined}
              >
                <option value="">Select channel</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Other">Other</option>
              </select>
              {fieldErrors.channel && (
                <p id="ogi-channel-error" className="mt-1 text-sm text-[color:var(--error-text)]" role="alert">
                  {fieldErrors.channel}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label htmlFor="ogi-description" className="block text-sm font-medium text-[color:var(--text)]">
                Brief description of current outbound <span className="text-[color:var(--error-text)]">*</span>
              </label>
              <textarea
                id="ogi-description"
                name="description"
                rows={4}
                required
                value={form.description}
                onChange={handleChange}
                className={fieldErrors.description ? inputError : inputNormal}
                placeholder="What does your team currently send, to whom, and through which channels?"
                aria-describedby={fieldErrors.description ? "ogi-desc-error" : undefined}
              />
              {fieldErrors.description && (
                <p id="ogi-desc-error" className="mt-1 text-sm text-[color:var(--error-text)]" role="alert">
                  {fieldErrors.description}
                </p>
              )}
            </div>

            {/* Global error */}
            {status === "error" && errorMessage && !Object.keys(fieldErrors).length && (
              <div
                className="rounded-lg border border-[color:var(--error-border)] bg-[color:var(--error-bg)] p-3 text-sm text-[color:var(--error-text)]"
                role="alert"
              >
                {errorMessage}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="font-heading flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[color:var(--accent)] px-6 py-3 text-base font-semibold text-[color:var(--accent-contrast)] shadow-sm transition-all hover:bg-[color:var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--ring-offset)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="h-5 w-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting&hellip;
                </>
              ) : (
                "Request Fit Review"
              )}
            </button>

            <p className="text-center text-xs text-[color:var(--text-faint)]">
              By submitting, you agree to our{" "}
              <a href="/privacy" className="underline text-[color:var(--text-muted)] hover:text-[color:var(--accent)]">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
