export const SITE_URL = "https://nirmit.space";
export const SITE_NAME = "NIRMIT 2.0 — Flagship National Level Tech Fest";
export const COLLEGE_NAME = "NMIET Bhubaneswar (NM Institute of Engineering & Technology)";
export const FEST_THEME = "Marvel Avengers Technological Odyssey";

export const exhaustiveKeywords: string[] = [
  // Primary Target Tags Requested
  "event",
  "national level event",
  "nmiet",
  "tech fest",
  "marvel",
  "avengers",
  "state level fest",
  "nmiet bhubaneswar",

  // Core Event Brand Variants
  "NIRMIT 2026",
  "NIRMIT 2.0",
  "NIRMIT Tech Fest",
  "NIRMIT NMIET",
  "NIRMIT Avengers Fest",
  "NIRMIT National Tech Fest",
  "NIRMIT Engineering Festival",
  "NIRMIT Odisha 2026",
  "NIRMIT Bhubaneswar",
  "NIRMIT Avengers 2.0",
  "NIRMIT Grand Assembly",

  // College & Institutional Keywords
  "NM Institute of Engineering and Technology",
  "NMIET Bhubaneswar Odisha",
  "NMIET Engineering College",
  "NMIET Techfest",
  "NMIET Campus Events",
  "NMIET Student Council",
  "NMIET Department of Computer Science",
  "NMIET Electronics Engineering",
  "NMIET Mechanical Engineering",
  "NMIET Civil Engineering",
  "NMIET MBA Department",
  "Bhubaneswar Engineering Colleges",
  "Odisha Tech Fests 2026",
  "BPUT Engineering College Events",
  "Best College Tech Fest in Odisha",
  "Bhubaneswar College Events October 2026",

  // Specific Event Names & Competitions
  "Falcon Strike Drone Racing",
  "Falcon Strike FPV Drone Obstacle Course",
  "Nextech 2.0 Agentic AI Hackathon",
  "Nextech 24 Hour Hackathon NMIET",
  "Project Ultron IoT Hardware Exhibition",
  "Project Ultron Sensor Automation Display",
  "Civil Wars Free Fire Esports Tournament",
  "Civil Wars Battle Royale Championship",
  "Groove Cosmic Dance Battle",
  "Groove Solo and Group Street Dance",
  "Quantumania Tech Quiz Showdown",
  "Quantumania Marvel Avengers Tech Quiz",
  "Multiverse of Ideas Startup Pitch Deck",
  "Multiverse Ideathon 2026",
  "Infinity Canvas Digital Art Competition",
  "Council of Heroes Cosplay Competition",
  "Marvel Minds Tech Trivia Quiz",
  "Tech Poster Future Engineering Display",
  "Ad Mad Commercial Creation Challenge",
  "Marketing Showdown Brand Strategy",
  "CXO Summit Corporate Leadership Seminar",
  "Face Painting Avengers Tribal Art",

  // Domain & Category Keywords
  "National Level Technical Festival",
  "Inter College Engineering Competition",
  "Drone Obstacle Race Competition India",
  "Agentic AI LLM Hackathon Odisha",
  "Free Fire Mobile Esports Tournament Odisha",
  "IoT Embedded Systems Exhibition",
  "College Dance Competition Bhubaneswar",
  "State Level Tech Quiz Competition",
  "College Startup Pitching Event Odisha",
  "College Cosplay Marvel Avengers Competition",
  "Bhubaneswar Esports Tournament 2026",
  "Esports Prize Pool Tech Fest",
  "Engineering Student Competitions Odisha",

  // Marvel / Avengers Sub-theme Keywords
  "Marvel Avengers Tech Fest Theme",
  "Iron Man Arc Reactor Innovation Display",
  "Thanos Infinity Gauntlet AI Sprint",
  "Captain America Shield Engineering Challenge",
  "Thor Mjolnir High Voltage Tech Display",
  "Wakanda Vibranium Hardware Exhibition",
  "Doctor Strange Multiverse Ideathon",
  "Spider-Man Quantum Coding Challenge",

  // Location & Regional Keywords
  "Tech Fest in Bhubaneswar",
  "Tech Fest in Odisha",
  "Engineering College Festival Bhubaneswar 2026",
  "Best Tech Fests in Eastern India",
  "October 2026 College Events Odisha",
  "National Level Student Festival India",
  "Inter College Fest Bhubaneswar",
  "Sijua Patrapada NMIET Campus",
];

export const defaultSeoData = {
  title: "NIRMIT 2.0 — National Level Tech Fest | NMIET Bhubaneswar",
  description:
    "Official Portal for NIRMIT 2.0 — Flagship National Level Tech Fest at NMIET Bhubaneswar. Featuring 15+ events: Drone Obstacle Course, 24-Hr Agentic AI Hackathon, Free Fire Esports, IoT Display, Dance Battle, Pitch Deck, and ₹1,00,000+ Prize Pool under Marvel Avengers theme.",
  canonical: `${SITE_URL}`,
  openGraph: {
    title: "NIRMIT 2.0 — National Level Tech Fest | NMIET Bhubaneswar",
    description:
      "Join 5,000+ innovators at NIRMIT 2.0! Flagship Marvel Avengers-themed technical festival at NMIET Bhubaneswar featuring Falcon Strike Drone Race, Nextech AI Hackathon, Civil Wars Free Fire, Ultron IoT, and Groove Dance.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/thanos-bg.webp`,
        width: 1200,
        height: 630,
        alt: "NIRMIT 2.0 National Level Tech Fest at NMIET Bhubaneswar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIRMIT 2.0 — Flagship Tech Fest at NMIET Bhubaneswar",
    description:
      "Assemble for NIRMIT 2.0! National level drone races, 24-hr AI hackathons, esports tournaments, and ₹1 Lakh+ prize pool at NMIET Bhubaneswar.",
    images: [`${SITE_URL}/thanos-bg.webp`],
  },
};

// Schema.org JSON-LD Generators for Search Engine Indexing
export function generateCollegeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: "NM Institute of Engineering and Technology (NMIET)",
    alternateName: "NMIET Bhubaneswar",
    url: "https://nmiet.ac.in",
    logo: `${SITE_URL}/cards/gold-card.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sijua, Patrapada",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      postalCode: "751019",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.2520",
      longitude: "85.7650",
    },
    telephone: "+91-8249673948",
    sameAs: [
      "https://www.facebook.com/nmietbhubaneswar/",
      "https://www.instagram.com/nmiet_official/",
    ],
  };
}

export function generateEventSeriesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    name: "NIRMIT 2.0 National Level Technical Festival",
    alternateName: ["NIRMIT 2026", "NIRMIT Tech Fest", "NIRMIT NMIET"],
    description:
      "NIRMIT 2.0 is the flagship national-level technical, innovation, esports, and cultural festival hosted at NMIET Bhubaneswar under Marvel Avengers Technological Odyssey theme.",
    startDate: "2026-10-11T08:00:00+05:30",
    endDate: "2026-10-15T18:00:00+05:30",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "NMIET Bhubaneswar Main Campus Arena",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sijua, Patrapada",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        postalCode: "751019",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "NMIET Student Council & Tech Fest Committee",
      url: SITE_URL,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "0",
      highPrice: "500",
      offerCount: "15",
      url: `${SITE_URL}/events`,
    },
  };
}

export function generateEventSchema(
  id: string,
  name: string,
  description: string,
  date: string,
  venue: string,
  fee: string,
  prizeTotal: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${name} — NIRMIT 2.0 National Event`,
    description: description,
    startDate: "2026-10-11T09:00:00+05:30",
    endDate: "2026-10-15T17:00:00+05:30",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: `${venue}, NMIET Bhubaneswar`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sijua, Patrapada",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        postalCode: "751019",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "NIRMIT 2.0 Tech Fest Committee",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/events/${id}`,
      priceCurrency: "INR",
      price: fee.replace(/[^0-9]/g, "") || "0",
      availability: "https://schema.org/InStock",
      validFrom: "2026-09-01T00:00:00+05:30",
    },
    superEvent: {
      "@type": "EventSeries",
      name: "NIRMIT 2.0 National Level Tech Fest",
      url: SITE_URL,
    },
  };
}
