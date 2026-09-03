"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getRegistrationUrl } from "../../data/registrationLinks";

export default function FalconStrikePage() {
  const [activeTab, setActiveTab] = useState<"overview" | "rules" | "schedule" | "coordinators">("overview");

  return (
    <main className="falcon-page-container">
      {/* Background Image + Vignette Overlay */}
      <div className="falcon-page-bg">
        <Image
          src="/events-bg.webp"
          alt="Falcon Strike Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="falcon-page-bg-overlay" />
      </div>

      {/* Hero Corner Falcons */}
      <div className="falcon-corner-left">
        <Image
          src="/falcon-left.webp"
          alt="Falcon Hero Left"
          width={540}
          height={540}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="falcon-corner-right">
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
      <header className="falcon-nav-header">
        <Link href="/#events" className="falcon-back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>BACK TO EVENTS</span>
        </Link>
        <div className="falcon-nav-title">NIRMIT 2026</div>
      </header>

      {/* Main Content Area */}
      <div className="falcon-content-wrapper">
        {/* Event Header Badge & Title */}
        <div className="falcon-header-badge">(01 / 14) /// DRONE OBSTACLE COURSE</div>
        <h1 className="falcon-main-title">FALCON STRIKE</h1>
        <p className="falcon-subtitle">
          Master the skies. Conquer the obstacles. Precision drone navigation at terminal velocity.
        </p>

        {/* Quick Stats Grid */}
        <div className="falcon-stats-grid">
          <div className="falcon-stat-card">
            <span className="falcon-stat-icon">📅</span>
            <div className="falcon-stat-info">
              <span className="stat-card-label">EVENT DATE</span>
              <span className="stat-card-value">To Be Revealed</span>
            </div>
          </div>

          <div className="falcon-stat-card">
            <span className="falcon-stat-icon">⏰</span>
            <div className="falcon-stat-info">
              <span className="stat-card-label">REPORTING TIME</span>
              <span className="stat-card-value">7:00 AM – 8:00 AM</span>
            </div>
          </div>

          <div className="falcon-stat-card">
            <span className="falcon-stat-icon">⏱️</span>
            <div className="falcon-stat-info">
              <span className="stat-card-label">EVENT TIME</span>
              <span className="stat-card-value">8:00 AM – 1:00 PM</span>
            </div>
          </div>

          <div className="falcon-stat-card">
            <span className="falcon-stat-icon">📍</span>
            <div className="falcon-stat-info">
              <span className="stat-card-label">LOCATION VENUE</span>
              <span className="stat-card-value">Football Ground</span>
            </div>
          </div>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="falcon-tabs">
          <button
            className={`falcon-tab-btn ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            OVERVIEW
          </button>
          <button
            className={`falcon-tab-btn ${activeTab === "schedule" ? "active" : ""}`}
            onClick={() => setActiveTab("schedule")}
          >
            TIMELINE & STAGES
          </button>
          <button
            className={`falcon-tab-btn ${activeTab === "rules" ? "active" : ""}`}
            onClick={() => setActiveTab("rules")}
          >
            RULES & EVALUATION
          </button>
          <button
            className={`falcon-tab-btn ${activeTab === "coordinators" ? "active" : ""}`}
            onClick={() => setActiveTab("coordinators")}
          >
            FACULTY LEADS
          </button>
        </div>

        {/* Tab Panel 1: Overview */}
        {activeTab === "overview" && (
          <div className="falcon-panel">
            <div className="falcon-section-box">
              <h2 className="falcon-section-title">ABOUT THE COMPETITION</h2>
              <p className="falcon-paragraph">
                Falcon Strike is NIRMIT&apos;s premier aerial showdown designed to test practical drone navigation, pilot precision, reaction time, elevation control, and emergency tactical maneuvers through a custom-engineered outdoor obstacle track.
              </p>
              <p className="falcon-paragraph">
                Pilots will navigate tight hoop rings, elevation tunnels, high-speed slalom pylons, and precision drop zones while battling weather conditions and timed laps at NIRMIT Football Ground.
              </p>
            </div>

            <div className="falcon-grid-two">
              <div className="falcon-info-card">
                <h3>👥 Team Requirements</h3>
                <ul>
                  <li>1 to 4 Members per Team (1 Chief Pilot + Co-piloting Technicians).</li>
                  <li>Open to all registered undergraduate & postgraduate students.</li>
                  <li>Teams can register custom-built or standard quadcopters/FPV drones.</li>
                </ul>
              </div>

              <div className="falcon-info-card">
                <h3>🏆 Awards & Recognition</h3>
                <ul>
                  <li>Winner Trophy & Cash Prize for Top Air Master.</li>
                  <li>Runner-up Trophies & Excellence Certificates.</li>
                  <li>Official Certificate of Participation for all registered pilot crews.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab Panel 2: Timeline & Stages */}
        {activeTab === "schedule" && (
          <div className="falcon-panel">
            <div className="falcon-timeline-list">
              <div className="timeline-item">
                <div className="timeline-time">07:00 AM – 08:00 AM</div>
                <div className="timeline-content">
                  <h4>Phase 1: Reporting & Technical Pre-Flight Check</h4>
                  <p>Reporting at Football Ground. Registration verification, RF frequency assignment, and drone safety inspection (propeller guards, battery telemetry, fail-safe cutoffs).</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">08:00 AM – 10:15 AM</div>
                <div className="timeline-content">
                  <h4>Phase 2: Round 1 — Precision Gate Run</h4>
                  <p>Controlled maneuvering through 8 illuminated hoops and elevation rings. Evaluation based on lap completion time and gate accuracy.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">10:30 AM – 12:00 PM</div>
                <div className="timeline-content">
                  <h4>Phase 3: Round 2 — Tactical Slalom & Tunnel Navigation</h4>
                  <p>High-speed slalom around pylons and precision tunnel traversal under simulated obstacles.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">12:00 PM – 01:00 PM</div>
                <div className="timeline-content">
                  <h4>Phase 4: Championship Air Final & Award Ceremony</h4>
                  <p>Top 5 finalists compete in a thrilling timed obstacle finale followed by the official winner declaration.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Panel 3: Rules & Evaluation */}
        {activeTab === "rules" && (
          <div className="falcon-panel">
            <div className="falcon-section-box">
              <h2 className="falcon-section-title">RULES & GUIDELINES</h2>
              <ul className="falcon-rules-list">
                <li><strong>Pre-Flight Inspection:</strong> All drones must pass safety checks prior to takeoff. Loose propellers, damaged batteries, or missing safety guards will lead to disqualification.</li>
                <li><strong>Frequency Allocation:</strong> FPV pilots must operate strictly on assigned VTX/RF channels to prevent signal crossover.</li>
                <li><strong>Time Penalties:</strong> Touching an obstacle gate adds a +5 second penalty. Completely bypassing a gate adds a +15 second penalty.</li>
                <li><strong>Safety Protocol:</strong> Flying over designated spectator zones results in immediate safety disqualification. Pilot safety cutoffs must be functional.</li>
              </ul>
            </div>

            <div className="falcon-section-box">
              <h2 className="falcon-section-title">EVALUATION METRICS</h2>
              <div className="falcon-metrics-grid">
                <div className="metric-box">
                  <span className="metric-score">40%</span>
                  <span className="metric-label">Course Completion Speed</span>
                </div>
                <div className="metric-box">
                  <span className="metric-score">30%</span>
                  <span className="metric-label">Gate & Hoop Accuracy</span>
                </div>
                <div className="metric-box">
                  <span className="metric-score">20%</span>
                  <span className="metric-label">Flight Stability & Control</span>
                </div>
                <div className="metric-box">
                  <span className="metric-score">10%</span>
                  <span className="metric-label">Safety Compliance</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Panel 4: Faculty Leads */}
        {activeTab === "coordinators" && (
          <div className="falcon-panel">
            <div className="falcon-section-box">
              <h2 className="falcon-section-title">FACULTY LEADS & ORGANIZERS</h2>
              <div className="falcon-leads-grid">
                <div className="lead-card">
                  <div className="lead-avatar">SS</div>
                  <div className="lead-name">Santosh Sahu</div>
                  <div className="lead-role">Faculty Lead Coordinator</div>
                  <div className="lead-dept">Drone & Robotics Arena</div>
                </div>

                <div className="lead-card">
                  <div className="lead-avatar">JB</div>
                  <div className="lead-name">J. Binita</div>
                  <div className="lead-role">Faculty Co-Lead</div>
                  <div className="lead-dept">Technical & Event Management</div>
                </div>

                <div className="lead-card">
                  <div className="lead-avatar">SR</div>
                  <div className="lead-name">Sanjay Ray</div>
                  <div className="lead-role">Faculty Co-Lead</div>
                  <div className="lead-dept">Safety & Field Logistics</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Call to Action Footer */}
        <div className="falcon-cta-footer">
          <div className="cta-content">
            <h3>READY TO DOMINATE THE SKIES?</h3>
            <p>Register your pilot crew for Falcon Strike at Football Ground before slots fill up.</p>
          </div>
          <div className="cta-buttons">
            <a href={getRegistrationUrl("falcon-strike")} target="_blank" rel="noopener noreferrer" className="falcon-register-btn" style={{ cursor: "pointer", border: "none", textDecoration: "none", display: "inline-flex" }}>
              REGISTER FOR FALCON STRIKE →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
