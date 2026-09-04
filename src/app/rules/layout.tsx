import type { Metadata } from "next";
import { SITE_URL } from "../seo-data";

export const metadata: Metadata = {
  title: "Official Code of Conduct & Rules — NIRMIT 2.0",
  description:
    "Official festival rules, campus security directives, registration guidelines, anti-cheat policy, and eligibility criteria for NIRMIT 2.0 NMIET Bhubaneswar.",
  alternates: { canonical: `${SITE_URL}/rules` },
  openGraph: {
    title: "Rules & Directives — NIRMIT 2.0 NMIET Bhubaneswar",
    description:
      "Official guidelines, rules, and code of conduct for all participants at NIRMIT 2.0 National Tech Fest.",
    url: `${SITE_URL}/rules`,
  },
};

export default function RulesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
