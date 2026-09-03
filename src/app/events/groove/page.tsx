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
    <main className="groove-page-container" style={{ minHeight: "100vh", background: "#040507", color: "#ffffff", position: "relative", overflowX: "hidden" }}>
      {/* Background Image + Vignette Overlay */}
      <div style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        <Image
          src="/groove-bg.webp"
          alt="Guardians of the Groove Background"
          fill
          priority
          unoptimized
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.45 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 15%, rgba(4,5,7,0.85) 75%, rgba(4,5,7,0.98) 100%)" }} />
      </div>

      {/* Hero Bottom-Left Character */}
      <div className="groove-hero-left" style={{ position: "fixed", bottom: "-100px", left: "0px", zIndex: 2, pointerEvents: "none", width: "clamp(180px, 20vw, 320px)", height: "clamp(180px, 20vw, 320px)", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.9))" }}>
        <Image
          src="/groove-bottom-left.webp"
          alt="Guardians Character Bottom Left"
          fill
          unoptimized
          style={{ objectFit: "contain", objectPosition: "bottom left" }}
        />
      </div>

      {/* Hero Top-Right Character */}
      <div className="groove-hero-right" style={{ position: "fixed", top: "0px", right: "-20px", zIndex: 2, pointerEvents: "none", width: "clamp(220px, 24vw, 380px)", height: "clamp(220px, 24vw, 380px)", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.9))" }}>
        <Image
          src="/groove-top-right.webp"
          alt="Guardians Character Top Right"
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
        <div style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "1.4rem", letterSpacing: "0.1em", color: "#a855f7" }}>NIRMIT 2026</div>
      </header>

      {/* Main Content Container */}
      <div className="section-container" style={{ position: "relative", zIndex: 10, paddingTop: "120px", paddingBottom: "100px" }}>
        {/* Event Header Tag & Title */}
        <div style={{ marginBottom: "40px" }}>
          <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.82rem", fontWeight: 700, color: "#c084fc", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            (06 / 14) /// TECHNO DANCE BATTLE • CULTURAL SHOWDOWN
          </span>

          <h1 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "clamp(3.5rem, 9vw, 7rem)", color: "#ffffff", letterSpacing: "0.04em", margin: "8px 0 16px 0", lineHeight: 0.88, filter: "drop-shadow(0 0 25px rgba(168,85,247,0.4))" }}>
            GUARDIANS OF THE GROOVE
          </h1>

          <p style={{ fontSize: "1.2rem", color: "rgba(241,245,249,0.9)", maxWidth: "780px", lineHeight: "1.6" }}>
            High-octane cyber dance battle fusing futuristic robotics choreography, synth-techno beats, laser sync lighting, and sci-fi aesthetic.
          </p>
        </div>

        {/* Quick Parameters Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "50px" }}>
          <div style={{ background: "linear-gradient(135deg, rgba(88,28,135,0.4) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: "12px", padding: "20px", backdropFilter: "blur(12px)" }}>
            <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.6)", display: "block" }}>EVENT DATE</span>
            <strong style={{ fontSize: "1.1rem", color: "#ffffff", display: "block", marginTop: "4px" }}>To Be Revealed</strong>
          </div>

          <div style={{ background: "linear-gradient(135deg, rgba(88,28,135,0.4) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: "12px", padding: "20px", backdropFilter: "blur(12px)" }}>
            <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.6)", display: "block" }}>REPORTING TIME</span>
            <strong style={{ fontSize: "1.1rem", color: "#ffffff", display: "block", marginTop: "4px" }}>8:00 AM – 9:00 AM</strong>
          </div>

          <div style={{ background: "linear-gradient(135deg, rgba(88,28,135,0.4) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: "12px", padding: "20px", backdropFilter: "blur(12px)" }}>
            <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.6)", display: "block" }}>EVENT DURATION</span>
            <strong style={{ fontSize: "1.1rem", color: "#ffffff", display: "block", marginTop: "4px" }}>10:00 AM – 8:00 PM</strong>
          </div>

          <div style={{ background: "linear-gradient(135deg, rgba(88,28,135,0.4) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: "12px", padding: "20px", backdropFilter: "blur(12px)" }}>
            <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.6)", display: "block" }}>MAIN STAGE VENUE</span>
            <strong style={{ fontSize: "1.1rem", color: "#ffffff", display: "block", marginTop: "4px" }}>Auditorium, MBA Block</strong>
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
                border: activeTab === tab.id ? "1.5px solid #c084fc" : "1px solid rgba(255,255,255,0.2)",
                background: activeTab === tab.id ? "linear-gradient(135deg, rgba(168,85,247,0.35) 0%, rgba(88,28,135,0.25) 100%)" : "rgba(15,23,42,0.6)",
                color: activeTab === tab.id ? "#ffffff" : "rgba(241,245,249,0.7)",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: activeTab === tab.id ? "0 0 20px rgba(168,85,247,0.3)" : "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div style={{ background: "linear-gradient(135deg, rgba(20,15,35,0.9) 0%, rgba(10,12,20,0.95) 100%)", border: "1.5px solid rgba(168,85,247,0.3)", borderRadius: "16px", padding: "36px", marginBottom: "50px", backdropFilter: "blur(16px)" }}>
          {activeTab === "overview" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.2rem", color: "#ffffff", marginBottom: "16px", letterSpacing: "0.04em" }}>ABOUT GUARDIANS OF THE GROOVE</h2>
              <p style={{ color: "rgba(241,245,249,0.9)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "20px" }}>
                Guardians of the Groove is NIRMIT 2.0&apos;s flagship cyber-cultural dance championship. Dancers bring energy, synth-techno synchronization, and sci-fi aesthetic to the grand auditorium stage.
              </p>
              <ul style={{ paddingLeft: "24px", color: "rgba(241,245,249,0.9)", fontSize: "1rem", lineHeight: "1.8", marginBottom: "24px" }}>
                <li>Solo & Group Choreography categories featuring robotics, popping, hip-hop & cyber-futuristic themes.</li>
                <li>Full concert lighting, fog lasers, and high-fidelity stadium acoustic sound system.</li>
                <li>Trophies, certificates, and cash prize pool for Top Dancers & Best Choreography Crew.</li>
              </ul>
              <div style={{ background: "rgba(168,85,247,0.12)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(168,85,247,0.3)", fontSize: "0.9rem", color: "#e9d5ff" }}>
                ⚡ <strong>Registration Notice:</strong> Registrations open from 3rd September to 23rd September 2026. Slots allocated on First-Come, First-Served (FCFS) basis!
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.2rem", color: "#ffffff", marginBottom: "16px", letterSpacing: "0.04em" }}>STAGE TIMELINE</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(168,85,247,0.25)", borderRadius: "8px", padding: "20px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.8rem", color: "#c084fc", fontWeight: 700 }}>08:00 AM – 09:00 AM</span>
                  <p style={{ margin: "4px 0 0 0", color: "rgba(241,245,249,0.85)" }}>Check-in & Audio Track Submission at MBA Block Auditorium desk.</p>
                </div>
                <div style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(168,85,247,0.25)", borderRadius: "8px", padding: "20px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.8rem", color: "#c084fc", fontWeight: 700 }}>10:00 AM – 02:00 PM</span>
                  <p style={{ margin: "4px 0 0 0", color: "rgba(241,245,249,0.85)" }}>Solo Cyber Dance Rounds & Stage Soundchecks.</p>
                </div>
                <div style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(168,85,247,0.25)", borderRadius: "8px", padding: "20px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.8rem", color: "#c084fc", fontWeight: 700 }}>03:00 PM – 08:00 PM</span>
                  <p style={{ margin: "4px 0 0 0", color: "rgba(241,245,249,0.85)" }}>Group Squad Choreography Showdown & Grand Winner Ceremony.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "rules" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.2rem", color: "#ffffff", marginBottom: "16px", letterSpacing: "0.04em" }}>RULES & JUDGING METRICS</h2>
              <ul style={{ paddingLeft: "24px", color: "rgba(241,245,249,0.9)", fontSize: "0.95rem", lineHeight: "1.8" }}>
                <li>Group performances strictly 4–8 minutes duration; solo performances 2–4 minutes.</li>
                <li>Audio track must be submitted in MP3/WAV format during morning check-in.</li>
                <li>Evaluation based on Rhythm & Sync (35%), Tech/Sci-Fi Theme Integration (25%), Costume & Visual Appeal (20%), and Stage Presence (20%).</li>
              </ul>
            </div>
          )}

          {activeTab === "coordinators" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.2rem", color: "#ffffff", marginBottom: "16px", letterSpacing: "0.04em" }}>FACULTY LEADS & CONVENORS</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                {["Saroj Jena", "Sushree Sucharita Kar", "Bhabani Sankar Sahani"].map((lead, idx) => (
                  <div key={idx} style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(168,85,247,0.25)", borderRadius: "8px", padding: "16px" }}>
                    <div style={{ fontWeight: 700, color: "#ffffff" }}>{lead}</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(241,245,249,0.6)", marginTop: "2px" }}>Faculty Lead / Convenor</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Footer */}
        <div style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.25) 0%, rgba(88,28,135,0.15) 100%)", border: "1.5px solid rgba(168,85,247,0.4)", borderRadius: "16px", padding: "36px", textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.4rem", color: "#ffffff", margin: "0 0 8px 0" }}>
            READY TO OWN THE CYBER STAGE?
          </h3>
          <p style={{ color: "rgba(241,245,249,0.85)", fontSize: "1rem", marginBottom: "24px" }}>
            Register your dance squad for Guardians of the Groove before slots fill up.
          </p>
          <button
            onClick={openModal}
            className="fast-assemble-btn"
            style={{ display: "inline-flex", margin: "0 auto", background: "linear-gradient(135deg, #c084fc 0%, #a855f7 100%)", color: "#ffffff", cursor: "pointer", border: "none" }}
          >
            REGISTER FOR GUARDIANS OF THE GROOVE →
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
