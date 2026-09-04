import type { Metadata } from "next";
import { SITE_URL } from "../seo-data";

export const metadata: Metadata = {
  title: "Fest Schedule & Timeline — October 11-15, 2026",
  description:
    "Complete 5-day event timeline and schedule for NIRMIT 2.0 National Tech Fest at NMIET Bhubaneswar. Check reporting times, stage allocations, and venue locations.",
  alternates: { canonical: `${SITE_URL}/timeline` },
  openGraph: {
    title: "Fest Schedule & Timeline — NIRMIT 2.0 NMIET Bhubaneswar",
    description:
      "Day-wise timeline and schedule for all 15 technical, innovation, esports, and cultural events at NMIET Bhubaneswar.",
    url: `${SITE_URL}/timeline`,
  },
};

export default function TimelineLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
