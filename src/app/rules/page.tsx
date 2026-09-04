"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";

interface RuleSection {
  id: string;
  categoryNumber: string;
  icon: string;
  title: string;
  summary: string;
  badge: string;
  badgeColor: string;
  rules: {
    heading: string;
    details: string;
    criticalNotice?: string;
  }[];
}

const rulebookData: RuleSection[] = [
  {
    id: "registration-eligibility",
    categoryNumber: "SECTION 01",
    icon: "📋",
    title: "REGISTRATION, ELIGIBILITY & SLOT CONSTRAINTS",
    summary: "Mandatory qualification criteria, digital registration workflows, slot capping, and team roster protocols.",
    badge: "MANDATORY PROTOCOL",
    badgeColor: "#06b6d4",
    rules: [
      {
        heading: "1.1 Institutional Eligibility & Student Qualification",
        details:
          "Participation in NIRMIT 2.0 is strictly open to currently enrolled undergraduate (B.Tech, B.Sc, BCA, BBA) and postgraduate (M.Tech, MCA, MBA) students from recognized universities and technical institutes. High school students or working professionals are not eligible unless registered under specific guest exhibition categories.",
        criticalNotice: "Valid physical College ID card & Government Photo ID (Aadhaar / Voter ID / Passport) are strictly required for entry verification.",
      },
      {
        heading: "1.2 FCFS Registration Window & Seat Capping",
        details:
          "The official registration portal opens on 5th September 2026. The official event schedule runs from 11th to 15th October 2026. Due to venue capacity and hardware setup limits, every event operates under strict First-Come, First-Served (FCFS) slot allocation. Once event capacity is reached, waiting lists will be generated automatically.",
      },
      {
        heading: "1.3 Team Formation & Roster Lock Policies",
        details:
          "Team composition limits are strictly enforced: NEXTECH 2.0 Hackathon (2-4 members), FALCON STRIKE Drone Obstacle (1-2 pilots), CIVIL WARS Esports (4 main players + 1 sub), PROJECT ULTRON (2-4 members), MULTIVERSE OF IDEAS (1-3 members). Team rosters are locked 48 hours prior to the event. No name substitutions or member swaps are permitted on the day of the competition.",
      },
      {
        heading: "1.4 Overlapping Event Registration Disclaimer",
        details:
          "Participants are strictly prohibited from registering for two separate events that have overlapping competition time windows. The NIRMIT 2.0 organizing committee bears no responsibility for missed evaluation slots or scheduling clashes caused by multi-event registrations.",
      },
      {
        heading: "1.5 Registration Fee & Pass Generation",
        details:
          "All registrations generate a unique encrypted NIRMIT Digital QR Pass upon payment completion. Entry to event arenas, food courts, and keynotes requires scanning this QR pass at designated check-in booths.",
      },
    ],
  },
  {
    id: "campus-security-entry",
    categoryNumber: "SECTION 02",
    icon: "🏛️",
    title: "CAMPUS ENTRY, SECURITY CHECK & DECORUM",
    summary: "NMIET gate protocols, physical security screening, banned substances, and behavioral codes.",
    badge: "ZERO TOLERANCE",
    badgeColor: "#ef4444",
    rules: [
      {
        heading: "2.1 Campus Gate Entry & Badge Display",
        details:
          "Entry into NMIET Campus is permitted strictly via Gate 1. All participants, faculty mentors, and visitors must wear their physical NIRMIT 2.0 identity badge and college ID visibly around their neck at all times while on campus grounds.",
        criticalNotice: "Individuals without visible badges will be escorted off campus grounds by security personnel without exception.",
      },
      {
        heading: "2.2 Strict Prohibition of Banned Substances & Contraband",
        details:
          "NMIET Campus is a strictly enforced Zero-Tolerance Zone. The possession, consumption, or influence of alcohol, tobacco products, e-cigarettes, vaping devices, narcotics, prescription drugs without authorization, pyrotechnics, weapons, sharp objects, or flammable chemicals is illegal and strictly banned.",
        criticalNotice: "Violators will face immediate police handover, instant team disqualification, and formal notification sent to their parent institution's Principal/Director.",
      },
      {
        heading: "2.3 Dress Code & Decorum",
        details:
          "Participants are expected to dress neatly and professionally. Clothing with offensive language, provocative graphics, or political slogans is prohibited. Respectful behavior towards faculty, judges, student volunteers, and security staff is required at all times.",
      },
      {
        heading: "2.4 Campus Vehicle Parking & Movement Restrictions",
        details:
          "Participant vehicles must be parked exclusively in Parking Zone C (Near Sports Ground). Driving inside academic corridors or pedestrian plazas is strictly forbidden. Max speed limit on campus access roads is 15 km/h.",
      },
    ],
  },
  {
    id: "reporting-venue-infrastructure",
    categoryNumber: "SECTION 03",
    icon: "⏰",
    title: "REPORTING WINDOWS, VENUES & POWER INFRASTRUCTURE",
    summary: "Punctuality thresholds, arena check-ins, electrical load policies, and hardware safety.",
    badge: "STRICT TIMINGS",
    badgeColor: "#f59e0b",
    rules: [
      {
        heading: "3.1 Reporting Time Window & Gate Lock",
        details:
          "Participants must report to their respective event venue strictly 60 minutes prior to the official session start time for desk registration, seat allocation, and pre-flight/hardware checks. Venue entry gates will be locked 15 minutes prior to session commencement.",
        criticalNotice: "Late arrivals past the gate lock time will result in automatic slot forfeiture and allocation to waiting-list teams.",
      },
      {
        heading: "3.2 Electrical Power Usage & Spike Buster Mandate",
        details:
          "High-power events (NEXTECH Hackathon, PROJECT ULTRON, Esports) provide standard 230V AC power sockets at workstations. Teams bringing custom hardware setups, workstations, soldering stations, or gaming rigs MUST bring their own IS-certified multi-socket spike buster extension cords (minimum 3-meter length).",
      },
      {
        heading: "3.3 Wi-Fi Network & Bandwidth Usage Policy",
        details:
          "High-speed campus Wi-Fi credentials will be issued upon venue check-in. Network usage is monitored in real-time. Downloading torrents, streaming non-event video content, launching network stress tests, or attempting unauthorized port scanning on campus servers will trigger automatic MAC address ban and disqualification.",
      },
      {
        heading: "3.4 Equipment Liability Waiver",
        details:
          "Participants are solely responsible for the safety of their personal laptops, drones, FPV goggles, cameras, microcontrollers, and mobile devices. NMIET Campus and NIRMIT organizers accept no liability for loss, damage, or theft of personal items.",
      },
    ],
  },
  {
    id: "competition-discipline-plagiarism",
    categoryNumber: "SECTION 04",
    icon: "⚡",
    title: "COMPETITION DISCIPLINE, FAIR PLAY & PLAGIARISM",
    summary: "Code originality checks, mid-evaluation checkpoints, airspace safety, and gaming integrity.",
    badge: "FAIR PLAY ENFORCED",
    badgeColor: "#10b981",
    rules: [
      {
        heading: "4.1 Software Code Originality & Plagiarism Audits",
        details:
          "For NEXTECH 2.0 (Agentic AI Hackathon) and MULTIVERSE OF IDEAS (Ideathon), all code and architecture must be built during the competition hours. Submissions will be processed through automated GitHub repository plagiarism scanners and commit timeline analyzers. Repackaged pre-built commercial templates or uncredited stolen repositories will result in instant disqualification.",
      },
      {
        heading: "4.2 Mandatory Mid-Evaluation Checkpoints",
        details:
          "For multi-stage events, teams must present their live progress to assigned jury mentors at designated evaluation checkpoints (e.g. Day 1 Mid-Eval 2:00 PM - 6:00 PM for NEXTECH). Teams missing their checkpoint slot without prior written permission from the Convenor will be marked as forfeit.",
      },
      {
        heading: "4.3 Drone Airspace Safety Rules (FALCON STRIKE)",
        details:
          "FPV quadcopters must comply with safety checks: 1) LiPo batteries must be transported in fireproof LiPo bags; 2) Fail-safe motor kill switch must be configured; 3) Flying outside designated netting barriers or over spectator seating is strictly prohibited; 4) Propeller guards are recommended.",
        criticalNotice: "Arming drone motors inside pit stop tents or outside designated safety flight zones is an immediate grounds for pilot ejection.",
      },
      {
        heading: "4.4 Esports & Free Fire Tournament Code (CIVIL WARS)",
        details:
          "All CIVIL WARS matches are conducted on official mobile devices (smartphones only). Use of PC emulators, tablets/iPads (unless specified per round), gamepads, hardware triggers, third-party script injectors, or graphic skin mods is strictly forbidden. Custom room passwords must not be shared outside participating squads.",
      },
      {
        heading: "4.5 Art & Creative Competition Guidelines (INFINITY CANVAS)",
        details:
          "Canvas boards will be supplied by the host institute. Participants must bring their own acrylic paints, brushes, palettes, and cleanup rags. Artworks must be produced entirely on-site adhering to the unannounced theme revealed at session start.",
      },
    ],
  },
  {
    id: "judging-disputes-appeals",
    categoryNumber: "SECTION 05",
    icon: "⚖️",
    title: "JUDGING AUTONOMY, DISPUTES & APPEALS PROCESS",
    summary: "Evaluation matrices, jury independence, formal grievance forms, and score finality.",
    badge: "JUDICIAL FINALITY",
    badgeColor: "#8b5cf6",
    rules: [
      {
        heading: "5.1 Jury Autonomy & Evaluation Matrix",
        details:
          "Competitions are judged by a distinguished panel of industry CTOs, veteran academic professors, and domain experts. Judges evaluate submissions based on standardized rubrics (Innovation, Technical Execution, Presentation, Feasibility, and Adherence to Constraints). The decision of the jury panel is absolute and non-negotiable.",
      },
      {
        heading: "5.2 Non-Interference Policy",
        details:
          "Faculty advisors, team mentors, parents, or non-competing peers are strictly forbidden from approaching judges or interfering during live presentation rounds. Any attempt to lobby or influence judges will result in penalty points or team disqualification.",
      },
      {
        heading: "5.3 Formal Grievance & Appeal Procedure",
        details:
          "In the event of technical malfunctions, scoring discrepancies, or rule violations by competing teams, the team leader must submit a written Appeal Form at the Central Control Desk (MBA Block Room 102) within 30 minutes of round completion along with a nominal appeal deposit of ₹500 (refunded if appeal is upheld).",
      },
      {
        heading: "5.4 Certificate & Prize Disbursement Terms",
        details:
          "Certificate of Merit & Cash Prizes will be awarded only to teams present at the Grand Closing Ceremony. Prize money will be disbursed via NEFT/UPI bank transfer to the registered team leader's account within 7 working days following tax/TDS verification.",
      },
    ],
  },
  {
    id: "health-safety-emergencies",
    categoryNumber: "SECTION 06",
    icon: "🚨",
    title: "HEALTH, SAFETY, EMERGENCY PROTOCOLS & CAMPUS CARE",
    summary: "Medical first aid locations, fire evacuations, environmental hygiene, and legal liabilities.",
    badge: "SAFETY FIRST",
    badgeColor: "#ec4899",
    rules: [
      {
        heading: "6.1 Emergency Medical Assistance",
        details:
          "A 24/7 First Aid Medical Desk & On-Call Ambulance are stationed adjacent to MBA Block Ground Floor. For medical emergencies, immediately contact the Control Desk hotline or approach any student coordinator wearing red armbands.",
      },
      {
        heading: "6.2 Fire & Electrical Safety Protocols",
        details:
          "Fire extinguishers are located in every hallway and venue entrance. In case of smoke or electrical short-circuiting, immediately stop using equipment, alert venue marshals, and evacuate calmly via marked Emergency Exit stairwells.",
      },
      {
        heading: "6.3 Green Campus & Environmental Responsibility",
        details:
          "NMIET is committed to a zero-littering green campus policy. Participants must dispose of food containers, plastic bottles, and paper waste into color-coded recycling bins placed across campus. Damaging campus flora, defacing walls, or littering carries a ₹1,000 fine.",
      },
      {
        heading: "6.4 Property Damage & Financial Liability",
        details:
          "Any deliberate or negligent damage caused to institute property (AV equipment, projector screens, furniture, computers, lab apparatus, electrical fittings) will be assessed by the Disciplinary Committee, and full restoration costs will be recovered from the responsible individuals or their institution.",
      },
    ],
  },
];

export default function RulesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredData = rulebookData.filter((sec) => {
    if (activeTab !== "all" && sec.id !== activeTab) return false;
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchTitle = sec.title.toLowerCase().includes(query);
    const matchSummary = sec.summary.toLowerCase().includes(query);
    const matchRules = sec.rules.some(
      (r) => r.heading.toLowerCase().includes(query) || r.details.toLowerCase().includes(query)
    );
    return matchTitle || matchSummary || matchRules;
  });

  return (
    <main style={{ minHeight: "100vh", background: "#040507", color: "#ffffff", paddingTop: "100px", position: "relative" }}>
      {/* Fixed viewport background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <Image
          src="/rules-bg.webp"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority={false}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(4,5,7,0.65)" }} />
      </div>

      {/* Scrollable content */}
      <div style={{ position: "relative", zIndex: 1 }}>
      <div className="section-container" style={{ paddingBottom: "120px" }}>
        
        {/* Header Block */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{ display: "inline-block", background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(148,163,184,0.1) 100%)", border: "1px solid rgba(255,255,255,0.25)", padding: "6px 22px", borderRadius: "999px", marginBottom: "16px" }}>
            <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.82rem", fontWeight: 800, color: "#ffffff", letterSpacing: "0.15em" }}>
              NMIET BHUBANESWAR • OFFICIAL INSTITUTIONAL CODEBOOK
            </span>
          </div>

          <h1 className="section-title" style={{ display: "block" }}>NIRMIT 2.0 RULEBOOK</h1>
          <p className="section-subtitle" style={{ margin: "16px auto 0 auto", maxWidth: "850px" }}>
            Comprehensive participation guidelines, gate entry security, evaluation matrices, hardware protocols, and campus disciplinary codes for all delegates.
          </p>
        </div>

        {/* High-Alert Institutional Warning Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(185, 28, 28, 0.25) 100%)",
            border: "1.5px solid rgba(239, 68, 68, 0.5)",
            borderRadius: "14px",
            padding: "24px 32px",
            marginBottom: "40px",
            display: "flex",
            alignItems: "flex-start",
            gap: "20px",
            boxShadow: "0 10px 30px rgba(239, 68, 68, 0.15)",
          }}
        >
          <div style={{ fontSize: "2.2rem", lineHeight: 1 }}>🚨</div>
          <div>
            <h4 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "1.4rem", color: "#fca5a5", margin: 0, letterSpacing: "0.05em" }}>
              CRITICAL INSTITUTIONAL ADVISORY & COMPLIANCE MANDATE
            </h4>
            <p style={{ margin: "6px 0 0 0", color: "rgba(254, 226, 226, 0.9)", fontSize: "0.92rem", lineHeight: "1.6" }}>
              All participants are required to read, understand, and strictly abide by these directives upon entering NMIET Campus. Non-compliance with gate security checks, punctuality windows, or code of conduct will result in immediate cancellation of registration pass, team forfeiture, and reporting to the home institution principal.
            </p>
          </div>
        </div>

        {/* Quick Filter Tabs & Search Bar */}
        <div style={{ marginBottom: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Search Box */}
          <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto", width: "100%" }}>
            <input
              type="text"
              placeholder="🔍 Search rules by keyword (e.g., Drone, FCFS, Wi-Fi, Plagiarism, Fees)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 20px",
                borderRadius: "999px",
                background: "rgba(15, 23, 42, 0.8)",
                border: "1.5px solid rgba(255, 255, 255, 0.25)",
                color: "#ffffff",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.9rem",
                outline: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              }}
            />
          </div>

          {/* Section Filter Pills */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            <button
              onClick={() => setActiveTab("all")}
              style={{
                padding: "10px 20px",
                borderRadius: "999px",
                border: activeTab === "all" ? "1.5px solid #ffffff" : "1px solid rgba(255,255,255,0.2)",
                background: activeTab === "all" ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.6)",
                color: "#ffffff",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.82rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              SHOW ALL SECTIONS ({rulebookData.length})
            </button>
            {rulebookData.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "999px",
                  border: activeTab === sec.id ? `1.5px solid ${sec.badgeColor}` : "1px solid rgba(255,255,255,0.15)",
                  background: activeTab === sec.id ? "rgba(30,41,59,0.9)" : "rgba(15,23,42,0.6)",
                  color: activeTab === sec.id ? sec.badgeColor : "rgba(241,245,249,0.75)",
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {sec.categoryNumber}: {sec.title.split("&")[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Rulebook Content Cards Stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {filteredData.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", background: "rgba(15,23,42,0.6)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <span style={{ fontSize: "2.5rem" }}>🔍</span>
              <h3 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "1.8rem", color: "#cbd5e1", marginTop: "12px" }}>
                NO MATCHING RULES FOUND
              </h3>
              <p style={{ color: "rgba(241,245,249,0.7)", fontSize: "0.95rem" }}>
                Try searching for different terms like "Drone", "ID Card", "Hackathon", "Reporting", or click "SHOW ALL SECTIONS".
              </p>
            </div>
          ) : (
            filteredData.map((section) => (
              <article
                key={section.id}
                id={section.id}
                style={{
                  background: "linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(15, 23, 42, 0.95) 100%)",
                  border: "1.5px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "16px",
                  padding: "36px",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.6)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Header Row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span style={{ fontSize: "2rem" }}>{section.icon}</span>
                    <div>
                      <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.78rem", color: section.badgeColor, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                        {section.categoryNumber}
                      </span>
                      <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.2rem", color: "#ffffff", letterSpacing: "0.04em", margin: "2px 0 0 0", lineHeight: 1 }}>
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.75rem", fontWeight: 800, color: section.badgeColor, background: `${section.badgeColor}22`, border: `1px solid ${section.badgeColor}66`, padding: "6px 14px", borderRadius: "999px", letterSpacing: "0.12em" }}>
                    {section.badge}
                  </span>
                </div>

                <p style={{ color: "rgba(241, 245, 249, 0.88)", fontSize: "1rem", lineHeight: "1.6", marginBottom: "28px", fontStyle: "italic" }}>
                  {section.summary}
                </p>

                {/* Sub-rules Detailed Breakdown */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {section.rules.map((rule, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "rgba(15, 23, 42, 0.7)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "12px",
                        padding: "24px",
                      }}
                    >
                      <h3 style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "1rem", fontWeight: 800, color: "#ffffff", marginBottom: "8px", letterSpacing: "0.02em" }}>
                        {rule.heading}
                      </h3>
                      <p style={{ color: "rgba(241, 245, 249, 0.85)", fontSize: "0.94rem", lineHeight: "1.7", margin: 0 }}>
                        {rule.details}
                      </p>

                      {rule.criticalNotice && (
                        <div style={{ marginTop: "14px", background: "rgba(239, 68, 68, 0.12)", borderLeft: "3.5px solid #ef4444", padding: "10px 16px", borderRadius: "0 6px 6px 0", color: "#fca5a5", fontSize: "0.85rem", fontWeight: 700, fontFamily: "var(--font-geist-mono), monospace" }}>
                          ⚠️ <strong>INSTITUTIONAL NOTICE:</strong> {rule.criticalNotice}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))
          )}
        </div>

        {/* Quick Summary / Need Help Footer Box */}
        <div style={{ marginTop: "60px", background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(148,163,184,0.08) 100%)", border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: "16px", padding: "36px", textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.2rem", color: "#ffffff", margin: "0 0 8px 0" }}>
            HAVE QUESTIONS OR NEED CLARIFICATION ON PROTOCOLS?
          </h3>
          <p style={{ color: "rgba(241, 245, 249, 0.85)", fontSize: "0.98rem", maxWidth: "750px", margin: "0 auto 24px auto", lineHeight: "1.6" }}>
            Contact the NIRMIT 2.0 Central Disciplinary Committee or approach the Faculty Convenors at MBA Block Room 102.
          </p>
          <a
            href="/contact"
            className="fast-assemble-btn"
            style={{ display: "inline-flex", margin: "0 auto" }}
          >
            CONTACT DISCIPLINARY HELPDESK →
          </a>
        </div>

      </div>{/* end section-container */}
      </div>{/* end scrollable content */}

      <Footer />
    </main>
  );
}
