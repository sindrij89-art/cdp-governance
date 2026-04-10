import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignupForm from "@/components/SignupForm";
import CdpContent from "./CdpContent";
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
          className="section-dark relative overflow-hidden"
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
              <path d="M-50,620 C200,580 350,400 600,310" stroke="rgba(16,185,129,0.18)" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M1250,620 C1000,580 850,400 600,310" stroke="rgba(16,185,129,0.18)" strokeWidth="1.2" strokeLinecap="round" />
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
                background:
                  "radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, rgba(16,185,129,0.02) 45%, transparent 70%)",
              }}
            />
          </div>

          <div className="container-max relative px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
            <div className="mx-auto max-w-3xl text-center">
              <h1
                id="cdp-hero-heading"
                className="stagger-entry stagger-1 leading-[1.15] tracking-tight"
                style={{ color: "var(--color-text-primary)" }}
              >
                CDP 30-Day Pilot
              </h1>
              <p className="stagger-entry stagger-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl" style={{ color: "var(--color-text-secondary)" }}>
                A 30-day governance overlay for one regulated UK sales team. CRM decision fields, operator training, manager oversight, and measurement &mdash; installed and handed over.
              </p>
              <div className="stagger-entry stagger-4 mx-auto mt-6 flex flex-wrap items-center justify-center gap-2">
                {["UK only", "Non-renewing", "Compatibility check required", "Deliverables-based acceptance"].map((badge) => (
                  <span key={badge} className="tech-label">{badge}</span>
                ))}
              </div>

              <div className="stagger-entry stagger-3 mt-8">
                <a
                  href="#apply"
                  className="btn-primary shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-primary)]"
                >
                  Check pilot fit &rarr;
                </a>
              </div>

              <p className="mx-auto mt-4 max-w-lg text-xs text-white/35">
                Active pilot participants can access the{" "}
                <a href="https://app.cdp-governance.com/login" className="underline hover:text-white/60 transition-colors">
                  delivery app
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ── Main content with MetadataRail ── */}
        <CdpContent />

        {/* ── Application Form ── */}
        <SignupForm />

        {/* ── Bridge to OGI ── */}
        <section className="section-dark section-padding">
          <div className="container-max">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Haven&apos;t reviewed your outbound yet? The Outbound Governance Install is the fixed-scope first step for teams that need message control before pipeline governance.
              </p>
              <Link
                href="/ogi"
                className="mt-6 inline-flex items-center gap-1.5 text-base transition-colors"
                style={{ color: "var(--color-accent)" }}
              >
                Learn about the Outbound Governance Install &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── Professional Boundary ── */}
        <section className="section-dark px-4 py-6 sm:px-6 lg:px-8">
          <div className="container-max">
            <p className="mx-auto max-w-3xl text-center text-xs" style={{ color: "var(--color-text-secondary)" }}>
              CDP does not provide legal, regulatory, or compliance advice. The client retains sign-off on all regulatory interpretation. Deliverables provided &mdash; not outcomes achieved.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
