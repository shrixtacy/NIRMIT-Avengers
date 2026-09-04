"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "../../components/Footer";
import { useRegistrationModal } from "../../components/RegistrationModal";

export default function QuantumaniaPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "schedule" | "rules" | "coordinators">("overview");
  const { openModal } = useRegistrationModal();

  return (
    <main className="civil-page-container">
      {/* Background Image + Vignette Overlay */}
      <div className="civil-page-bg">
        <Image
          src="/quantumania-bg.webp"
          alt="Quantumania Background"
          fill
          priority
          unoptimized
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="civil-page-bg-overlay" />
      </div>

      {/* Hero Bottom-Left Character Overlay */}
      <div className="civil-corner-left">
        <Image
          src="/quantumania-bottom-left.webp"
          alt="Ant-Man Character Bottom Left"
          width={460}
          height={460}
          unoptimized
          style={{ objectFit: "contain", objectPosition: "bottom left" }}
        />
      </div>

      {/* Hero Top-Right Character Overlay */}
      <div className="civil-corner-right">
        <Image
          src="/quantumania-top-right.webp"
          alt="Ant-Man Character Top Right"
          width={500}
          height={500}
          unoptimized
          style={{ objectFit: "contain", objectPosition: "top right" }}
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

      {/* Main Content Container */}
      <div className="civil-content-wrapper">
        {/* Event Header Tag & Title */}
        <div className="civil-header-badge">
          (07 / 14) /// TECH QUIZ CHAMPIONSHIP • ALGORITHMIC BRAIN WAR
        </div>

        <h1 className="civil-main-title">
          QUANTUMANIA
        </h1>

        <p className="civil-subtitle">
          Rapid-fire algorithmic & tech trivia battle testing knowledge on CS history, AI models, emerging hardware, and computer science breakthroughs.
        </p>

        {/* Quick Parameters Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">💰</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">ENTRY FEE & PRIZE</span>
              <span className="stat-card-value" style={{ color: "#e2e8f0" }}>₹10,000 Total</span>
              <span style={{ fontSize: "0.78rem", color: "#cbd5e1" }}>Fee: ₹200 / Team</span>
            </div>
          </div>

          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">📅</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">EVENT DATE & TIME</span>
              <span className="stat-card-value" style={{ color: "#e2e8f0" }}>12 October 2026</span>
              <span style={{ fontSize: "0.78rem", color: "rgba(241,245,249,0.8)" }}>Report: 9:30 AM (10 AM - 12 PM)</span>
            </div>
          </div>

          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">📍</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">LOCATION VENUE</span>
              <span className="stat-card-value">Reading Room, Central Library</span>
              <span style={{ fontSize: "0.78rem", color: "rgba(241,245,249,0.7)" }}>NMIET Central Library</span>
            </div>
          </div>

          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">👥</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">FORMAT & CAPACITY</span>
              <span className="stat-card-value">1–2 Members (Solo/Duo)</span>
              <span style={{ fontSize: "0.78rem", color: "#cbd5e1" }}>Cap: 30 Teams (No Mid-Eval)</span>
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

        {/* Tab Panels */}
        <div className="civil-panel">
          {activeTab === "overview" && (
            <div className="civil-panel">
              <div className="civil-section-box chamfer-box">
                <h2 className="civil-section-title">ABOUT QUANTUMANIA</h2>
                <p className="civil-paragraph">
                  Quantumania is NIRMIT 2.0&apos;s ultimate tech quiz championship. Compete in teams of 1 to 2 members through 3 competitive stages: preliminary MCQ rounds, rapid-fire buzzer rounds, and grand final stage battles.
                </p>
              </div>

              <div className="civil-grid-two">
                <div className="civil-info-card chamfer-box">
                  <h3>👥 Team & Fee Specs</h3>
                  <ul>
                    <li><strong>Team Size:</strong> 1 to 2 Members per Team (Duo/Solo).</li>
                    <li><strong>Capacity:</strong> 30 Teams Maximum.</li>
                    <li><strong>Registration Fee:</strong> ₹200 per Team.</li>
                    <li><strong>Mid-Evaluation:</strong> NO Online Mid-Eval.</li>
                  </ul>
                </div>

                <div className="civil-info-card chamfer-box">
                  <h3>🏆 Prize Pool Breakdown (₹10,000)</h3>
                  <ul>
                    <li><strong>🥇 1st Quiz Master:</strong> ₹5,000 + Winner Trophy</li>
                    <li><strong>🥈 2nd Runner-up:</strong> ₹3,000 + Certificate</li>
                    <li><strong>🥉 3rd Runner-up:</strong> ₹2,000 + Certificate</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div className="civil-panel">
              <div className="civil-section-box chamfer-box">
                <h2 className="civil-section-title">STAGE TIMELINE</h2>
                <div className="civil-timeline-list">
                  <div className="timeline-item chamfer-box">
                    <div className="timeline-time">09:30 AM – 10:00 AM</div>
                    <div className="timeline-content">
                      <h4>Phase 1: Team Desk Check-in & ID Verification</h4>
                      <p>Check-in at Central Library Reading Room desk.</p>
                    </div>
                  </div>

                  <div className="timeline-item chamfer-box">
                    <div className="timeline-time">10:00 AM – 11:00 AM</div>
                    <div className="timeline-content">
                      <h4>Phase 2: Round 1 — Preliminary Written MCQ Test</h4>
                      <p>Written/digital preliminary elimination test for 30 Teams.</p>
                    </div>
                  </div>

                  <div className="timeline-item chamfer-box">
                    <div className="timeline-time">11:15 AM – 12:00 PM</div>
                    <div className="timeline-content">
                      <h4>Phase 3: Round 2 & 3 — Stage Buzzer Final</h4>
                      <p>Stage Buzzer Final & Winner Felicitation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "rules" && (
            <div className="civil-panel">
              <div className="civil-section-box chamfer-box">
                <h2 className="civil-section-title">RULES & CODE OF CONDUCT</h2>
                <ul className="civil-rules-list">
                  <li>Stage 1 consists of a written/digital preliminary elimination test for all 30 registered teams.</li>
                  <li>Top scoring teams advance to the stage buzzer and rapid-fire final rounds.</li>
                  <li>Use of smartphones or smartwatch devices during quiz rounds is strictly forbidden.</li>
                  <li>Quizmaster&apos;s decisions regarding answers and scoring are final and absolute.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "coordinators" && (
            <div className="civil-panel">
              <div className="civil-section-box chamfer-box" style={{ marginBottom: "32px" }}>
                <h2 className="civil-section-title">FACULTY INCHARGE & CONVENORS</h2>
                <div className="civil-leads-grid">
                  {["Chanchal Mukherjee", "Neeha Pradhani", "Sangram Behera"].map((lead, idx) => (
                    <div key={idx} className="lead-card chamfer-box">
                      <div className="lead-avatar">FC</div>
                      <div className="lead-name">{lead}</div>
                      <div className="lead-role">Faculty Convenor</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="civil-section-box chamfer-box">
                <h2 className="civil-section-title">STUDENT LEADS & CONTACT NUMBERS</h2>
                <div className="civil-leads-grid">
                  <div className="lead-card chamfer-box">
                    <div className="lead-avatar">DN</div>
                    <div className="lead-name">Dibyanshu Nayak</div>
                    <div className="lead-role">Student Lead • B.Tech Mech (4th Sem)</div>
                    <a href="tel:+917077188155" style={{ color: "#cbd5e1", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", marginTop: "6px", display: "inline-block" }}>📞 +91 70771 88155</a>
                  </div>

                  <div className="lead-card chamfer-box">
                    <div className="lead-avatar">TM</div>
                    <div className="lead-name">Tapaswini Mishra</div>
                    <div className="lead-role">Student Lead • B.Tech CSE (3rd Sem)</div>
                    <a href="tel:+919861296488" style={{ color: "#cbd5e1", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", marginTop: "6px", display: "inline-block" }}>📞 +91 98612 96488</a>
                  </div>

                  <div className="lead-card chamfer-box">
                    <div className="lead-avatar">PM</div>
                    <div className="lead-name">Prabhudutta Mohanty</div>
                    <div className="lead-role">Student Lead • MBA</div>
                    <a href="tel:+918260948235" style={{ color: "#cbd5e1", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", marginTop: "6px", display: "inline-block" }}>📞 +91 82609 48235</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Footer */}
        <div className="civil-cta-footer chamfer-box">
          <div className="cta-content">
            <h3>READY TO PROVE YOUR TECH IQ?</h3>
            <p>Fee: ₹200/Team • Prize Pool: ₹10,000. Secure your slot before the 30-team cap is reached.</p>
          </div>
          <div className="cta-buttons">
            <button
              onClick={() => openModal("quantumania")}
              className="civil-register-btn"
              style={{ cursor: "pointer", border: "none", display: "inline-flex" }}
            >
              REGISTRATION OPENS 5TH SEPT 🔒
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
