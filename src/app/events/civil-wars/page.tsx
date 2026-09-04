"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRegistrationModal } from "../../components/RegistrationModal";

export default function CivilWarsEventPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "rules" | "schedule" | "coordinators">("overview");
  const { openModal } = useRegistrationModal();

  return (
    <main className="civil-page-container">
      {/* Red/Blue Split Civil Wars Background Image + Overlay */}
      <div className="civil-page-bg">
        <Image
          src="/civil-wars-bg.webp"
          alt="Civil Wars Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="civil-page-bg-overlay" />
      </div>

      {/* Hero Corner Characters: Iron Man (left) vs Captain America (right) */}
      <div className="civil-corner-left">
        <Image
          src="/ironman-left.webp"
          alt="Iron Man Left Hero"
          width={580}
          height={580}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="civil-corner-right">
        <Image
          src="/captain-right.webp"
          alt="Captain America Right Hero"
          width={640}
          height={640}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Sticky Top Navigation Bar */}
      <header className="civil-nav-header">
        <Link href="/events" className="civil-back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>BACK TO EVENTS</span>
        </Link>
        <div className="civil-nav-title">NIRMIT 2026</div>
      </header>

      {/* Main Content Area */}
      <div className="civil-content-wrapper">
        {/* Event Header Badge & Title */}
        <div className="civil-header-badge">(03 / 14) /// FREE FIRE ESPORTS SHOWDOWN</div>
        <h1 className="civil-main-title">CIVIL WARS</h1>
        <p className="civil-subtitle">
          Choose your side. Squad tactical combat, precision recoil control, and Battle Royale glory.
        </p>

        {/* Quick Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          <div className="civil-stat-card">
            <span className="civil-stat-icon">💰</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">ENTRY FEE & PRIZE</span>
              <span className="stat-card-value" style={{ color: "#ffffff" }}>₹10,000 Total</span>
              <span style={{ fontSize: "0.78rem", color: "#cbd5e1" }}>Fee: ₹400 / Team</span>
            </div>
          </div>

          <div className="civil-stat-card">
            <span className="civil-stat-icon">📅</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">EVENT DATE & TIME</span>
              <span className="stat-card-value" style={{ color: "#ffffff" }}>13 October 2026</span>
              <span style={{ fontSize: "0.78rem", color: "rgba(241,245,249,0.8)" }}>Report: 2:15 PM (3 PM - 5 PM)</span>
            </div>
          </div>

          <div className="civil-stat-card">
            <span className="civil-stat-icon">📍</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">VENUE LOCATION</span>
              <span className="stat-card-value">Auditorium, MBA Block</span>
              <span style={{ fontSize: "0.78rem", color: "rgba(241,245,249,0.7)" }}>Esports Arena Auditorium</span>
            </div>
          </div>

          <div className="civil-stat-card">
            <span className="civil-stat-icon">👥</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">FORMAT & CAPACITY</span>
              <span className="stat-card-value">Squad (4+1 Sub)</span>
              <span style={{ fontSize: "0.78rem", color: "#94a3b8" }}>Cap: 24 Squads (No Mid-Eval)</span>
            </div>
          </div>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="civil-tabs">
          <button
            className={`civil-tab-btn ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            OVERVIEW & PRIZES
          </button>
          <button
            className={`civil-tab-btn ${activeTab === "schedule" ? "active" : ""}`}
            onClick={() => setActiveTab("schedule")}
          >
            TIMELINE & ROOM FORMAT
          </button>
          <button
            className={`civil-tab-btn ${activeTab === "rules" ? "active" : ""}`}
            onClick={() => setActiveTab("rules")}
          >
            RULES & FORMAT
          </button>
          <button
            className={`civil-tab-btn ${activeTab === "coordinators" ? "active" : ""}`}
            onClick={() => setActiveTab("coordinators")}
          >
            FACULTY & STUDENT LEADS
          </button>
        </div>

        {/* Tab Panel 1: Overview */}
        {activeTab === "overview" && (
          <div className="civil-panel">
            <div className="civil-section-box">
              <h2 className="civil-section-title">ABOUT THE TOURNAMENT</h2>
              <p className="civil-paragraph">
                Civil Wars is NIRMIT&apos;s flagship Free Fire esports Battle Royale competition. Squads face off in high-stakes tactical combat testing communication, map awareness, zone rotation, and weapon mastery under live main-stage audience commentary.
              </p>
              <p className="civil-paragraph">
                Top qualifying squads clash inside the MBA Block Auditorium across custom elimination lobbies to claim the ultimate championship trophy.
              </p>
            </div>

            <div className="civil-grid-two">
              <div className="civil-info-card">
                <h3>🎮 Squad Roster & Fee</h3>
                <ul>
                  <li><strong>Squad Roster:</strong> 4 Main Players + 1 Substitute.</li>
                  <li><strong>Tournament Cap:</strong> 24 Teams Maximum.</li>
                  <li><strong>Registration Fee:</strong> ₹400 per Team.</li>
                  <li><strong>Mid-Evaluation:</strong> NO Online Mid-Evaluation required.</li>
                </ul>
              </div>

              <div className="civil-info-card">
                <h3>🏆 Prize Pool Breakdown (₹10,000 Total)</h3>
                <ul>
                  <li><strong>🥇 1st Booyah Champion:</strong> ₹5,000 + Winner Trophy</li>
                  <li><strong>🥈 2nd Runner-up:</strong> ₹3,000 + Certificate</li>
                  <li><strong>🥉 3rd Runner-up:</strong> ₹2,000 + Certificate</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab Panel 2: Timeline & Stages */}
        {activeTab === "schedule" && (
          <div className="civil-panel">
            <div className="civil-timeline-list">
              <div className="timeline-item">
                <div className="timeline-time">02:15 PM – 02:45 PM</div>
                <div className="timeline-content">
                  <h4>Phase 1: Squad Reporting & Lobby Check</h4>
                  <p>Reporting at MBA Block Auditorium. ID verification, mobile device check, Wi-Fi pairing, and room password distribution.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">03:00 PM – 03:45 PM</div>
                <div className="timeline-content">
                  <h4>Phase 2: Stage 1 — Room A & Room B Qualifiers (24 Teams)</h4>
                  <p>Room A hosts 12 teams and Room B hosts 12 teams live. Top 3 teams from each room (Total 6 teams) advance based on point table.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">04:00 PM – 04:45 PM</div>
                <div className="timeline-content">
                  <h4>Phase 3: Stage 2 — Room C Grand Final (Top 6 Teams)</h4>
                  <p>The top 6 finalist squads clash in a high-tension Booyah showdown broadcast on the main auditorium screen.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">04:45 PM – 05:00 PM</div>
                <div className="timeline-content">
                  <h4>Phase 4: Award & Booyah Ceremony</h4>
                  <p>Final point tallying, MVP declaration, and prize trophy distribution.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Panel 3: Rules & Format */}
        {activeTab === "rules" && (
          <div className="civil-panel">
            <div className="civil-section-box">
              <h2 className="civil-section-title">TOURNAMENT RULES</h2>
              <ul className="civil-rules-list">
                <li><strong>Mobile Devices Only:</strong> All matches are played on standard mobile devices in official Free Fire custom rooms. Emulators or PC scripts result in instant disqualification.</li>
                <li><strong>Reporting Time:</strong> Teams must report to their assigned room lobby 15 minutes before match start; late entries forfeit their slot.</li>
                <li><strong>Anti-Cheat Policy:</strong> Hacks, triggers, or third-party game modifications result in a permanent ban across NIRMIT events.</li>
                <li><strong>Point System:</strong> Placement Points + 1 Point per confirmed Kill frag. Quizmaster/Referees decisions are final.</li>
              </ul>
            </div>

            <div className="civil-section-box">
              <h2 className="civil-section-title">SCORING BREAKDOWN</h2>
              <div className="civil-metrics-grid">
                <div className="metric-box">
                  <span className="metric-score">50%</span>
                  <span className="metric-label">Placement Points</span>
                </div>
                <div className="metric-box">
                  <span className="metric-score">30%</span>
                  <span className="metric-label">Kill Frags Count</span>
                </div>
                <div className="metric-box">
                  <span className="metric-score">20%</span>
                  <span className="metric-label">Zone Control & Strategy</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Panel 4: Faculty & Student Leads */}
        {activeTab === "coordinators" && (
          <div className="civil-panel">
            <div className="civil-section-box" style={{ marginBottom: "32px" }}>
              <h2 className="civil-section-title">FACULTY INCHARGE & CONVENORS</h2>
              <div className="civil-leads-grid">
                <div className="lead-card">
                  <div className="lead-avatar">RR</div>
                  <div className="lead-name">Rashmi Ranjan Rath</div>
                  <div className="lead-role">Faculty Convenor</div>
                </div>

                <div className="lead-card">
                  <div className="lead-avatar">OK</div>
                  <div className="lead-name">Om Prakash Narayan Kar</div>
                  <div className="lead-role">Faculty Convenor</div>
                </div>

                <div className="lead-card">
                  <div className="lead-avatar">PD</div>
                  <div className="lead-name">Prabir Das</div>
                  <div className="lead-role">Faculty Convenor</div>
                </div>
              </div>
            </div>

            <div className="civil-section-box">
              <h2 className="civil-section-title">STUDENT LEADS & CONTACT NUMBERS</h2>
              <div className="civil-leads-grid">
                <div className="lead-card">
                  <div className="lead-avatar">SS</div>
                  <div className="lead-name">Sukdev Suna</div>
                  <div className="lead-role">Student Lead • B.Tech ECE (7th Sem)</div>
                  <a href="tel:+918984941510" style={{ color: "#ffffff", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", marginTop: "4px", display: "inline-block" }}>📞 +91 89849 41510</a>
                </div>

                <div className="lead-card">
                  <div className="lead-avatar">SS</div>
                  <div className="lead-name">Subham Sing</div>
                  <div className="lead-role">Student Lead • B.Tech CSE (7th Sem)</div>
                  <a href="tel:+916372920799" style={{ color: "#ffffff", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", marginTop: "4px", display: "inline-block" }}>📞 +91 63729 20799</a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Call to Action Footer */}
        <div className="civil-cta-footer">
          <div className="cta-content">
            <h3>ASSEMBLE YOUR SQUAD FOR CIVIL WARS</h3>
            <p>Fee: ₹400/Team • Prize Pool: ₹10,000. Secure your squad's slot among the 24 room lobbies.</p>
          </div>
          <div className="cta-buttons">
            <button onClick={() => openModal("civil-wars")} className="civil-register-btn" style={{ cursor: "pointer", border: "none", display: "inline-flex" }}>
              REGISTRATION OPENS 5TH SEPT 🔒
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
