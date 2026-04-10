export default function WhyCdpExists() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="section-padding bg-[color:var(--surface-alt)]"
    >
      <div className="container-max">
        <div className="mx-auto max-w-3xl">
          <h2
            id="why-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Why CDP Exists
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--why-text)]">
            CDP addresses a common failure mode: opportunities remain
            &ldquo;open&rdquo; without a recorded decision, without evidence,
            and without a defined next step. In environments where documentation
            must withstand scrutiny, this creates avoidable ambiguity, rework,
            and governance risk.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[color:var(--why-text)]">
            CDP is a thin governance overlay on top of your existing CRM: it
            enforces Yes&nbsp;/&nbsp;No&nbsp;/&nbsp;Still Open states with
            deadlines, evidence discipline, and manager cadence. The pilot is
            intentionally constrained and buyer-safe: UK-only, 30 calendar days
            from kick-off, non-renewing by default, and acceptance is
            deliverables-based (D1–D8 delivered), not outcomes achieved.
          </p>
          <p className="mt-6 text-base font-medium text-[color:var(--accent)]">
            Sindri J&oacute;nsson — Principal, Revenue Operations
          </p>
        </div>
      </div>
    </section>
  );
}
