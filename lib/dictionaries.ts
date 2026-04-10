export const METRICS_DICTIONARY = {
  DDR: {
    label: "Decision Documentation Rate",
    definition:
      "Percentage of qualified opportunities with a documented next-state and deadline.",
  },
  BOR: {
    label: "Binary Outcome Rate",
    definition:
      "Percentage of pipeline opportunities resolved to a definitive win or loss within the defined review period.",
  },
  ECR: {
    label: "Evidence Compliance Rate",
    definition:
      "Percentage of pipeline entries with all required governance fields completed.",
  },
  OA: {
    label: "Opportunity Ageing",
    definition:
      "Median calendar days from opportunity creation to binary resolution.",
  },
  FV: {
    label: "Forecast Variance",
    definition:
      "Deviation between projected and actual pipeline outcomes at period close.",
  },
} as const;

export const DELIVERABLES_DICTIONARY = {
  D1: { label: "Baseline Metrics Pack", scope: "Pre-pilot measurement snapshot" },
  D2: {
    label: "CRM Field Specification",
    scope: "Five governance fields configured for existing CRM",
  },
  D3: {
    label: "16-Session Training Programme",
    scope: "Operator certification across three governance behaviours",
  },
  D4: {
    label: "Operator Certification Records",
    scope: "Individual pass/fail records per operator",
  },
  D5: {
    label: "Weekly Manager Oversight Protocol",
    scope: "Evidence audit, pipeline review, coaching cadence",
  },
  D6: {
    label: "Governance Scorecard",
    scope: "Composite governance health metric",
  },
  D7: {
    label: "30-Day Measurement Report",
    scope: "Five metrics tracked and reported",
  },
  D8: {
    label: "Operating Playbook Handoff",
    scope: "Self-sustaining governance documentation",
  },
  W1: {
    label: "Message Risk Report",
    scope: "Every asset scored pass/fail against 11 checks",
  },
  W2: {
    label: "Approved Language Pack",
    scope: "Redline + clean send-ready versions",
  },
  W3: {
    label: "Manager QA Checklist",
    scope: "One-page pre-send gate for future outbound",
  },
  W4: {
    label: "Outbound Log Standard",
    scope: "Touchpoint recording reference",
  },
  W5: {
    label: "Handover Briefing",
    scope: "Findings, corrections, and observations",
  },
} as const;

export type MetricCode = keyof typeof METRICS_DICTIONARY;
export type DeliverableCode = keyof typeof DELIVERABLES_DICTIONARY;
