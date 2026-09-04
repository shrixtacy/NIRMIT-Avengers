import type { Metadata } from "next";
import { Bebas_Neue, Antonio, Teko, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import NirmitLogo from "./components/NirmitLogo";
import BottomNav from "./components/BottomNav";
import GlobalCornerOverlays from "./components/GlobalCornerOverlays";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const antonio = Antonio({
  weight: ["400", "700"],
  variable: "--font-antonio",
  subsets: ["latin"],
});

const teko = Teko({
  weight: ["400", "600", "700"],
  variable: "--font-teko",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import SEOStructuredData from "./components/SEOStructuredData";
import { exhaustiveKeywords, defaultSeoData, SITE_URL } from "./seo-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultSeoData.title,
    template: "%s | NIRMIT 2.0 — NMIET Bhubaneswar",
  },
  description: defaultSeoData.description,
  keywords: exhaustiveKeywords,
  authors: [{ name: "NMIET Student Council & Tech Fest Committee", url: SITE_URL }],
  creator: "NM Institute of Engineering & Technology (NMIET Bhubaneswar)",
  publisher: "NIRMIT 2.0 Tech Fest",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: defaultSeoData.openGraph,
  twitter: defaultSeoData.twitter,
  category: "technology",
};

import { RegistrationModalProvider } from "./components/RegistrationModal";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${bebasNeue.variable} ${antonio.variable} ${teko.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <head suppressHydrationWarning>
        <SEOStructuredData />
      </head>
      <body suppressHydrationWarning>
        <RegistrationModalProvider>
          <GlobalCornerOverlays />
          <NirmitLogo />
          <SmoothScroll>{children}</SmoothScroll>
          <BottomNav />
        </RegistrationModalProvider>
      </body>
    </html>
  );
}
