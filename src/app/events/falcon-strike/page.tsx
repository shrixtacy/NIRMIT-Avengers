"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRegistrationModal } from "../../components/RegistrationModal";

export default function FalconStrikePage() {
  const [activeTab, setActiveTab] = useState<"overview" | "rules" | "schedule" | "coordinators">("overview");
  const { openModal } = useRegistrationModal();

  return (
    <main className="civil-page-container">
      {/* Background Image + Vignette Overlay */}
      <div className="civil-page-bg">
        <Image
          src="/events-bg.webp"
          alt="Falcon Strike Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="civil-page-bg-overlay" />
      </div>

      {/* Hero Corner Falcons */}
      <div className="civil-corner-left">
        <Image
          src="/falcon-left.webp"
          alt="Falcon Hero Left"
          width={540}
          height={540}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="civil-corner-right">
        <Image
          src="/falcon-right.webp"
          alt="Falcon Hero Right"
          width={600}
          height={600}
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
        <div className="civil-header-badge">(01 / 14) /// DRONE OBSTACLE COURSE</div>
        <h1 className="civil-main-title">FALCON STRIKE</h1>
        <p className="civil-subtitle">
          Master the skies. Conquer the obstacles. Precision drone navigation at terminal velocity.
        </p>

        {/* Quick Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">💰</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">ENTRY FEE & PRIZE</span>
              <span className="stat-card-value" style={{ color: "#e2e8f0" }}>₹10,000 Total</span>
              <span style={{ fontSize: "0.78rem", color: "#cbd5e1" }}>Fee: ₹500 / Team</span>
            </div>
          </div>

          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">📅</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">EVENT DATE & TIME</span>
              <span className="stat-card-value" style={{ color: "#e2e8f0" }}>11 October 2026</span>
              <span style={{ fontSize: "0.78rem", color: "rgba(241,245,249,0.8)" }}>Report: 7:30 AM (8 AM - 1 PM)</span>
            </div>
          </div>

          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">📍</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">VENUE LOCATION</span>
              <span className="stat-card-value">Football Ground Arena</span>
              <span style={{ fontSize: "0.78rem", color: "rgba(241,245,249,0.7)" }}>NMIET Outdoor Arena</span>
            </div>
          </div>

          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">👥</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">FORMAT & CAPACITY</span>
              <span className="stat-card-value">1–3 Members / Team</span>
              <span style={{ fontSize: "0.78rem", color: "#94a3b8" }}>Cap: 20 Teams (No Mid-Eval)</span>
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
            TIMELINE & STAGES
          </button>
          <button
            className={`civil-tab-btn ${activeTab === "rules" ? "active" : ""}`}
            onClick={() => setActiveTab("rules")}
          >
            RULES & EVALUATION
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
            <div className="civil-section-box chamfer-box">
              <h2 className="civil-section-title">ABOUT THE COMPETITION</h2>
              <p className="civil-paragraph">
                Falcon Strike is NIRMIT&apos;s premier aerial showdown designed to test practical drone navigation, pilot precision, reaction time, elevation control, and emergency tactical maneuvers through a custom-engineered outdoor obstacle track.
              </p>
              <p className="civil-paragraph">
                Pilots will navigate tight hoop rings, elevation tunnels, high-speed slalom pylons, and precision drop zones while battling weather conditions and timed laps at NIRMIT Football Ground.
              </p>
            </div>

            <div className="civil-grid-two">
              <div className="civil-info-card chamfer-box">
                <h3>👥 Team Requirements & Fee</h3>
                <ul>
                  <li><strong>Team Size:</strong> 1 to 3 Members per Team.</li>
                  <li><strong>Capacity Cap:</strong> 20 Teams Maximum.</li>
                  <li><strong>Participation Fee:</strong> ₹500 per Team.</li>
                  <li><strong>Mid-Evaluation:</strong> NO Online Mid-Evaluation required.</li>
                </ul>
              </div>

              <div className="civil-info-card chamfer-box">
                <h3>🏆 Prize Pool Breakdown (₹10,000 Total)</h3>
                <ul>
                  <li><strong>🥇 1st Winner:</strong> ₹5,000 + Air Master Trophy</li>
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
              <div className="timeline-item chamfer-box">
                <div className="timeline-time">07:30 AM – 08:00 AM</div>
                <div className="timeline-content">
                  <h4>Phase 1: Reporting & Technical Pre-Flight Check</h4>
                  <p>Reporting at Football Ground Arena. Registration verification, RF frequency assignment, and drone safety inspection (propeller guards, battery telemetry, fail-safe cutoffs).</p>
                </div>
              </div>

              <div className="timeline-item chamfer-box">
                <div className="timeline-time">08:00 AM – 10:15 AM</div>
                <div className="timeline-content">
                  <h4>Phase 2: Round 1 — Precision Gate Run</h4>
                  <p>Controlled maneuvering through 8 illuminated hoops and elevation rings. Evaluation based on lap completion time and gate accuracy.</p>
                </div>
              </div>

              <div className="timeline-item chamfer-box">
                <div className="timeline-time">10:30 AM – 12:00 PM</div>
                <div className="timeline-content">
                  <h4>Phase 3: Round 2 — Tactical Slalom & Tunnel Navigation</h4>
                  <p>High-speed slalom around pylons and precision tunnel traversal under simulated obstacles.</p>
                </div>
              </div>

              <div className="timeline-item chamfer-box">
                <div className="timeline-time">12:00 PM – 01:00 PM</div>
                <div className="timeline-content">
                  <h4>Phase 4: Championship Air Final & Award Ceremony</h4>
                  <p>Top finalists compete in a thrilling timed obstacle finale followed by the official winner declaration.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Panel 3: Rules & Evaluation */}
        {activeTab === "rules" && (
          <div className="civil-panel">
            <div className="civil-section-box chamfer-box">
              <h2 className="civil-section-title">RULES & GUIDELINES</h2>
              <ul className="civil-rules-list">
                <li><strong>Pre-Flight Inspection:</strong> All drones must pass safety checks prior to takeoff. Loose propellers, damaged batteries, or missing safety guards will lead to disqualification.</li>
                <li><strong>Flight Perimeter:</strong> Pilots must operate strictly within designated flight corridors; crossing safety boundaries results in immediate disqualification.</li>
                <li><strong>Time Penalties:</strong> Touching an obstacle gate adds a +5 second penalty. Completely bypassing a gate adds a +15 second penalty.</li>
                <li><strong>Battery Swaps:</strong> Each team is allowed a maximum of 2 battery swap attempts during official timed runs.</li>
              </ul>
            </div>

            <div className="civil-section-box chamfer-box">
              <h2 className="civil-section-title">EVALUATION METRICS</h2>
              <div className="civil-metrics-grid">
                <div className="metric-box chamfer-box">
                  <span className="metric-score">40%</span>
                  <span className="metric-label">Course Completion Speed</span>
                </div>
                <div className="metric-box chamfer-box">
                  <span className="metric-score">30%</span>
                  <span className="metric-label">Gate & Hoop Accuracy</span>
                </div>
                <div className="metric-box chamfer-box">
                  <span className="metric-score">20%</span>
                  <span className="metric-label">Flight Stability & Control</span>
                </div>
                <div className="metric-box chamfer-box">
                  <span className="metric-score">10%</span>
                  <span className="metric-label">Safety Compliance</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Panel 4: Faculty & Student Leads */}
        {activeTab === "coordinators" && (
          <div className="civil-panel">
            <div className="civil-section-box chamfer-box" style={{ marginBottom: "32px" }}>
              <h2 className="civil-section-title">FACULTY INCHARGE & CONVENORS</h2>
              <div className="civil-leads-grid">
                <div className="lead-card chamfer-box">
                  <div className="lead-avatar">SR</div>
                  <div className="lead-name">Sanjay Ray</div>
                  <div className="lead-role">Faculty Convenor</div>
                </div>

                <div className="lead-card chamfer-box">
                  <div className="lead-avatar">SS</div>
                  <div className="lead-name">Santosh Sahu</div>
                  <div className="lead-role">Faculty Convenor</div>
                </div>

                <div className="lead-card chamfer-box">
                  <div className="lead-avatar">JB</div>
                  <div className="lead-name">J. Binita</div>
                  <div className="lead-role">Faculty Convenor</div>
                </div>
              </div>
            </div>

            <div className="civil-section-box chamfer-box">
              <h2 className="civil-section-title">STUDENT LEADS & CONTACT NUMBERS</h2>
              <div className="civil-leads-grid">
                <div className="lead-card chamfer-box">
                  <div className="lead-avatar">PN</div>
                  <div className="lead-name">Partha Sarathi Nayak</div>
                  <div className="lead-role">Student Lead • MBA (3rd Yr)</div>
                  <a href="tel:+919692767042" style={{ color: "#cbd5e1", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", marginTop: "4px", display: "inline-block" }}>📞 +91 96927 67042</a>
                </div>

                <div className="lead-card chamfer-box">
                  <div className="lead-avatar">AS</div>
                  <div className="lead-name">Adisakti Sahoo</div>
                  <div className="lead-role">Student Lead • B.Tech CSE (3rd Yr)</div>
                  <a href="tel:+916370656719" style={{ color: "#cbd5e1", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", marginTop: "4px", display: "inline-block" }}>📞 +91 63706 56719</a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Call to Action Footer */}
        <div className="civil-cta-footer chamfer-box">
          <div className="cta-content">
            <h3>READY TO DOMINATE THE SKIES?</h3>
            <p>Registration Fee: ₹500/Team • Prize Pool: ₹10,000. Secure your slot before the 20-team cap is reached.</p>
          </div>
          <div className="cta-buttons">
            <button onClick={() => openModal("falcon-strike")} className="civil-register-btn" style={{ cursor: "pointer", border: "none", display: "inline-flex" }}>
              REGISTRATION OPENS 5TH SEPT 🔒
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
