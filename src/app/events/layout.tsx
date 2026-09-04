import type { Metadata } from "next";
import { SITE_URL } from "../seo-data";

export const metadata: Metadata = {
  title: "All 15 Flagship Events & Competitions — NIRMIT 2.0",
  description:
    "Explore all 15 flagship national level competitions at NIRMIT 2.0 NMIET Bhubaneswar: Falcon Strike Drone Race, Nextech 2.0 AI Hackathon, Project Ultron IoT Display, Civil Wars Free Fire Esports, Groove Dance Battle & ₹1,00,000+ Prize Pool.",
  alternates: {
    canonical: `${SITE_URL}/events`,
  },
  openGraph: {
    title: "All 15 Flagship Events & Competitions — NIRMIT 2.0 NMIET Bhubaneswar",
    description:
      "Explore 15 national & state level events across Robotics, AI Hackathons, Esports, IoT Display, Startup Pitching, and Dance Battles.",
    url: `${SITE_URL}/events`,
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
