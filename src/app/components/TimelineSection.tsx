"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface DaySchedule {
  day: string;
  date: string;
  title: string;
  highlights: string[];
}

const schedule: DaySchedule[] = [
  {
    day: "OCT 11",
    date: "11 October 2026",
    title: "Launch & Displays",
    highlights: [
      "Inauguration Ceremony (10:00 AM)",
      "Falcon Strike - Drone Obstacle (8:00 AM - 1:00 PM)",
      "Stark Expo - Tech Poster Presentation (10:00 AM)",
      "Infinity Canvas - Canvas Painting (10:00 AM)",
      "Project Ultron - IoT Display (2:00 PM - 5:00 PM)",
      "Council of Heroes - Panel Discussion (3:00 PM)",
      "Thunderbolts - AD Mad Show (3:00 PM)",
    ],
  },
  {
    day: "OCT 12",
    date: "12 October 2026",
    title: "Battle & Ideation",
    highlights: [
      "Guardians of the Groove - Techno Dance (10 AM - 8 PM)",
      "Shield Boardroom - CXO Round Table (10:00 AM)",
      "Quantumania - Tech Biz Quiz (10:00 AM)",
      "Multiverse of Ideas - Ideathon (1:00 PM - 5:00 PM)",
      "Marvel of Minds - Expert Talk / Workshop (3:00 PM)",
    ],
  },
  {
    day: "OCT 13",
    date: "13 October 2026",
    title: "Esports & Creative Combat",
    highlights: [
      "Infinity Faces - Face Painting (10 AM)",
      "Battle of Brands (9 AM - 1 PM)",
      "Civil Wars - Free Fire Gaming Tournament (3 PM)",
    ],
  },
  {
    day: "OCT 14-15",
    date: "14 – 15 October 2026",
    title: "Agentic AI Hackathon",
    highlights: [
      "NexTech 2.0 Launch (Oct 14, 8:00 AM)",
      "Mid Evaluation (Oct 14, 2:00 PM - 6:00 PM)",
      "Main Jury Evaluation (Oct 15, 10:00 AM - 3:00 PM)",
      "Grand Award Ceremony & Closing",
    ],
  },
];

export default function TimelineSection() {
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="timeline-section" ref={sectionRef}>
      {/* Background image */}
      <div className="timeline-bg-image">
        <Image
          src="/timeline-bg.webp"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority={false}
        />
      </div>
      <div className="section-container">
        <div className={`timeline-header reveal${isRevealed ? " revealed" : ""}`} style={{ textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(148,163,184,0.1) 100%)", border: "1px solid rgba(255,255,255,0.25)", padding: "8px 20px", borderRadius: "999px", marginBottom: "16px" }}>
            <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.85rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.1em" }}>
              FESTIVAL DATES: 11 - 15 OCTOBER 2026
            </span>
          </div>
          <h2 className="section-title" style={{ display: "block" }}>EVENT TIMELINE</h2>
          <p className="section-subtitle" style={{ margin: "16px auto 0 auto" }}>
            NIRMIT 2.0 schedule across 5 action-packed days at NMIET Campus.
          </p>
        </div>

        <div className="timeline-grid" style={{ marginTop: "40px" }}>
          {schedule.map((day, index) => (
            <div
              key={day.date}
              className={`timeline-card chamfer-box reveal reveal-delay-${index + 1}${isRevealed ? " revealed" : ""}`}
              style={{ position: "relative" }}
            >
              {/* Giant Translucent Background Watermark */}
              <div className="timeline-card-watermark">
                {day.day}
              </div>

              {/* Header Row: Date Bullet on Left, Title on Right */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "22px", flexWrap: "wrap", gap: "12px", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "14px", position: "relative", zIndex: 2 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.82rem", fontWeight: 700, color: "#cbd5e1", letterSpacing: "0.12em" }}>
                  <span style={{ color: "#ffffff", fontSize: "1.1rem" }}>•</span> {day.date.toUpperCase()}
                </div>
                <h3 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "1.9rem", color: "#ffffff", letterSpacing: "0.04em", margin: 0, transform: "scaleY(1.12)", transformOrigin: "right center" }}>
                  {day.title.toUpperCase()}
                </h3>
              </div>

              {/* Highlights Bullet List with Triangle Arrow */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", position: "relative", zIndex: 2 }}>
                {day.highlights.map((event, hIdx) => (
                  <li key={hIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "rgba(241,245,249,0.9)", lineHeight: "1.5" }}>
                    <span style={{ color: "#cbd5e1", flexShrink: 0, marginTop: "1px", fontSize: "0.8rem" }}>▸</span>
                    <span>{event}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }} className={`reveal${isRevealed ? " revealed" : ""}`}>
          <Link href="/timeline" className="fast-assemble-btn">
            VIEW FULL DYNAMIC BRANCH TIMELINE →
          </Link>
        </div>
      </div>
    </section>
  );
}
