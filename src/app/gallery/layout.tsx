import type { Metadata } from "next";
import { SITE_URL } from "../seo-data";

export const metadata: Metadata = {
  title: "Photo & Video Gallery — NIRMIT 2.0 NMIET",
  description:
    "High-resolution photos, drone race highlights, stage performances, and festival archives of NIRMIT 2.0 National Tech Fest at NMIET Bhubaneswar.",
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: "Photo & Video Gallery — NIRMIT 2.0 NMIET Bhubaneswar",
    description:
      "Explore official photos, stage highlights, and drone race clips from NIRMIT 2.0 Tech Fest.",
    url: `${SITE_URL}/gallery`,
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
