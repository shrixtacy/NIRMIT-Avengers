"use client";

import { useState } from "react";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

interface ContactLead {
  name: string;
  role: string;
  department: string;
  phone: string;
  email: string;
}

const facultyLeads: ContactLead[] = [
  { name: "Prof. Santosh Sahu", role: "Convenor & Drone Arena Lead", department: "Department of Mechanical Engineering", phone: "+91 98765 11223", email: "santosh.sahu@nmiet.ac.in" },
  { name: "Prof. Pragyan Srichandan", role: "AI Hackathon Convenor", department: "Department of Computer Science", phone: "+91 98765 44556", email: "pragyan.s@nmiet.ac.in" },
  { name: "Prof. Jitendra Padhi", role: "Project Ultron IoT Lead", department: "Department of Electrical Engineering", phone: "+91 98765 77889", email: "jitendra.p@nmiet.ac.in" },
];

const studentCoordinators: ContactLead[] = [
  { name: "Aman Sharma", role: "Head Student Coordinator", department: "CSE Final Year", phone: "+91 91234 56789", email: "aman.nirmit@nmiet.ac.in" },
  { name: "Sneha Mohanty", role: "Events & Public Relations Lead", department: "ECE Final Year", phone: "+91 91234 98765", email: "sneha.pr@nmiet.ac.in" },
  { name: "Rohan Verma", role: "Logistics & Hospitality Desk", department: "ME Final Year", phone: "+91 91234 33445", email: "hospitality@nmiet.ac.in" },
];

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
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ display: "inline-block", background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(148,163,184,0.1) 100%)", border: "1px solid rgba(255,255,255,0.25)", padding: "6px 20px", borderRadius: "999px", marginBottom: "16px" }}>
            <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.82rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.12em" }}>
              24/7 HELPDESK & COORDINATION
            </span>
          </div>

          <h1 className="section-title" style={{ display: "block" }}>CONTACT & FAQS</h1>
          <p className="section-subtitle" style={{ margin: "16px auto 0 auto" }}>
            Reach out to faculty convenors, student coordinators, or submit your inquiries directly.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", marginBottom: "80px" }}>
          {/* Faculty Convenors */}
          <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.75) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "14px", padding: "32px" }}>
            <h3 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "1.8rem", color: "#ffffff", letterSpacing: "0.04em", marginBottom: "20px" }}>
              FACULTY CONVENORS
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {facultyLeads.map((lead) => (
                <div key={lead.name} style={{ paddingBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <h4 style={{ fontSize: "1.05rem", color: "#ffffff", margin: "0 0 2px 0" }}>{lead.name}</h4>
                  <span style={{ fontSize: "0.78rem", fontFamily: "var(--font-geist-mono), monospace", color: "#cbd5e1", display: "block" }}>{lead.role}</span>
                  <span style={{ fontSize: "0.8rem", color: "rgba(241,245,249,0.65)", display: "block", marginTop: "4px" }}>{lead.department}</span>
                  <div style={{ fontSize: "0.82rem", color: "rgba(241,245,249,0.85)", marginTop: "6px" }}>
                    📞 <a href={`tel:${lead.phone}`} style={{ color: "#ffffff", textDecoration: "none" }}>{lead.phone}</a> | ✉️ <a href={`mailto:${lead.email}`} style={{ color: "#ffffff", textDecoration: "none" }}>{lead.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Coordinators */}
          <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.75) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "14px", padding: "32px" }}>
            <h3 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "1.8rem", color: "#ffffff", letterSpacing: "0.04em", marginBottom: "20px" }}>
              STUDENT COORDINATORS
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {studentCoordinators.map((lead) => (
                <div key={lead.name} style={{ paddingBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <h4 style={{ fontSize: "1.05rem", color: "#ffffff", margin: "0 0 2px 0" }}>{lead.name}</h4>
                  <span style={{ fontSize: "0.78rem", fontFamily: "var(--font-geist-mono), monospace", color: "#cbd5e1", display: "block" }}>{lead.role}</span>
                  <span style={{ fontSize: "0.8rem", color: "rgba(241,245,249,0.65)", display: "block", marginTop: "4px" }}>{lead.department}</span>
                  <div style={{ fontSize: "0.82rem", color: "rgba(241,245,249,0.85)", marginTop: "6px" }}>
                    📞 <a href={`tel:${lead.phone}`} style={{ color: "#ffffff", textDecoration: "none" }}>{lead.phone}</a> | ✉️ <a href={`mailto:${lead.email}`} style={{ color: "#ffffff", textDecoration: "none" }}>{lead.email}</a>
                  </div>
                </div>
              ))}
            </div>
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
                    placeholder="+91 98765 43210"
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
