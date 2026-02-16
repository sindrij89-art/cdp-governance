"use client";

export default function Hero() {
  function handleRequestPack(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const applySection = document.getElementById("apply");
    if (!applySection) return;

    applySection.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      const textarea = document.getElementById("whyCdp") as HTMLTextAreaElement | null;
      if (textarea) {
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLTextAreaElement.prototype,
          "value"
        )?.set;
        if (nativeInputValueSetter) {
          nativeInputValueSetter.call(
            textarea,
            "Requesting Pilot Pack for internal review."
          );
          textarea.dispatchEvent(new Event("input", { bubbles: true }));
        } else {
          textarea.value = "Requesting Pilot Pack for internal review.";
        }
        textarea.focus();
      }
    }, 100);
  }

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--hero-gradient-start) 0%, var(--hero-gradient-mid) 50%, var(--hero-gradient-end) 100%)",
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container-max section-padding relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--hero-border)] bg-[color:var(--hero-badge-bg)] px-4 py-1.5 text-sm text-[color:var(--hero-text-muted)]">
            <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            Now accepting pilot applications
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-4xl font-semibold leading-tight tracking-tight text-[color:var(--hero-text)] sm:text-5xl lg:text-6xl"
          >
            Decision Clarity for Sales Teams
            <span className="mt-2 block text-[color:var(--hero-text-muted)]">
              Join the CDP Pilot
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--hero-text-muted)] sm:text-xl">
            A governance layer designed to support clear Yes / No / Still Open
            outcomes, evidence tracking, and disciplined follow-ups.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#apply"
              className="font-heading inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[color:var(--accent)] px-8 py-3.5 text-base font-semibold text-[color:var(--accent-contrast)] shadow-lg transition-all hover:bg-[color:var(--accent-hover)] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--hero-bg)]"
            >
              Apply for Pilot
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
            <a
              href="#apply"
              onClick={handleRequestPack}
              className="font-heading inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[color:var(--hero-border)] px-8 py-3.5 text-base font-medium text-[color:var(--hero-text-muted)] transition-colors hover:border-white/40 hover:text-[color:var(--hero-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--hero-bg)]"
            >
              Request Pilot Pack (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
