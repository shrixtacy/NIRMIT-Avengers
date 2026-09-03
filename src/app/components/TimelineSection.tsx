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
      "Battle of Brands - Marketing Maverick (9 AM - 1 PM)",
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
