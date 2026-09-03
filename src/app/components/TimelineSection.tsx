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
    day: "TBR",
    date: "Day 1 (To Be Revealed)",
    title: "Launch & Displays",
    highlights: [
      "Drone Obstacle Course (7 AM)",
      "Tech Themed Painting (8 AM)",
      "IoT Display Showcase (12 PM)",
      "Panel Discussion (1 PM)",
    ],
  },
  {
    day: "TBR",
    date: "Day 2 (To Be Revealed)",
    title: "Battle & Ideation",
    highlights: [
      "Techno Dance (8 AM - 8 PM)",
      "Tech Quiz Championship (8 AM)",
      "Ideathon Pitch (12 PM)",
      "Expert Talk Series (1 PM)",
    ],
  },
  {
    day: "TBR",
    date: "Day 3 (To Be Revealed)",
    title: "Esports Combat",
    highlights: [
      "Free Fire Gaming Tournament (1:30 PM)",
      "Live Arena Stream",
      "Qualifying Bracket Showdowns",
    ],
  },
  {
    day: "TBR",
    date: "Day 4 & 5 (To Be Revealed)",
    title: "Agentic AI Hackathon",
    highlights: [
      "Day 1: 8 AM Launch & Sprint",
      "Day 1: 2 PM Mid Evaluation",
      "Day 2: 10 AM Main Evaluation",
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
              REGISTRATION DATES: TO BE REVEALED
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
              className={`timeline-card reveal reveal-delay-${index + 1}${isRevealed ? " revealed" : ""}`}
              style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.7) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <span className="timeline-card-watermark" style={{ color: "rgba(255,255,255,0.06)" }}>
                {day.day}
              </span>

              <div className="timeline-card-day" style={{ color: "#ffffff" }}>
                <span className="timeline-card-day-dot" style={{ background: "#ffffff" }} />
                {day.date}
              </div>

              <h3 className="timeline-card-date" style={{ color: "#ffffff" }}>{day.title}</h3>

              <ul className="timeline-card-events">
                {day.highlights.map((event) => (
                  <li key={event} className="timeline-card-event" style={{ color: "rgba(241,245,249,0.85)" }}>
                    {event}
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
