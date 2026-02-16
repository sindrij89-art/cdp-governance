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
    if (!form.whyCdp.trim()) errors.why = "Please tell us why you\u2019re interested.";
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
        className="section-padding bg-white"
      >
        <div className="container-max">
          <div className="mx-auto max-w-xl rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
              <svg
                className="h-6 w-6 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h3 id="apply-heading" className="text-xl font-semibold text-emerald-900">
              Application Received
            </h3>
            <p className="mt-2 text-emerald-700">
              Application received &mdash; we&apos;ll review within 48 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const inputBase =
    "mt-1 block w-full rounded-lg border px-4 py-2.5 text-gray-900 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cdp-navy)] focus-visible:ring-offset-2";
  const inputNormal = `${inputBase} border-gray-300`;
  const inputError = `${inputBase} border-red-500`;

  return (
    <section
      id="apply"
      aria-labelledby="apply-heading"
      className="section-padding bg-white"
    >
      <div className="container-max">
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <h2
              id="apply-heading"
              className="text-3xl font-semibold tracking-tight text-[color:var(--cdp-navy)] sm:text-4xl"
            >
              Apply for the CDP Pilot
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Tell us about your team and how CDP might support your sales
              governance goals.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
            noValidate
            aria-label="Pilot application"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className={fieldErrors.name ? inputError : inputNormal}
                placeholder="Jane Smith"
                aria-describedby={fieldErrors.name ? "name-error" : undefined}
              />
              {fieldErrors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                  {fieldErrors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className={fieldErrors.email ? inputError : inputNormal}
                placeholder="jane@company.com"
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
              />
              {fieldErrors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            {/* Company Size */}
            <div>
              <label htmlFor="companySize" className="block text-sm font-medium text-gray-700">
                Company Size <span className="text-red-500">*</span>
              </label>
              <select
                id="companySize"
                name="companySize"
                required
                value={form.companySize}
                onChange={handleChange}
                className={fieldErrors.companySize ? inputError : inputNormal}
                aria-describedby={fieldErrors.companySize ? "companySize-error" : undefined}
              >
                <option value="">Select company size</option>
                <option value="1-10">1–10 employees</option>
                <option value="11-50">11–50 employees</option>
                <option value="51+">51+ employees</option>
              </select>
              {fieldErrors.companySize && (
                <p id="companySize-error" className="mt-1 text-sm text-red-600" role="alert">
                  {fieldErrors.companySize}
                </p>
              )}
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Your Role <span className="text-red-500">*</span>
              </label>
              <select
                id="role"
                name="role"
                required
                value={form.role}
                onChange={handleChange}
                className={fieldErrors.role ? inputError : inputNormal}
                aria-describedby={fieldErrors.role ? "role-error" : undefined}
              >
                <option value="">Select your role</option>
                <option value="Sales VP">Sales VP</option>
                <option value="Sales Manager">Sales Manager</option>
                <option value="Other">Other</option>
              </select>
              {fieldErrors.role && (
                <p id="role-error" className="mt-1 text-sm text-red-600" role="alert">
                  {fieldErrors.role}
                </p>
              )}
            </div>

            {/* Why CDP */}
            <div>
              <label htmlFor="whyCdp" className="block text-sm font-medium text-gray-700">
                Why CDP? <span className="text-red-500">*</span>
              </label>
              <textarea
                id="whyCdp"
                name="whyCdp"
                rows={4}
                required
                value={form.whyCdp}
                onChange={handleChange}
                className={fieldErrors.why ? inputError : inputNormal}
                placeholder="Tell us about your team&#39;s governance challenges and what you hope CDP can support..."
                aria-describedby={fieldErrors.why ? "why-error" : undefined}
              />
              {fieldErrors.why && (
                <p id="why-error" className="mt-1 text-sm text-red-600" role="alert">
                  {fieldErrors.why}
                </p>
              )}
            </div>

            {/* Global error */}
            {status === "error" && errorMessage && !Object.keys(fieldErrors).length && (
              <div
                className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
                role="alert"
              >
                {errorMessage}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="font-heading flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[color:var(--cdp-navy)] px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-[color:var(--cdp-accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cdp-navy)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
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
                "Submit Application"
              )}
            </button>

            <p className="text-center text-xs text-gray-400">
              By submitting, you agree to our{" "}
              <a href="/privacy" className="underline text-gray-500 hover:text-[color:var(--cdp-navy)]">
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
