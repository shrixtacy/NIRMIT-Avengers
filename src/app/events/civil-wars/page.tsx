"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CivilWarsEventPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "rules" | "schedule" | "coordinators">("overview");

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
        <Link href="/#events" className="civil-back-btn">
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
        <div className="civil-stats-grid">
          <div className="civil-stat-card">
            <span className="civil-stat-icon">📅</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">EVENT DATE</span>
              <span className="stat-card-value">9 October 2026</span>
            </div>
          </div>

          <div className="civil-stat-card">
            <span className="civil-stat-icon">⏰</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">REPORTING TIME</span>
              <span className="stat-card-value">1:30 PM – 2:00 PM</span>
            </div>
          </div>

          <div className="civil-stat-card">
            <span className="civil-stat-icon">⏱️</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">TOURNAMENT TIME</span>
              <span className="stat-card-value">3:00 PM – 5:00 PM</span>
            </div>
          </div>

          <div className="civil-stat-card">
            <span className="civil-stat-icon">📍</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">TOURNAMENT VENUE</span>
              <span className="stat-card-value">Auditorium, MBA Block</span>
            </div>
          </div>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="civil-tabs">
          <button
            className={`civil-tab-btn ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            OVERVIEW
          </button>
          <button
            className={`civil-tab-btn ${activeTab === "schedule" ? "active" : ""}`}
            onClick={() => setActiveTab("schedule")}
          >
            TIMELINE & STAGES
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
            FACULTY LEADS
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
                Top qualifying squads clash inside the MBA Block Auditorium across custom Bermuda & Kalahari lobbies to claim the ultimate championship trophy.
              </p>
            </div>

            <div className="civil-grid-two">
              <div className="civil-info-card">
                <h3>🎮 Squad Roster & Devices</h3>
                <ul>
                  <li>Squad Format: 4 Main Players + 1 Substitute.</li>
                  <li>Official Mobile Devices only (Emulators strictly banned).</li>
                  <li>Players must connect to designated campus low-latency Wi-Fi.</li>
                </ul>
              </div>

              <div className="civil-info-card">
                <h3>🏆 Prizes & Booyah Trophies</h3>
                <ul>
                  <li>Grand Champion Trophy & Cash Prize Pool.</li>
                  <li>MVP & Most Kills Individual Awards.</li>
                  <li>Official Certificate of Excellence for Finalist Squads.</li>
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
                <div className="timeline-time">01:30 PM – 02:00 PM</div>
                <div className="timeline-content">
                  <h4>Phase 1: Reporting & Squad Lobby Assignment</h4>
                  <p>Reporting at MBA Block Auditorium. ID verification, device check, custom room password distribution, and ping check.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">03:00 PM – 03:45 PM</div>
                <div className="timeline-content">
                  <h4>Phase 2: Round 1 — Bermuda Survival Qualifier</h4>
                  <p>12 Squads battle across Bermuda map. Top 6 squads advance based on placement points & kill frag points.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">03:45 PM – 04:30 PM</div>
                <div className="timeline-content">
                  <h4>Phase 3: Round 2 — Kalahari Zone Elimination</h4>
                  <p>High-tension desert combat with aggressive zone rotations and high-ground vantage battles.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">04:30 PM – 05:00 PM</div>
                <div className="timeline-content">
                  <h4>Phase 4: Grand Finale & Booyah Ceremony</h4>
                  <p>Final Booyah showdown on main stage, live point tallying, MVP declaration, and prize distribution.</p>
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
                <li><strong>No Emulators:</strong> Players must use Android/iOS mobile devices. PC emulators or external triggers are grounds for immediate dq.</li>
                <li><strong>Fair Play Policy:</strong> Hacks, scripts, or third-party game modifiers result in a permanent ban across NIRMIT events.</li>
                <li><strong>Point System:</strong> 1 Kill = 1 Point. Placement: #1 (12 pts), #2 (9 pts), #3 (8 pts), #4 (7 pts).</li>
                <li><strong>Technical Issues:</strong> Rematch will only be triggered if more than 3 squads experience server disconnects prior to 1st safe zone shrinks.</li>
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

        {/* Tab Panel 4: Faculty Leads */}
        {activeTab === "coordinators" && (
          <div className="civil-panel">
            <div className="civil-section-box">
              <h2 className="civil-section-title">FACULTY LEADS & ORGANIZERS</h2>
              <div className="civil-leads-grid">
                <div className="lead-card">
                  <div className="lead-avatar">RR</div>
                  <div className="lead-name">Rashmi Rath</div>
                  <div className="lead-role">Faculty Lead Coordinator</div>
                  <div className="lead-dept">Esports & Gaming Arena</div>
                </div>

                <div className="lead-card">
                  <div className="lead-avatar">OK</div>
                  <div className="lead-name">Om Prakash Narayan Kar</div>
                  <div className="lead-role">Faculty Co-Lead</div>
                  <div className="lead-dept">Tournament Operations</div>
                </div>

                <div className="lead-card">
                  <div className="lead-avatar">PD</div>
                  <div className="lead-name">Prabir Das</div>
                  <div className="lead-role">Faculty Co-Lead</div>
                  <div className="lead-dept">Network & Technical Support</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Call to Action Footer */}
        <div className="civil-cta-footer">
          <div className="cta-content">
            <h3>ASSEMBLE YOUR SQUAD FOR CIVIL WARS</h3>
            <p>Register your 4-player crew for Free Fire tournament at MBA Auditorium.</p>
          </div>
          <div className="cta-buttons">
            <a href="/#register" className="civil-register-btn">
              REGISTER FOR CIVIL WARS →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
