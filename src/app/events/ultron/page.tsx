"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRegistrationModal } from "../../components/RegistrationModal";

export default function UltronEventPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "rules" | "schedule" | "coordinators">("overview");
  const { openModal } = useRegistrationModal();

  return (
    <main className="civil-page-container">
      {/* Metallic Ultron Background Image + Overlay */}
      <div className="civil-page-bg">
        <Image
          src="/ultron-bg.webp"
          alt="Project Ultron Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="civil-page-bg-overlay" />
      </div>

      {/* Hero Corner Ultron Characters */}
      <div className="civil-corner-left">
        <Image
          src="/ultron-left.webp"
          alt="Ultron Left Hero"
          width={580}
          height={580}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="civil-corner-right">
        <Image
          src="/ultron-right.webp"
          alt="Ultron Right Hero"
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
        <div className="civil-header-badge">(02 / 14) /// IOT DISPLAY EXHIBITION</div>
        <h1 className="civil-main-title">PROJECT ULTRON</h1>
        <p className="civil-subtitle">
          No strings attached. Smart connected systems, industrial automation, and next-gen IoT exhibitions.
        </p>

        {/* Quick Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">💰</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">ENTRY FEE & PRIZE</span>
              <span className="stat-card-value" style={{ color: "#e2e8f0" }}>₹10,000 Total</span>
              <span style={{ fontSize: "0.78rem", color: "#cbd5e1" }}>Fee: ₹300 / Participant</span>
            </div>
          </div>

          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">📅</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">EVENT DATE & TIME</span>
              <span className="stat-card-value" style={{ color: "#e2e8f0" }}>11 October 2026</span>
              <span style={{ fontSize: "0.78rem", color: "rgba(241,245,249,0.8)" }}>Report: 1:30 PM (2 PM - 5 PM)</span>
            </div>
          </div>

          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">📍</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">VENUE LOCATION</span>
              <span className="stat-card-value">Electrical Block Hallway</span>
              <span style={{ fontSize: "0.78rem", color: "rgba(241,245,249,0.7)" }}>NMIET Exhibition Hall</span>
            </div>
          </div>

          <div className="civil-stat-card chamfer-box">
            <span className="civil-stat-icon">👥</span>
            <div className="civil-stat-info">
              <span className="stat-card-label">FORMAT & CAPACITY</span>
              <span className="stat-card-value">1–3 Members / Team</span>
              <span style={{ fontSize: "0.78rem", color: "#cbd5e1" }}>Cap: 20 Teams (Mid-Eval Req.)</span>
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
            RULES & CRITERIA
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
              <h2 className="civil-section-title">ABOUT THE EXHIBITION</h2>
              <p className="civil-paragraph">
                Project Ultron is NIRMIT&apos;s flagship IoT & Connected Devices Exhibition. Innovators, hardware engineers, and automation enthusiasts demonstrate real-world IoT applications, sensor networks, robotics integration, and smart systems.
              </p>
              <p className="civil-paragraph">
                Exhibitors present live working prototypes to visiting industry experts, faculty evaluation panels, and festival attendees along the Electrical Block Hallway.
              </p>
            </div>

            <div className="civil-grid-two">
              <div className="civil-info-card chamfer-box">
                <h3>👥 Team Requirements & Fee</h3>
                <ul>
                  <li><strong>Team Size:</strong> 1 to 3 Members per Team.</li>
                  <li><strong>Exhibition Cap:</strong> 20 Teams Maximum.</li>
                  <li><strong>Participation Fee:</strong> ₹300 per Participant.</li>
                  <li><strong>Mid-Evaluation:</strong> YES (Mandatory PPT + Explanation + Working Video link in form).</li>
                </ul>
              </div>

              <div className="civil-info-card chamfer-box">
                <h3>🏆 Prize Pool Breakdown (₹10,000 Total)</h3>
                <ul>
                  <li><strong>🥇 1st Prize:</strong> ₹5,000 + Winner Trophy</li>
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
                <div className="timeline-time" style={{ color: "#cbd5e1" }}>STAGE 1: ONLINE MID-EVALUATION</div>
                <div className="timeline-content">
                  <h4>Mandatory Pre-Screening Submission</h4>
                  <p>Submission of Project PPT Deck, technical architecture summary, and a working demonstration video link embedded inside the official registration form.</p>
                </div>
              </div>

              <div className="timeline-item chamfer-box">
                <div className="timeline-time">01:30 PM – 02:00 PM</div>
                <div className="timeline-content">
                  <h4>Phase 1: Reporting & Stall Setup</h4>
                  <p>Stall allocation at Electrical Block Hallway. Hardware assembly, power supply connections, Wi-Fi pairing, and pre-exhibition functional testing.</p>
                </div>
              </div>

              <div className="timeline-item chamfer-box">
                <div className="timeline-time">02:00 PM – 03:30 PM</div>
                <div className="timeline-content">
                  <h4>Phase 2: Live Public Exhibition & Visitor Interaction</h4>
                  <p>Exhibition doors open for students, faculty, and visiting delegations. Live prototype demonstrations and Q&A sessions.</p>
                </div>
              </div>

              <div className="timeline-item chamfer-box">
                <div className="timeline-time">03:30 PM – 05:00 PM</div>
                <div className="timeline-content">
                  <h4>Phase 3: Jury Evaluation & Award Ceremony</h4>
                  <p>Official evaluation panel reviews live hardware telemetry, circuit design, cloud integration, and felicitates top winning projects.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Panel 3: Rules & Criteria */}
        {activeTab === "rules" && (
          <div className="civil-panel">
            <div className="civil-section-box chamfer-box">
              <h2 className="civil-section-title">EXHIBITION GUIDELINES</h2>
              <ul className="civil-rules-list">
                <li><strong>Working Prototype Required:</strong> All shortlisted teams must demonstrate a functional hardware prototype (microcontrollers, sensors, actuators, or IoT gateways).</li>
                <li><strong>Poster & Architecture Display:</strong> Stalls must display a technical project poster (A2/A1 size) detailing problem statement, block diagram, and circuit schematics.</li>
                <li><strong>Power Supply:</strong> Dual power extension points are provided at each stall; teams must bring their micro-USB/Type-C power adapters and jumper kits.</li>
                <li><strong>Safety Standards:</strong> Hazardous chemical or unshielded high-voltage components are strictly prohibited for safety compliance.</li>
              </ul>
            </div>

            <div className="civil-section-box chamfer-box">
              <h2 className="civil-section-title">JUDGEMENT METRICS</h2>
              <div className="civil-metrics-grid">
                <div className="metric-box chamfer-box">
                  <span className="metric-score">35%</span>
                  <span className="metric-label">Innovation & Problem Solving</span>
                </div>
                <div className="metric-box chamfer-box">
                  <span className="metric-score">30%</span>
                  <span className="metric-label">Hardware & Circuit Execution</span>
                </div>
                <div className="metric-box chamfer-box">
                  <span className="metric-score">20%</span>
                  <span className="metric-label">Cloud/Telemetry Integration</span>
                </div>
                <div className="metric-box chamfer-box">
                  <span className="metric-score">15%</span>
                  <span className="metric-label">Presentation & Pitch</span>
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
                  <div className="lead-avatar">JP</div>
                  <div className="lead-name">Jitendra Padhi</div>
                  <div className="lead-role">Faculty Convenor</div>
                </div>

                <div className="lead-card chamfer-box">
                  <div className="lead-avatar">BD</div>
                  <div className="lead-name">Bhagyalaxmi Devi</div>
                  <div className="lead-role">Faculty Convenor</div>
                </div>

                <div className="lead-card chamfer-box">
                  <div className="lead-avatar">PR</div>
                  <div className="lead-name">Pranaya Rout</div>
                  <div className="lead-role">Faculty Convenor</div>
                </div>
              </div>
            </div>

            <div className="civil-section-box chamfer-box">
              <h2 className="civil-section-title">STUDENT LEADS & CONTACT NUMBERS</h2>
              <div className="civil-leads-grid">
                <div className="lead-card chamfer-box">
                  <div className="lead-avatar">SP</div>
                  <div className="lead-name">Subhasree Panda</div>
                  <div className="lead-role">Student Lead • B.Tech CSE (7th Sem)</div>
                  <a href="tel:+919123987837" style={{ color: "#cbd5e1", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", marginTop: "4px", display: "inline-block" }}>📞 +91 91239 87837</a>
                </div>

                <div className="lead-card chamfer-box">
                  <div className="lead-avatar">VP</div>
                  <div className="lead-name">Vaswati P. Mohanty</div>
                  <div className="lead-role">Student Lead • B.Tech CSE (7th Sem)</div>
                  <a href="tel:+917608911996" style={{ color: "#cbd5e1", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", marginTop: "4px", display: "inline-block" }}>📞 +91 76089 11996</a>
                </div>

                <div className="lead-card chamfer-box">
                  <div className="lead-avatar">JD</div>
                  <div className="lead-name">Jaga Das</div>
                  <div className="lead-role">Student Lead • BCA (4th Sem)</div>
                  <a href="tel:+918984726731" style={{ color: "#cbd5e1", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", marginTop: "4px", display: "inline-block" }}>📞 +91 89847 26731</a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Call to Action Footer */}
        <div className="civil-cta-footer chamfer-box">
          <div className="cta-content">
            <h3>SHOWCASE YOUR IOT INNOVATION AT ULTRON</h3>
            <p>Fee: ₹300/Participant • Prize Pool: ₹10,000. Submit your online mid-evaluation video to lock in your booth.</p>
          </div>
          <div className="cta-buttons">
            <button onClick={() => openModal("ultron")} className="civil-register-btn" style={{ cursor: "pointer", border: "none", display: "inline-flex" }}>
              REGISTRATION OPENS 5TH SEPT 🔒
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
