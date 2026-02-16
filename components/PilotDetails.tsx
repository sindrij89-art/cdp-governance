const inclusions = [
  {
    label: "Decision-Forcing Governance Overlay",
    description:
      "Minimal CRM fields, manager oversight routines, and a measurement framework layered on top of your existing CRM.",
  },
  {
    label: "16-Session Training Programme",
    description:
      "Structured sessions designed to support adoption across operators and managers over the 30-day pilot.",
  },
  {
    label: "Operator Certification + Scorecard",
    description:
      "Certification records and a governance scorecard framework — pilot instrumentation only; not for HR, compensation, or termination decisions.",
  },
  {
    label: "Deliverables D1–D8",
    description:
      "Baseline metrics, CRM field specification, manager oversight protocol, 30-day measurement report, and CDP playbook handoff.",
  },
];

export default function PilotDetails() {
  return (
    <section
      id="details"
      aria-labelledby="details-heading"
      className="section-padding bg-[color:var(--cdp-surface)]"
    >
      <div className="container-max">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: description */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--cdp-navy)]/60">
              Pilot Programme
            </span>
            <h2
              id="details-heading"
              className="mt-2 text-3xl font-semibold tracking-tight text-[color:var(--cdp-navy)] sm:text-4xl"
            >
              Structured for Real-World Validation
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              The CDP Pilot runs for 30 calendar days from kickoff and is
              designed for UK-based sales teams of 5&ndash;10 operators, 1&ndash;2
              managers, 1 team. What is installed: a decision-forcing governance
              overlay — minimal CRM fields, a 16-session training programme,
              manager oversight routines, and a measurement framework.
            </p>
            <p className="mt-4 text-base text-gray-500">
              Acceptance = D1&ndash;D8 delivered (deliverables provided, not
              outcomes achieved). Non-renewing by default. Measured, not
              guaranteed.
            </p>

            {/* Key metrics */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="font-heading text-3xl font-semibold text-[color:var(--cdp-navy)]">30</p>
                <p className="mt-1 text-sm text-gray-500">Calendar Days</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-semibold text-[color:var(--cdp-navy)]">5&ndash;10</p>
                <p className="mt-1 text-sm text-gray-500">Operators</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-semibold text-[color:var(--cdp-navy)]">&pound;10k</p>
                <p className="mt-1 text-sm text-gray-500">Pilot Fee</p>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Payment: 50% on signature, 50% on completion. UK only.
            </p>
          </div>

          {/* Right: what's included */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-[color:var(--cdp-navy)]">
              What&apos;s Included
            </h3>
            <ul className="mt-6 space-y-5">
              {inclusions.map((item) => (
                <li key={item.label} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-[color:var(--cdp-navy)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.label}</p>
                    <p className="mt-0.5 text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
