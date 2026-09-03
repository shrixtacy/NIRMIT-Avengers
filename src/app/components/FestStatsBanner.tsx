"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getRegistrationUrl } from "../data/registrationLinks";

export default function FestStatsBanner() {
  const [eventCount, setEventCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const mainRegisterUrl = getRegistrationUrl("default");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Counter animation from 0 to 15 over 1.2 seconds
            let start = 0;
            const end = 15;
            const duration = 1200;
            const startTime = performance.now();

            const animateCount = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic calculation
              const current = Math.floor((1 - Math.pow(1 - progress, 3)) * end);
              setEventCount(current);

              if (progress < 1) {
                requestAnimationFrame(animateCount);
              } else {
                setEventCount(15);
              }
            };

            requestAnimationFrame(animateCount);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="fest-stats-metallic-section"
      style={{
        position: "relative",
        zIndex: 10,
        background: "linear-gradient(180deg, #040507 0%, #080a0e 50%, #040507 100%)",
        padding: "70px 0 80px 0",
        borderTop: "1.5px solid rgba(255, 255, 255, 0.15)",
        borderBottom: "1.5px solid rgba(255, 255, 255, 0.15)",
        overflow: "hidden",
      }}
    >
      <div className="section-container">
        {/* Top Metallic Label */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(148,163,184,0.1) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              padding: "6px 24px",
              borderRadius: "999px",
              marginBottom: "16px",
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.82rem",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              /// NIRMIT 2.0 AT A GLANCE
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-bebas-neue), sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              letterSpacing: "0.05em",
              margin: 0,
              background: "linear-gradient(180deg, #ffffff 0%, #cbd5e1 50%, #64748b 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.2))",
              lineHeight: 1,
            }}
          >
            15 EVENTS • 5 DAYS • 1 FEST • UNLIMITED FUN
          </h2>
        </div>

        {/* Clean Metallic Numbers Grid (NO BOXES, NO BLUE) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px 20px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Stat 1: 15 Events */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-bebas-neue), sans-serif",
                fontSize: "clamp(4.5rem, 9vw, 6.5rem)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
                background: "linear-gradient(180deg, #ffffff 0%, #cbd5e1 60%, #94a3b8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.9)) drop-shadow(0 0 25px rgba(255,255,255,0.25))",
              }}
            >
              {eventCount}+
            </div>
            <div
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.95rem",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "0.15em",
                marginTop: "8px",
                textTransform: "uppercase",
              }}
            >
              EVENTS
            </div>
          </div>

          {/* Stat 2: 5 Days */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-bebas-neue), sans-serif",
                fontSize: "clamp(4.5rem, 9vw, 6.5rem)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
                background: "linear-gradient(180deg, #ffffff 0%, #cbd5e1 60%, #94a3b8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.9)) drop-shadow(0 0 25px rgba(255,255,255,0.25))",
              }}
            >
              5
            </div>
            <div
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.95rem",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "0.15em",
                marginTop: "8px",
                textTransform: "uppercase",
              }}
            >
              DAYS
            </div>
          </div>

          {/* Stat 3: 1 Fest */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-bebas-neue), sans-serif",
                fontSize: "clamp(4.5rem, 9vw, 6.5rem)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
                background: "linear-gradient(180deg, #ffffff 0%, #cbd5e1 60%, #94a3b8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.9)) drop-shadow(0 0 25px rgba(255,255,255,0.25))",
              }}
            >
              1
            </div>
            <div
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.95rem",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "0.15em",
                marginTop: "8px",
                textTransform: "uppercase",
              }}
            >
              FEST
            </div>
          </div>

          {/* Stat 4: Unlimited Fun */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-bebas-neue), sans-serif",
                fontSize: "clamp(4.5rem, 9vw, 6.5rem)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
                background: "linear-gradient(180deg, #ffffff 0%, #cbd5e1 60%, #94a3b8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.9)) drop-shadow(0 0 25px rgba(255,255,255,0.25))",
              }}
            >
              ∞
            </div>
            <div
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.95rem",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "0.15em",
                marginTop: "8px",
                textTransform: "uppercase",
              }}
            >
              UNLIMITED FUN
            </div>
          </div>
        </div>

        {/* Clean Metallic Action CTA Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginTop: "50px" }}>
          <Link
            href="/events"
            className="fast-assemble-btn"
            style={{
              padding: "16px 36px",
              fontSize: "0.9rem",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            VISIT EVENT PAGE →
          </Link>

          <a
            href={mainRegisterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fast-assemble-btn"
            style={{
              padding: "16px 36px",
              fontSize: "0.9rem",
              background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(148,163,184,0.2) 100%)",
              borderColor: "rgba(255,255,255,0.5)",
              color: "#ffffff",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            REGISTER NOW ↗
          </a>
        </div>
      </div>
    </section>
  );
}
