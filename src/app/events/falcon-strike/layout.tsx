import type { Metadata } from "next";
import { SITE_URL } from "../../seo-data";

export const metadata: Metadata = {
  title: "Falcon Strike — FPV Drone Obstacle Course Racing",
  description:
    "Falcon Strike FPV Drone Obstacle Course at NIRMIT 2.0 NMIET Bhubaneswar. Timed outdoor flight circuit through 8 illuminated hoop rings & slalom pylons. Prize Pool ₹10,000.",
  alternates: { canonical: `${SITE_URL}/events/falcon-strike` },
  openGraph: {
    title: "Falcon Strike — FPV Drone Racing | NIRMIT 2.0 NMIET",
    description:
      "High-speed FPV drone obstacle course racing at Football Ground Arena, NMIET Bhubaneswar. ₹10,000 Prize Pool.",
    url: `${SITE_URL}/events/falcon-strike`,
  },
};

export default function FalconStrikeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
