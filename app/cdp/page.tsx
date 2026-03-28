import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CDP 30-Day Pilot — CDP Governance",
  description:
    "A 30-day governance overlay for one regulated UK sales team. CRM decision fields, operator training, manager oversight, and measurement — installed and handed over.",
  openGraph: {
    title: "CDP 30-Day Pilot — CDP Governance",
    description:
      "A 30-day governance overlay for one regulated UK sales team. CRM decision fields, operator training, manager oversight, and measurement.",
    url: "https://cdp-governance.com/cdp",
    siteName: "CDP Governance",
    type: "website",
    locale: "en_GB",
  },
  alternates: {
    canonical: "https://cdp-governance.com/cdp",
  },
};

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
  {
    phase: "Week 0",
    title: "Setup",
    description: "CRM fields installed, baseline export, schedules confirmed",
  },
  {
    phase: "Week 1",
    title: "Core behaviours",
    description: "Sessions on the three governance disciplines",
  },
  {
    phase: "Week 2",
    title: "CRM integration",
    description: "Live pipeline integration and field adoption",
  },
  {
    phase: "Week 3",
    title: "Pressure testing",
    description: "Live pipeline reviews and coaching",
  },
  {
    phase: "Week 4",
    title: "Certification and handoff",
    description: "Measurement, scorecard, playbook handover",
  },
];

const deliverables = [
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

export default function CdpPage() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        {/* ── Hero ── */}
        <section
          aria-labelledby="cdp-hero-heading"
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, var(--hero-gradient-start) 0%, var(--hero-gradient-mid) 45%, var(--hero-gradient-end) 100%)",
          }}
        >
          <div className="absolute inset-0" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, rgba(5,10,25,0.4) 100%)",
              }}
            />
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1200 700"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {[100, 200, 300, 400, 500, 600].map((y) => (
                <line key={`h-${y}`} x1="0" y1={y} x2="1200" y2={y} stroke="white" strokeWidth="0.3" opacity="0.05" />
              ))}
              {[150, 300, 450, 600, 750, 900, 1050].map((x) => (
                <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="700" stroke="white" strokeWidth="0.3" opacity="0.05" />
              ))}
              <path d="M-50,620 C200,580 350,400 600,310" stroke="rgba(12,153,118,0.18)" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M1250,620 C1000,580 850,400 600,310" stroke="rgba(12,153,118,0.18)" strokeWidth="1.2" strokeLinecap="round" />
              {[
                [120, 590], [300, 510], [450, 400], [600, 310],
                [750, 400], [900, 510], [1080, 590],
              ].map(([cx, cy], i) => (
                <circle key={`node-${i}`} cx={cx} cy={cy} r={i === 3 ? 3 : 1.8} fill={i === 3 ? "rgba(12,153,118,0.35)" : "rgba(255,255,255,0.12)"} />
              ))}
              <circle cx="600" cy="310" r="8" stroke="rgba(12,153,118,0.15)" strokeWidth="1" fill="none" />
            </svg>
            <div
              className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "min(800px, 95vw)",
                height: "min(500px, 60vw)",
                background:
                  "radial-gradient(ellipse, rgba(12,153,118,0.07) 0%, rgba(12,153,118,0.02) 45%, transparent 70%)",
              }}
            />
          </div>

          <div className="container-max relative px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
            <div className="mx-auto max-w-3xl text-center">
              <h1
                id="cdp-hero-heading"
                className="text-4xl font-semibold leading-[1.15] tracking-tight text-[color:var(--hero-text)] sm:text-5xl lg:text-6xl"
              >
                CDP 30-Day Pilot
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--hero-text-muted)] sm:text-xl">
                A 30-day governance overlay for one regulated UK sales team. CRM decision fields, operator training, manager oversight, and measurement &mdash; installed and handed over.
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-sm font-medium tracking-wide text-[color:var(--hero-text-muted)]">
                UK only &middot; Non-renewing &middot; Compatibility check required &middot; Deliverables-based acceptance
              </p>

              {/* Primary CTA — pilot fit check */}
              <div className="mt-10">
                <a
                  href="#apply"
                  className="font-heading inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-[color:var(--accent)] px-9 py-3.5 text-base font-semibold text-[color:var(--accent-contrast)] shadow-lg shadow-[rgba(12,153,118,0.25)] transition-all hover:bg-[color:var(--accent-hover)] hover:shadow-xl hover:shadow-[rgba(12,153,118,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--hero-bg)]"
                >
                  Check pilot fit &rarr;
                </a>
              </div>

              {/* App link — secondary, demoted */}
              <p className="mx-auto mt-6 max-w-lg text-sm text-white/40">
                Active pilot participants can access the{" "}
                <a href="https://app.cdp-governance.com/login" className="underline hover:text-white/60 transition-colors">
                  delivery app
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ── What This Is ── */}
        <section
          aria-labelledby="cdp-what-heading"
          className="section-padding bg-[color:var(--bg)]"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 id="cdp-what-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What This Is
              </h2>
              <ul className="mt-8 space-y-4">
                {whatThisIs.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-[color:var(--why-text)]">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[color:var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-[color:var(--text-muted)]">
                Methodology-neutral. Your team continues using its existing sales process.
              </p>
            </div>
          </div>
        </section>

        {/* ── Three Governance Behaviours ── */}
        <section
          aria-labelledby="cdp-behaviours-heading"
          className="section-padding bg-[color:var(--surface-alt)]"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 id="cdp-behaviours-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Three Governance Behaviours
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {behaviours.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
                  >
                    <h3 className="text-lg font-semibold">{b.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)]">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-[color:var(--text-muted)]">
                Compatible with any established sales methodology. The pilot does not change how your team sells.
              </p>
            </div>
          </div>
        </section>

        {/* ── How the 30 Days Work ── */}
        <section
          aria-labelledby="cdp-timeline-heading"
          className="section-padding bg-[color:var(--bg)]"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 id="cdp-timeline-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                How the 30 Days Work
              </h2>
              <div className="mt-8 space-y-6">
                {timeline.map((t) => (
                  <div key={t.phase} className="flex gap-4">
                    <span className="flex h-10 w-auto flex-shrink-0 items-center justify-center rounded-lg bg-[color:var(--card-icon-bg)] px-3 text-sm font-bold text-[color:var(--accent)]">
                      {t.phase}
                    </span>
                    <div>
                      <p className="font-semibold text-[color:var(--inclusion-label)]">{t.title}</p>
                      <p className="mt-1 text-sm text-[color:var(--inclusion-desc)]">{t.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Deliverables D1–D8 ── */}
        <section
          aria-labelledby="cdp-deliverables-heading"
          className="section-padding bg-[color:var(--surface-alt)]"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 id="cdp-deliverables-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Deliverables D1&ndash;D8
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {deliverables.map((d) => (
                  <div key={d.code} className="flex items-center gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[color:var(--card-icon-bg)] text-sm font-bold text-[color:var(--accent)]">
                      {d.code}
                    </span>
                    <p className="font-medium text-[color:var(--inclusion-label)]">{d.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Measurement ── */}
        <section
          aria-labelledby="cdp-measurement-heading"
          className="section-padding bg-[color:var(--bg)]"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 id="cdp-measurement-heading" className="text-2xl font-semibold">
                Measurement
              </h2>
              <p className="mt-4 text-base text-[color:var(--text-muted)]">
                Five metrics tracked across the pilot period:
              </p>
              <ul className="mt-4 space-y-2">
                {metrics.map((m) => (
                  <li key={m} className="flex items-center gap-2 text-base text-[color:var(--why-text)]">
                    <svg className="h-4 w-4 flex-shrink-0 text-[color:var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium text-[color:var(--text-muted)]">
                All measured and reported. None guaranteed.
              </p>
            </div>
          </div>
        </section>

        {/* ── CRM Compatibility ── */}
        <section className="section-padding bg-[color:var(--surface-alt)]">
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-semibold">CRM Compatibility</h2>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--why-text)]">
                A 15-minute compatibility check is required before the SOW is issued. Any CRM that supports custom fields and data export is supported.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who Delivers ── */}
        <section
          aria-labelledby="cdp-team-heading"
          className="section-padding bg-[color:var(--bg)]"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 id="cdp-team-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Who Delivers
              </h2>
              <div className="mt-10 space-y-8">
                <div>
                  <h3 className="text-lg font-semibold">
                    Sindri J&oacute;nsson{" "}
                    <span className="font-normal text-[color:var(--text-muted)]">
                      &mdash; Principal. Governance design, delivery, measurement.
                    </span>
                  </h3>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Andrej Pelko{" "}
                    <span className="font-normal text-[color:var(--text-muted)]">
                      &mdash; Operations &amp; QA. Instrumentation, data hygiene, evidence capture.
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pilot Details + Commercial Terms ── */}
        <section
          aria-labelledby="cdp-pilot-heading"
          className="section-padding bg-[color:var(--surface-alt)]"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 id="cdp-pilot-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Pilot Details
              </h2>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <p className="font-heading text-3xl font-semibold text-[color:var(--stat-number)]">30</p>
                  <p className="mt-1 text-sm text-[color:var(--text-muted)]">Calendar Days</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-semibold text-[color:var(--stat-number)]">5&ndash;10</p>
                  <p className="mt-1 text-sm text-[color:var(--text-muted)]">Operators</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-semibold text-[color:var(--stat-number)]">&pound;10,000</p>
                  <p className="mt-1 text-sm text-[color:var(--text-muted)]">Pilot Fee</p>
                </div>
              </div>
              <ul className="mt-6 space-y-2 text-base text-[color:var(--why-text)]">
                <li>1&ndash;2 managers. 1 team.</li>
                <li>50% on signature. 50% on completion.</li>
                <li>UK only. Non-renewing. CRM compatibility check required.</li>
                <li>Acceptance = D1&ndash;D8 delivered.</li>
              </ul>

              <h3 className="mt-10 text-xl font-semibold">Not Included</h3>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--text-muted)]">
                Compensation/bonus design &middot; HR policy &middot; Legal, regulatory, or compliance advice &middot; CRM licences &middot; Automated workflows &middot; Sales methodology replacement &middot; Post-pilot support
              </p>
            </div>
          </div>
        </section>

        {/* ── Application Form ── */}
        <SignupForm />

        {/* ── Bridge to OGI ── */}
        <section className="section-padding bg-[color:var(--surface-alt)]">
          <div className="container-max">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-[color:var(--why-text)]">
                Haven&apos;t reviewed your outbound yet? The Outbound Governance Install is the fixed-scope first step for teams that need message control before pipeline governance.
              </p>
              <Link
                href="/ogi"
                className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-[color:var(--accent)] transition-colors hover:text-[color:var(--accent-hover)]"
              >
                Learn about the Outbound Governance Install &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── Professional Boundary ── */}
        <section className="bg-[color:var(--bg)] px-4 py-6 sm:px-6 lg:px-8">
          <div className="container-max">
            <p className="mx-auto max-w-3xl text-center text-xs text-[color:var(--text-faint)]">
              CDP does not provide legal, regulatory, or compliance advice. The client retains sign-off on all regulatory interpretation. Deliverables provided &mdash; not outcomes achieved.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
