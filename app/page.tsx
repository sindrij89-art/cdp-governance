import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CDP Governance — Governance for Regulated UK Sales Teams",
  description:
    "Two fixed-scope engagements: outbound message governance and pipeline decision governance for regulated UK sales teams. Delivered with clear scope, defined handover, and measured reporting.",
  openGraph: {
    title: "CDP Governance — Governance for Regulated UK Sales Teams",
    description:
      "Two fixed-scope engagements for regulated UK sales teams. Outbound message governance and pipeline decision governance.",
    url: "https://cdp-governance.com",
    siteName: "CDP Governance",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "CDP Governance — Governance for Regulated UK Sales Teams",
    description:
      "Two fixed-scope engagements for regulated UK sales teams. Outbound message governance and pipeline decision governance.",
  },
  alternates: {
    canonical: "https://cdp-governance.com",
  },
};

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        {/* ── Hero ── */}
        <section
          aria-labelledby="hero-heading"
          className="section-dark relative overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, var(--hero-gradient-start) 0%, var(--hero-gradient-mid) 45%, var(--hero-gradient-end) 100%)",
          }}
        >
          {/* Decorative background */}
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
              <path d="M-50,620 C200,580 350,400 600,310" stroke="rgba(16,185,129,0.18)" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M1250,620 C1000,580 850,400 600,310" stroke="rgba(16,185,129,0.18)" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M-30,520 C250,480 400,360 600,300" stroke="white" strokeWidth="0.5" opacity="0.06" strokeLinecap="round" />
              <path d="M1230,520 C950,480 800,360 600,300" stroke="white" strokeWidth="0.5" opacity="0.06" strokeLinecap="round" />
              {[
                [120, 590], [300, 510], [450, 400], [600, 310],
                [750, 400], [900, 510], [1080, 590],
              ].map(([cx, cy], i) => (
                <circle key={`node-${i}`} cx={cx} cy={cy} r={i === 3 ? 3 : 1.8} fill={i === 3 ? "rgba(16,185,129,0.35)" : "rgba(255,255,255,0.12)"} />
              ))}
              <circle cx="600" cy="310" r="8" stroke="rgba(16,185,129,0.15)" strokeWidth="1" fill="none" />
            </svg>
            <div
              className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "min(800px, 95vw)",
                height: "min(500px, 60vw)",
                background: "radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, rgba(16,185,129,0.02) 45%, transparent 70%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="container-max relative px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
            <div className="mx-auto max-w-3xl text-center">
              <h1
                id="hero-heading"
                className="stagger-entry stagger-1 leading-[1.15] tracking-tight"
                style={{ color: "var(--color-text-primary)" }}
              >
                Governance for{" "}
                <br className="hidden sm:inline" />
                Regulated UK Sales Teams
              </h1>
              <p className="stagger-entry stagger-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl" style={{ color: "var(--color-text-secondary)" }}>
                Two fixed-scope engagements: one for outbound message control, one for pipeline decision discipline. Delivered with clear scope, defined handover, and measured reporting.
              </p>
              <div className="stagger-entry stagger-3 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/ogi"
                  className="btn-primary shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-primary)]"
                >
                  Outbound Governance Install &rarr;
                </Link>
                <Link
                  href="/cdp"
                  className="inline-flex min-h-[48px] items-center gap-2 border border-white/15 px-9 py-3.5 text-base ring-1 ring-inset ring-white/[0.06] transition-all hover:border-white/30 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-primary)]"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  CDP 30-Day Pilot &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Two-Product Overview ── */}
        <section
          aria-labelledby="products-heading"
          className="section-paper section-padding"
        >
          <div className="container-max">
            <h2 id="products-heading" className="sr-only">Our Engagements</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Card 1 — OGI */}
              <div
                className="border p-8"
                style={{
                  borderColor: "var(--color-paper-border)",
                  background: "var(--color-paper-surface)",
                }}
              >
                <h3>Outbound Governance Install</h3>
                <p className="mt-2 text-base" style={{ color: "var(--color-text-dark-secondary)" }}>
                  Controls what your team says to the market
                </p>
                <p className="mt-4 text-sm" style={{ color: "var(--color-accent)" }}>
                  7&ndash;14 days &middot; Fixed scope &middot; Up to 10 assets &middot; UK only
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "Message Risk Report",
                    "Approved Language Pack",
                    "Manager QA Checklist",
                    "Outbound Log Standard",
                    "Handover Briefing",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-dark)" }}>
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: "var(--color-accent)" }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/ogi"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm transition-colors"
                  style={{ color: "var(--color-accent)" }}
                >
                  Request fit review &rarr;
                </Link>
              </div>

              {/* Card 2 — CDP */}
              <div
                className="border p-8"
                style={{
                  borderColor: "var(--color-paper-border)",
                  background: "var(--color-paper-surface)",
                }}
              >
                <h3>CDP 30-Day Pilot</h3>
                <p className="mt-2 text-base" style={{ color: "var(--color-text-dark-secondary)" }}>
                  Controls how your team makes and records pipeline decisions
                </p>
                <p className="mt-4 text-sm" style={{ color: "var(--color-accent)" }}>
                  30 days &middot; 5&ndash;10 operators &middot; 16 sessions &middot; UK only
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "CRM governance fields",
                    "Operator training programme",
                    "Manager oversight cadence",
                    "Measurement framework",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-dark)" }}>
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: "var(--color-accent)" }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/cdp"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm transition-colors"
                  style={{ color: "var(--color-accent)" }}
                >
                  Explore the pilot &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Who We Serve ── */}
        <section
          aria-labelledby="serve-heading"
          className="section-dark-1 section-padding"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 id="serve-heading">
                Who We Serve
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Sales teams in regulated UK sectors: financial advice, insurance, wealth management, mortgage, pensions",
                  "Firms where outbound hasn\u2019t been reviewed for message risk",
                  "Teams where pipeline decisions lack documentation, evidence, or deadline discipline",
                  "Managers who review pipelines using narrative instead of data",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    <svg className="mt-1 h-5 w-5 flex-shrink-0" style={{ color: "var(--color-accent)" }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Which Engagement ── */}
        <section
          id="which-engagement"
          aria-labelledby="which-heading"
          className="section-paper section-padding"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="which-heading">
                Which Engagement Is Right?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-text-dark-secondary)" }}>
                The Outbound Governance Install governs what your team says. The CDP 30-Day Pilot governs how pipeline decisions are made and recorded. Most teams start with outbound. Some need both.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/ogi"
                  className="btn-primary-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2"
                >
                  Start with Outbound &rarr;
                </Link>
                <Link
                  href="/cdp"
                  className="inline-flex min-h-[48px] items-center gap-2 border px-8 py-3.5 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2"
                  style={{
                    borderColor: "var(--color-paper-border)",
                    color: "var(--color-text-dark)",
                  }}
                >
                  Explore the CDP 30-Day Pilot &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Who Delivers ── */}
        <section
          id="team"
          aria-labelledby="team-heading"
          className="section-dark-1 section-padding"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h2 id="team-heading">
                Who Delivers
              </h2>
              <div className="mt-10 space-y-8">
                <div>
                  <h3>
                    Sindri J&oacute;nsson{" "}
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      &mdash; Principal. Governance design, delivery, measurement.
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="section-dark section-padding">
          <div className="container-max">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-base" style={{ color: "var(--color-text-secondary)" }}>
                <a
                  href="mailto:contact@cdp-governance.com"
                  className="transition-colors"
                  style={{ color: "var(--color-accent)" }}
                >
                  contact@cdp-governance.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
