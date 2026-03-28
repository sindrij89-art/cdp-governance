import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--footer-border)] bg-[color:var(--footer-bg)]">
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
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-6 text-sm text-[color:var(--footer-text)]">
            <a
              href="mailto:contact@cdp-governance.com"
              className="transition-colors hover:text-[color:var(--accent)]"
            >
              contact@cdp-governance.com
            </a>
            <Link href="/privacy" className="transition-colors hover:text-[color:var(--accent)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[color:var(--accent)]">
              Terms of Service
            </Link>
          </nav>
        </div>

        <div className="mt-6 border-t border-[color:var(--footer-border)] pt-6 text-center text-sm text-[color:var(--footer-text-faint)]">
          &copy; {new Date().getFullYear()} CDP Governance. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
