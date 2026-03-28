import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CDP Governance — Sales Governance for Regulated UK Teams",
    template: "%s",
  },
  description:
    "Two fixed-scope engagements for regulated UK sales teams. Outbound message governance and pipeline decision governance. Delivered, measured, and handed over.",
  keywords: [
    "sales governance",
    "outbound governance",
    "decision governance",
    "regulated sales teams",
    "UK sales governance",
    "message risk review",
    "pipeline governance",
  ],
  authors: [{ name: "CDP Governance" }],
  openGraph: {
    title: "CDP Governance — Sales Governance for Regulated UK Teams",
    description:
      "Two fixed-scope engagements for regulated UK sales teams. Outbound message governance and pipeline decision governance.",
    url: "https://cdp-governance.com",
    siteName: "CDP Governance",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "CDP Governance — Sales Governance for Regulated UK Teams",
    description:
      "Two fixed-scope engagements for regulated UK sales teams. Outbound message governance and pipeline decision governance.",
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
