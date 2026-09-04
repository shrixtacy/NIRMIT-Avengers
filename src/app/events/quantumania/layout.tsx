import type { Metadata } from "next";
import { SITE_URL } from "../../seo-data";

export const metadata: Metadata = {
  title: "Quantumania — Avengers Tech Quiz Showdown",
  description:
    "Quantumania Tech Quiz Showdown at NIRMIT 2.0 NMIET Bhubaneswar. Rapid-fire trivia, tech history, pop culture, and MCU Avengers engineering quiz. Prize Pool ₹10,000.",
  alternates: { canonical: `${SITE_URL}/events/quantumania` },
  openGraph: {
    title: "Quantumania — Tech Quiz Showdown | NIRMIT 2.0 NMIET",
    description:
      "Rapid-fire technical & Marvel pop culture quiz championship at NMIET Bhubaneswar. ₹10,000 Prize Pool.",
    url: `${SITE_URL}/events/quantumania`,
  },
};

export default function QuantumaniaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
