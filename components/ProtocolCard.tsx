interface ProtocolCardProps {
  id: string;
  label: string;
  scope: string;
  version?: string;
  variant?: "dark" | "paper";
}

export default function ProtocolCard({
  id,
  label,
  scope,
  version = "v1.0",
  variant = "dark",
}: ProtocolCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className="protocol-card relative p-6"
      style={{
        border: `1px solid ${isDark ? "var(--color-border)" : "var(--color-paper-border)"}`,
        borderRadius: 0,
        background: isDark
          ? "rgba(255, 255, 255, 0.03)"
          : "var(--color-paper-surface)",
        backdropFilter: isDark ? "blur(8px)" : "none",
        WebkitBackdropFilter: isDark ? "blur(8px)" : "none",
        minHeight: "auto",
        transition:
          "border-color var(--duration-global) var(--ease-global), background var(--duration-global) var(--ease-global), opacity var(--duration-global) var(--ease-global)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.4)";
        e.currentTarget.style.background = isDark
          ? "rgba(255, 255, 255, 0.05)"
          : "var(--color-paper-surface)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = isDark
          ? "var(--color-border)"
          : "var(--color-paper-border)";
        e.currentTarget.style.background = isDark
          ? "rgba(255, 255, 255, 0.03)"
          : "var(--color-paper-surface)";
      }}
    >
      {/* Top row: ID badge + REF tag */}
      <div className="flex items-start justify-between">
        <span className="tech-label">{id}</span>
        <span
          className="font-mono text-[0.625rem] uppercase tracking-wider"
          style={{
            color: isDark
              ? "var(--color-text-secondary)"
              : "var(--color-text-dark-secondary)",
          }}
        >
          REF: CDP-{id}.{version}
        </span>
      </div>

      {/* Label */}
      <p
        className="mt-3 text-base"
        style={{
          color: isDark ? "var(--color-text-primary)" : "var(--color-text-dark)",
        }}
      >
        {label}
      </p>

      {/* Scope */}
      <p
        className="mt-1 text-sm"
        style={{
          color: isDark
            ? "var(--color-text-secondary)"
            : "var(--color-text-dark-secondary)",
        }}
      >
        {scope}
      </p>
    </div>
  );
}
