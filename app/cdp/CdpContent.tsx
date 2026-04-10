"use client";

import ProtocolCard from "@/components/ProtocolCard";
import MetadataRail from "@/components/MetadataRail";
import ScrollReveal from "@/components/ScrollReveal";
import type { MetricCode, DeliverableCode } from "@/lib/dictionaries";

const whatThisIs = [
  "Five CRM governance fields configured for your existing system",
  "A 16-session operator training programme",
  "A weekly manager oversight cadence: evidence audit, pipeline review, coaching",
  "A measurement framework tracking five defined metrics",
  "Eight defined deliverables (D1\u2013D8) transferred at completion",
];

const behaviours = [
  {
    title: "Honest Framing",
    description:
      "Open the interaction by stating purpose, the decision being tested, and one possible misfit.",
  },
  {
    title: "Risk Disclosure",
    description:
      "State the relevant weakness or limitation before the buyer discovers it.",
  },
  {
    title: "Decision Capture",
    description:
      "End qualified interactions with a documented next-state by deadline, rather than open-ended drift.",
  },
];

const timeline = [
  { phase: "Week 0", title: "Setup", description: "CRM fields installed, baseline export, schedules confirmed" },
  { phase: "Week 1", title: "Core behaviours", description: "Sessions on the three governance disciplines" },
  { phase: "Week 2", title: "CRM integration", description: "Live pipeline integration and field adoption" },
  { phase: "Week 3", title: "Pressure testing", description: "Live pipeline reviews and coaching" },
  { phase: "Week 4", title: "Certification and handoff", description: "Measurement, scorecard, playbook handover" },
];

const deliverables: { code: DeliverableCode; title: string }[] = [
  { code: "D1", title: "Baseline Metrics Pack" },
  { code: "D2", title: "CRM Field Specification" },
  { code: "D3", title: "16-Session Training Programme" },
  { code: "D4", title: "Operator Certification Records" },
  { code: "D5", title: "Weekly Manager Oversight Protocol" },
  { code: "D6", title: "Governance Scorecard" },
  { code: "D7", title: "30-Day Measurement Report" },
  { code: "D8", title: "Operating Playbook Handoff" },
];

const metrics = [
  "Decision Documentation Rate",
  "Binary Outcome Rate",
  "Evidence Compliance Rate",
  "Opportunity Ageing",
  "Forecast Variance",
];

const railSections = [
  { id: "cdp-what", label: "What This Is" },
  { id: "cdp-behaviours", label: "Three Behaviours" },
  { id: "cdp-timeline", label: "Timeline" },
  { id: "cdp-deliverables", label: "Deliverables", deliverableCodes: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"] as DeliverableCode[] },
  { id: "cdp-measurement", label: "Measurement", metricCodes: ["DDR", "BOR", "ECR", "OA", "FV"] as MetricCode[] },
  { id: "cdp-crm", label: "CRM Compatibility" },
  { id: "cdp-team", label: "Who Delivers" },
  { id: "cdp-pilot", label: "Pilot Details" },
];

export default function CdpContent() {
  return (
    <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-20">
      {/* ── Main Narrative Column ── */}
      <div className="lg:col-span-13 lg:pr-8">
        {/* What This Is */}
        <section
          id="cdp-what"
          aria-labelledby="cdp-what-heading"
          className="section-paper section-padding"
        >
          <ScrollReveal className="mx-auto max-w-3xl lg:max-w-none lg:pr-4">
            <h2 id="cdp-what-heading">What This Is</h2>
            <ul className="mt-8 space-y-4">
              {whatThisIs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed" style={{ color: "var(--color-text-dark-secondary)" }}>
                  <svg className="mt-1 h-5 w-5 flex-shrink-0" style={{ color: "var(--color-accent)" }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm" style={{ color: "var(--color-text-dark-secondary)" }}>
              Methodology-neutral. Your team continues using its existing sales process.
            </p>
          </ScrollReveal>
        </section>

        {/* Three Governance Behaviours */}
        <section
          id="cdp-behaviours"
          aria-labelledby="cdp-behaviours-heading"
          className="section-dark-1 section-padding"
        >
          <ScrollReveal className="mx-auto max-w-3xl lg:max-w-none lg:pr-4">
            <h2 id="cdp-behaviours-heading">Three Governance Behaviours</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {behaviours.map((b) => (
                <div
                  key={b.title}
                  className="glass-card p-6"
                >
                  <h3>{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm" style={{ color: "var(--color-text-secondary)" }}>
              Compatible with any established sales methodology. The pilot does not change how your team sells.
            </p>
          </ScrollReveal>
        </section>

        {/* How the 30 Days Work */}
        <section
          id="cdp-timeline"
          aria-labelledby="cdp-timeline-heading"
          className="section-paper section-padding"
        >
          <ScrollReveal className="mx-auto max-w-3xl lg:max-w-none lg:pr-4">
            <h2 id="cdp-timeline-heading">How the 30 Days Work</h2>
            <div className="mt-8 space-y-6">
              {timeline.map((t) => (
                <div key={t.phase} className="flex gap-4">
                  <span className="tech-label flex-shrink-0" style={{ background: "transparent", borderColor: "var(--color-paper-border)", color: "var(--color-text-dark)" }}>
                    {t.phase}
                  </span>
                  <div>
                    <p style={{ color: "var(--color-text-dark)" }}>{t.title}</p>
                    <p className="mt-1 text-sm" style={{ color: "var(--color-text-dark-secondary)" }}>{t.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Deliverables D1–D8 */}
        <section
          id="cdp-deliverables"
          aria-labelledby="cdp-deliverables-heading"
          className="section-dark section-padding"
        >
          <ScrollReveal className="mx-auto max-w-3xl lg:max-w-none lg:pr-4">
            <h2 id="cdp-deliverables-heading">Deliverables D1&ndash;D8</h2>
            <div className="protocol-grid mt-8 grid-cols-1 sm:grid-cols-2">
              {deliverables.map((d) => {
                const dict = {
                  D1: "Pre-pilot measurement snapshot",
                  D2: "Five governance fields configured for existing CRM",
                  D3: "Operator certification across three governance behaviours",
                  D4: "Individual pass/fail records per operator",
                  D5: "Evidence audit, pipeline review, coaching cadence",
                  D6: "Composite governance health metric",
                  D7: "Five metrics tracked and reported",
                  D8: "Self-sustaining governance documentation",
                };
                return (
                  <ProtocolCard
                    key={d.code}
                    id={d.code}
                    label={d.title}
                    scope={dict[d.code as keyof typeof dict] || ""}
                    variant="dark"
                  />
                );
              })}
            </div>
          </ScrollReveal>
        </section>

        {/* Measurement */}
        <section
          id="cdp-measurement"
          aria-labelledby="cdp-measurement-heading"
          className="section-paper section-padding"
        >
          <ScrollReveal className="mx-auto max-w-3xl lg:max-w-none lg:pr-4">
            <h2 id="cdp-measurement-heading">Measurement</h2>
            <p className="mt-4 text-base" style={{ color: "var(--color-text-dark-secondary)" }}>
              Five metrics tracked across the pilot period:
            </p>
            <ul className="mt-4 space-y-2">
              {metrics.map((m) => (
                <li key={m} className="flex items-center gap-2 text-base" style={{ color: "var(--color-text-dark-secondary)" }}>
                  <svg className="h-4 w-4 flex-shrink-0" style={{ color: "var(--color-accent)" }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {m}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm" style={{ color: "var(--color-text-dark-secondary)" }}>
              All measured and reported. None guaranteed.
            </p>
          </ScrollReveal>
        </section>

        {/* CRM Compatibility */}
        <section
          id="cdp-crm"
          className="section-dark-1 section-padding"
        >
          <ScrollReveal className="mx-auto max-w-3xl lg:max-w-none lg:pr-4">
            <h2>CRM Compatibility</h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              A 15-minute compatibility check is required before the SOW is issued. Any CRM that supports custom fields and data export is supported.
            </p>
          </ScrollReveal>
        </section>

        {/* Who Delivers */}
        <section
          id="cdp-team"
          aria-labelledby="cdp-team-heading"
          className="section-paper section-padding"
        >
          <ScrollReveal className="mx-auto max-w-3xl lg:max-w-none lg:pr-4">
            <h2 id="cdp-team-heading">Who Delivers</h2>
            <div className="mt-10 space-y-8">
              <div>
                <h3>
                  Sindri J&oacute;nsson{" "}
                  <span style={{ color: "var(--color-text-dark-secondary)" }}>
                    &mdash; Principal. Governance design, delivery, measurement.
                  </span>
                </h3>
              </div>
              <div>
                <h3>
                  Andrej Pelko{" "}
                  <span style={{ color: "var(--color-text-dark-secondary)" }}>
                    &mdash; Operations &amp; QA. Instrumentation, data hygiene, evidence capture.
                  </span>
                </h3>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Pilot Details + Commercial Terms */}
        <section
          id="cdp-pilot"
          aria-labelledby="cdp-pilot-heading"
          className="section-dark-1 section-padding"
        >
          <ScrollReveal className="mx-auto max-w-3xl lg:max-w-none lg:pr-4">
            <h2 id="cdp-pilot-heading">Pilot Details</h2>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="font-mono text-3xl" style={{ color: "var(--color-text-primary)" }}>30</p>
                <p className="mt-1 text-sm" style={{ color: "var(--color-text-secondary)" }}>Calendar Days</p>
              </div>
              <div>
                <p className="font-mono text-3xl" style={{ color: "var(--color-text-primary)" }}>5&ndash;10</p>
                <p className="mt-1 text-sm" style={{ color: "var(--color-text-secondary)" }}>Operators</p>
              </div>
              <div>
                <p className="font-mono text-3xl" style={{ color: "var(--color-text-primary)" }}>&pound;10,000</p>
                <p className="mt-1 text-sm" style={{ color: "var(--color-text-secondary)" }}>Pilot Fee</p>
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-base" style={{ color: "var(--color-text-secondary)" }}>
              <li>1&ndash;2 managers. 1 team.</li>
              <li>50% on signature. 50% on completion.</li>
              <li>UK only. Non-renewing. CRM compatibility check required.</li>
              <li>Acceptance = D1&ndash;D8 delivered.</li>
            </ul>

            <h3 className="mt-10">Not Included</h3>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              Compensation/bonus design &middot; HR policy &middot; Legal, regulatory, or compliance advice &middot; CRM licences &middot; Automated workflows &middot; Sales methodology replacement &middot; Post-pilot support
            </p>
          </ScrollReveal>
        </section>
      </div>

      {/* ── Metadata Rail ── */}
      <div className="lg:col-start-14 lg:col-end-21">
        <MetadataRail
          sections={railSections}
          engagementTitle="CDP 30-Day Pilot"
          engagementScope="30-day governance overlay for one regulated UK sales team"
          engagementPrice="£10,000"
          engagementTimeline="30 calendar days"
        />
      </div>
    </div>
  );
}
