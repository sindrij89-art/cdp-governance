"use client";

import { useState, useEffect, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  companySize: string;
  role: string;
  whyCdp: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  companySize?: string;
  role?: string;
  why?: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  companySize: "",
  role: "",
  whyCdp: "",
};

export default function SignupForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  useEffect(() => {
    const textarea = document.getElementById("whyCdp") as HTMLTextAreaElement | null;
    if (!textarea) return;

    function handleInput(e: Event) {
      const target = e.target as HTMLTextAreaElement;
      setForm((prev) => ({ ...prev, whyCdp: target.value }));
    }

    textarea.addEventListener("input", handleInput);
    return () => textarea.removeEventListener("input", handleInput);
  }, []);

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
      errors.email = "Valid email address is required.";
    }
    if (!form.companySize) errors.companySize = "Company size is required.";
    if (!form.role) errors.role = "Role is required.";
    if (!form.whyCdp.trim()) errors.why = "Please tell us why this may be relevant.";
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
      const res = await fetch("/api/signup", {
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
        id="apply"
        aria-labelledby="apply-heading"
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
            <h3 id="apply-heading" style={{ color: "var(--color-text-dark)" }}>
              Submission Received
            </h3>
            <p className="mt-2" style={{ color: "var(--color-text-dark-secondary)" }}>
              We review fit, CRM compatibility, and delivery constraints before issuing next steps.
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
      id="apply"
      aria-labelledby="apply-heading"
      className="section-paper section-padding"
    >
      <div className="container-max">
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <h2 id="apply-heading">
              Check Pilot Fit
            </h2>
            <p className="mt-4 text-lg" style={{ color: "var(--color-text-dark-secondary)" }}>
              Tell us about your team and how pipeline governance may be relevant.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
            noValidate
            aria-label="Pilot fit check"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelClass} style={labelStyle}>
                Full Name <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className={`input-underline ${fieldErrors.name ? "input-underline-error" : ""}`}
                style={{ color: "var(--color-text-dark)", borderBottomColor: fieldErrors.name ? "var(--color-error)" : undefined }}
                placeholder="Jane Smith"
                aria-describedby={fieldErrors.name ? "name-error" : undefined}
              />
              {fieldErrors.name && (
                <p id="name-error" className="mt-1 text-sm" style={{ color: "var(--color-error)" }} role="alert">
                  {fieldErrors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass} style={labelStyle}>
                Work Email <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className={`input-underline ${fieldErrors.email ? "input-underline-error" : ""}`}
                style={{ color: "var(--color-text-dark)", borderBottomColor: fieldErrors.email ? "var(--color-error)" : undefined }}
                placeholder="jane@company.com"
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
              />
              {fieldErrors.email && (
                <p id="email-error" className="mt-1 text-sm" style={{ color: "var(--color-error)" }} role="alert">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            {/* Company Size */}
            <div>
              <label htmlFor="companySize" className={labelClass} style={labelStyle}>
                Company Size <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <select
                id="companySize"
                name="companySize"
                required
                value={form.companySize}
                onChange={handleChange}
                className={`input-underline ${fieldErrors.companySize ? "input-underline-error" : ""}`}
                style={{ color: "var(--color-text-dark)", borderBottomColor: fieldErrors.companySize ? "var(--color-error)" : undefined }}
                aria-describedby={fieldErrors.companySize ? "companySize-error" : undefined}
              >
                <option value="">Select company size</option>
                <option value="1-10">1–10 employees</option>
                <option value="11-50">11–50 employees</option>
                <option value="51+">51+ employees</option>
              </select>
              {fieldErrors.companySize && (
                <p id="companySize-error" className="mt-1 text-sm" style={{ color: "var(--color-error)" }} role="alert">
                  {fieldErrors.companySize}
                </p>
              )}
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className={labelClass} style={labelStyle}>
                Your Role <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <select
                id="role"
                name="role"
                required
                value={form.role}
                onChange={handleChange}
                className={`input-underline ${fieldErrors.role ? "input-underline-error" : ""}`}
                style={{ color: "var(--color-text-dark)", borderBottomColor: fieldErrors.role ? "var(--color-error)" : undefined }}
                aria-describedby={fieldErrors.role ? "role-error" : undefined}
              >
                <option value="">Select your role</option>
                <option value="Sales VP">Sales VP</option>
                <option value="Sales Manager">Sales Manager</option>
                <option value="Other">Other</option>
              </select>
              {fieldErrors.role && (
                <p id="role-error" className="mt-1 text-sm" style={{ color: "var(--color-error)" }} role="alert">
                  {fieldErrors.role}
                </p>
              )}
            </div>

            {/* Why this may be relevant */}
            <div>
              <label htmlFor="whyCdp" className={labelClass} style={labelStyle}>
                Why this may be relevant <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <textarea
                id="whyCdp"
                name="whyCdp"
                rows={4}
                required
                value={form.whyCdp}
                onChange={handleChange}
                className={`input-underline ${fieldErrors.why ? "input-underline-error" : ""}`}
                style={{
                  color: "var(--color-text-dark)",
                  border: "1px solid var(--color-paper-border)",
                  borderRadius: 0,
                  padding: "0.625rem",
                  minHeight: "120px",
                  borderColor: fieldErrors.why ? "var(--color-error)" : undefined,
                }}
                placeholder="Tell us about your team&#39;s governance challenges and what you hope the pilot can support..."
                aria-describedby={fieldErrors.why ? "why-error" : undefined}
              />
              {fieldErrors.why && (
                <p id="why-error" className="mt-1 text-sm" style={{ color: "var(--color-error)" }} role="alert">
                  {fieldErrors.why}
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
                "CHECK PILOT FIT"
              )}
            </button>

            <p className="text-center text-xs" style={{ color: "var(--color-text-dark-secondary)" }}>
              We review fit, CRM compatibility, and delivery constraints before issuing next steps.
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
