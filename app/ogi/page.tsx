import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OgiForm from "@/components/OgiForm";
import OgiContent from "./OgiContent";
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
                id="ogi-hero-heading"
                className="stagger-entry stagger-1 leading-[1.15] tracking-tight"
                style={{ color: "var(--color-text-primary)" }}
              >
                Outbound Governance Install
              </h1>
              <p className="stagger-entry stagger-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl" style={{ color: "var(--color-text-secondary)" }}>
                A fixed-scope advisory review and correction of live outbound sales materials for regulated UK sales teams. One team. One primary outbound motion. One review round. 7&ndash;14 calendar days.
              </p>
              <div className="stagger-entry stagger-4 mx-auto mt-6 flex flex-wrap items-center justify-center gap-2">
                {["Fixed scope", "7–14 days", "Up to 10 assets", "£5,000 + VAT"].map((badge) => (
                  <span key={badge} className="tech-label">{badge}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Main content with MetadataRail ── */}
        <OgiContent />

        {/* ── Form ── */}
        <OgiForm />

        {/* ── Bridge to CDP ── */}
        <section className="section-dark section-padding">
          <div className="container-max">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                This install governs what your team says. If you also need to govern how pipeline decisions are made and recorded, the CDP 30-Day Pilot addresses that directly.
              </p>
              <Link
                href="/cdp"
                className="mt-6 inline-flex items-center gap-1.5 text-base transition-colors"
                style={{ color: "var(--color-accent)" }}
              >
                Learn about the CDP 30-Day Pilot &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── Professional Boundary ── */}
        <section className="section-dark px-4 py-6 sm:px-6 lg:px-8">
          <div className="container-max">
            <p className="mx-auto max-w-3xl text-center text-xs" style={{ color: "var(--color-text-secondary)" }}>
              This is an advisory assessment of outbound message quality. It does not constitute legal, regulatory, or compliance advice.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
