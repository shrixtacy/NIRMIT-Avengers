import type { Metadata } from "next";
import { SITE_URL } from "../../seo-data";

export const metadata: Metadata = {
  title: "Civil Wars — Free Fire Esports Championship",
  description:
    "Civil Wars Free Fire Mobile Esports Tournament at NIRMIT 2.0 NMIET Bhubaneswar. 24 Squad battle royale, zone control, and live stage broadcast. Prize Pool ₹10,000.",
  alternates: { canonical: `${SITE_URL}/events/civil-wars` },
  openGraph: {
    title: "Civil Wars — Free Fire Esports | NIRMIT 2.0 NMIET",
    description:
      "Flagship Free Fire esports squad tournament live in MBA Auditorium Arena at NMIET Bhubaneswar. ₹10,000 Prize Pool.",
    url: `${SITE_URL}/events/civil-wars`,
  },
};

export default function CivilWarsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
