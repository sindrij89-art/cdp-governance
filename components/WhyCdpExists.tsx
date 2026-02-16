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
            CDP was built to address a common failure mode in sales operations:
            opportunities remain &ldquo;open&rdquo; without a recorded decision,
            without clear evidence, and without an agreed next step. In contexts
            where decisions and documentation are expected to stand up to
            scrutiny, that gap creates avoidable ambiguity and rework. The same
            drift appears in commercial outreach, where follow-ups sprawl and
            &ldquo;maybe&rdquo; becomes the default status.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[color:var(--why-text)]">
            CDP is a governance overlay designed to support clear
            Yes&nbsp;/&nbsp;No&nbsp;/&nbsp;Still Open outcomes, evidence
            tracking, and disciplined follow-ups — layered on top of your
            existing CRM. The pilot is intentionally constrained and buyer-safe:
            UK-only, 30 calendar days from kick-off, non-renewing by default,
            and acceptance is deliverables-based (D1–D8 delivered), not outcomes
            achieved.
          </p>
          <p className="mt-6 text-base font-medium text-[color:var(--accent)]">
            Sindri J&oacute;nsson — Founder
          </p>
        </div>
      </div>
    </section>
  );
}
