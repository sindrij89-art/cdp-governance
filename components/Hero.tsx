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
      className="relative overflow-hidden bg-[color:var(--cdp-navy)]"
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Now accepting pilot applications
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Decision Clarity for Sales Teams
            <span className="mt-2 block text-white/60">
              Join the CDP Pilot
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            A governance layer designed to support clear Yes / No / Still Open
            outcomes, evidence tracking, and disciplined follow-ups.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#apply"
              className="font-heading inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[color:var(--cdp-navy)] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--cdp-navy)]"
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
              className="font-heading inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/30 px-8 py-3.5 text-base font-medium text-white/90 transition-colors hover:border-white/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--cdp-navy)]"
            >
              Request Pilot Pack (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
