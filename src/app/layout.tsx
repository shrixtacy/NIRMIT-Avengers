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

export const metadata: Metadata = {
  title: "NIRMIT 2.0 — Flagship Tech Festival | NMIET Bhubaneswar",
  description: "NIRMIT 2.0 Edition returns after 10 years of legacy at NMIET Bhubaneswar. 5000+ Innovators, Drone Obstacle Course, Agentic AI Hackathon, IoT Display, Civil Wars Esports.",
};

import { RegistrationModalProvider } from "./components/RegistrationModal";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${bebasNeue.variable} ${antonio.variable} ${teko.variable} ${geistSans.variable} ${geistMono.variable}`}>
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
