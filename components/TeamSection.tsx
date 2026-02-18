export default function TeamSection() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="section-padding bg-[color:var(--bg)]"
    >
      <div className="container-max">
        <div className="mx-auto max-w-3xl">
          <h2
            id="team-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Who Delivers the Pilot
          </h2>

          <div className="mt-10 space-y-8">
            {/* Entry 1 */}
            <div>
              <h3 className="text-lg font-semibold">
                Sindri J&oacute;nsson{" "}
                <span className="font-normal text-[color:var(--text-muted)]">
                  — Principal, Revenue Operations
                </span>
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[color:var(--why-text)]">
                Delivery owner for governance design, CRM field specification,
                manager cadence, enablement, and the final measurement pack.
              </p>
            </div>

            {/* Entry 2 */}
            <div>
              <h3 className="text-lg font-semibold">
                Andrej Pelko{" "}
                <span className="font-normal text-[color:var(--text-muted)]">
                  — Revenue Operations &amp; Governance (Operations / QA)
                </span>
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[color:var(--why-text)]">
                Supports instrumentation, data hygiene checks, evidence capture
                standards, and pilot run logging under direction.
              </p>
            </div>
          </div>

          <p className="mt-10 text-sm font-medium text-[color:var(--text-muted)]">
            Named delivery ownership. Focused 30-day pilot.
          </p>
        </div>
      </div>
    </section>
  );
}
