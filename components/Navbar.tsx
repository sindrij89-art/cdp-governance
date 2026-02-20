"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Benefits", href: "#benefits" },
  { label: "Pilot Details", href: "#details" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = document.documentElement.dataset.theme as "light" | "dark" | undefined;
    setTheme(stored || "light");
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("cdp_theme", next);
    setTheme(next);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--nav-border)] bg-[color:var(--nav-bg)]/95 backdrop-blur-sm">
      <div className="container-max flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3" aria-label="CDP Governance home">
          <Image
            src="/logo-cdp-white.png"
            alt="CDP logo"
            width={160}
            height={40}
            className="logo-white h-10 w-auto"
            priority
          />
          <Image
            src="/logo-cdp-dark.png"
            alt="CDP logo"
            width={160}
            height={40}
            className="logo-dark h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[color:var(--nav-text)] transition-colors hover:text-[color:var(--nav-text-hover)]"
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 rounded-lg border border-[color:var(--nav-border)] px-3 py-1.5 text-xs font-medium text-[color:var(--nav-text)] transition-colors hover:text-[color:var(--nav-text-hover)]"
            aria-label="Theme"
            aria-pressed={theme === "dark"}
          >
            {theme === "light" ? (
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            ) : (
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            )}
            {theme === "light" ? "Dark" : "Light"}
          </button>

          <a
            href="#apply"
            className="font-heading rounded-lg bg-[color:var(--accent)] px-5 py-2.5 text-sm font-semibold text-[color:var(--accent-contrast)] transition-colors hover:bg-[color:var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--nav-bg)]"
          >
            Apply for the Pilot
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-[color:var(--nav-text)] hover:bg-[color:var(--nav-mobile-hover)] md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-[color:var(--nav-border)] bg-[color:var(--nav-mobile-bg)] px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[color:var(--nav-text)] hover:bg-[color:var(--nav-mobile-hover)] hover:text-[color:var(--nav-text-hover)]"
              >
                {link.label}
              </a>
            ))}
            {/* Mobile theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[color:var(--nav-text)] hover:bg-[color:var(--nav-mobile-hover)] hover:text-[color:var(--nav-text-hover)]"
              aria-label="Theme"
              aria-pressed={theme === "dark"}
            >
              {theme === "light" ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              )}
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
            <a
              href="#apply"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-[color:var(--accent)] px-4 py-2.5 text-center text-sm font-semibold text-[color:var(--accent-contrast)] hover:bg-[color:var(--accent-hover)]"
            >
              Apply for the Pilot
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
