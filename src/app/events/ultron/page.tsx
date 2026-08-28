"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function UltronEventPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "rules" | "schedule" | "coordinators">("overview");

  return (
    <main className="ultron-page-container">
      {/* Metallic Ultron Background Image + Overlay */}
      <div className="ultron-page-bg">
        <Image
          src="/ultron-bg.webp"
          alt="Project Ultron Background"
          fill
          priority
          unoptimized
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="ultron-page-bg-overlay" />
      </div>

      {/* Hero Corner Ultron Characters */}
      <div className="ultron-corner-left">
        <Image
          src="/ultron-left.webp"
          alt="Ultron Left Hero"
          width={580}
          height={580}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="ultron-corner-right">
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
      <header className="ultron-nav-header">
        <Link href="/#events" className="ultron-back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>BACK TO EVENTS</span>
        </Link>
        <div className="ultron-nav-title">NIRMIT 2026</div>
      </header>

      {/* Main Content Area */}
      <div className="ultron-content-wrapper">
        {/* Event Header Badge & Title */}
        <div className="ultron-header-badge">(02 / 14) /// IOT DISPLAY EXHIBITION</div>
        <h1 className="ultron-main-title">PROJECT ULTRON</h1>
        <p className="ultron-subtitle">
          No strings attached. Smart connected systems, industrial automation, and next-gen IoT exhibitions.
        </p>

        {/* Quick Stats Grid */}
        <div className="ultron-stats-grid">
          <div className="ultron-stat-card">
            <span className="ultron-stat-icon">📅</span>
            <div className="ultron-stat-info">
              <span className="stat-card-label">EVENT DATE</span>
              <span className="stat-card-value">7 October 2026</span>
            </div>
          </div>

          <div className="ultron-stat-card">
            <span className="ultron-stat-icon">⏰</span>
            <div className="ultron-stat-info">
              <span className="stat-card-label">REPORTING TIME</span>
              <span className="stat-card-value">12:00 PM – 1:00 PM</span>
            </div>
          </div>

          <div className="ultron-stat-card">
            <span className="ultron-stat-icon">⏱️</span>
            <div className="ultron-stat-info">
              <span className="stat-card-label">EXHIBITION TIME</span>
              <span className="stat-card-value">2:00 PM – 5:00 PM</span>
            </div>
          </div>

          <div className="ultron-stat-card">
            <span className="ultron-stat-icon">📍</span>
            <div className="ultron-stat-info">
              <span className="stat-card-label">EXHIBITION VENUE</span>
              <span className="stat-card-value">Electrical Block Hallway</span>
            </div>
          </div>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="ultron-tabs">
          <button
            className={`ultron-tab-btn ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            OVERVIEW
          </button>
          <button
            className={`ultron-tab-btn ${activeTab === "schedule" ? "active" : ""}`}
            onClick={() => setActiveTab("schedule")}
          >
            TIMELINE & STAGES
          </button>
          <button
            className={`ultron-tab-btn ${activeTab === "rules" ? "active" : ""}`}
            onClick={() => setActiveTab("rules")}
          >
            RULES & CRITERIA
          </button>
          <button
            className={`ultron-tab-btn ${activeTab === "coordinators" ? "active" : ""}`}
            onClick={() => setActiveTab("coordinators")}
          >
            FACULTY LEADS
          </button>
        </div>

        {/* Tab Panel 1: Overview */}
        {activeTab === "overview" && (
          <div className="ultron-panel">
            <div className="ultron-section-box">
              <h2 className="ultron-section-title">ABOUT THE EXHIBITION</h2>
              <p className="ultron-paragraph">
                Project Ultron is NIRMIT&apos;s flagship IoT & Connected Devices Exhibition. Innovators, hardware engineers, and automation enthusiasts demonstrate real-world IoT applications, sensor networks, robotics integration, and smart systems.
              </p>
              <p className="ultron-paragraph">
                Exhibitors present live working prototypes to visiting industry experts, faculty evaluation panels, and festival attendees along the Electrical Block Hallway.
              </p>
            </div>

            <div className="ultron-grid-two">
              <div className="ultron-info-card">
                <h3>🛠️ Project Categories</h3>
                <ul>
                  <li>Smart City & Home Automation Systems.</li>
                  <li>Industrial IoT (IIoT) & Telemetry Monitoring.</li>
                  <li>Healthcare & Wearable Biomedical Devices.</li>
                  <li>Agricultural Sensors & Environmental Robotics.</li>
                </ul>
              </div>

              <div className="ultron-info-card">
                <h3>🏆 Awards & Recognition</h3>
                <ul>
                  <li>Most Innovative Project Trophy & Cash Prize.</li>
                  <li>Best Hardware Execution & Best Pitch Awards.</li>
                  <li>Official Certificate of Excellence for Top Exhibitors.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab Panel 2: Timeline & Stages */}
        {activeTab === "schedule" && (
          <div className="ultron-panel">
            <div className="ultron-timeline-list">
              <div className="timeline-item">
                <div className="timeline-time">12:00 PM – 01:00 PM</div>
                <div className="timeline-content">
                  <h4>Phase 1: Reporting & Stall Setup</h4>
                  <p>Stall allocation at Electrical Block Hallway. Hardware assembly, power supply connections, Wi-Fi pairing, and pre-exhibition functional testing.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">02:00 PM – 03:30 PM</div>
                <div className="timeline-content">
                  <h4>Phase 2: Live Public Exhibition & Visitor Interaction</h4>
                  <p>Exhibition doors open for students, faculty, and visiting delegations. Live prototype demonstrations and Q&A sessions.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">03:30 PM – 04:30 PM</div>
                <div className="timeline-content">
                  <h4>Phase 3: Jury Evaluation & Technical Assessment</h4>
                  <p>Official evaluation panel reviews live hardware telemetry, circuit design, cloud integration, and commercial scalability.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">04:30 PM – 05:00 PM</div>
                <div className="timeline-content">
                  <h4>Phase 4: Award Ceremony & Felicitation</h4>
                  <p>Felicitation of winners, presentation of trophies, and closing remarks by the Department of Electrical Engineering.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Panel 3: Rules & Criteria */}
        {activeTab === "rules" && (
          <div className="ultron-panel">
            <div className="ultron-section-box">
              <h2 className="ultron-section-title">EXHIBITION GUIDELINES</h2>
              <ul className="ultron-rules-list">
                <li><strong>Working Prototype Required:</strong> All teams must demonstrate a functional hardware prototype (microcontrollers, sensors, actuators, or IoT gateways).</li>
                <li><strong>Poster & Banner:</strong> Stalls must display an A1 technical poster detailing problem statement, block diagram, components, and circuit schematic.</li>
                <li><strong>Safety Standards:</strong> High voltage or hazardous chemical setups require prior safety clearance from faculty leads.</li>
                <li><strong>Power Supply:</strong> 220V AC extension points will be provided; teams must bring their own micro-USB/Type-C power adapters and jumper wire kits.</li>
              </ul>
            </div>

            <div className="ultron-section-box">
              <h2 className="ultron-section-title">JUDGEMENT METRICS</h2>
              <div className="ultron-metrics-grid">
                <div className="metric-box">
                  <span className="metric-score">35%</span>
                  <span className="metric-label">Innovation & Problem Solving</span>
                </div>
                <div className="metric-box">
                  <span className="metric-score">30%</span>
                  <span className="metric-label">Hardware & Circuit Execution</span>
                </div>
                <div className="metric-box">
                  <span className="metric-score">20%</span>
                  <span className="metric-label">Cloud/App Integration</span>
                </div>
                <div className="metric-box">
                  <span className="metric-score">15%</span>
                  <span className="metric-label">Presentation & Pitch</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Panel 4: Faculty Leads */}
        {activeTab === "coordinators" && (
          <div className="ultron-panel">
            <div className="ultron-section-box">
              <h2 className="ultron-section-title">FACULTY LEADS & ORGANIZERS</h2>
              <div className="ultron-leads-grid">
                <div className="lead-card">
                  <div className="lead-avatar">JP</div>
                  <div className="lead-name">Jitendra Padhi</div>
                  <div className="lead-role">Faculty Lead Coordinator</div>
                  <div className="lead-dept">IoT & Embedded Systems</div>
                </div>

                <div className="lead-card">
                  <div className="lead-avatar">BD</div>
                  <div className="lead-name">Bhagyalaxmi Devi</div>
                  <div className="lead-role">Faculty Co-Lead</div>
                  <div className="lead-dept">Electrical & Automation</div>
                </div>

                <div className="lead-card">
                  <div className="lead-avatar">PR</div>
                  <div className="lead-name">Pranaya Rout</div>
                  <div className="lead-role">Faculty Co-Lead</div>
                  <div className="lead-dept">Exhibition Logistics</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Call to Action Footer */}
        <div className="ultron-cta-footer">
          <div className="cta-content">
            <h3>SHOWCASE YOUR IOT INNOVATION AT ULTRON</h3>
            <p>Register your hardware prototype for Project Ultron at Electrical Block Hallway.</p>
          </div>
          <div className="cta-buttons">
            <a href="/#register" className="ultron-register-btn">
              REGISTER FOR PROJECT ULTRON →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
