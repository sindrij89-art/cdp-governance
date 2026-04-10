"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 64);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: scrolled ? "rgba(11, 18, 33, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
        transition:
          "background-color var(--duration-global) var(--ease-global), border-color var(--duration-global) var(--ease-global), backdrop-filter var(--duration-global) var(--ease-global)",
      }}
    >
      <div className="container-max flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo — always white */}
        <Link href="/" className="flex items-center gap-3" aria-label="CDP Governance home">
          <Image
            src="/logo-cdp-white.png"
            alt="CDP logo"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <nav aria-label="Primary" className="nav-links hidden items-center gap-8 md:flex">
          <Link
            href="/ogi"
            className="text-sm transition-colors"
            style={{
              color: pathname === "/ogi" ? "var(--color-text-primary)" : "var(--color-text-secondary)",
              transition: "color var(--duration-global) var(--ease-global), opacity var(--duration-global) var(--ease-global)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-text-primary)"; }}
            onMouseLeave={(e) => { if (pathname !== "/ogi") e.currentTarget.style.color = "var(--color-text-secondary)"; }}
          >
            Outbound Governance Install
          </Link>
          <Link
            href="/cdp"
            className="text-sm transition-colors"
            style={{
              color: pathname === "/cdp" ? "var(--color-text-primary)" : "var(--color-text-secondary)",
              transition: "color var(--duration-global) var(--ease-global), opacity var(--duration-global) var(--ease-global)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-text-primary)"; }}
            onMouseLeave={(e) => { if (pathname !== "/cdp") e.currentTarget.style.color = "var(--color-text-secondary)"; }}
          >
            CDP 30-Day Pilot
          </Link>
          <Link
            href="/about"
            className="text-sm transition-colors"
            style={{
              color: pathname === "/about" ? "var(--color-text-primary)" : "var(--color-text-secondary)",
              transition: "color var(--duration-global) var(--ease-global), opacity var(--duration-global) var(--ease-global)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-text-primary)"; }}
            onMouseLeave={(e) => { if (pathname !== "/about") e.currentTarget.style.color = "var(--color-text-secondary)"; }}
          >
            About
          </Link>

          <a
            href="mailto:contact@cdp-governance.com"
            className="bg-[color:var(--color-text-primary)] px-5 py-2.5 text-sm uppercase tracking-wider transition-colors hover:bg-[color:var(--color-accent)]"
            style={{
              color: "var(--color-primary)",
              transition: "background-color var(--duration-global) var(--ease-global)",
            }}
          >
            Contact
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 md:hidden"
          style={{ color: "var(--color-text-secondary)" }}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="px-4 py-4 md:hidden"
          style={{
            backgroundColor: "var(--color-primary)",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <div className="flex flex-col gap-3">
            <Link
              href="/ogi"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 text-sm"
              style={{
                color: pathname === "/ogi" ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                backgroundColor: pathname === "/ogi" ? "var(--color-surface-1)" : "transparent",
              }}
            >
              Outbound Governance Install
            </Link>
            <Link
              href="/cdp"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 text-sm"
              style={{
                color: pathname === "/cdp" ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                backgroundColor: pathname === "/cdp" ? "var(--color-surface-1)" : "transparent",
              }}
            >
              CDP 30-Day Pilot
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 text-sm"
              style={{
                color: pathname === "/about" ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                backgroundColor: pathname === "/about" ? "var(--color-surface-1)" : "transparent",
              }}
            >
              About
            </Link>
            <a
              href="mailto:contact@cdp-governance.com"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-2.5 text-center text-sm uppercase tracking-wider"
              style={{
                backgroundColor: "var(--color-text-primary)",
                color: "var(--color-primary)",
              }}
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
