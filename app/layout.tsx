import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
