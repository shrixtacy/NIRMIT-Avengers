"use client";

import { useEffect, useRef, useState } from "react";

interface SponsorTier {
  label: string;
  sponsors: string[];
}

const tiers: SponsorTier[] = [
  {
    label: "Title Sponsor",
    sponsors: ["TechCorp Global"],
  },
  {
    label: "Gold Partners",
    sponsors: ["InnovateTech", "CloudNine Labs", "PixelForge"],
  },
  {
    label: "Silver Partners",
    sponsors: ["CodeBase HQ", "DevStack", "ByteShift", "Quantum AI", "NexGen Solutions"],
  },
];

export default function SponsorsSection() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sponsors" className="sponsors-section" ref={sectionRef}>
      <div className="section-container">
        <div className={`sponsors-header reveal${isRevealed ? " revealed" : ""}`}>
          <h2 className="section-title">Our Partners</h2>
        </div>

        {tiers.map((tier, tierIndex) => (
          <div key={tier.label} className={`sponsors-tier reveal reveal-delay-${tierIndex + 1}${isRevealed ? " revealed" : ""}`}>
            <p className="sponsors-tier-label">{tier.label}</p>
            <div className="sponsors-grid">
              {tier.sponsors.map((sponsor) => (
                <div key={sponsor} className="sponsor-card">
                  <span className="sponsor-card-placeholder">{sponsor}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
