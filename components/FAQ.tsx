"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is CDP?",
    answer:
      "CDP (Clear Decision Protocol) is a sales governance overlay: rules, minimal CRM fields, manager routines, and measurement. It sits on top of your existing CRM and methodology \u2014 it does not replace either.",
  },
  {
    question: "Who is the pilot for?",
    answer:
      "UK-based sales teams with an existing CRM, considered-purchase cycles, and a need for documented Yes / No / Still Open decision discipline.",
  },
  {
    question: "What does it cost?",
    answer:
      "\u00A310,000 for up to 10 operators. UK only. Non-renewing by default. Payment: 50% on signature, 50% on completion. Acceptance = D1\u2013D8 delivered (deliverables provided, not outcomes achieved).",
  },
  {
    question: "How does it integrate with our CRM?",
    answer:
      "CRM-agnostic. Any CRM that supports custom fields and data export. Compatibility is confirmed via a 15-minute pre-signature check.",
  },
  {
    question: "Is it compliance-safe?",
    answer:
      "Designed for ethical use. Supports evidence discipline. Does not provide legal, regulatory, or compliance advice \u2014 the client owns all regulatory interpretation. No outcomes are guaranteed.",
  },
  {
    question: "How long does setup take?",
    answer:
      "The pilot runs for 30 calendar days from kick-off. Pre-kick-off requirements (CRM access, operator roster, training schedule) are confirmed during onboarding.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding bg-[color:var(--surface-alt)]"
    >
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-[color:var(--text-muted)]">
            Common questions about the CDP Pilot Programme.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-[color:var(--border)]">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="py-5">
              <button
                id={`faq-btn-${index}`}
                onClick={() => toggle(index)}
                className="flex w-full min-h-[44px] items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--surface-alt)] rounded-lg px-2"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="text-base font-medium text-[color:var(--text)] sm:text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`ml-4 h-5 w-5 flex-shrink-0 text-[color:var(--text-muted)] transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-btn-${index}`}
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index
                    ? "mt-3 max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-2 text-base leading-relaxed text-[color:var(--text-muted)]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
