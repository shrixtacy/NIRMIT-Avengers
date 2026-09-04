import type { Metadata } from "next";
import { SITE_URL } from "../seo-data";

export const metadata: Metadata = {
  title: "Contact & Faculty Leads — NIRMIT 2.0 NMIET",
  description:
    "Official contact directory, student leads, faculty convenors, campus address, and support desk for NIRMIT 2.0 Tech Fest at NMIET Bhubaneswar.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact & Faculty Leads — NIRMIT 2.0 NMIET Bhubaneswar",
    description:
      "Get in touch with event coordinators, student leads, and faculty convenors for NIRMIT 2.0 at NMIET Bhubaneswar.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
