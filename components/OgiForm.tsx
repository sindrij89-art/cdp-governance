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
        className="section-paper section-padding"
      >
        <div className="container-max">
          <div
            className="mx-auto max-w-xl border p-8 text-center"
            style={{
              borderColor: "rgba(16, 185, 129, 0.3)",
              background: "var(--color-paper-surface)",
            }}
          >
            <div
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center"
              style={{ background: "var(--color-accent-muted)" }}
            >
              <svg
                className="h-6 w-6"
                style={{ color: "var(--color-accent)" }}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 id="ogi-form-heading" style={{ color: "var(--color-text-dark)" }}>
              Fit Review Requested
            </h3>
            <p className="mt-2" style={{ color: "var(--color-text-dark-secondary)" }}>
              Request received &mdash; we&apos;ll review and respond within 48 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const labelClass = "block text-xs uppercase tracking-wider mb-2";
  const labelStyle = { color: "var(--color-text-dark-secondary)", letterSpacing: "0.05em" };

  return (
    <section
      id="ogi-form"
      aria-labelledby="ogi-form-heading"
      className="section-paper section-padding"
    >
      <div className="container-max">
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <h2 id="ogi-form-heading">
              Request a Fit Review
            </h2>
            <p className="mt-4 text-lg" style={{ color: "var(--color-text-dark-secondary)" }}>
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
              <label htmlFor="ogi-name" className={labelClass} style={labelStyle}>
                Full Name <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <input
                type="text"
                id="ogi-name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className={`input-underline ${fieldErrors.name ? "input-underline-error" : ""}`}
                style={{ color: "var(--color-text-dark)", borderBottomColor: fieldErrors.name ? "var(--color-error)" : undefined }}
                placeholder="Jane Smith"
                aria-describedby={fieldErrors.name ? "ogi-name-error" : undefined}
              />
              {fieldErrors.name && (
                <p id="ogi-name-error" className="mt-1 text-sm" style={{ color: "var(--color-error)" }} role="alert">
                  {fieldErrors.name}
                </p>
              )}
            </div>

            {/* Work Email */}
            <div>
              <label htmlFor="ogi-email" className={labelClass} style={labelStyle}>
                Work Email <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <input
                type="email"
                id="ogi-email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className={`input-underline ${fieldErrors.email ? "input-underline-error" : ""}`}
                style={{ color: "var(--color-text-dark)", borderBottomColor: fieldErrors.email ? "var(--color-error)" : undefined }}
                placeholder="jane@company.com"
                aria-describedby={fieldErrors.email ? "ogi-email-error" : undefined}
              />
              {fieldErrors.email && (
                <p id="ogi-email-error" className="mt-1 text-sm" style={{ color: "var(--color-error)" }} role="alert">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            {/* Company (optional) */}
            <div>
              <label htmlFor="ogi-company" className={labelClass} style={labelStyle}>
                Company
              </label>
              <input
                type="text"
                id="ogi-company"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="input-underline"
                style={{ color: "var(--color-text-dark)" }}
                placeholder="Acme Insurance Ltd"
              />
            </div>

            {/* Primary Outbound Channel */}
            <div>
              <label htmlFor="ogi-channel" className={labelClass} style={labelStyle}>
                Primary Outbound Channel <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <select
                id="ogi-channel"
                name="channel"
                required
                value={form.channel}
                onChange={handleChange}
                className={`input-underline ${fieldErrors.channel ? "input-underline-error" : ""}`}
                style={{ color: "var(--color-text-dark)", borderBottomColor: fieldErrors.channel ? "var(--color-error)" : undefined }}
                aria-describedby={fieldErrors.channel ? "ogi-channel-error" : undefined}
              >
                <option value="">Select channel</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Other">Other</option>
              </select>
              {fieldErrors.channel && (
                <p id="ogi-channel-error" className="mt-1 text-sm" style={{ color: "var(--color-error)" }} role="alert">
                  {fieldErrors.channel}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label htmlFor="ogi-description" className={labelClass} style={labelStyle}>
                Brief description of current outbound <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <textarea
                id="ogi-description"
                name="description"
                rows={4}
                required
                value={form.description}
                onChange={handleChange}
                className={`input-underline ${fieldErrors.description ? "input-underline-error" : ""}`}
                style={{
                  color: "var(--color-text-dark)",
                  border: "1px solid var(--color-paper-border)",
                  borderRadius: 0,
                  padding: "0.625rem",
                  minHeight: "120px",
                  borderColor: fieldErrors.description ? "var(--color-error)" : undefined,
                }}
                placeholder="What does your team currently send, to whom, and through which channels?"
                aria-describedby={fieldErrors.description ? "ogi-desc-error" : undefined}
              />
              {fieldErrors.description && (
                <p id="ogi-desc-error" className="mt-1 text-sm" style={{ color: "var(--color-error)" }} role="alert">
                  {fieldErrors.description}
                </p>
              )}
            </div>

            {/* Global error */}
            {status === "error" && errorMessage && !Object.keys(fieldErrors).length && (
              <div
                className="border p-3 text-sm"
                style={{
                  borderColor: "rgba(239,68,68,0.3)",
                  background: "rgba(239,68,68,0.1)",
                  color: "var(--color-error)",
                }}
                role="alert"
              >
                {errorMessage}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex min-h-[44px] w-full items-center justify-center gap-2 px-6 py-4 text-base uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              style={{
                backgroundColor: "var(--color-text-dark)",
                color: "var(--color-paper)",
                border: "none",
                letterSpacing: "0.05em",
                transition: "background-color var(--duration-global) var(--ease-global)",
              }}
              onMouseEnter={(e) => { if (status !== "loading") (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-accent)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-text-dark)"; }}
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
                  PROCESSING
                </>
              ) : (
                "REQUEST FIT REVIEW"
              )}
            </button>

            <p className="text-center text-xs" style={{ color: "var(--color-text-dark-secondary)" }}>
              We review submissions manually and reply if the engagement appears in scope.
            </p>

            <p className="text-center text-xs" style={{ color: "var(--color-text-dark-secondary)" }}>
              By submitting, you agree to our{" "}
              <a href="/privacy" className="underline" style={{ color: "var(--color-text-dark-secondary)" }}>
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
