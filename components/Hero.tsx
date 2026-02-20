const proofChips = [
  "UK-only",
  "30-day pilot",
  "Non-renewing",
  "Acceptance = D1\u2013D8 delivered",
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, var(--hero-gradient-start) 0%, var(--hero-gradient-mid) 45%, var(--hero-gradient-end) 100%)",
      }}
    >
      {/* ── Visual system: 3 layers (all decorative) ── */}
      <div className="absolute inset-0" aria-hidden="true">

        {/* A) Vignette — darkens edges for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, rgba(5,10,25,0.4) 100%)",
          }}
        />

        {/* B) Geometric overlay — governance grid + curved decision paths + nodes */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 700"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Fine grid — horizontal */}
          {[100, 200, 300, 400, 500, 600].map((y) => (
            <line
              key={`h-${y}`}
              x1="0" y1={y} x2="1200" y2={y}
              stroke="white" strokeWidth="0.3" opacity="0.05"
            />
          ))}
          {/* Fine grid — vertical */}
          {[150, 300, 450, 600, 750, 900, 1050].map((x) => (
            <line
              key={`v-${x}`}
              x1={x} y1="0" x2={x} y2="700"
              stroke="white" strokeWidth="0.3" opacity="0.05"
            />
          ))}

          {/* Curved decision path — left to centre */}
          <path
            d="M-50,620 C200,580 350,400 600,310"
            stroke="rgba(12,153,118,0.18)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Curved decision path — right to centre */}
          <path
            d="M1250,620 C1000,580 850,400 600,310"
            stroke="rgba(12,153,118,0.18)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Secondary subtle arcs */}
          <path
            d="M-30,520 C250,480 400,360 600,300"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.06"
            strokeLinecap="round"
          />
          <path
            d="M1230,520 C950,480 800,360 600,300"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.06"
            strokeLinecap="round"
          />

          {/* Nodes along the paths */}
          {[
            [120, 590], [300, 510], [450, 400], [600, 310],
            [750, 400], [900, 510], [1080, 590],
          ].map(([cx, cy], i) => (
            <circle
              key={`node-${i}`}
              cx={cx} cy={cy} r={i === 3 ? 3 : 1.8}
              fill={i === 3 ? "rgba(12,153,118,0.35)" : "rgba(255,255,255,0.12)"}
            />
          ))}

          {/* Centre convergence node — ring */}
          <circle
            cx="600" cy="310" r="8"
            stroke="rgba(12,153,118,0.15)"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* C) Soft glows */}
        {/* Glow behind headline area */}
        <div
          className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "min(800px, 95vw)",
            height: "min(500px, 60vw)",
            background:
              "radial-gradient(ellipse, rgba(12,153,118,0.07) 0%, rgba(12,153,118,0.02) 45%, transparent 70%)",
          }}
        />
        {/* Cool glow — top left */}
        <div
          className="absolute -left-20 -top-20 h-80 w-80 rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, rgba(10,44,109,0.9) 0%, transparent 70%)",
          }}
        />
        {/* Warm glow — bottom right */}
        <div
          className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, rgba(12,153,118,0.7) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="container-max relative px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">

          {/* Status pill */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--hero-border)] bg-[color:var(--hero-badge-bg)] px-4 py-1.5 text-sm text-[color:var(--hero-text-muted)] backdrop-blur-sm">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[color:var(--accent)]" />
            Now accepting pilot applications
          </div>

          {/* H1 — single strong headline */}
          <h1
            id="hero-heading"
            className="text-4xl font-semibold leading-[1.15] tracking-tight text-[color:var(--hero-text)] sm:text-5xl lg:text-6xl"
          >
            Decision Clarity for{" "}
            <br className="hidden sm:inline" />
            Sales Teams
          </h1>

          {/* Subhead */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--hero-text-muted)] sm:text-xl">
            A governance layer designed to support clear
            Yes&nbsp;/&nbsp;No&nbsp;/&nbsp;Still&nbsp;Open outcomes, evidence
            tracking, and disciplined follow-ups.
          </p>

          {/* Micro-proof chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {proofChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-medium tracking-wide text-[color:var(--hero-text-muted)] backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* CTA block */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://app.cdp-governance.com/login"
              className="font-heading inline-flex min-h-[48px] items-center gap-2.5 rounded-lg bg-[color:var(--accent)] px-9 py-3.5 text-base font-semibold text-[color:var(--accent-contrast)] shadow-lg shadow-[rgba(12,153,118,0.25)] transition-all hover:bg-[color:var(--accent-hover)] hover:shadow-xl hover:shadow-[rgba(12,153,118,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--hero-bg)]"
            >
              Open the App
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
              href="https://app.cdp-governance.com/install"
              className="font-heading inline-flex min-h-[48px] items-center gap-2 rounded-lg border border-white/15 px-9 py-3.5 text-base font-medium text-[color:var(--hero-text-muted)] ring-1 ring-inset ring-white/[0.06] transition-all hover:border-white/30 hover:bg-white/[0.04] hover:text-[color:var(--hero-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--hero-bg)]"
            >
              Install on your phone
            </a>
          </div>

          <p className="mx-auto mt-4 max-w-lg text-sm text-white/50">
            Operators can use the web app, or optionally install it to their home screen.
          </p>

          {/* Footnote */}
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-white/30">
            Deliverables-based pilot. Measurement supported; outcomes not
            guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
