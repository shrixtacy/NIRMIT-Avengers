"use client";

import { useState } from "react";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";



export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main style={{ minHeight: "100vh", background: "#040507", color: "#ffffff", paddingTop: "100px" }}>
      <div className="section-container" style={{ paddingBottom: "60px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ display: "inline-block", background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(148,163,184,0.1) 100%)", border: "1px solid rgba(255,255,255,0.25)", padding: "6px 20px", borderRadius: "999px", marginBottom: "16px" }}>
            <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.82rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.12em" }}>
              OFFICIAL CENTRAL HELPDESK & COORDINATION
            </span>
          </div>

          <h1 className="section-title" style={{ display: "block" }}>CONTACT & FAQS</h1>
          <p className="section-subtitle" style={{ margin: "16px auto 0 auto" }}>
            Reach out to NIRMIT 2.0 Central Desk for all event inquiries, hospitality & registrations.
          </p>
        </div>

        {/* Central Official Contact Card */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.95) 100%)",
            border: "1.5px solid rgba(255,255,255,0.35)",
            borderRadius: "20px",
            padding: "36px 24px",
            textAlign: "center",
            boxShadow: "0 15px 40px rgba(0,0,0,0.8), 0 0 25px rgba(255,255,255,0.15)",
            marginBottom: "60px",
          }}
        >
          <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.8rem", fontWeight: 800, color: "#cbd5e1", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            OFFICIAL HELPDESK — CLICK TO CALL OR EMAIL DIRECTLY
          </span>

          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "24px" }}>
            <a
              href="tel:+917328829287"
              className="contact-action-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 32px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(148,163,184,0.12) 100%)",
                border: "1.5px solid rgba(255,255,255,0.4)",
                color: "#ffffff",
                fontFamily: "var(--font-bebas-neue), sans-serif",
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                letterSpacing: "0.06em",
                textDecoration: "none",
                boxShadow: "0 8px 25px rgba(0,0,0,0.6), 0 0 15px rgba(255,255,255,0.1)",
                cursor: "pointer",
              }}
            >
              <span>📞</span> CALL HOTLINE: +91 7328829287
            </a>

            <a
              href="mailto:edcell@nmiet.ac.in"
              className="contact-action-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 32px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, rgba(56,189,248,0.22) 0%, rgba(2,132,199,0.16) 100%)",
                border: "1.5px solid rgba(56,189,248,0.55)",
                color: "#ffffff",
                fontFamily: "var(--font-bebas-neue), sans-serif",
                fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                letterSpacing: "0.06em",
                textDecoration: "none",
                boxShadow: "0 8px 25px rgba(0,0,0,0.6), 0 0 20px rgba(56,189,248,0.25)",
                cursor: "pointer",
              }}
            >
              <span>✉️</span> EMAIL DESK: EDCELL@NMIET.AC.IN
            </a>
          </div>
        </div>



        {/* Query Submission Form & Venue Card */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", marginBottom: "80px" }}>
          {/* Form */}
          <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.95) 100%)", border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: "14px", padding: "32px" }}>
            <h3 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "1.8rem", color: "#ffffff", letterSpacing: "0.04em", marginBottom: "16px" }}>
              SUBMIT A QUERY
            </h3>

            {formSubmitted ? (
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "8px", padding: "24px", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>✅</div>
                <h4 style={{ color: "#ffffff", fontSize: "1.1rem" }}>Query Received!</h4>
                <p style={{ fontSize: "0.85rem", color: "rgba(241,245,249,0.8)", marginTop: "6px" }}>
                  Thank you for contacting NIRMIT 2.0 Desk. Our team will reach out to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  style={{ marginTop: "16px", padding: "8px 18px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.3)", background: "transparent", color: "#ffffff", cursor: "pointer" }}
                >
                  Submit Another Query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "0.8rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(241,245,249,0.7)", display: "block", marginBottom: "6px" }}>YOUR FULL NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "100%", padding: "12px 14px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(15,23,42,0.8)", color: "#ffffff", fontSize: "0.9rem" }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(241,245,249,0.7)", display: "block", marginBottom: "6px" }}>EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    placeholder="student@college.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: "100%", padding: "12px 14px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(15,23,42,0.8)", color: "#ffffff", fontSize: "0.9rem" }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(241,245,249,0.7)", display: "block", marginBottom: "6px" }}>CONTACT NUMBER</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 7328829287"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: "100%", padding: "12px 14px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(15,23,42,0.8)", color: "#ffffff", fontSize: "0.9rem" }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(241,245,249,0.7)", display: "block", marginBottom: "6px" }}>YOUR MESSAGE / QUERY</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Ask about event rules, schedules, or registration details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: "100%", padding: "12px 14px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(15,23,42,0.8)", color: "#ffffff", fontSize: "0.9rem" }}
                  />
                </div>

                <button type="submit" className="fast-assemble-btn" style={{ width: "100%", justifyContent: "center" }}>
                  SEND INQUIRY →
                </button>
              </form>
            )}
          </div>

          {/* Venue Card */}
          <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.95) 100%)", border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: "14px", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "1.8rem", color: "#ffffff", letterSpacing: "0.04em", marginBottom: "16px" }}>
                NMIET CAMPUS LOCATION
              </h3>
              <p style={{ color: "rgba(241,245,249,0.85)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "16px" }}>
                <strong>NM Institute of Engineering & Technology (NMIET)</strong><br />
                Sijua, Patrapada, Bhubaneswar, Odisha 751019
              </p>
              <div style={{ fontSize: "0.85rem", color: "rgba(241,245,249,0.75)", lineHeight: "1.7" }}>
                🚆 <strong>Bhubaneswar Railway Station:</strong> ~12 km<br />
                ✈️ <strong>Biju Patnaik Int. Airport:</strong> ~10 km<br />
                🚌 <strong>Baramunda ISBT Bus Stand:</strong> ~6 km
              </div>
            </div>

            <div style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", padding: "20px", marginTop: "24px" }}>
              <span style={{ fontSize: "0.78rem", fontFamily: "var(--font-geist-mono), monospace", color: "#cbd5e1" }}>
                REGISTRATION DESK LOCATIONS
              </span>
              <p style={{ fontSize: "0.85rem", color: "rgba(241,245,249,0.85)", marginTop: "6px" }}>
                Main Admin Block Ground Floor & Central Library Counter. Registration badges issued daily from 7:30 AM onwards.
              </p>
            </div>
          </div>
        </div>

        {/* Embedded FAQ Accordion */}
        <FAQSection />
      </div>

      <Footer />
    </main>
  );
}
