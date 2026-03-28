import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — CDP Governance",
  description:
    "CDP Governance is a practice serving regulated UK sales teams with two fixed-scope governance engagements.",
  alternates: {
    canonical: "https://cdp-governance.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <section className="section-padding bg-[color:var(--bg)]">
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                About CDP Governance
              </h1>

              <div className="mt-10 space-y-6 text-base leading-relaxed text-[color:var(--why-text)]">
                <p>
                  CDP Governance is a practice serving regulated UK sales teams. We deliver two fixed-scope engagements: one that governs what your team says to the market, and one that governs how pipeline decisions are made and recorded.
                </p>
                <p>
                  The practice is delivery-led, not software-led. Each engagement has a defined scope, a named delivery team, a handover date, and a set of deliverables. We do not sell ongoing retainers, and our engagements are non-renewing by default.
                </p>
                <p>
                  Most teams start with outbound. The Outbound Governance Install reviews and corrects live outbound materials against a message risk standard, then hands over a pre-send review gate and a manager QA checklist. It runs for 7&ndash;14 calendar days.
                </p>
                <p>
                  For teams that also need pipeline governance, the CDP 30-Day Pilot installs CRM decision fields, operator training, a manager oversight cadence, and a measurement framework. It runs for 30 calendar days and transfers eight defined deliverables at completion.
                </p>
                <p>
                  We serve financial advice, insurance, wealth management, mortgage, and pensions teams &mdash; sectors where documentation, evidence, and message control are not optional.
                </p>
              </div>

              <div className="mt-16">
                <h2 className="text-2xl font-semibold">Who Delivers</h2>
                <div className="mt-8 space-y-8">
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

              <div className="mt-16">
                <p className="text-base text-[color:var(--text-muted)]">
                  <a
                    href="mailto:contact@cdp-governance.com"
                    className="font-medium text-[color:var(--accent)] transition-colors hover:text-[color:var(--accent-hover)]"
                  >
                    contact@cdp-governance.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
