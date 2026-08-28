"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";

interface ScheduleItem {
  id: number;
  date: string;
  eventName: string;
  reportingTime: string;
  eventTime: string;
  venue: string;
  facultyLeads: string[];
}

const scheduleItems: ScheduleItem[] = [
  {
    id: 1,
    date: "7 October 2026",
    eventName: "Drone Obstacle Course (Falcon Strike)",
    reportingTime: "7:00 AM - 8:00 AM",
    eventTime: "8:00 AM - 1:00 PM",
    venue: "Football Ground",
    facultyLeads: ["Santosh Sahu", "J. Binita", "Sanjay Ray"],
  },
  {
    id: 2,
    date: "7 October 2026",
    eventName: "Tech Themed Painting",
    reportingTime: "8:00 AM - 9:00 AM",
    eventTime: "10:00 AM - 1:00 PM",
    venue: "Reading Room, Central Library",
    facultyLeads: ["Madhubrata Dash", "Tusharkanta Das", "Swarna Prava Sahu"],
  },
  {
    id: 3,
    date: "7 October 2026",
    eventName: "IoT Display (Project Ultron)",
    reportingTime: "12:00 PM - 1:00 PM",
    eventTime: "2:00 PM - 5:00 PM",
    venue: "Electrical Block Hallway",
    facultyLeads: ["Jitendra Padhi", "Bhagyalaxmi Devi", "Pranaya Rout"],
  },
  {
    id: 4,
    date: "7 October 2026",
    eventName: "Panel Discussion",
    reportingTime: "1:00 PM - 2:00 PM",
    eventTime: "3:00 PM - 5:00 PM",
    venue: "Auditorium, MBA Block",
    facultyLeads: ["Kashinath Pati", "Barsha Priyadarshini", "Sambit Sethy"],
  },
  {
    id: 5,
    date: "8 October 2026",
    eventName: "Techno Dance",
    reportingTime: "8:00 AM - 9:00 AM",
    eventTime: "10:00 AM - 8:00 PM",
    venue: "Auditorium, MBA Block",
    facultyLeads: ["Saroj Jena", "Sushree Sucharita Kar", "Bhabani Sankar Sahani"],
  },
  {
    id: 6,
    date: "8 October 2026",
    eventName: "Tech Quiz Championship",
    reportingTime: "8:00 AM - 9:00 AM",
    eventTime: "10:00 AM - 12:00 PM",
    venue: "Reading Room, Central Library",
    facultyLeads: ["Chanchal Mukherjee", "Neeha Pradhani", "Sangram Behera"],
  },
  {
    id: 7,
    date: "8 October 2026",
    eventName: "Ideathon 2026",
    reportingTime: "12:00 PM - 1:00 PM",
    eventTime: "1:00 PM - 5:00 PM",
    venue: "Seminar Hall, MBA Block",
    facultyLeads: ["Jaswant Patro", "J. Binita", "Santosh Sahu"],
  },
  {
    id: 8,
    date: "8 October 2026",
    eventName: "Expert Talk Series",
    reportingTime: "1:00 PM - 2:00 PM",
    eventTime: "3:00 PM - 5:00 PM",
    venue: "Conference Hall, Academic Block",
    facultyLeads: ["Prajnadipta Sahu", "Bijaya Gouda", "Gopabandhu Sahu"],
  },
  {
    id: 9,
    date: "9 October 2026",
    eventName: "Free Fire Gaming Tournament (Civil Wars)",
    reportingTime: "1:30 PM - 2:00 PM",
    eventTime: "3:00 PM - 5:00 PM",
    venue: "Auditorium, MBA Block",
    facultyLeads: ["Rashmi Rath", "Om Prakash Narayan Kar", "Prabir Das"],
  },
  {
    id: 10,
    date: "10 - 11 October 2026",
    eventName: "Agentic AI Hackathon (48-Hr Sprint)",
    reportingTime: "8:00 AM on 10 Oct 2026",
    eventTime: "Day 1 Launch 8 AM | Mid Eval 2-6 PM | Day 2 Final Eval 10 AM-3 PM",
    venue: "Auditorium, MBA Block",
    facultyLeads: ["Pragyan Srichandan", "Sanjay Dash", "Maneesh Yadav", "SK Saffruddin", "Pradeep Kumar Parida", "Ajay Kumar Beura"],
  },
];

export default function TimelinePage() {
  const [selectedDate, setSelectedDate] = useState<string>("all");

  const datesList = ["all", "7 October 2026", "8 October 2026", "9 October 2026", "10 - 11 October 2026"];

  const filteredItems = selectedDate === "all"
    ? scheduleItems
    : scheduleItems.filter((item) => item.date === selectedDate);

  return (
    <main style={{ minHeight: "100vh", background: "#040507", color: "#ffffff", paddingTop: "100px" }}>
      {/* Fixed viewport background — stays in place while content scrolls */}
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}>
        <Image
          src="/timeline-bg.webp"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority={false}
        />
        {/* Dark overlay so content stays readable */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(4,5,7,0.62)" }} />
      </div>

      {/* Scrollable content sits above the fixed bg */}
      <div style={{ position: "relative", zIndex: 1 }}>
      <div className="section-container">
        {/* Registration Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.95) 100%)",
            border: "1.5px solid rgba(255,255,255,0.3)",
            borderRadius: "16px",
            padding: "32px",
            textAlign: "center",
            boxShadow: "0 15px 40px rgba(0,0,0,0.8), 0 0 25px rgba(255,255,255,0.1)",
            marginBottom: "60px",
          }}
        >
          <div style={{ display: "inline-block", background: "linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)", color: "#040507", fontWeight: 800, padding: "6px 16px", borderRadius: "999px", fontSize: "0.85rem", letterSpacing: "0.12em", marginBottom: "12px" }}>
            OFFICIAL REGISTRATION WINDOW
          </div>

          <h1 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "clamp(2.4rem, 6vw, 4.2rem)", color: "#ffffff", letterSpacing: "0.04em", margin: "4px 0 12px 0" }}>
            REGISTRATION STARTS: <span style={{ color: "#ffffff", textDecoration: "underline" }}>3RD SEPT 2026</span>
          </h1>

          <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#cbd5e1", letterSpacing: "0.04em" }}>
            CLOSING DATE: <span style={{ color: "#ffffff" }}>23RD SEPT 2026</span>
          </h2>

          <p style={{ color: "rgba(241,245,249,0.8)", fontSize: "1rem", marginTop: "12px" }}>
            All participants must complete reporting during designated time slots. Slots strictly awarded on First-Come, First-Served basis!
          </p>
        </div>

        {/* Section Title & Date Filter */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 className="section-title" style={{ display: "block" }}>NIRMIT 2.0 DYNAMIC BRANCH TIMELINE</h2>
          <p className="section-subtitle" style={{ margin: "16px auto 0 auto" }}>
            Explore complete date-wise reporting times, event durations, venues, and faculty leads.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "28px", flexWrap: "wrap" }}>
            {datesList.map((dt) => (
              <button
                key={dt}
                onClick={() => setSelectedDate(dt)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "999px",
                  border: selectedDate === dt ? "1.5px solid #ffffff" : "1px solid rgba(255,255,255,0.2)",
                  background: selectedDate === dt ? "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(148,163,184,0.2) 100%)" : "rgba(15,23,42,0.6)",
                  color: selectedDate === dt ? "#ffffff" : "rgba(241,245,249,0.7)",
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {dt === "all" ? "All Dates" : dt}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Branch / Tree Layout */}
        <div className="timeline-branch-container">
          {filteredItems.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={item.id} className={`timeline-branch-item ${isLeft ? "left" : "right"}`}>
                <div className="timeline-branch-node" />

                <div className="timeline-card-metallic">
                  <div style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.14em", marginBottom: "6px", textTransform: "uppercase" }}>
                    {item.date}
                  </div>

                  <h3 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "1.9rem", color: "#ffffff", letterSpacing: "0.03em", margin: "4px 0 16px 0", lineHeight: 1.1 }}>
                    {item.eventName}
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.84rem", color: "rgba(241,245,249,0.8)", lineHeight: 1.5 }}>
                    <div><span style={{ color: "rgba(255,255,255,0.45)", marginRight: "6px" }}>⏱</span><strong style={{ color: "rgba(255,255,255,0.65)" }}>Reporting:</strong> {item.reportingTime}</div>
                    <div><span style={{ color: "rgba(255,255,255,0.45)", marginRight: "6px" }}>⚡</span><strong style={{ color: "rgba(255,255,255,0.65)" }}>Event Time:</strong> {item.eventTime}</div>
                    <div><span style={{ color: "rgba(255,255,255,0.45)", marginRight: "6px" }}>📍</span><strong style={{ color: "rgba(255,255,255,0.65)" }}>Venue:</strong> {item.venue}</div>
                    <div><span style={{ color: "rgba(255,255,255,0.45)", marginRight: "6px" }}>👨‍🏫</span><strong style={{ color: "rgba(255,255,255,0.65)" }}>Faculty Leads:</strong> {item.facultyLeads.join(", ")}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      </div>{/* end scrollable content */}

      <Footer />
    </main>
  );
}
