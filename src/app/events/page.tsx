"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EventsDial from "../components/EventsDial";
import Footer from "../components/Footer";

import { useRegistrationModal } from "../components/RegistrationModal";
import { getRegistrationUrl } from "../data/registrationLinks";

interface TrumpEvent {
  id: string;
  name: string;
  tier: "gold" | "silver" | "bronze";
  frameImg: string;
  bgImg: string;
  tag: string;
  domain: string;
  points: string[];
  date: string;
  time: string;
  reporting: string;
  venue: string;
  leads: string[];
}

const trumpEvents: TrumpEvent[] = [
  {
    id: "falcon-strike",
    name: "Falcon Strike",
    tier: "gold",
    frameImg: "/cards/gold-card.webp",
    bgImg: "/events/falcon-bg.webp",
    tag: "FALCON STRIKE • DRONE ARENA",
    domain: "Drone / Robotics",
    points: [
      "High-speed FPV drone obstacle course navigation.",
      "Precision aerial waypoint tracking & speed laps.",
      "Custom obstacle ring gates & crash telemetry.",
    ],
    date: "11 October 2026",
    time: "8:00 AM - 1:00 PM",
    reporting: "7:00 AM - 8:00 AM",
    venue: "Football Ground",
    leads: ["Santosh Sahu", "J. Binita", "Sanjay Ray"],
  },
  {
    id: "nextech",
    name: "Nextech 2.0",
    tier: "gold",
    frameImg: "/cards/gold-card.webp",
    bgImg: "/thanos-bg.webp",
    tag: "48-HOUR AGENTIC AI BUILD",
    domain: "Software / AI / Innovation",
    points: [
      "Build autonomous LLM agents & multi-agent systems.",
      "Mid evaluation checkpoint on Day 1 (2 PM - 6 PM).",
      "Main jury demo on Day 2 (10 AM - 3 PM).",
    ],
    date: "14 - 15 October 2026",
    time: "Day 1 Launch 8 AM | Day 2 Final 3 PM",
    reporting: "8:00 AM on 10 Oct / 14 Oct",
    venue: "Auditorium, MBA Block",
    leads: ["Shriyansh Dash", "Om Prakash Nahak", "Aman Singh"],
  },
  {
    id: "multiverse",
    name: "Multiverse of Ideas",
    tier: "gold",
    frameImg: "/cards/gold-card.webp",
    bgImg: "/events-bg.webp",
    tag: "STARTUP & INNOVATION PITCH",
    domain: "Innovation / Ideation",
    points: [
      "Pitch revolutionary tech solutions to investors.",
      "Focus on sustainability, AI, & smart engineering.",
      "Live Q&A and prototype evaluation by industry jury.",
    ],
    date: "12 October 2026",
    time: "1:00 PM - 5:00 PM",
    reporting: "12:00 PM - 1:00 PM",
    venue: "Seminar Hall, MBA Block",
    leads: ["Jaswant Patro", "J. Binita", "Santosh Sahu"],
  },
  {
    id: "ultron",
    name: "Project Ultron",
    tier: "gold",
    frameImg: "/cards/gold-card.webp",
    bgImg: "/ultron-bg.webp",
    tag: "IOT & HARDWARE EXHIBITION",
    domain: "IoT / Hardware",
    points: [
      "Showcase smart connected systems & hardware prototypes.",
      "Live demonstrations to faculty & visiting delegates.",
      "Awards for most innovative project & best pitch.",
    ],
    date: "11 October 2026",
    time: "2:00 PM - 5:00 PM",
    reporting: "12:00 PM - 1:00 PM",
    venue: "Electrical Block Hallway",
    leads: ["Jitendra Padhi", "Bhagyalaxmi Devi", "Pranaya Rout"],
  },
  {
    id: "civil-wars",
    name: "Civil Wars",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/civil-wars-bg.webp",
    tag: "CIVIL WARS • ESPORTS ARENA",
    domain: "Gaming / Esports",
    points: [
      "Battle Royale squad showdown in custom rooms.",
      "Live match shoutcasting & spectator arena.",
      "Prize pool & battle victory trophy for top squad.",
    ],
    date: "13 October 2026",
    time: "3:00 PM - 5:00 PM",
    reporting: "1:30 PM - 2:00 PM",
    venue: "Auditorium, MBA Block",
    leads: ["Rashmi Ranjan Rath", "Om Prakash Narayan Kar", "Prabir Das"],
  },
  {
    id: "groove",
    name: "Guardians of Groove",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/groove-bg.webp",
    tag: "CYBER CULTURAL SHOWDOWN",
    domain: "Cultural / Dance",
    points: [
      "High-energy choreography with techno synth audio.",
      "Solo & group dance routines in futuristic gear.",
      "Stadium audio, light synchronization & judging.",
    ],
    date: "12 October 2026",
    time: "10:00 AM - 8:00 PM",
    reporting: "8:00 AM - 9:00 AM",
    venue: "Auditorium, MBA Block",
    leads: ["Saroj Jena", "Sushree Sucharita Kar"],
  },
  {
    id: "quantumania",
    name: "Quantumania",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/quantumania-bg.webp",
    tag: "TRIVIA & ALGORITHMIC BRAIN WAR",
    domain: "Quiz / CS Trivia",
    points: [
      "Rapid-fire rounds on CS history, AI, & hardware.",
      "Buzzer rounds, visual code snippets, & mystery trivia.",
      "Team trivia battle with instant leaderboard.",
    ],
    date: "12 October 2026",
    time: "10:00 AM - 12:00 PM",
    reporting: "8:00 AM - 9:00 AM",
    venue: "Reading Room, Central Library",
    leads: ["Chanchal Mukherjee", "Neeha Pradhani", "Sangram Behera"],
  },
  {
    id: "infinity-canvas",
    name: "Infinity Canvas",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/about-arena.webp",
    tag: "CREATIVE CYBER CANVAS",
    domain: "Art & Creativity",
    points: [
      "Translate futuristic tech & AI visions into art.",
      "Canvas & painting materials provided on venue.",
      "Judged on creativity, theme relevance, & detail.",
    ],
    date: "11 October 2026",
    time: "10:00 AM - 1:00 PM",
    reporting: "8:00 AM - 9:00 AM",
    venue: "Reading Room, Central Library",
    leads: ["Madhubrata Dash", "Sambit Sethy", "Swarnaprava Sahoo"],
  },
  {
    id: "face-painting",
    name: "Infinity Faces (Face Painting)",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/about-arena.webp",
    tag: "INFINITY FACES • FACE PAINTING",
    domain: "Art & Creativity",
    points: [
      "Express futuristic themes & superhero alter-egos.",
      "Creative painting on live human canvas models.",
      "Evaluated on artistic quality, detail & expression.",
    ],
    date: "13 October 2026",
    time: "10:00 AM - 12:00 PM",
    reporting: "9:00 AM - 10:00 AM",
    venue: "Conference Hall, Academic Block",
    leads: ["Barsha Priyadarshini", "Gopabandhu Sahu", "Bhagyalaxmi Devi"],
  },
  {
    id: "council-heroes",
    name: "Council of Heroes",
    tier: "bronze",
    frameImg: "/cards/bronze-card.webp",
    bgImg: "/about-hero.webp",
    tag: "INDUSTRY LEADERSHIP SYMPOSIUM",
    domain: "Discussion / Talk",
    points: [
      "Discussions on Autonomous Systems & AI Ethics.",
      "Keynotes from CTOs, academic leaders, & founders.",
      "Interactive audience Q&A & career mentoring.",
    ],
    date: "11 October 2026",
    time: "3:00 PM - 5:00 PM",
    reporting: "1:00 PM - 2:00 PM",
    venue: "Auditorium, MBA Block",
    leads: ["Kashinath Pati", "Sambit Sethi", "Barsha Priyadarshinee"],
  },
  {
    id: "marvel-minds",
    name: "Marvel of Minds",
    tier: "bronze",
    frameImg: "/cards/bronze-card.webp",
    bgImg: "/about-panorama.webp",
    tag: "EXECUTIVE MASTERCLASS",
    domain: "Seminar / Talk",
    points: [
      "In-depth technical keynotes on Deep Tech & Robotics.",
      "Insights into next-decade engineering trends.",
      "Networking opportunity with distinguished speakers.",
    ],
    date: "12 October 2026",
    time: "3:00 PM - 5:00 PM",
    reporting: "1:00 PM - 2:00 PM",
    venue: "Conference Hall, Academic Block",
    leads: ["Academic Faculty Team"],
  },
  {
    id: "tech-poster",
    name: "Stark Expo Showcase",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/about-section-bg.webp",
    tag: "STARK EXPO • TECHNICAL POSTER",
    domain: "Branding & Designing",
    points: [
      "Present technical posters on engineering research.",
      "Focus on renewable energy, AI, & smart systems.",
      "Interactive jury review & peer voting.",
    ],
    date: "11 October 2026",
    time: "10:00 AM - 1:00 PM",
    reporting: "8:00 AM - 9:00 AM",
    venue: "Academic Conference Hall",
    leads: ["Ankeeta Mohanty", "Priyabrata Muduli"],
  },
  {
    id: "ad-mad",
    name: "Thunderbolts",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/thunderbolts-bg.webp",
    tag: "THUNDERBOLTS • AD MAD SHOW",
    domain: "Branding & Designing",
    points: [
      "Create quirky live ads for futuristic tech products.",
      "Judged on humor, brand strategy, & stage acting.",
      "Prop usage & team choreography encouraged.",
    ],
    date: "11 October 2026",
    time: "3:00 PM - 5:00 PM",
    reporting: "1:00 PM - 2:00 PM",
    venue: "Seminar Hall, MBA Block",
    leads: ["Subhasmita Mam", "Nilima Mam"],
  },
  {
    id: "marketing-showdown",
    name: "Battle of Brands",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/about-panorama.webp",
    tag: "MARKETING MAVERICK PITCH",
    domain: "Marketing & Business",
    points: [
      "Solve real-world corporate marketing case studies.",
      "Pitch growth campaigns to industry leaders.",
      "Q&A on ROI, budget allocation, & market penetration.",
    ],
    date: "13 October 2026",
    time: "9:00 AM - 1:00 PM",
    reporting: "8:00 AM - 9:00 AM",
    venue: "Seminar Hall, MBA Block",
    leads: ["Nitin Sir", "Subhasmita Mam"],
  },
  {
    id: "cxo-summit",
    name: "Shield Boardroom",
    tier: "bronze",
    frameImg: "/cards/bronze-card.webp",
    bgImg: "/about-hero.webp",
    tag: "CXO ROUND TABLE SUMMIT",
    domain: "Business & Tech",
    points: [
      "Exclusive roundtable discussion with industry CXOs.",
      "Dialogue on future tech trends & AI adoption.",
      "Industry-academic partnership vision building.",
    ],
    date: "12 October 2026",
    time: "10:00 AM - 1:00 PM",
    reporting: "8:00 AM - 9:00 AM",
    venue: "Seminar Hall, MBA Block",
    leads: ["Akankhya Mam"],
  },
];

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "gold" | "silver" | "bronze">("all");
  const [selectedEvent, setSelectedEvent] = useState<TrumpEvent | null>(null);
  const { openModal } = useRegistrationModal();

  const filteredEvents = filter === "all"
    ? trumpEvents
    : trumpEvents.filter((ev) => ev.tier === filter);

  return (
    <main style={{ minHeight: "100vh", background: "#040507", color: "#ffffff" }}>
      {/* Interactive Events Dial Hero Section from Home Page */}
      <EventsDial />

      {/* Events Trump Cards Section */}
      <section className="section-container" style={{ padding: "80px 0 120px 0" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{ display: "inline-block", background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(148,163,184,0.1) 100%)", border: "1px solid rgba(255,255,255,0.25)", padding: "6px 20px", borderRadius: "999px", marginBottom: "16px" }}>
            <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.82rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.12em" }}>
              FESTIVAL DATES: 11 - 15 OCTOBER 2026
            </span>
          </div>

          <h2 className="section-title" style={{ display: "block" }}>MARVEL TRUMP CARDS ARENA</h2>
          <p className="section-subtitle" style={{ margin: "16px auto 0 auto" }}>
            Categorized into Gold, Silver, and Bronze Tiers. Click any Trump Card for full event parameters & registration protocols.
          </p>

          {/* Filter Pills */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "32px", flexWrap: "wrap" }}>
            {(["all", "gold", "silver", "bronze"] as const).map((tierKey) => (
              <button
                key={tierKey}
                onClick={() => setFilter(tierKey)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "999px",
                  border: filter === tierKey ? "1.5px solid #ffffff" : "1px solid rgba(255,255,255,0.2)",
                  background: filter === tierKey ? "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(148,163,184,0.2) 100%)" : "rgba(15,23,42,0.6)",
                  color: filter === tierKey ? "#ffffff" : "rgba(241,245,249,0.7)",
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  boxShadow: filter === tierKey ? "0 0 20px rgba(255,255,255,0.2)" : "none",
                }}
              >
                {tierKey === "all" ? `All Trump Cards (${trumpEvents.length})` : `${tierKey} Tier (${trumpEvents.filter(e => e.tier === tierKey).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Marvel Trump Cards Grid */}
        <div className="events-trump-grid">
          {filteredEvents.map((ev) => (
            <Link
              key={ev.id}
              href={`/events/${ev.id}`}
              className="trump-card-wrapper"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              {/* Outer Card Frame PNG Overlay */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ev.frameImg}
                alt={`${ev.name} Trump Frame`}
                className="trump-card-frame"
              />

              {/* Internal Card Contents */}
              <div className="trump-card-content">
                {/* Upper 16:9 Image Slot */}
                <div className="trump-card-img-slot">
                  <Image
                    src={ev.bgImg}
                    alt={ev.name}
                    fill
                    unoptimized
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>

                {/* Bottom Content Area */}
                <div className="trump-card-body">
                  <div>
                    <div className="trump-card-tag">{ev.tag}</div>
                    <h3 className="trump-card-title">{ev.name}</h3>
                    <ul style={{ paddingLeft: "14px", margin: "6px 0", fontSize: "0.74rem", color: "rgba(241,245,249,0.88)", lineHeight: "1.38" }}>
                      {ev.points.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Extreme Bottom Dates Slot */}
                  <div className="trump-card-footer">
                    <div className="trump-card-date">🗓 {ev.date}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trump Card Details Modal */}
      {selectedEvent && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(4,5,7,0.88)",
            backdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "600px",
              width: "100%",
              background: "linear-gradient(135deg, rgba(30,41,59,0.95) 0%, rgba(15,23,42,0.98) 100%)",
              border: "1.5px solid rgba(255,255,255,0.3)",
              borderRadius: "16px",
              padding: "36px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.9), 0 0 30px rgba(255,255,255,0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#ffffff",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                fontSize: "1.2rem",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            <div style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.8rem", color: "#cbd5e1", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "6px" }}>
              {selectedEvent.tier.toUpperCase()} TIER EVENT • {selectedEvent.domain}
            </div>

            <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.8rem", letterSpacing: "0.04em", color: "#ffffff", margin: "0 0 16px 0" }}>
              {selectedEvent.name}
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", background: "rgba(15,23,42,0.6)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "20px" }}>
              <div>
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", display: "block" }}>EVENT DATE & TIME</span>
                <strong style={{ fontSize: "0.9rem", color: "#ffffff" }}>{selectedEvent.date} ({selectedEvent.time})</strong>
              </div>
              <div>
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", display: "block" }}>REPORTING TIME</span>
                <strong style={{ fontSize: "0.9rem", color: "#ffffff" }}>{selectedEvent.reporting}</strong>
              </div>
              <div>
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", display: "block" }}>OFFICIAL VENUE</span>
                <strong style={{ fontSize: "0.9rem", color: "#ffffff" }}>{selectedEvent.venue}</strong>
              </div>
              <div>
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", display: "block" }}>FACULTY LEADS</span>
                <strong style={{ fontSize: "0.85rem", color: "#ffffff" }}>{selectedEvent.leads.join(", ")}</strong>
              </div>
            </div>

            <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "8px" }}>Event Specifications & Highlights:</h4>
            <ul style={{ paddingLeft: "20px", color: "rgba(241,245,249,0.85)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "24px" }}>
              {selectedEvent.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>

            <div style={{ background: "rgba(255,255,255,0.06)", padding: "12px 16px", borderRadius: "6px", marginBottom: "24px", fontSize: "0.82rem", color: "#cbd5e1" }}>
              ⚡ <strong>Constraint Notice:</strong> Registration window: Dates To Be Revealed. First-come, first-served allocation policy applies!
            </div>

            <a
              href={getRegistrationUrl(selectedEvent.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="fast-assemble-btn"
              style={{ width: "100%", justifyContent: "center", cursor: "pointer", textDecoration: "none" }}
            >
              REGISTER FOR {selectedEvent.name.toUpperCase()} NOW →
            </a>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
