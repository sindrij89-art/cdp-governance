import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — CDP Governance",
  description:
    "Privacy policy for cdp-governance.com. How we collect, use, and protect your data.",
  alternates: {
    canonical: "https://cdp-governance.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <section className="px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20 bg-[color:var(--bg)]">
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-[color:var(--accent)]">Legal</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Privacy Policy
              </h1>
              <p className="mt-3 text-sm text-[color:var(--text-muted)]">
                Last updated: March 2026
              </p>

              <div className="mt-10 space-y-8 text-base leading-relaxed text-[color:var(--why-text)]">
                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">Data Controller</h2>
                  <p className="mt-3">
                    CDP Governance (Sindri J&oacute;nsson, Principal) is the data controller for personal data collected through this website.
                  </p>
                  <p className="mt-2">
                    Contact: <a href="mailto:contact@cdp-governance.com" className="text-[color:var(--accent)] hover:underline">contact@cdp-governance.com</a>
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">What Data We Collect</h2>
                  <p className="mt-3">
                    When you submit a form on this website, we collect the information you provide:
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-6">
                    <li>Full name</li>
                    <li>Work email address</li>
                    <li>Company name (if provided)</li>
                    <li>Role or outbound channel (depending on the form)</li>
                    <li>Free-text responses describing your needs</li>
                  </ul>
                  <p className="mt-3">
                    We also collect technical metadata with each submission: referring URL, user agent, and submission timestamp. We do not use tracking cookies or third-party analytics scripts.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">Legal Basis for Processing</h2>
                  <p className="mt-3">
                    We process your personal data on the following bases under UK GDPR:
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-6">
                    <li><strong>Consent:</strong> By submitting a form, you consent to us processing your data to respond to your enquiry.</li>
                    <li><strong>Legitimate interest:</strong> To respond to business enquiries and assess fit for our engagements.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">How We Use Your Data</h2>
                  <p className="mt-3">
                    We use the data you provide solely to:
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-6">
                    <li>Respond to your enquiry or submission</li>
                    <li>Assess whether our services are a fit for your needs</li>
                    <li>Communicate with you about a potential or active engagement</li>
                  </ul>
                  <p className="mt-3">
                    We do not sell your data to third parties. We do not use your data for marketing purposes beyond responding to the enquiry you initiated.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">Data Retention</h2>
                  <p className="mt-3">
                    Enquiry data is retained for 12 months from submission, then deleted unless an engagement begins. If an engagement is agreed, data is retained for the duration of the engagement and any contractual retention period.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">Third-Party Processors</h2>
                  <p className="mt-3">
                    We use the following third-party services to operate this website:
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-6">
                    <li>Hosting provider (for serving the website)</li>
                    <li>Database provider (for storing form submissions)</li>
                  </ul>
                  <p className="mt-3">
                    These providers process data on our behalf under appropriate data processing agreements. No data is sold to or shared with advertisers or data brokers.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">Cookies</h2>
                  <p className="mt-3">
                    This website uses only functional cookies (theme preference stored in your browser&apos;s local storage). We do not use tracking cookies, advertising cookies, or third-party analytics cookies.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">Your Rights</h2>
                  <p className="mt-3">
                    Under UK GDPR, you have the right to:
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-6">
                    <li>Access the personal data we hold about you</li>
                    <li>Request rectification of inaccurate data</li>
                    <li>Request erasure of your data</li>
                    <li>Request data portability</li>
                    <li>Object to processing of your data</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                  <p className="mt-3">
                    To exercise any of these rights, contact us at{" "}
                    <a href="mailto:contact@cdp-governance.com" className="text-[color:var(--accent)] hover:underline">
                      contact@cdp-governance.com
                    </a>
                    . We will respond within 30 days.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">Complaints</h2>
                  <p className="mt-3">
                    If you are not satisfied with our response, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO).
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
