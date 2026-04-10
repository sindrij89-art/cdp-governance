"use client";

import { useState, useEffect, useRef } from "react";
import {
  METRICS_DICTIONARY,
  DELIVERABLES_DICTIONARY,
  type MetricCode,
  type DeliverableCode,
} from "@/lib/dictionaries";

interface Section {
  id: string;
  label: string;
  metricCodes?: MetricCode[];
  deliverableCodes?: DeliverableCode[];
}

interface MetadataRailProps {
  sections: Section[];
  engagementTitle: string;
  engagementScope: string;
  engagementPrice: string;
  engagementTimeline: string;
}

export default function MetadataRail({
  sections,
  engagementTitle,
  engagementScope,
  engagementPrice,
  engagementTimeline,
}: MetadataRailProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the most visible entry
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) {
              best = entry;
            }
          }
        }
        if (best) {
          setActiveSection(best.target.id);
        }
      },
      { threshold: [0, 0.1, 0.3, 0.5], rootMargin: "-80px 0px -40% 0px" }
    );

    const elements: Element[] = [];
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        observerRef.current.observe(el);
        elements.push(el);
      }
    }

    return () => {
      if (observerRef.current) {
        for (const el of elements) {
          observerRef.current.unobserve(el);
        }
        observerRef.current.disconnect();
      }
    };
  }, [sections]);

  const activeSectionData = sections.find((s) => s.id === activeSection);

  const railContent = (
    <div className="space-y-6">
      {/* Static overview — always visible at top */}
      <div className="space-y-3">
        <p
          className="font-mono text-[0.625rem] uppercase tracking-wider"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Active Engagement
        </p>
        <p className="text-sm" style={{ color: "var(--color-text-primary)" }}>
          {engagementTitle}
        </p>
        <p
          className="text-xs"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {engagementScope}
        </p>
        <div className="flex gap-4 pt-2">
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-wider" style={{ color: "var(--color-text-secondary)" }}>
              Fee
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-primary)" }}>
              {engagementPrice}
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-wider" style={{ color: "var(--color-text-secondary)" }}>
              Timeline
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-primary)" }}>
              {engagementTimeline}
            </p>
          </div>
        </div>
      </div>

      <div
        className="border-t"
        style={{ borderColor: "var(--color-border)" }}
      />

      {/* Metric codes */}
      {activeSectionData?.metricCodes && activeSectionData.metricCodes.length > 0 && (
        <div className="space-y-3">
          <p
            className="font-mono text-[0.625rem] uppercase tracking-wider"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Active Metrics
          </p>
          {activeSectionData.metricCodes.map((code) => {
            const metric = METRICS_DICTIONARY[code];
            return (
              <div
                key={code}
                className="pl-3"
                style={{
                  borderLeft: "3px solid var(--color-accent)",
                  transition: "border-color var(--duration-global) var(--ease-global)",
                }}
              >
                <span className="tech-label">{code}</span>
                <p className="mt-1 text-xs" style={{ color: "var(--color-text-primary)" }}>
                  {metric.label}
                </p>
                <p className="mt-0.5 text-xs" style={{ color: "var(--color-text-secondary)" }}>
                  {metric.definition}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* Deliverable codes */}
      {activeSectionData?.deliverableCodes && activeSectionData.deliverableCodes.length > 0 && (
        <div className="space-y-3">
          <p
            className="font-mono text-[0.625rem] uppercase tracking-wider"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Active Deliverables
          </p>
          {activeSectionData.deliverableCodes.map((code) => {
            const deliverable = DELIVERABLES_DICTIONARY[code];
            return (
              <div
                key={code}
                className="pl-3"
                style={{
                  borderLeft: "3px solid var(--color-accent)",
                  transition: "border-color var(--duration-global) var(--ease-global)",
                }}
              >
                <span className="tech-label">{code}</span>
                <p className="mt-1 text-xs" style={{ color: "var(--color-text-primary)" }}>
                  {deliverable.label}
                </p>
                <p className="mt-0.5 text-xs" style={{ color: "var(--color-text-secondary)" }}>
                  {deliverable.scope}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* All dictionary entries — dimmed when not active */}
      {!activeSectionData?.metricCodes && !activeSectionData?.deliverableCodes && (
        <div className="space-y-2">
          <p
            className="font-mono text-[0.625rem] uppercase tracking-wider"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Reference
          </p>
          {Object.entries(METRICS_DICTIONARY).map(([code, metric]) => (
            <div
              key={code}
              className="pl-3 py-1"
              style={{
                borderLeft: "3px solid transparent",
                opacity: 0.5,
                transition: "opacity var(--duration-global) var(--ease-global)",
              }}
            >
              <span className="tech-label">{code}</span>
              <p className="mt-0.5 text-xs" style={{ color: "var(--color-text-secondary)" }}>
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <aside
        className="hidden lg:block"
        style={{
          position: "sticky",
          top: "5rem",
          height: "calc(100vh - 5rem)",
          overflowY: "auto",
          background: "var(--color-surface-1)",
          borderLeft: "1px solid var(--color-border)",
          padding: "2rem",
        }}
      >
        {railContent}
      </aside>

      {/* Tablet: collapsible panel */}
      <div className="hidden md:block lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex w-full items-center justify-between px-4 py-3 font-mono text-xs uppercase tracking-wider"
          style={{
            background: "var(--color-surface-1)",
            color: "var(--color-text-secondary)",
            border: "1px solid var(--color-border)",
          }}
        >
          Technical Reference
          <svg
            className={`h-4 w-4 transition-transform ${mobileOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        {mobileOpen && (
          <div
            className="px-4 py-4"
            style={{
              background: "var(--color-surface-1)",
              borderLeft: "1px solid var(--color-border)",
              borderRight: "1px solid var(--color-border)",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            {railContent}
          </div>
        )}
      </div>
    </>
  );
}
