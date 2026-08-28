"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Parallax element refs for dynamic speed offsets
  const frame1TitleRef = useRef<HTMLHeadingElement>(null);
  const frame2TitleRef = useRef<HTMLHeadingElement>(null);
  const frame2TextRef = useRef<HTMLDivElement>(null);
  const frame3TitleRef = useRef<HTMLHeadingElement>(null);
  const frame3StatsRef = useRef<HTMLDivElement>(null);
  const frame4TitleRef = useRef<HTMLHeadingElement>(null);
  const frame4QuoteRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    // On mobile, skip horizontal parallax entirely — content is vertical
    if (isMobile) return;

    let animationFrameId: number;
    let targetProgress = 0;
    let currentProgress = 0;

    const onScroll = () => {
      if (!containerRef.current) return;
      const top = containerRef.current.offsetTop;
      const height = containerRef.current.offsetHeight - window.innerHeight;
      if (height <= 0) return;
      const scrolled = window.scrollY - top;
      targetProgress = Math.max(0, Math.min(1, scrolled / height));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // 60fps GPU translate3d hardware accelerated scroll
    const updateParallax = () => {
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0001) {
        currentProgress += diff * 0.15;
      } else {
        currentProgress = targetProgress;
      }

      const p = currentProgress;

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-p * 75}%, 0, 0)`;
      }

      if (frame1TitleRef.current) {
        frame1TitleRef.current.style.transform = `translate3d(${p * 200}px, 0, 0)`;
      }
      if (frame2TitleRef.current) {
        frame2TitleRef.current.style.transform = `translate3d(${(p - 0.33) * -240}px, 0, 0)`;
      }
      if (frame2TextRef.current) {
        frame2TextRef.current.style.transform = `translate3d(${(p - 0.33) * -120}px, 0, 0)`;
      }
      if (frame3TitleRef.current) {
        frame3TitleRef.current.style.transform = `translate3d(${(p - 0.66) * -260}px, 0, 0)`;
      }
      if (frame3StatsRef.current) {
        frame3StatsRef.current.style.transform = `translate3d(${(p - 0.66) * -140}px, 0, 0)`;
      }
      if (frame4TitleRef.current) {
        frame4TitleRef.current.style.transform = `translate3d(${(p - 0.9) * -220}px, 0, 0)`;
      }
      if (frame4QuoteRef.current) {
        frame4QuoteRef.current.style.transform = `translate3d(${(p - 0.9) * -120}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateParallax);
    };

    animationFrameId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  return (
    <section id="about" ref={containerRef} className="about-parallel-container">
      <div className="about-sticky-viewport">
        {/* Video background — only on desktop, skip download on mobile */}
        {!isMobile && (
          <div className="about-video-bg">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src="/about-bg.webm" type="video/webm" />
              <source src="/about-bg.mp4" type="video/mp4" />
            </video>
            <div className="about-video-overlay" />
          </div>
        )}

        {/* Continuous horizontal track across 4 connected frames */}
        <div ref={trackRef} className="about-parallel-track">

          {/* ============================================================
             FRAME 1: HERO COVER (CENTERED NIRMIT + LEFT ABOUT + RIGHT-BOTTOM SCROLL HINT)
             ============================================================ */}
          <div className="about-frame frame-1">
            <div className="hero-custom-layout">
              <div className="hero-left-about">
                <span className="meta-tag gold">(ABOUT NIRMIT 2.0 EDITION)</span>
              </div>

              <h2 ref={frame1TitleRef} className="hero-giant-nirmit">
                NIRMIT 2.0
              </h2>

              <div className="hero-right-bottom-hint">
                <span className="hint-dots">///</span>
                <span>SCROLL TO DISCOVER LEGACY</span>
                <span className="hint-arrow">→</span>
              </div>
            </div>
          </div>

          {/* ============================================================
             FRAME 2: OBSERVATION N°01 — 10 YEARS IN THE MAKING
             ============================================================ */}
          <div className="about-frame frame-2">
            <div className="frame-clean-content">
              <div className="frame-meta-bar">
                <span className="meta-num-badge">CHAPTER 01</span>
                <span className="meta-tag gold">THE RETURN AFTER A DECADE</span>
              </div>

              <h2 ref={frame2TitleRef} className="frame-fast-title">
                10 YEARS IN THE MAKING
              </h2>

              <div ref={frame2TextRef} className="frame-editorial-cols">
                <div className="col-block">
                  <p>
                    A decade ago, <strong>NIRMIT 1.0</strong> set the gold benchmark for technological innovation and academic rivalry at <strong>NM Institute of Engineering & Technology (NMIET), Bhubaneswar</strong>.
                  </p>
                </div>
                <div className="col-block">
                  <p>
                    After 10 years of intense anticipation, <strong>NIRMIT 2.0 Edition</strong> is officially back — bigger, bolder, and powered by next-gen Agentic AI, Autonomous Drones, IoT Display, and Esports arenas!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================
             FRAME 3: OBSERVATION N°02 — THE INNOVATION ARENA
             ============================================================ */}
          <div className="about-frame frame-3">
            <div className="frame-clean-content">
              <div className="frame-meta-bar">
                <span className="meta-num-badge">CHAPTER 02</span>
                <span className="meta-tag gold">ARENA METRICS & BATTLEGROUNDS</span>
              </div>

              <h2 ref={frame3TitleRef} className="frame-fast-title">
                THE INNOVATION ARENA
              </h2>

              <div ref={frame3StatsRef} className="stats-fast-row">
                <div className="stat-unit">
                  <span className="stat-value-gold">5000+</span>
                  <span className="stat-label-text">INNOVATORS & VISIONS</span>
                </div>
                <div className="stat-unit">
                  <span className="stat-value-gold">10 DECADE</span>
                  <span className="stat-label-text">HIATUS BROKEN</span>
                </div>
                <div className="stat-unit">
                  <span className="stat-value-gold">10+ FLAGSHIP</span>
                  <span className="stat-label-text">HIGH-OCTANE EVENTS</span>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================
             FRAME 4: OBSERVATION N°03 — READY TO ASSEMBLE
             ============================================================ */}
          <div className="about-frame frame-4">
            <div className="frame-clean-content">
              <div className="frame-meta-bar">
                <span className="meta-num-badge">CHAPTER 03</span>
                <span className="meta-tag gold">THE CALL TO ACTION</span>
              </div>

              <h2 ref={frame4TitleRef} className="frame-fast-title">
                READY TO ASSEMBLE?
              </h2>

              <div ref={frame4QuoteRef} className="frame-cta-group">
                <blockquote className="frame-quote-text">
                  &ldquo;At NMIET Bhubaneswar, history isn&apos;t just remembered — it is rewritten with every line of code, drone launch, and strategic breakthrough.&rdquo;
                </blockquote>

                <p className="frame-action-desc">
                  Registration opens 3rd Sept 2026 and closes 23rd Sept 2026. Assemble your team and step into the arena.
                </p>

                <Link href="/events" className="fast-assemble-btn">
                  EXPLORE ALL TRUMP EVENTS →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
