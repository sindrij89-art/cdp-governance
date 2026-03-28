import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OgiForm from "@/components/OgiForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outbound Governance Install — CDP Governance",
  description:
    "A fixed-scope review and correction of your outbound sales materials. One team, one outbound motion, one review round. Done in 14 days. £5,000 + VAT.",
  openGraph: {
    title: "Outbound Governance Install — CDP Governance",
    description:
      "A fixed-scope review and correction of your outbound sales materials for regulated UK sales teams.",
    url: "https://cdp-governance.com/ogi",
    siteName: "CDP Governance",
    type: "website",
    locale: "en_GB",
  },
  alternates: {
    canonical: "https://cdp-governance.com/ogi",
  },
};

const steps = [
  "Request a fit review",
  "If matched: SOW, submission pack, and payment terms issued",
  "Submit up to 10 outbound assets (PII redacted)",
  "Assets reviewed against an 11-point message risk standard",
  "Corrected versions produced (redline + clean send-ready)",
  "Manager handover briefing (30\u201345 minutes)",
];

const deliverables = [
  {
    code: "W1",
    title: "Message Risk Report",
    description: "Every asset scored pass/fail against 11 checks",
  },
  {
    code: "W2",
    title: "Approved Language Pack",
    description: "Redline + clean send-ready versions",
  },
  {
    code: "W3",
    title: "Manager QA Checklist",
    description: "One-page pre-send gate for future outbound",
  },
  {
    code: "W4",
    title: "Outbound Log Standard",
    description: "Touchpoint recording reference",
  },
  {
    code: "W5",
    title: "Handover Briefing",
    description: "Findings, corrections, and observations",
  },
];

export default function OgiPage() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        {/* ── Hero ── */}
        <section
          aria-labelledby="ogi-hero-heading"
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
                id="ogi-hero-heading"
                className="text-4xl font-semibold leading-[1.15] tracking-tight text-[color:var(--hero-text)] sm:text-5xl lg:text-6xl"
              >
                Outbound Governance Install
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--hero-text-muted)] sm:text-xl">
                A fixed-scope advisory review and correction of live outbound sales materials for regulated UK sales teams. One team. One primary outbound motion. One review round. 7&ndash;14 calendar days.
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-sm font-medium tracking-wide text-[color:var(--hero-text-muted)]">
                Fixed scope &middot; 7&ndash;14 days &middot; Up to 10 assets &middot; &pound;5,000 + VAT
              </p>
            </div>
          </div>
        </section>

        {/* ── The Problem ── */}
        <section
          aria-labelledby="ogi-problem-heading"
          className="section-padding bg-[color:var(--bg)]"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 id="ogi-problem-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                The Problem
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--why-text)]">
                Most regulated sales teams send outbound that has never been reviewed for message risk. The consequences in regulated sectors are specific: guarantee language that can&apos;t be honoured, claims without evidence, regulatory overstatement, version drift across assets, and inconsistency between what different team members send. This service corrects existing materials and installs a pre-send review gate.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who It's For / Not For ── */}
        <section
          aria-labelledby="ogi-audience-heading"
          className="section-padding bg-[color:var(--surface-alt)]"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <h2 id="ogi-audience-heading" className="text-2xl font-semibold">
                    Who It&apos;s For
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Sales teams in regulated UK sectors: financial advice, insurance, wealth management, mortgage, pensions",
                      "Firms whose outbound has never been formally reviewed for message risk",
                      "Managers who approve outbound by instinct, not against a defined standard",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-[color:var(--why-text)]">
                        <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[color:var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">
                    Who It&apos;s Not For
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Teams needing pipeline governance, CRM work, or sales training \u2014 that is the CDP Pilot",
                      "Organisations without active outbound to review",
                      "Teams looking for ongoing advisory or coaching",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-[color:var(--why-text)]">
                        <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[color:var(--text-muted)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section
          aria-labelledby="ogi-process-heading"
          className="section-padding bg-[color:var(--bg)]"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 id="ogi-process-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                How It Works
              </h2>
              <ol className="mt-8 space-y-4">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--card-icon-bg)] text-sm font-semibold text-[color:var(--accent)]">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-base leading-relaxed text-[color:var(--why-text)]">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── What You Receive ── */}
        <section
          aria-labelledby="ogi-deliverables-heading"
          className="section-padding bg-[color:var(--surface-alt)]"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 id="ogi-deliverables-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What You Receive
              </h2>
              <div className="mt-8 space-y-6">
                {deliverables.map((d) => (
                  <div key={d.code} className="flex gap-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[color:var(--card-icon-bg)] text-sm font-bold text-[color:var(--accent)]">
                      {d.code}
                    </span>
                    <div>
                      <p className="font-semibold text-[color:var(--inclusion-label)]">{d.title}</p>
                      <p className="mt-1 text-sm text-[color:var(--inclusion-desc)]">{d.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Not Included ── */}
        <section
          aria-labelledby="ogi-exclusions-heading"
          className="section-padding bg-[color:var(--bg)]"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 id="ogi-exclusions-heading" className="text-2xl font-semibold">
                Not Included
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--text-muted)]">
                CRM installation &middot; Pipeline analysis &middot; Training &middot; Coaching &middot; Legal, regulatory, or compliance advice &middot; Ongoing advisory &middot; Post-handover corrections
              </p>
            </div>
          </div>
        </section>

        {/* ── What Changes ── */}
        <section
          aria-labelledby="ogi-proof-heading"
          className="section-padding bg-[color:var(--surface-alt)]"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 id="ogi-proof-heading" className="text-2xl font-semibold">
                What Changes After the Install
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "Risky language removed or flagged across live assets",
                  "Manager gets a documented pre-send standard",
                  "Assets stop drifting between team members",
                  "Future sends have a documented review gate",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-[color:var(--why-text)]">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[color:var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Commercial Terms ── */}
        <section
          aria-labelledby="ogi-terms-heading"
          className="section-padding bg-[color:var(--surface-alt)]"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 id="ogi-terms-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Commercial Terms
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
                  <p className="font-heading text-3xl font-semibold text-[color:var(--stat-number)]">&pound;5,000</p>
                  <p className="mt-1 text-sm text-[color:var(--text-muted)]">+ VAT. Fixed scope. Fixed price.</p>
                </div>
                <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
                  <p className="font-heading text-3xl font-semibold text-[color:var(--stat-number)]">7&ndash;14</p>
                  <p className="mt-1 text-sm text-[color:var(--text-muted)]">Calendar days, kickoff to handover</p>
                </div>
              </div>
              <ul className="mt-6 space-y-2 text-base text-[color:var(--why-text)]">
                <li>One team. One outbound motion. One manager-owner. Up to 10 assets.</li>
                <li>50% on signature. 50% before handover.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Form ── */}
        <OgiForm />

        {/* ── Bridge to CDP ── */}
        <section className="section-padding bg-[color:var(--surface-alt)]">
          <div className="container-max">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-[color:var(--why-text)]">
                This install governs what your team says. If you also need to govern how pipeline decisions are made and recorded, the CDP Pilot addresses that directly.
              </p>
              <Link
                href="/cdp"
                className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-[color:var(--accent)] transition-colors hover:text-[color:var(--accent-hover)]"
              >
                Learn about the CDP Pilot &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── Professional Boundary ── */}
        <section className="bg-[color:var(--bg)] px-4 py-6 sm:px-6 lg:px-8">
          <div className="container-max">
            <p className="mx-auto max-w-3xl text-center text-xs text-[color:var(--text-faint)]">
              This is an advisory review of outbound message quality. It does not constitute legal, regulatory, or compliance advice.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
