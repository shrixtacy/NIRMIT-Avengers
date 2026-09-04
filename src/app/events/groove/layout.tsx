import type { Metadata } from "next";
import { SITE_URL } from "../../seo-data";

export const metadata: Metadata = {
  title: "Groove — Cosmic Dance Battle Championship",
  description:
    "Groove Cosmic Dance Battle at NIRMIT 2.0 NMIET Bhubaneswar. Hip-hop, contemporary, street, and Bollywood choreography showcase on main auditorium stage. Prize Pool ₹10,000.",
  alternates: { canonical: `${SITE_URL}/events/groove` },
  openGraph: {
    title: "Groove — Cosmic Dance Battle | NIRMIT 2.0 NMIET",
    description:
      "Solo & Group dance championship live on MBA Auditorium Stage at NMIET Bhubaneswar. ₹10,000 Prize Pool.",
    url: `${SITE_URL}/events/groove`,
  },
};

export default function GrooveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
