"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "../../components/Footer";
import { useRegistrationModal } from "../../components/RegistrationModal";

export default function GuardiansOfGroovePage() {
  const [activeTab, setActiveTab] = useState<"overview" | "schedule" | "rules" | "coordinators">("overview");
  const { openModal } = useRegistrationModal();

  return (
    <main className="civil-page-container">
      {/* Background Image + Vignette Overlay */}
      <div className="civil-page-bg">
        <Image
          src="/groove-bg.webp"
          alt="Guardians of the Groove Background"
          fill
          priority
          unoptimized
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="civil-page-bg-overlay" />
      </div>

      {/* Hero Bottom-Left Character */}
      <div className="civil-corner-left">
        <Image
          src="/groove-bottom-left.webp"
          alt="Guardians Character Bottom Left"
          width={500}
          height={500}
          unoptimized
          style={{ objectFit: "contain", objectPosition: "bottom left" }}
        />
      </div>

      {/* Hero Top-Right Character */}
      <div className="civil-corner-right">
        <Image
          src="/groove-top-right.webp"
          alt="Guardians Character Top Right"
          width={520}
          height={520}
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
          (06 / 14) /// TECHNO DANCE BATTLE • CULTURAL SHOWDOWN
        </div>

        <h1 className="civil-main-title">
          GUARDIANS OF THE GROOVE
        </h1>

        <p className="civil-subtitle">
          High-octane cyber dance battle fusing futuristic robotics choreography, synth-techno beats, laser sync lighting, and sci-fi aesthetic.
        </p>

        {/* Quick Parameters Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">💰</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">ENTRY FEE & PRIZE</span>
              <span className="stat-card-value" style={{ color: "#e2e8f0" }}>₹18,000 Total</span>
              <span style={{ fontSize: "0.78rem", color: "#cbd5e1" }}>Fee: ₹1,000 / Team</span>
            </div>
          </div>

          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">📅</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">EVENT DATE & TIME</span>
              <span className="stat-card-value" style={{ color: "#e2e8f0" }}>12 October 2026</span>
              <span style={{ fontSize: "0.78rem", color: "rgba(241,245,249,0.8)" }}>Report: 9:00 AM (10 AM - 8 PM)</span>
            </div>
          </div>

          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">📍</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">MAIN STAGE VENUE</span>
              <span className="stat-card-value">Auditorium, MBA Block</span>
              <span style={{ fontSize: "0.78rem", color: "rgba(241,245,249,0.7)" }}>NMIET Campus Stage</span>
            </div>
          </div>

          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">👥</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">FORMAT & CAPACITY</span>
              <span className="stat-card-value">5–10 Members / Crew</span>
              <span style={{ fontSize: "0.78rem", color: "#cbd5e1" }}>Cap: 15 Teams (Mid-Eval Req.)</span>
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
            TIMELINE & MID-EVAL
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
                <h2 className="civil-section-title">ABOUT GUARDIANS OF THE GROOVE</h2>
                <p className="civil-paragraph">
                  Guardians of the Groove is NIRMIT 2.0&apos;s flagship cyber-cultural dance championship. Dancers bring energy, synth-techno synchronization, and sci-fi aesthetic to the grand auditorium stage.
                </p>
              </div>

              <div className="civil-grid-two">
                <div className="civil-info-card chamfer-box">
                  <h3>👥 Team & Fee Specs</h3>
                  <ul>
                    <li><strong>Team Size:</strong> 5 to 10 Members per Team.</li>
                    <li><strong>Institute:</strong> Inter-college allowed (No cross-college mix).</li>
                    <li><strong>Registration Fee:</strong> ₹1,000 per Team.</li>
                    <li><strong>Capacity:</strong> 15 Teams Maximum.</li>
                  </ul>
                </div>

                <div className="civil-info-card chamfer-box">
                  <h3>🏆 Prize Pool Breakdown (₹18,000)</h3>
                  <ul>
                    <li><strong>🥇 1st Winner:</strong> ₹10,000 + Trophy</li>
                    <li><strong>🥈 2nd Winner:</strong> ₹5,000 + Certificate</li>
                    <li><strong>🥉 3rd Winner:</strong> ₹3,000 + Certificate</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div className="civil-panel">
              <div className="civil-section-box chamfer-box">
                <h2 className="civil-section-title">STAGE TIMELINE & MID-EVALUATION</h2>
                <div className="civil-timeline-list">
                  <div className="timeline-item chamfer-box">
                    <div className="timeline-time" style={{ color: "#cbd5e1" }}>STAGE 1: ONLINE MID-EVALUATION</div>
                    <div className="timeline-content">
                      <h4>Mandatory Pre-Screening Submission</h4>
                      <p>Mandatory submission of team dance preview video link embedded in the official registration form.</p>
                    </div>
                  </div>

                  <div className="timeline-item chamfer-box">
                    <div className="timeline-time">09:00 AM – 10:00 AM</div>
                    <div className="timeline-content">
                      <h4>Phase 1: Check-in & Audio Track Submission</h4>
                      <p>Check-in & Audio Track Submission (MP3 format) at MBA Block Auditorium desk.</p>
                    </div>
                  </div>

                  <div className="timeline-item chamfer-box">
                    <div className="timeline-time">10:00 AM – 08:00 PM</div>
                    <div className="timeline-content">
                      <h4>Phase 2: Main Stage Techno Dance Battle</h4>
                      <p>Main Stage Techno Dance Battle, Judging & Grand Winner Felicitation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "rules" && (
            <div className="civil-panel">
              <div className="civil-section-box chamfer-box">
                <h2 className="civil-section-title">RULES & JUDGING METRICS</h2>
                <ul className="civil-rules-list">
                  <li>All team members must belong to the same institute (No cross-college team mix allowed).</li>
                  <li>Maximum stage performance duration is 10 minutes (including stage setup and clearance).</li>
                  <li>Audio tracks must be submitted in MP3 format to the sound console at least 2 hours prior to performance.</li>
                  <li>Fire, water, or hazardous stage props are strictly prohibited for safety compliance.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "coordinators" && (
            <div className="civil-panel">
              <div className="civil-section-box chamfer-box" style={{ marginBottom: "32px" }}>
                <h2 className="civil-section-title">FACULTY INCHARGE & CONVENORS</h2>
                <div className="civil-leads-grid">
                  {["Saroj Sir", "Sushree Sucharita Kar"].map((lead, idx) => (
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
                    <div className="lead-avatar">RD</div>
                    <div className="lead-name">Rachita Das</div>
                    <div className="lead-role">Student Lead • B.Tech CSE (3rd Yr)</div>
                    <a href="tel:+918984391077" style={{ color: "#cbd5e1", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", marginTop: "6px", display: "inline-block" }}>📞 +91 89843 91077</a>
                  </div>

                  <div className="lead-card chamfer-box">
                    <div className="lead-avatar">SJ</div>
                    <div className="lead-name">Subhranshu Sekhar Jena</div>
                    <div className="lead-role">Student Lead • MBA (2nd Sem)</div>
                    <a href="tel:+918093569907" style={{ color: "#cbd5e1", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", marginTop: "6px", display: "inline-block" }}>📞 +91 80935 69907</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Footer */}
        <div className="civil-cta-footer chamfer-box">
          <div className="cta-content">
            <h3>READY TO OWN THE CYBER STAGE?</h3>
            <p>Fee: ₹1,000/Team • Prize Pool: ₹18,000. Secure your squad's slot among the 15 performance crews.</p>
          </div>
          <div className="cta-buttons">
            <button
              onClick={() => openModal("groove")}
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
