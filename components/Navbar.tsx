"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "Benefits", href: "#benefits" },
  { label: "Pilot Details", href: "#details" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="container-max flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3" aria-label="CDP Governance home">
          <Image
            src="/logo-cdp-dark.png"
            alt="CDP logo"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-500 transition-colors hover:text-[color:var(--cdp-navy)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            className="font-heading rounded-lg bg-[color:var(--cdp-navy)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--cdp-accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--cdp-navy)] focus-visible:ring-offset-2"
          >
            Apply for Pilot
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 md:hidden"
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
          className="border-t border-gray-100 bg-white px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[color:var(--cdp-navy)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-[color:var(--cdp-navy)] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[color:var(--cdp-accent-hover)]"
            >
              Apply for Pilot
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
