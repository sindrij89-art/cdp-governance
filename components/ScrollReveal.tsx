"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  staggerChildren = false,
  staggerDelay = 100,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    // Set initial state
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity var(--duration-global) var(--ease-global), transform var(--duration-global) var(--ease-global)`;

    if (staggerChildren) {
      const childElements = el.children;
      for (let i = 0; i < childElements.length; i++) {
        const child = childElements[i] as HTMLElement;
        child.style.opacity = "0";
        child.style.transform = "translateY(24px)";
        child.style.transition = `opacity var(--duration-global) var(--ease-global), transform var(--duration-global) var(--ease-global)`;
        child.style.transitionDelay = `${i * staggerDelay}ms`;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";

          if (staggerChildren) {
            const childElements = el.children;
            for (let i = 0; i < childElements.length; i++) {
              const child = childElements[i] as HTMLElement;
              child.style.opacity = "1";
              child.style.transform = "translateY(0)";
            }
          }

          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [staggerChildren, staggerDelay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
