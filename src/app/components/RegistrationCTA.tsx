"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { useRegistrationModal } from "./RegistrationModal";
import { getRegistrationUrl } from "../data/registrationLinks";

export default function RegistrationCTA() {
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { openModal } = useRegistrationModal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="register" className="cta-section" ref={sectionRef} style={{ background: "linear-gradient(180deg, #040507 0%, #0b0f17 100%)", borderTop: "1px solid rgba(255,255,255,0.15)", borderBottom: "1px solid rgba(255,255,255,0.15)", padding: "100px 0" }}>
      <div className="section-container">
        <div className="cta-content" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <div className={`reveal${isRevealed ? " revealed" : ""}`} style={{ display: "inline-block", background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(148,163,184,0.1) 100%)", border: "1px solid rgba(255,255,255,0.25)", padding: "6px 18px", borderRadius: "999px", marginBottom: "20px" }}>
            <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.8rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.12em" }}>
              REGISTRATION OPENS: 5TH SEPTEMBER 2026
            </span>
          </div>
          <h2 className={`cta-title reveal${isRevealed ? " revealed" : ""}`} style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "clamp(3rem, 7vw, 5rem)", color: "#ffffff", letterSpacing: "0.04em" }}>READY TO ASSEMBLE?</h2>
          <p className={`cta-subtitle reveal reveal-delay-1${isRevealed ? " revealed" : ""}`} style={{ fontSize: "1.1rem", color: "rgba(241,245,249,0.8)", margin: "16px 0 32px 0" }}>
            Register your team for NIRMIT 2.0 Edition. Seats are filled on a strictly first-come, first-served basis!
          </p>
          <div className={`reveal reveal-delay-2${isRevealed ? " revealed" : ""}`}>
            <Link
              href="/events"
              className="fast-assemble-btn"
              style={{ fontSize: "1.05rem", padding: "20px 48px", cursor: "pointer", textDecoration: "none", display: "inline-flex" }}
            >
              CHOOSE YOUR EVENT & VIEW SPECS →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
