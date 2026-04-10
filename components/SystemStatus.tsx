export default function SystemStatus() {
  return (
    <div className="flex items-center gap-2" aria-hidden="true">
      <span
        className="inline-block h-2 w-2 rounded-full"
        style={{
          backgroundColor: "var(--color-accent)",
          animation: "pulse-dot 2s infinite",
        }}
      />
      <span
        className="font-mono uppercase"
        style={{
          fontSize: "0.625rem",
          letterSpacing: "0.08em",
          color: "var(--color-text-secondary)",
        }}
      >
        NODE: SOVEREIGN &nbsp;|&nbsp; ARCHITECTURE: STATIC &nbsp;|&nbsp; ATTACK
        SURFACE: ZERO
      </span>
    </div>
  );
}
