import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — CDP Governance",
  description:
    "Terms of service for cdp-governance.com.",
  alternates: {
    canonical: "https://cdp-governance.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="pt-16">
        <section className="section-padding bg-[color:var(--bg)]">
          <div className="container-max">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Terms of Service
              </h1>
              <p className="mt-4 text-sm text-[color:var(--text-muted)]">
                Last updated: March 2026
              </p>

              <div className="mt-10 space-y-8 text-base leading-relaxed text-[color:var(--why-text)]">
                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">Website Use</h2>
                  <p className="mt-3">
                    This website is operated by CDP Governance. By accessing and using this website, you agree to these terms. The content on this website is provided for informational purposes only and is intended to describe the services offered by CDP Governance.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">Not Professional Advice</h2>
                  <p className="mt-3">
                    Nothing on this website constitutes legal, regulatory, compliance, financial, or HR advice. CDP Governance provides advisory reviews and governance installations as described on the relevant service pages. The client retains sole responsibility for all regulatory interpretation and compliance decisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">Intellectual Property</h2>
                  <p className="mt-3">
                    All content on this website &mdash; including text, design, graphics, and logos &mdash; is the intellectual property of CDP Governance and is protected by copyright. You may not reproduce, distribute, or create derivative works from this content without prior written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">No Warranties</h2>
                  <p className="mt-3">
                    This website and its content are provided &ldquo;as is&rdquo; without any warranties, express or implied. CDP Governance does not warrant that the website will be available at all times or that the content is complete, accurate, or up to date. Service descriptions are intended to provide a general overview; specific terms are defined in individual engagement agreements (SOWs).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">Limitation of Liability</h2>
                  <p className="mt-3">
                    To the fullest extent permitted by law, CDP Governance shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of this website. Our total liability in connection with the website is limited to the amount you have paid to access the website (which is nil).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">External Links</h2>
                  <p className="mt-3">
                    This website may contain links to external websites. CDP Governance is not responsible for the content, privacy practices, or availability of third-party websites.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">Governing Law</h2>
                  <p className="mt-3">
                    These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">Changes to These Terms</h2>
                  <p className="mt-3">
                    We may update these terms from time to time. Changes take effect when published on this page. Continued use of the website constitutes acceptance of any updated terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-[color:var(--text)]">Contact</h2>
                  <p className="mt-3">
                    For questions about these terms, contact us at{" "}
                    <a href="mailto:contact@cdp-governance.com" className="text-[color:var(--accent)] hover:underline">
                      contact@cdp-governance.com
                    </a>
                    .
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
