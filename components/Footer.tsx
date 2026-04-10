import Image from "next/image";
import Link from "next/link";
import SystemStatus from "./SystemStatus";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-surface-0)",
      }}
    >
      <div className="container-max px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-cdp-white.png"
              alt="CDP logo"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Links */}
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-6 text-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <a
              href="mailto:contact@cdp-governance.com"
              className="transition-colors hover:text-[color:var(--color-accent)]"
            >
              contact@cdp-governance.com
            </a>
            <Link href="/privacy" className="transition-colors hover:text-[color:var(--color-accent)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[color:var(--color-accent)]">
              Terms of Service
            </Link>
          </nav>
        </div>

        <div
          className="mt-6 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p
            className="text-center text-sm sm:text-left"
            style={{ color: "var(--color-text-secondary)" }}
          >
            &copy; {new Date().getFullYear()} CDP Governance. All rights reserved.
          </p>
          <SystemStatus />
        </div>
      </div>
    </footer>
  );
}
