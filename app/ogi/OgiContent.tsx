"use client";

import ProtocolCard from "@/components/ProtocolCard";
import MetadataRail from "@/components/MetadataRail";
import ScrollReveal from "@/components/ScrollReveal";
import type { DeliverableCode } from "@/lib/dictionaries";

const steps = [
  "Request a fit review",
  "If matched: SOW, submission pack, and payment terms issued",
  "Submit up to 10 outbound assets (PII redacted)",
  "Assets reviewed against an 11-point message risk standard",
  "Corrected versions produced (redline + clean send-ready)",
  "Manager handover briefing (30\u201345 minutes)",
];

const deliverables: { code: DeliverableCode; title: string; description: string }[] = [
  { code: "W1", title: "Message Risk Report", description: "Every asset scored pass/fail against 11 checks" },
  { code: "W2", title: "Approved Language Pack", description: "Redline + clean send-ready versions" },
  { code: "W3", title: "Manager QA Checklist", description: "One-page pre-send gate for future outbound" },
  { code: "W4", title: "Outbound Log Standard", description: "Touchpoint recording reference" },
  { code: "W5", title: "Handover Briefing", description: "Findings, corrections, and observations" },
];

const railSections = [
  { id: "ogi-problem", label: "The Problem" },
  { id: "ogi-audience", label: "Who It\u2019s For" },
  { id: "ogi-process", label: "How It Works" },
  { id: "ogi-deliverables", label: "Deliverables", deliverableCodes: ["W1", "W2", "W3", "W4", "W5"] as DeliverableCode[] },
  { id: "ogi-proof", label: "What Changes" },
  { id: "ogi-exclusions", label: "Not Included" },
  { id: "ogi-terms", label: "Commercial Terms" },
];

export default function OgiContent() {
  return (
    <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-20">
      {/* ── Main Narrative Column ── */}
      <div className="lg:col-span-13 lg:pr-8">
        {/* The Problem */}
        <section
          id="ogi-problem"
          aria-labelledby="ogi-problem-heading"
          className="section-paper section-padding"
        >
          <ScrollReveal className="mx-auto max-w-3xl lg:max-w-none lg:pr-4">
            <h2 id="ogi-problem-heading">The Problem</h2>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--color-text-dark-secondary)" }}>
              Most regulated sales teams send outbound that has never been reviewed for message risk. The consequences in regulated sectors are specific: guarantee language that can&apos;t be honoured, claims without evidence, regulatory overstatement, version drift across assets, and inconsistency between what different team members send. This service corrects existing materials and installs a pre-send review gate.
            </p>
          </ScrollReveal>
        </section>

        {/* Who It's For / Not For */}
        <section
          id="ogi-audience"
          aria-labelledby="ogi-audience-heading"
          className="section-dark-1 section-padding"
        >
          <ScrollReveal className="mx-auto max-w-3xl lg:max-w-none lg:pr-4">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 id="ogi-audience-heading">Who It&apos;s For</h2>
                <ul className="mt-6 space-y-3">
                  {[
                    "Sales teams in regulated UK sectors: financial advice, insurance, wealth management, mortgage, pensions",
                    "Firms whose outbound has never been formally reviewed for message risk",
                    "Managers who approve outbound by instinct, not against a defined standard",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      <svg className="mt-1 h-5 w-5 flex-shrink-0" style={{ color: "var(--color-accent)" }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Who It&apos;s Not For</h2>
                <ul className="mt-6 space-y-3">
                  {[
                    "Teams needing pipeline governance, CRM work, or sales training \u2014 that is the CDP 30-Day Pilot",
                    "Organisations without active outbound to review",
                    "Teams looking for ongoing advisory or coaching",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      <svg className="mt-1 h-5 w-5 flex-shrink-0" style={{ color: "var(--color-text-secondary)" }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* How It Works */}
        <section
          id="ogi-process"
          aria-labelledby="ogi-process-heading"
          className="section-paper section-padding"
        >
          <ScrollReveal className="mx-auto max-w-3xl lg:max-w-none lg:pr-4">
            <h2 id="ogi-process-heading">How It Works</h2>
            <div className="mt-8 space-y-5">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center font-mono text-sm"
                    style={{
                      background: "var(--color-accent-muted)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p className="pt-1 text-base leading-relaxed" style={{ color: "var(--color-text-dark-secondary)" }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* What You Receive — ProtocolCards */}
        <section
          id="ogi-deliverables"
          aria-labelledby="ogi-deliverables-heading"
          className="section-dark section-padding"
        >
          <ScrollReveal className="mx-auto max-w-3xl lg:max-w-none lg:pr-4">
            <h2 id="ogi-deliverables-heading">What You Receive</h2>
            <div className="protocol-grid mt-8 grid-cols-1 sm:grid-cols-2">
              {deliverables.map((d) => (
                <ProtocolCard
                  key={d.code}
                  id={d.code}
                  label={d.title}
                  scope={d.description}
                  variant="dark"
                />
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* What Changes */}
        <section
          id="ogi-proof"
          aria-labelledby="ogi-proof-heading"
          className="section-paper section-padding"
        >
          <ScrollReveal className="mx-auto max-w-3xl lg:max-w-none lg:pr-4">
            <h2 id="ogi-proof-heading">What Changes After the Install</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Risky language removed or flagged across live assets",
                "Manager gets a documented pre-send standard",
                "Assets stop drifting between team members",
                "Future sends have a documented review gate",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed" style={{ color: "var(--color-text-dark-secondary)" }}>
                  <svg className="mt-1 h-5 w-5 flex-shrink-0" style={{ color: "var(--color-accent)" }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </section>

        {/* Not Included */}
        <section
          id="ogi-exclusions"
          aria-labelledby="ogi-exclusions-heading"
          className="section-dark-1 section-padding"
        >
          <ScrollReveal className="mx-auto max-w-3xl lg:max-w-none lg:pr-4">
            <h2 id="ogi-exclusions-heading">Not Included</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              CRM installation &middot; Pipeline analysis &middot; Training &middot; Coaching &middot; Legal, regulatory, or compliance advice &middot; Ongoing advisory &middot; Post-handover corrections
            </p>
          </ScrollReveal>
        </section>

        {/* Commercial Terms */}
        <section
          id="ogi-terms"
          aria-labelledby="ogi-terms-heading"
          className="section-paper section-padding"
        >
          <ScrollReveal className="mx-auto max-w-3xl lg:max-w-none lg:pr-4">
            <h2 id="ogi-terms-heading">Commercial Terms</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div
                className="border p-6"
                style={{
                  borderColor: "var(--color-paper-border)",
                  background: "var(--color-paper-surface)",
                }}
              >
                <p className="font-mono text-3xl" style={{ color: "var(--color-text-dark)" }}>&pound;5,000</p>
                <p className="mt-1 text-sm" style={{ color: "var(--color-text-dark-secondary)" }}>+ VAT. Fixed scope. Fixed price.</p>
              </div>
              <div
                className="border p-6"
                style={{
                  borderColor: "var(--color-paper-border)",
                  background: "var(--color-paper-surface)",
                }}
              >
                <p className="font-mono text-3xl" style={{ color: "var(--color-text-dark)" }}>7&ndash;14</p>
                <p className="mt-1 text-sm" style={{ color: "var(--color-text-dark-secondary)" }}>Calendar days, kickoff to handover</p>
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-base" style={{ color: "var(--color-text-dark-secondary)" }}>
              <li>One team. One outbound motion. One manager-owner. Up to 10 assets.</li>
              <li>50% on signature. 50% before handover.</li>
            </ul>
          </ScrollReveal>
        </section>
      </div>

      {/* ── Metadata Rail ── */}
      <div className="lg:col-start-14 lg:col-end-21">
        <MetadataRail
          sections={railSections}
          engagementTitle="Outbound Governance Install"
          engagementScope="Fixed-scope review and correction of outbound sales materials"
          engagementPrice="£5,000 + VAT"
          engagementTimeline="7–14 calendar days"
        />
      </div>
    </div>
  );
}
