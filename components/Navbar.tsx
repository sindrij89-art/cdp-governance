"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavState = "top" | "hero" | "scrolled";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [navState, setNavState] = useState<NavState>("top");
  const pathname = usePathname();

  useEffect(() => {
    const stored = document.documentElement.dataset.theme as "light" | "dark" | undefined;
    setTheme(stored || "light");
  }, []);

  useEffect(() => {
    function handleScroll() {
      const header = document.querySelector("header");
      const headerHeight = header?.offsetHeight || 64;
      const hero = document.querySelector("[aria-labelledby*='hero']");

      if (!hero) {
        // Pages without a hero (privacy, terms) — always "scrolled" style
        setNavState("scrolled");
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom + window.scrollY - headerHeight;

      if (window.scrollY < headerHeight) {
        setNavState("top");
      } else if (window.scrollY < heroBottom) {
        setNavState("hero");
      } else {
        setNavState("scrolled");
      }
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("cdp_theme", next);
    setTheme(next);
  }

  function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setMobileOpen(false);

    if (pathname === "/ogi") {
      document.getElementById("ogi-form")?.scrollIntoView({ behavior: "smooth" });
    } else if (pathname === "/cdp") {
      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
    } else {
      document.getElementById("which-engagement")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  // In dark theme, always use dark nav styling
  // In light theme: top = white bg showing through, hero = dark gradient behind, scrolled = frosted white
  const useDarkLogo = theme === "dark" ? false : navState !== "hero";
  const useWhiteLogo = !useDarkLogo;

  const navBg = theme === "dark"
    ? "transparent"
    : navState === "scrolled"
      ? "rgba(255, 255, 255, 0.92)"
      : "transparent";

  const navBorder = theme === "dark"
    ? "#1A3A5C"
    : navState === "scrolled"
      ? "rgba(226, 232, 240, 0.8)"
      : navState === "hero"
        ? "#1A3A5C"
        : "rgba(226, 232, 240, 0.5)";

  const isDarkText = theme === "dark" ? false : navState !== "hero";
  const textColor = isDarkText ? "#64748b" : "#94a3b8";
  const textHover = isDarkText ? "#0f172a" : "#ffffff";
  const toggleBorder = isDarkText ? "rgba(226, 232, 240, 1)" : "rgba(26, 58, 92, 1)";
  const mobileToggleColor = isDarkText ? "#64748b" : "#94a3b8";
  const mobileBg = theme === "dark" ? "#0A1E3F" : navState === "scrolled" ? "#ffffff" : navState === "hero" ? "#0A1E3F" : "#ffffff";
  const mobileHoverBg = isDarkText ? "#f1f5f9" : "#0F2847";

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm transition-colors duration-300"
      style={{
        backgroundColor: navBg,
        borderBottom: `1px solid ${navBorder}`,
      }}
    >
      <div className="container-max flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo — switches based on scroll state */}
        <Link href="/" className="flex items-center gap-3" aria-label="CDP Governance home">
          <Image
            src="/logo-cdp-white.png"
            alt="CDP logo"
            width={160}
            height={40}
            className="h-10 w-auto"
            style={{ display: useWhiteLogo ? "block" : "none" }}
            priority
          />
          <Image
            src="/logo-cdp-dark.png"
            alt="CDP logo"
            width={160}
            height={40}
            className="h-10 w-auto"
            style={{ display: useDarkLogo ? "block" : "none" }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <Link
            href="/ogi"
            className="text-sm font-medium transition-colors"
            style={{
              color: pathname === "/ogi" ? textHover : textColor,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = textHover; }}
            onMouseLeave={(e) => { if (pathname !== "/ogi") e.currentTarget.style.color = textColor; }}
          >
            OGI
          </Link>
          <Link
            href="/cdp"
            className="text-sm font-medium transition-colors"
            style={{
              color: pathname === "/cdp" ? textHover : textColor,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = textHover; }}
            onMouseLeave={(e) => { if (pathname !== "/cdp") e.currentTarget.style.color = textColor; }}
          >
            CDP Pilot
          </Link>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors"
            style={{
              color: textColor,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: toggleBorder,
            }}
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
            href="#contact"
            onClick={handleContactClick}
            className="font-heading rounded-lg bg-[color:var(--accent)] px-5 py-2.5 text-sm font-semibold text-[color:var(--accent-contrast)] transition-colors hover:bg-[color:var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2"
          >
            Contact &rarr;
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 md:hidden transition-colors"
          style={{ color: mobileToggleColor }}
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
          className="px-4 py-4 md:hidden transition-colors duration-300"
          style={{
            backgroundColor: mobileBg,
            borderTop: `1px solid ${navBorder}`,
          }}
        >
          <div className="flex flex-col gap-3">
            <Link
              href="/ogi"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium"
              style={{
                color: pathname === "/ogi" ? textHover : textColor,
                backgroundColor: pathname === "/ogi" ? mobileHoverBg : "transparent",
              }}
            >
              OGI
            </Link>
            <Link
              href="/cdp"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium"
              style={{
                color: pathname === "/cdp" ? textHover : textColor,
                backgroundColor: pathname === "/cdp" ? mobileHoverBg : "transparent",
              }}
            >
              CDP Pilot
            </Link>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium"
              style={{ color: textColor }}
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
              href="#contact"
              onClick={handleContactClick}
              className="mt-2 rounded-lg bg-[color:var(--accent)] px-4 py-2.5 text-center text-sm font-semibold text-[color:var(--accent-contrast)] hover:bg-[color:var(--accent-hover)]"
            >
              Contact &rarr;
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
