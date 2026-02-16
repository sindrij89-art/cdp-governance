import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CDP — Decision Clarity for Sales Teams",
  description:
    "CDP is a 30-day sales governance pilot for UK teams. Rules, CRM fields, manager routines, and measurement. Designed to support documented decisions — measured, not guaranteed.",
  keywords: [
    "CDP governance pilot",
    "ethical sales decision protocol",
    "sales governance",
    "decision clarity",
    "sales process governance",
    "evidence-based sales",
  ],
  authors: [{ name: "CDP Governance" }],
  openGraph: {
    title: "CDP — Decision Clarity for Sales Teams",
    description:
      "30-day governance pilot for UK sales teams. Measured, not guaranteed.",
    url: "https://cdp-governance.com",
    siteName: "CDP Governance",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "CDP — Decision Clarity for Sales Teams",
    description:
      "30-day governance pilot for UK sales teams. Measured, not guaranteed.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://cdp-governance.com",
  },
};

/* Inline script to set theme before paint — prevents flash of wrong theme */
const themeScript = `(function(){try{var t=localStorage.getItem('cdp_theme');if(t==='dark'){document.documentElement.dataset.theme='dark'}else{document.documentElement.dataset.theme='light'}}catch(e){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" data-theme="light">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
