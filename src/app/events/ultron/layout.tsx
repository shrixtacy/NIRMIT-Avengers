import type { Metadata } from "next";
import { SITE_URL } from "../../seo-data";

export const metadata: Metadata = {
  title: "Project Ultron — IoT & Sensor Hardware Exhibition",
  description:
    "Project Ultron IoT & Sensor Hardware Exhibition at NIRMIT 2.0 NMIET Bhubaneswar. Showcase smart microcontrollers, ESP32/Arduino automation, and hardware prototypes. Prize Pool ₹10,000.",
  alternates: { canonical: `${SITE_URL}/events/ultron` },
  openGraph: {
    title: "Project Ultron — IoT Exhibition | NIRMIT 2.0 NMIET",
    description:
      "Hardware exhibition booth display with working microcontrollers & sensor networks at NMIET Bhubaneswar. ₹10,000 Prize Pool.",
    url: `${SITE_URL}/events/ultron`,
  },
};

export default function UltronLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
