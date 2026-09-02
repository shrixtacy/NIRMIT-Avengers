"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "../../components/Footer";

interface EventDetails {
  id: string;
  name: string;
  category: string;
  domain: string;
  description: string;
  date: string;
  time: string;
  reporting: string;
  venue: string;
  leads: string[];
  points: string[];
  bgImage: string;
  topOverlay?: string;
  heroLeft?: string;
  heroRight?: string;
}

const eventsDictionary: Record<string, EventDetails> = {
  "falcon-strike": {
    id: "falcon-strike",
    name: "FALCON STRIKE",
    category: "DRONE OBSTACLE COURSE",
    domain: "Drone / Robotics",
    description: "High-speed FPV drone obstacle course navigation testing precision aerial control, elevation maneuvers, and tactical reaction time.",
    date: "7 October 2026",
    time: "8:00 AM – 1:00 PM",
    reporting: "7:00 AM – 8:00 AM",
    venue: "Football Ground",
    leads: ["Santosh Sahu", "J. Binita", "Sanjay Ray"],
    points: [
      "Precision hoop ring gate navigation and high-speed slalom.",
      "Real-time telemetry and battery safety monitoring.",
      "Trophy & Cash prize pool for top air master.",
    ],
    bgImage: "/events/falcon-bg.webp",
    heroLeft: "/falcon-left.webp",
    heroRight: "/falcon-right.webp",
  },
  "nextech": {
    id: "nextech",
    name: "NEXTECH 2.0",
    category: "AGENTIC AI HACKATHON",
    domain: "Software / AI / Innovation",
    description: "Flagship 48-hour continuous build sprint creating autonomous LLM agents, multi-agent orchestrators, and accessibility tools.",
    date: "10 - 11 October 2026",
    time: "Day 1 Launch 8 AM | Day 2 Final 3 PM",
    reporting: "8:00 AM on 10 Oct 2026",
    venue: "Auditorium, MBA Block",
    leads: ["Pragyan Srichandan", "Sanjay Dash", "Maneesh Yadav", "SK Saffruddin"],
    points: [
      "Mandatory Day 1 Mid-Evaluation (2:00 PM - 6:00 PM).",
      "Mentorship sessions with AI architects and industry founders.",
      "Grand final presentation to venture jury panel.",
    ],
    bgImage: "/thanos-bg.webp",
  },
  "multiverse": {
    id: "multiverse",
    name: "MULTIVERSE OF IDEAS",
    category: "IDEATHON 2026",
    domain: "Innovation / Ideation",
    description: "Startup pitch competition focusing on sustainable engineering, AI automation, and tech-driven business models.",
    date: "8 October 2026",
    time: "1:00 PM – 5:00 PM",
    reporting: "12:00 PM – 1:00 PM",
    venue: "Seminar Hall, MBA Block",
    leads: ["Jaswant Patro", "J. Binita", "Santosh Sahu"],
    points: [
      "Pitch deck submission and live prototype Q&A.",
      "Evaluation on market feasibility, innovation, & impact.",
      "Investor connection & incubation guidance.",
    ],
    bgImage: "/multiverse-bg.webp",
    heroLeft: "/multiverse-bottom-left.webp",
    heroRight: "/multiverse-top-right.webp",
  },
  "ultron": {
    id: "ultron",
    name: "PROJECT ULTRON",
    category: "IOT DISPLAY SHOWCASE",
    domain: "IoT / Hardware Exhibition",
    description: "Exhibition showcasing connected devices, sensor networks, microcontroller automation, and smart hardware prototypes.",
    date: "7 October 2026",
    time: "2:00 PM – 5:00 PM",
    reporting: "12:00 PM – 1:00 PM",
    venue: "Electrical Block Hallway",
    leads: ["Jitendra Padhi", "Bhagyalaxmi Devi", "Pranaya Rout"],
    points: [
      "Interactive hardware demonstrations for visitors & judges.",
      "Sensor integration, cloud telemetry, & robotics display.",
      "Peer voting and jury rating for top smart hardware.",
    ],
    bgImage: "/ultron-bg.webp",
    heroLeft: "/ultron-left.webp",
    heroRight: "/ultron-right.webp",
  },
  "civil-wars": {
    id: "civil-wars",
    name: "CIVIL WARS",
    category: "FREE FIRE GAMING TOURNAMENT",
    domain: "Gaming / Esports",
    description: "Competitive Free Fire battle royale squad showdown in custom rooms with live stadium shoutcasting.",
    date: "9 October 2026",
    time: "3:00 PM – 5:00 PM",
    reporting: "1:30 PM – 2:00 PM",
    venue: "Auditorium, MBA Block",
    leads: ["Rashmi Rath", "Om Prakash Narayan Kar", "Prabir Das"],
    points: [
      "Squad battle royale across custom elimination brackets.",
      "Stadium audio, big screen stream, and live shoutcasting.",
      "Prize pool and victory trophy for winning squad.",
    ],
    bgImage: "/civil-wars-bg.webp",
    heroLeft: "/captain-right.webp",
    heroRight: "/ironman-left.webp",
  },
  "groove": {
    id: "groove",
    name: "GUARDIANS OF GROOVE",
    category: "TECHNO DANCE BATTLE",
    domain: "Cultural / Dance",
    description: "High-octane dance competition fusing robotics choreography, synth techno music, and sci-fi aesthetic.",
    date: "8 October 2026",
    time: "10:00 AM – 8:00 PM",
    reporting: "8:00 AM – 9:00 AM",
    venue: "Auditorium, MBA Block",
    leads: ["Saroj Jena", "Sushree Sucharita Kar", "Bhabani Sankar Sahani"],
    points: [
      "Solo and group choreography performances.",
      "Judged on rhythm, tech theme integration, & execution.",
      "Stadium lighting and concert audio support.",
    ],
    bgImage: "/groove-bg.webp",
    heroLeft: "/groove-bottom-left.webp",
    heroRight: "/groove-top-right.webp",
  },
  "quantumania": {
    id: "quantumania",
    name: "QUANTUMANIA",
    category: "TECH QUIZ CHAMPIONSHIP",
    domain: "CS / Algorithmic Quiz",
    description: "Rapid-fire algorithmic & tech trivia battle testing knowledge on CS history, AI models, and emerging hardware.",
    date: "8 October 2026",
    time: "10:00 AM – 12:00 PM",
    reporting: "8:00 AM – 9:00 AM",
    venue: "Reading Room, Central Library",
    leads: ["Chanchal Mukherjee", "Neeha Pradhani", "Sangram Behera"],
    points: [
      "Rapid-fire buzzer rounds and visual code snippets.",
      "Team trivia battle with live digital leaderboard.",
      "Trophy and certificate recognition for top quidders.",
    ],
    bgImage: "/quantumania-bg.webp",
    heroLeft: "/quantumania-bottom-left.webp",
    heroRight: "/quantumania-top-right.webp",
  },
  "infinity-canvas": {
    id: "infinity-canvas",
    name: "INFINITY CANVAS",
    category: "TECH THEMED PAINTING",
    domain: "Art & Cyber Creativity",
    description: "Canvas painting competition where artists translate futuristic sci-fi visions and AI concepts onto canvas.",
    date: "7 October 2026",
    time: "10:00 AM – 1:00 PM",
    reporting: "8:00 AM – 9:00 AM",
    venue: "Reading Room, Central Library",
    leads: ["Madhubrata Dash", "Tusharkanta Das", "Swarna Prava Sahu"],
    points: [
      "Canvas provided on venue; participants bring art tools.",
      "Evaluation based on creativity, theme depth, & detail.",
      "Exhibition of winning artwork during closing ceremony.",
    ],
    bgImage: "/infinity-canvas-bg.webp",
    topOverlay: "/screen-top-layer.webp",
  },
  "council-heroes": {
    id: "council-heroes",
    name: "COUNCIL OF HEROES",
    category: "PANEL DISCUSSION",
    domain: "Discussion / Symposium",
    description: "Executive panel discussion featuring CTOs, academic directors, and founders discussing autonomous systems and AI ethics.",
    date: "7 October 2026",
    time: "3:00 PM – 5:00 PM",
    reporting: "1:00 PM – 2:00 PM",
    venue: "Auditorium, MBA Block",
    leads: ["Kashinath Pati", "Barsha Priyadarshini", "Sambit Sethy"],
    points: [
      "Keynote talks and open floor audience Q&A.",
      "Discussion on next-decade tech workforce & AI.",
      "Networking opportunity for all attendees.",
    ],
    bgImage: "/council-heroes-bg.webp",
  },
  "marvel-minds": {
    id: "marvel-minds",
    name: "MARVEL OF MINDS",
    category: "EXPERT TALK SERIES",
    domain: "Seminar / Masterclass",
    description: "In-depth masterclass delivered by distinguished industry experts covering Deep Tech, Quantum AI, and Robotics.",
    date: "8 October 2026",
    time: "3:00 PM – 5:00 PM",
    reporting: "1:00 PM – 2:00 PM",
    venue: "Conference Hall, Academic Block",
    leads: ["Prajnadipta Sahu", "Bijaya Gouda", "Gopabandhu Sahu"],
    points: [
      "Executive masterclass lecture with slides & case studies.",
      "Interactive mentoring & career guidance session.",
      "Certificate of attendance for registered delegates.",
    ],
    bgImage: "/marvel-minds-bg.webp",
  },
  "tech-poster": {
    id: "tech-poster",
    name: "STARK EXPO SHOWCASE",
    category: "STARK EXPO - TECHNICAL POSTER",
    domain: "Branding & Designing",
    description: "Technical poster presentation where students showcase engineering research, renewable energy, and algorithm infographics.",
    date: "7 October 2026",
    time: "10:00 AM – 1:00 PM",
    reporting: "9:00 AM – 10:00 AM",
    venue: "Academic Block Hallway",
    leads: ["Priyabrata Mohanty", "Alok Kumar Swain"],
    points: [
      "Infographic poster display and live walkthrough.",
      "Jury evaluation on technical content & presentation.",
      "Awards for best visual technical design.",
    ],
    bgImage: "/about-section-bg.webp",
  },
  "ad-mad": {
    id: "ad-mad",
    name: "THUNDERBOLTS",
    category: "THUNDERBOLTS - AD MAD SHOW",
    domain: "Branding & Dramatics",
    description: "Quirky creative advertising competition where teams act out humorous live commercials for given futuristic tech products.",
    date: "8 October 2026",
    time: "2:00 PM – 5:00 PM",
    reporting: "1:00 PM – 2:00 PM",
    venue: "MBA Seminar Hall",
    leads: ["Sunita Dash", "Soumya Ranjan Panda"],
    points: [
      "On-spot product allocation and 15-min preparation.",
      "Stage acting, humor, & brand strategy evaluation.",
      "Prop usage and team coordination encouraged.",
    ],
    bgImage: "/thunderbolts-bg.webp",
    heroLeft: "/thunderbolts-left.webp",
    heroRight: "/thunderbolts-right.webp",
  },
  "marketing-showdown": {
    id: "marketing-showdown",
    name: "MARKETING SHOWDOWN",
    category: "BUSINESS CASE PITCH",
    domain: "Marketing & Business",
    description: "Corporate marketing challenge where teams analyze real-world case studies and pitch growth strategies.",
    date: "9 October 2026",
    time: "10:00 AM – 1:00 PM",
    reporting: "9:00 AM – 10:00 AM",
    venue: "Conference Hall, Academic Block",
    leads: ["Subhasish Ray", "Ananya Jena"],
    points: [
      "Case study analysis & strategy presentation.",
      "Q&A on market penetration, budget, & ROI.",
      "Winner recognition & corporate feedback.",
    ],
    bgImage: "/about-panorama.webp",
  },
  "cxo-summit": {
    id: "cxo-summit",
    name: "CXO EXECUTIVE SUMMIT",
    category: "CXO ROUNDTABLE SUMMIT",
    domain: "Business & Tech",
    description: "Exclusive roundtable meeting bringing together CXOs, academic leaders, and founders to discuss future tech ecosystems.",
    date: "9 October 2026",
    time: "2:00 PM – 4:30 PM",
    reporting: "1:00 PM – 2:00 PM",
    venue: "Executive Boardroom, MBA Block",
    leads: ["Rakesh Kumar Parida", "Dr. S. N. Das"],
    points: [
      "High-level dialogue on AI adoption & tech talent.",
      "Strategic industry-academia partnership roadmap.",
      "Executive networking lunch & closing remarks.",
    ],
    bgImage: "/about-hero.webp",
  },
};

export default function DynamicEventPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const eventId = resolvedParams.id;
  const [activeTab, setActiveTab] = useState<"overview" | "rules" | "schedule" | "coordinators">("overview");

  const eventData = eventsDictionary[eventId] || {
    id: eventId,
    name: eventId.toUpperCase().replace(/-/g, " "),
    category: "NIRMIT 2.0 EVENT",
    domain: "Technology / Competition",
    description: "Official NIRMIT 2.0 technical event hosted at NMIET Campus, Bhubaneswar.",
    date: "7 - 11 October 2026",
    time: "10:00 AM – 5:00 PM",
    reporting: "1 Hour Prior to Event Start",
    venue: "NMIET Campus Auditorium",
    leads: ["Faculty Convenor", "Student Coordinator"],
    points: [
      "Open to all registered undergraduate & postgraduate students.",
      "FCFS registration slot allocation policy.",
      "Certificate of participation for all registered teams.",
    ],
    bgImage: "/events-bg.webp",
  };

  return (
    <main style={{ minHeight: "100vh", background: "#040507", color: "#ffffff", paddingTop: "80px", position: "relative" }}>
      {/* Background Image & Overlay */}
      <div style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none", opacity: 0.35 }}>
        <Image
          src={eventData.bgImage}
          alt={eventData.name}
          fill
          priority
          unoptimized
          style={{ objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 20%, rgba(4,5,7,0.9) 100%)" }} />
      </div>

      {/* Top Layer Overlay if available */}
      {eventData.topOverlay && (
        <div style={{ position: "fixed", inset: 0, zIndex: 15, pointerEvents: "none" }}>
          <Image
            src={eventData.topOverlay}
            alt="Event Top Overlay"
            fill
            priority
            unoptimized
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      )}

      {/* Hero Characters if available */}
      {eventData.heroLeft && (
        <div style={{
          position: "fixed",
          bottom: eventId === "ad-mad" ? "-280px" : eventId === "groove" ? "-100px" : "0px",
          left: eventId === "quantumania" ? "-60px" : eventId === "multiverse" ? "-20px" : eventId === "ad-mad" ? "-10px" : "0px",
          zIndex: 2,
          pointerEvents: "none",
          width: eventId === "quantumania" ? "clamp(120px, 13vw, 200px)" : eventId === "multiverse" ? "clamp(220px, 24vw, 360px)" : eventId === "ad-mad" ? "clamp(28px, 3.5vw, 50px)" : "400px",
          height: eventId === "quantumania" ? "clamp(120px, 13vw, 200px)" : eventId === "multiverse" ? "clamp(220px, 24vw, 360px)" : eventId === "ad-mad" ? "clamp(28px, 3.5vw, 50px)" : "400px",
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.9))"
        }}>
          <Image src={eventData.heroLeft} alt="Hero Left" fill unoptimized style={{ objectFit: "contain", objectPosition: "bottom left" }} />
        </div>
      )}
      {eventData.heroRight && (
        <div style={{
          position: "fixed",
          top: eventId === "quantumania" ? "70px" : eventId === "multiverse" ? "80px" : eventId === "ad-mad" ? "130px" : undefined,
          bottom: eventId === "quantumania" || eventId === "multiverse" || eventId === "ad-mad" ? undefined : "0px",
          right: eventId === "quantumania" ? "40px" : eventId === "multiverse" ? "20px" : eventId === "ad-mad" ? "360px" : "0px",
          zIndex: 2,
          pointerEvents: "none",
          width: eventId === "quantumania" ? "420px" : eventId === "multiverse" ? "clamp(240px, 26vw, 380px)" : eventId === "ad-mad" ? "clamp(14px, 1.8vw, 24px)" : "400px",
          height: eventId === "quantumania" ? "420px" : eventId === "multiverse" ? "clamp(240px, 26vw, 380px)" : eventId === "ad-mad" ? "clamp(14px, 1.8vw, 24px)" : "400px",
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.9))"
        }}>
          <Image src={eventData.heroRight} alt="Hero Right" fill unoptimized style={{ objectFit: "contain", objectPosition: "top right" }} />
        </div>
      )}

      {/* Navigation Header */}
      <div className="section-container" style={{ position: "relative", zIndex: 10, paddingBottom: "100px" }}>
        <Link href="/events" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(241,245,249,0.8)", textDecoration: "none", fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.85rem", fontWeight: 700, background: "rgba(30,41,59,0.6)", padding: "10px 20px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.2)", marginBottom: "32px" }}>
          ← BACK TO ALL TRUMP CARDS
        </Link>

        {/* Title Block */}
        <div style={{ marginBottom: "40px" }}>
          <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.82rem", fontWeight: 700, color: "#cbd5e1", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            {eventData.category} • {eventData.domain}
          </span>

          <h1 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", color: "#ffffff", letterSpacing: "0.04em", margin: "6px 0 16px 0", lineHeight: 0.9 }}>
            {eventData.name}
          </h1>

          <p style={{ fontSize: "1.15rem", color: "rgba(241,245,249,0.88)", maxWidth: "800px", lineHeight: "1.6" }}>
            {eventData.description}
          </p>
        </div>

        {/* Quick Parameters Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "50px" }}>
          <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.95) 100%)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "20px" }}>
            <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.6)", display: "block" }}>EVENT DATE</span>
            <strong style={{ fontSize: "1.05rem", color: "#ffffff", display: "block", marginTop: "4px" }}>{eventData.date}</strong>
          </div>

          <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.95) 100%)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "20px" }}>
            <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.6)", display: "block" }}>REPORTING TIME</span>
            <strong style={{ fontSize: "1.05rem", color: "#ffffff", display: "block", marginTop: "4px" }}>{eventData.reporting}</strong>
          </div>

          <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.95) 100%)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "20px" }}>
            <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.6)", display: "block" }}>EVENT TIME</span>
            <strong style={{ fontSize: "1.05rem", color: "#ffffff", display: "block", marginTop: "4px" }}>{eventData.time}</strong>
          </div>

          <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.95) 100%)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "20px" }}>
            <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.6)", display: "block" }}>LOCATION VENUE</span>
            <strong style={{ fontSize: "1.05rem", color: "#ffffff", display: "block", marginTop: "4px" }}>{eventData.venue}</strong>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "32px", flexWrap: "wrap", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "16px" }}>
          {[
            { id: "overview", label: "OVERVIEW & HIGHLIGHTS" },
            { id: "schedule", label: "TIMELINE & STAGES" },
            { id: "rules", label: "RULES & EVALUATION" },
            { id: "coordinators", label: "FACULTY LEADS" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              style={{
                padding: "12px 24px",
                borderRadius: "999px",
                border: activeTab === tab.id ? "1.5px solid #ffffff" : "1px solid rgba(255,255,255,0.2)",
                background: activeTab === tab.id ? "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(148,163,184,0.2) 100%)" : "rgba(15,23,42,0.6)",
                color: activeTab === tab.id ? "#ffffff" : "rgba(241,245,249,0.7)",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.85) 0%, rgba(15,23,42,0.95) 100%)", border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: "16px", padding: "36px", marginBottom: "50px" }}>
          {activeTab === "overview" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2rem", color: "#ffffff", marginBottom: "16px" }}>EVENT SPECIFICATIONS</h2>
              <ul style={{ paddingLeft: "24px", color: "rgba(241,245,249,0.9)", fontSize: "1rem", lineHeight: "1.8", marginBottom: "24px" }}>
                {eventData.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
              <div style={{ background: "rgba(255,255,255,0.06)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.9rem", color: "#cbd5e1" }}>
                ⚡ <strong>Registration Window:</strong> 3rd September 2026 to 23rd September 2026. Slots strictly allocated on First-Come, First-Served (FCFS) basis.
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2rem", color: "#ffffff", marginBottom: "16px" }}>SCHEDULE BREAKDOWN</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", padding: "20px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.8rem", color: "#ffffff", fontWeight: 700 }}>REPORTING WINDOW</span>
                  <p style={{ margin: "4px 0 0 0", color: "rgba(241,245,249,0.85)" }}>{eventData.reporting} at {eventData.venue}. Registration desk check-in & ID verification.</p>
                </div>
                <div style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", padding: "20px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.8rem", color: "#ffffff", fontWeight: 700 }}>MAIN COMPETITION SESSION</span>
                  <p style={{ margin: "4px 0 0 0", color: "rgba(241,245,249,0.85)" }}>{eventData.time} — Live evaluation, judging, and spectator round.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "rules" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2rem", color: "#ffffff", marginBottom: "16px" }}>RULES & CODE OF CONDUCT</h2>
              <ul style={{ paddingLeft: "24px", color: "rgba(241,245,249,0.9)", fontSize: "0.95rem", lineHeight: "1.8" }}>
                <li>Valid College ID Card & NIRMIT 2.0 Pass required for entry into {eventData.venue}.</li>
                <li>Punctuality: Late arrival past reporting window leads to forfeiture of slot.</li>
                <li>Zero tolerance for property damage, unauthorized hardware tampering, or misconduct.</li>
              </ul>
            </div>
          )}

          {activeTab === "coordinators" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2rem", color: "#ffffff", marginBottom: "16px" }}>FACULTY LEADS & CONVENORS</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                {eventData.leads.map((lead, idx) => (
                  <div key={idx} style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", padding: "16px" }}>
                    <div style={{ fontWeight: 700, color: "#ffffff" }}>{lead}</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(241,245,249,0.6)", marginTop: "2px" }}>Faculty Lead / Convenor</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Footer */}
        <div style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(148,163,184,0.1) 100%)", border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: "16px", padding: "36px", textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.4rem", color: "#ffffff", margin: "0 0 8px 0" }}>
            READY TO REGISTER FOR {eventData.name}?
          </h3>
          <p style={{ color: "rgba(241,245,249,0.85)", fontSize: "1rem", marginBottom: "24px" }}>
            Registration window closes 23rd September 2026. Secure your slot now.
          </p>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fast-assemble-btn"
            style={{ display: "inline-flex", margin: "0 auto" }}
          >
            REGISTER FOR {eventData.name} NOW →
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
