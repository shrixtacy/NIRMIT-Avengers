"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "../../components/Footer";
import { getRegistrationUrl } from "../../data/registrationLinks";

export default function QuantumaniaPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "schedule" | "rules" | "coordinators">("overview");

  return (
    <main className="quantumania-page-container" style={{ minHeight: "100vh", background: "#040507", color: "#ffffff", position: "relative", overflowX: "hidden" }}>
      {/* Background Image + Vignette Overlay */}
      <div style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        <Image
          src="/quantumania-bg.webp"
          alt="Quantumania Background"
          fill
          priority
          unoptimized
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.4 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 15%, rgba(4,5,7,0.85) 75%, rgba(4,5,7,0.98) 100%)" }} />
      </div>

      {/* Hero Bottom-Left Character Overlay */}
      <div className="quantumania-hero-left" style={{ position: "fixed", bottom: "0px", left: "-60px", zIndex: 2, pointerEvents: "none", width: "clamp(120px, 13vw, 200px)", height: "clamp(120px, 13vw, 200px)", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.9))" }}>
        <Image
          src="/quantumania-bottom-left.webp"
          alt="Ant-Man Character Bottom Left"
          fill
          unoptimized
          style={{ objectFit: "contain", objectPosition: "bottom left" }}
        />
      </div>

      {/* Hero Top-Right Character Overlay */}
      <div className="quantumania-hero-right" style={{ position: "fixed", top: "70px", right: "40px", zIndex: 2, pointerEvents: "none", width: "420px", height: "420px", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.9))" }}>
        <Image
          src="/quantumania-top-right.webp"
          alt="Ant-Man Character Top Right"
          fill
          unoptimized
          style={{ objectFit: "contain", objectPosition: "top right" }}
        />
      </div>

      {/* Sticky Top Navigation Bar */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, backdropFilter: "blur(20px)", background: "rgba(10,12,16,0.85)", borderBottom: "1px solid rgba(255,255,255,0.12)", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/events" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(241,245,249,0.85)", textDecoration: "none", fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.85rem", fontWeight: 700 }}>
          ← BACK TO TRUMP CARDS
        </Link>
        <div style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "1.4rem", letterSpacing: "0.1em", color: "#f59e0b" }}>NIRMIT 2026</div>
      </header>

      {/* Main Content Container */}
      <div className="section-container" style={{ position: "relative", zIndex: 10, paddingTop: "120px", paddingBottom: "100px" }}>
        {/* Event Header Tag & Title */}
        <div style={{ marginBottom: "40px" }}>
          <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.82rem", fontWeight: 700, color: "#fbbf24", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            (07 / 14) /// TECH QUIZ CHAMPIONSHIP • ALGORITHMIC BRAIN WAR
          </span>

          <h1 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "clamp(3.5rem, 9vw, 7rem)", color: "#ffffff", letterSpacing: "0.04em", margin: "8px 0 16px 0", lineHeight: 0.88, filter: "drop-shadow(0 0 25px rgba(245,158,11,0.4))" }}>
            QUANTUMANIA
          </h1>

          <p style={{ fontSize: "1.2rem", color: "rgba(241,245,249,0.9)", maxWidth: "780px", lineHeight: "1.6" }}>
            Rapid-fire algorithmic & tech trivia battle testing knowledge on CS history, AI models, emerging hardware, and computer science breakthroughs.
          </p>
        </div>

        {/* Quick Parameters Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "50px" }}>
          <div style={{ background: "linear-gradient(135deg, rgba(180,83,9,0.35) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: "12px", padding: "20px", backdropFilter: "blur(12px)" }}>
            <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.6)", display: "block" }}>EVENT DATE</span>
            <strong style={{ fontSize: "1.1rem", color: "#ffffff", display: "block", marginTop: "4px" }}>To Be Revealed</strong>
          </div>

          <div style={{ background: "linear-gradient(135deg, rgba(180,83,9,0.35) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: "12px", padding: "20px", backdropFilter: "blur(12px)" }}>
            <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.6)", display: "block" }}>REPORTING TIME</span>
            <strong style={{ fontSize: "1.1rem", color: "#ffffff", display: "block", marginTop: "4px" }}>8:00 AM – 9:00 AM</strong>
          </div>

          <div style={{ background: "linear-gradient(135deg, rgba(180,83,9,0.35) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: "12px", padding: "20px", backdropFilter: "blur(12px)" }}>
            <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.6)", display: "block" }}>EVENT DURATION</span>
            <strong style={{ fontSize: "1.1rem", color: "#ffffff", display: "block", marginTop: "4px" }}>10:00 AM – 12:00 PM</strong>
          </div>

          <div style={{ background: "linear-gradient(135deg, rgba(180,83,9,0.35) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: "12px", padding: "20px", backdropFilter: "blur(12px)" }}>
            <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.6)", display: "block" }}>LOCATION VENUE</span>
            <strong style={{ fontSize: "1.1rem", color: "#ffffff", display: "block", marginTop: "4px" }}>Reading Room, Central Library</strong>
          </div>
        </div>

        {/* Interactive Tab Navigation */}
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
                border: activeTab === tab.id ? "1.5px solid #fbbf24" : "1px solid rgba(255,255,255,0.2)",
                background: activeTab === tab.id ? "linear-gradient(135deg, rgba(245,158,11,0.35) 0%, rgba(180,83,9,0.25) 100%)" : "rgba(15,23,42,0.6)",
                color: activeTab === tab.id ? "#ffffff" : "rgba(241,245,249,0.7)",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: activeTab === tab.id ? "0 0 20px rgba(245,158,11,0.3)" : "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div style={{ background: "linear-gradient(135deg, rgba(25,18,10,0.9) 0%, rgba(10,12,20,0.95) 100%)", border: "1.5px solid rgba(245,158,11,0.3)", borderRadius: "16px", padding: "36px", marginBottom: "50px", backdropFilter: "blur(16px)" }}>
          {activeTab === "overview" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.2rem", color: "#ffffff", marginBottom: "16px", letterSpacing: "0.04em" }}>ABOUT QUANTUMANIA</h2>
              <p style={{ color: "rgba(241,245,249,0.9)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "20px" }}>
                Quantumania is NIRMIT 2.0&apos;s ultimate tech quiz championship. Compete in teams of 2 through high-speed buzzer rounds, visual code snippet identification, and quantum trivia.
              </p>
              <ul style={{ paddingLeft: "24px", color: "rgba(241,245,249,0.9)", fontSize: "1rem", lineHeight: "1.8", marginBottom: "24px" }}>
                <li>Rapid-fire buzzer rounds testing knowledge on AI, Quantum Computing, IT history, & algorithms.</li>
                <li>Live digital scoring leaderboard with real-time audience display.</li>
                <li>Trophies, certificates, and cash prize pool for Top Quiz Master Teams.</li>
              </ul>
              <div style={{ background: "rgba(245,158,11,0.12)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(245,158,11,0.3)", fontSize: "0.9rem", color: "#fde68a" }}>
                ⚡ <strong>Registration Window:</strong> 3rd September to 23rd September 2026. Slots strictly allocated on First-Come, First-Served (FCFS) basis!
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.2rem", color: "#ffffff", marginBottom: "16px", letterSpacing: "0.04em" }}>STAGE TIMELINE</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: "8px", padding: "20px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.8rem", color: "#fbbf24", fontWeight: 700 }}>08:00 AM – 09:00 AM</span>
                  <p style={{ margin: "4px 0 0 0", color: "rgba(241,245,249,0.85)" }}>Team Desk Check-in & ID Verification at Central Library Reading Room.</p>
                </div>
                <div style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: "8px", padding: "20px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.8rem", color: "#fbbf24", fontWeight: 700 }}>10:00 AM – 11:00 AM</span>
                  <p style={{ margin: "4px 0 0 0", color: "rgba(241,245,249,0.85)" }}>Round 1: Written Qualifier & Rapid-Fire MCQ Challenge.</p>
                </div>
                <div style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: "8px", padding: "20px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.8rem", color: "#fbbf24", fontWeight: 700 }}>11:15 AM – 12:00 PM</span>
                  <p style={{ margin: "4px 0 0 0", color: "rgba(241,245,249,0.85)" }}>Round 2: Live Buzzer Finale & Winner Ceremony.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "rules" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.2rem", color: "#ffffff", marginBottom: "16px", letterSpacing: "0.04em" }}>RULES & CODE OF CONDUCT</h2>
              <ul style={{ paddingLeft: "24px", color: "rgba(241,245,249,0.9)", fontSize: "0.95rem", lineHeight: "1.8" }}>
                <li>Teams consist of 1 to 2 members per team.</li>
                <li>No electronic gadgets or smartphones allowed inside the quiz arena during active rounds.</li>
                <li>Decision of Quiz Master is final and binding for all buzzer scoring calls.</li>
              </ul>
            </div>
          )}

          {activeTab === "coordinators" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.2rem", color: "#ffffff", marginBottom: "16px", letterSpacing: "0.04em" }}>FACULTY LEADS & CONVENORS</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                {["Chanchal Mukherjee", "Neeha Pradhani", "Sangram Behera"].map((lead, idx) => (
                  <div key={idx} style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: "8px", padding: "16px" }}>
                    <div style={{ fontWeight: 700, color: "#ffffff" }}>{lead}</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(241,245,249,0.6)", marginTop: "2px" }}>Faculty Lead / Convenor</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Footer */}
        <div style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.25) 0%, rgba(180,83,9,0.15) 100%)", border: "1.5px solid rgba(245,158,11,0.4)", borderRadius: "16px", padding: "36px", textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.4rem", color: "#ffffff", margin: "0 0 8px 0" }}>
            READY TO PROVE YOUR TECH IQ?
          </h3>
          <p style={{ color: "rgba(241,245,249,0.85)", fontSize: "1rem", marginBottom: "24px" }}>
            Register your team for Quantumania at Reading Room, Central Library.
          </p>
          <a
            href={getRegistrationUrl("quantumania")}
            target="_blank"
            rel="noopener noreferrer"
            className="fast-assemble-btn"
            style={{ display: "inline-flex", margin: "0 auto", background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", color: "#000000", cursor: "pointer", border: "none", textDecoration: "none" }}
          >
            REGISTER FOR QUANTUMANIA NOW →
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
