"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function PrizePoolSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [count, setCount] = useState(0);

  const TARGET_AMOUNT = 150000;
  const DURATION_MS = 2400; // 2.4 second dramatic increment

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let animationFrameId: number;
    let startTime: number | null = null;

    const animateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / DURATION_MS, 1);
      
      // Cubic ease-out curve for dramatic slowing count down at the end
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOutProgress * TARGET_AMOUNT);
      
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCounter);
      } else {
        setCount(TARGET_AMOUNT);
      }
    };

    animationFrameId = requestAnimationFrame(animateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated]);

  // Format currency with Indian comma format (e.g., 1,50,000)
  const formattedCount = new Intl.NumberFormat("en-IN").format(count);

  return (
    <section id="prizepool" ref={sectionRef} className="prizepool-section">
      <div className="prizepool-bg-glow" />
      
      <div className="section-container prizepool-content">
        {/* Meta Header */}
        <div className="prizepool-header">
          <span className="prizepool-meta-tag">
            /// OFFICIAL BOUNTY REWARDS &amp; CASH POOL
          </span>
          <h2 className="prizepool-title">
            TOTAL PRIZE POOL
          </h2>
          <p className="prizepool-subtitle">
            Compete across 10+ high-octane engineering battlegrounds, gaming arenas, and ideathons for glory and massive rewards!
          </p>
        </div>

        {/* Central Exaggerated Counter Card */}
        <div className="prizepool-hero-card">
          <div className="prizepool-card-corner top-left" />
          <div className="prizepool-card-corner top-right" />
          <div className="prizepool-card-corner bottom-left" />
          <div className="prizepool-card-corner bottom-right" />
          
          <div className="prizepool-badge-row">
            <span className="prizepool-live-badge">
              <span className="live-dot" /> OVER 1.5 LAKHS+
            </span>
            <span className="prizepool-tech-badge">NIRMIT 2.0 BENCHMARK</span>
          </div>

          <div className="prizepool-counter-display">
            <span className="prizepool-currency">₹</span>
            <span className="prizepool-number">
              {formattedCount}
            </span>
            <span className="prizepool-plus">+</span>
          </div>

          <div className="prizepool-label">
            ONE LAKH FIFTY THOUSAND RUPEES + EXCLUSIVE MERCHANDISE
          </div>

          <div className="prizepool-shine-line" />
        </div>

        {/* Breakdown Highlight Grid */}
        <div className="prizepool-features-grid">
          <div className="prizepool-feature-card">
            <div className="feature-icon-box">🏆</div>
            <h3 className="feature-card-title">CASH PRIZES</h3>
            <p className="feature-card-desc">
              Direct cash rewards for Winners &amp; Runners-up across all Flagship Events including NexTech 2.0 &amp; Falcon Strike.
            </p>
          </div>

          <div className="prizepool-feature-card">
            <div className="feature-icon-box">🎁</div>
            <h3 className="feature-card-title">EXCLUSIVE SWAG</h3>
            <p className="feature-card-desc">
              Official NIRMIT 2.0 Avengers T-Shirts, Marvel Hoodies, Custom Badges, and Developer Kits.
            </p>
          </div>

          <div className="prizepool-feature-card">
            <div className="feature-icon-box">📜</div>
            <h3 className="feature-card-title">CERTIFICATES &amp; MORE</h3>
            <p className="feature-card-desc">
              National-level Achievement Certificates, Incubation Mentorship, and Industry Founder Connections.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="prizepool-cta-wrapper">
          <Link href="/events" className="prizepool-cta-btn">
            CLAIM YOUR REWARDS — EXPLORE EVENTS →
          </Link>
        </div>
      </div>
    </section>
  );
}
