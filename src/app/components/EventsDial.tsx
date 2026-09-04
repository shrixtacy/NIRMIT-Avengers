"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRegistrationModal } from "./RegistrationModal";
import { getRegistrationUrl } from "../data/registrationLinks";

interface EventData {
  id: string;
  name: string;
  category: string;
  domain: string;
  description: string;
  color: string;
  bgColor: string;
  dialColor: string;
  bgImage?: string;
  bgPosition?: string;
  topOverlay?: string;
  leftChar?: string;
  rightChar?: string;
}

const events: EventData[] = [
  {
    id: "falcon-strike",
    name: "FALCON STRIKE",
    category: "DRONE OBSTACLE COURSE",
    domain: "Drone / Robotics",
    description:
      "Practical drone navigation competition testing precision, control, reaction time, navigation, technical understanding, stability and decision-making through a predefined obstacle course.",
    color: "#ff3b5c",
    bgColor: "#080305",
    dialColor: "#c8102e",
    bgImage: "/events/falcon-bg.webp",
    leftChar: "/falcon-left.webp",
    rightChar: "/falcon-right.webp",
  },
  {
    id: "nextech",
    name: "NEXTECH 2.0",
    category: "AGENTIC AI HACKATHON",
    domain: "Software / AI / Innovation",
    description:
      "Flagship two-day build event focused on EdTech and regional-language accessibility, with teams designing, developing and demonstrating technology solutions.",
    color: "#00f0ff",
    bgColor: "#020b14",
    dialColor: "#0284c7",
    bgImage: "/thanos-bg.webp",
  },
  {
    id: "ultron",
    name: "PROJECT ULTRON",
    category: "IOT DISPLAY",
    domain: "IoT / Exhibition",
    description:
      "Exhibition where participants showcase connected devices, sensors, automation and real-world IoT applications to judges, organizers and visitors.",
    color: "#000000",
    bgColor: "#090314",
    dialColor: "#475569",
    bgImage: "/ultron-bg.webp",
    leftChar: "/ultron-left.webp",
    rightChar: "/ultron-right.webp",
  },
  {
    id: "civil-wars",
    name: "CIVIL WARS",
    category: "FREE FIRE GAMING TOURNAMENT",
    domain: "Gaming / Esports",
    description:
      "Competitive esports tournament focused on team coordination, strategy, decision-making, communication and competitive gaming skills.",
    color: "#ff3b5c",
    bgColor: "#0c040d",
    dialColor: "#1d4ed8",
    bgImage: "/civil-wars-bg.webp",
    bgPosition: "center center",
    leftChar: "/captain-right.webp",
    rightChar: "/ironman-left.webp",
  },
  {
    id: "multiverse",
    name: "MULTIVERSE OF IDEAS",
    category: "IDEATHON",
    domain: "Innovation / Ideation",
    description:
      "Idea-focused challenge where participants identify a meaningful problem, understand users and propose a technology-driven solution within the session timeframe.",
    color: "#f43f5e",
    bgColor: "#14020b",
    dialColor: "#be185d",
    bgImage: "/multiverse-bg.webp",
    leftChar: "/multiverse-bottom-left.webp",
    rightChar: "/multiverse-top-right.webp",
  },
  {
    id: "groove",
    name: "GUARDIANS OF THE GROOVE",
    category: "TECHNO DANCE",
    domain: "Cultural / Dance",
    description:
      "High-energy dance competition featuring technology-themed performances.",
    color: "#a855f7",
    bgColor: "#090314",
    dialColor: "#7e22ce",
    bgImage: "/groove-bg.webp",
    rightChar: "/groove-top-right.webp",
  },
  {
    id: "quantumania",
    name: "QUANTUMANIA",
    category: "TECH QUIZ",
    domain: "Quiz",
    description:
      "Trivia competition testing knowledge on latest technology, IT, and science.",
    color: "#f59e0b",
    bgColor: "#141002",
    dialColor: "#b45309",
    bgImage: "/quantumania-bg.webp",
    leftChar: "/quantumania-bottom-left.webp",
    rightChar: "/quantumania-top-right.webp",
  },
  {
    id: "infinity-canvas",
    name: "INFINITY CANVAS",
    category: "CANVAS PAINTING",
    domain: "Art & Creativity",
    description:
      "Creative canvas painting competition with a predefined theme.",
    color: "#06b6d4",
    bgColor: "#021214",
    dialColor: "#0e7490",
    bgImage: "/infinity-canvas-bg.webp",
    topOverlay: "/screen-top-layer.webp",
  },
  {
    id: "council-heroes",
    name: "COUNCIL OF HEROES",
    category: "PANEL DISCUSSION",
    domain: "Discussion / Talk",
    description:
      "Expert panel discussing current trends in technology and business.",
    color: "#3b82f6",
    bgColor: "#020814",
    dialColor: "#1d4ed8",
    bgImage: "/council-heroes-bg.webp",
  },
  {
    id: "marvel-minds",
    name: "MARVEL OF MINDS",
    category: "SEMINAR",
    domain: "Seminar / Talk",
    description:
      "Educational seminar delivered by industry experts on emerging technologies.",
    color: "#8b5cf6",
    bgColor: "#080214",
    dialColor: "#6d28d9",
    bgImage: "/marvel-minds-bg.webp",
  },
  {
    id: "poster-presentation",
    name: "STARK EXPO",
    category: "STARK EXPO - TECH POSTER",
    domain: "Branding & Designing",
    description:
      "Students present technical posters on innovative engineering topics.",
    color: "#fb7185",
    bgColor: "#140208",
    dialColor: "#9f1239",
    bgImage: "/stark-expo-bg.webp",
  },
  {
    id: "ad-mad",
    name: "THUNDERBOLTS",
    category: "THUNDERBOLTS - AD MAD SHOW",
    domain: "Branding & Designing",
    description:
      "Creative advertising competition where teams create quirky ads for given products.",
    color: "#fbbf24",
    bgColor: "#140c02",
    dialColor: "#d97706",
    bgImage: "/thunderbolts-bg.webp",
    bgPosition: "center bottom",
    leftChar: "/thunderbolts-left.webp",
    rightChar: "/thunderbolts-right.webp",
  },
  {
    id: "marketing-showdown",
    name: "BATTLE OF BRANDS",
    category: "MARKETING COMPETITION",
    domain: "Marketing & Business",
    description:
      "Business challenge where teams pitch marketing strategies for given case studies.",
    color: "#818cf8",
    bgColor: "#040414",
    dialColor: "#4338ca",
    bgImage: "/battle-of-brands-bg.webp",
  },
  {
    id: "cxo-summit",
    name: "SHIELD BOARDROOM",
    category: "CXO ROUND TABLE",
    domain: "Business & Tech",
    description:
      "Exclusive roundtable discussion with industry CXOs on future tech landscapes.",
    color: "#2dd4bf",
    bgColor: "#021412",
    dialColor: "#0f766e",
    bgImage: "/shield-boardroom-bg.webp",
  },
  {
    id: "face-painting",
    name: "INFINITY FACES",
    category: "FACE PAINTING",
    domain: "Art & Creativity",
    description:
      "Creative face painting competition where participants express futuristic and Marvel superhero character themes on human canvases.",
    color: "#ec4899",
    bgColor: "#14020c",
    dialColor: "#be185d",
    bgImage: "/infinity-faces-bg.webp",
  },
];

const AUTO_ROTATE_INTERVAL = 5000;

const getTitleFontSize = (name: string) => {
  const len = name.length;
  if (len > 20) return "clamp(2rem, 7.5vw, 8.5rem)";
  if (len > 15) return "clamp(2.4rem, 9.2vw, 10rem)";
  if (len > 12) return "clamp(2.8rem, 11vw, 11.5rem)";
  return "clamp(3.5rem, 13.5vw, 13.5rem)";
};

export default function EventsDial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { openModal } = useRegistrationModal();

  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const touchEndYRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    touchEndXRef.current = e.touches[0].clientX;
    touchEndYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
    touchEndYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (
      touchStartXRef.current === null ||
      touchStartYRef.current === null ||
      touchEndXRef.current === null ||
      touchEndYRef.current === null
    ) {
      return;
    }

    const deltaX = touchEndXRef.current - touchStartXRef.current;
    const deltaY = touchEndYRef.current - touchStartYRef.current;

    // Minimum swipe threshold of 40px & horizontal movement dominance
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        goNext();
      } else {
        goPrev();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
    touchEndXRef.current = null;
    touchEndYRef.current = null;
  };

  const goTo = useCallback((targetIndex: number) => {
    const nextIndex = (targetIndex + events.length) % events.length;
    if (nextIndex === activeIndex || isTransitioning) return;

    setIsTransitioning(true);

    // 1. Trigger exit animation
    setTimeout(() => {
      setActiveIndex(nextIndex);
      // 2. Trigger entrance animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 280);
  }, [activeIndex, isTransitioning]);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setIsPaused(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    if (isPaused) return () => document.removeEventListener("visibilitychange", handleVisibility);

    intervalRef.current = setInterval(() => {
      goTo(activeIndex + 1);
    }, AUTO_ROTATE_INTERVAL);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, activeIndex, goTo]);

  const activeEvent = events[activeIndex];

  return (
    <section
      id="events"
      className="events-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dynamic Background Image / Color Tint */}
      <div
        className="events-bg-container"
        style={{
          backgroundColor: activeEvent.bgColor,
          transition: "background-color 0.8s ease",
        }}
      >
        {activeEvent.bgImage && (
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${activeEvent.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: activeEvent.bgPosition ?? "center center",
            backgroundRepeat: "no-repeat",
          }} />
        )}
        <div className="events-bg-overlay" />
      </div>

      {/* Top Layer Overlay for Infinity Canvas or specific event */}
      {activeEvent.topOverlay && (
        <div
          className={`events-top-overlay ${isTransitioning ? "anim-out" : "anim-in"}`}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 15,
            pointerEvents: "none",
            transition: "opacity 0.35s ease",
          }}
        >
          <Image
            src={activeEvent.topOverlay}
            alt="Events Top Overlay"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      )}

      {/* Top Header */}
      <div className="events-header">
        <h2 className="events-header-title">EVENTS</h2>
      </div>

      {/* Big Metallic Title Text (Positioned behind circle top) */}
      <div className="events-big-title-wrapper">
        <h1
          className={`events-big-title ${isTransitioning ? "anim-out" : "anim-in"}`}
          style={{
            fontSize: getTitleFontSize(activeEvent.name),
            letterSpacing: activeEvent.name.length > 18 ? "0.04em" : "0.08em",
          }}
        >
          {activeEvent.name}
        </h1>
      </div>

      {/* Left Character Overlay */}
      {activeEvent.leftChar && (
        <div
          className={`events-char-left ${
            activeEvent.id === "ultron"
              ? "ultron-char-left "
              : activeEvent.id === "civil-wars"
              ? "captain-char-left "
              : activeEvent.id === "groove"
              ? "groove-char-left "
              : activeEvent.id === "quantumania"
              ? "quantumania-char-left "
              : activeEvent.id === "multiverse"
              ? "multiverse-char-left "
              : activeEvent.id === "ad-mad"
              ? "thunderbolts-char-left "
              : ""
          }${isTransitioning ? "anim-out" : "anim-in"}`}
        >
          <Image
            src={activeEvent.leftChar}
            alt="Hero Left"
            width={680}
            height={680}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
      )}

      {/* Right Character Overlay */}
      {activeEvent.rightChar && (
        <div
          className={`events-char-right ${
            activeEvent.id === "ultron"
              ? "ultron-char-right "
              : activeEvent.id === "civil-wars"
              ? "ironman-char-right "
              : activeEvent.id === "groove"
              ? "groove-char-right "
              : activeEvent.id === "quantumania"
              ? "quantumania-char-right "
              : activeEvent.id === "multiverse"
              ? "multiverse-char-right "
              : activeEvent.id === "ad-mad"
              ? "thunderbolts-char-right "
              : ""
          }${isTransitioning ? "anim-out" : "anim-in"}`}
        >
          <Image
            src={activeEvent.rightChar}
            alt="Hero Right"
            width={740}
            height={740}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
      )}

      {/* Semi-circular dial */}
      <div className="events-dial-wrapper">
        <div
          className={`events-dial${
            activeEvent.id === "ultron"
              ? " ultron-metallic"
              : activeEvent.id === "civil-wars"
              ? " civil-wars-gradient"
              : ""
          }`}
        >
          {/* Inside circular space: Sub-category, description text, and action buttons */}
          <div className={`events-circle-content ${isTransitioning ? "anim-out" : "anim-in"}`}>
            <h3 className="circle-category-title" style={{ color: activeEvent.color }}>
              {activeEvent.category}
            </h3>

            <p className="circle-description-text">
              {activeEvent.description}
            </p>

            <div className="circle-actions-group">
              <Link
                href={`/events/${activeEvent.id}`}
                className="circle-action-link"
              >
                View More Info →
              </Link>
              <button
                onClick={() => openModal(activeEvent.id)}
                className="circle-action-btn"
                style={{ background: activeEvent.color, color: "#000", cursor: "pointer", border: "none", textDecoration: "none" }}
              >
                REGISTRATION OPENS 5TH SEPT 🔒
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Controls & Navigation */}
      <div className="events-controls-wrapper">
        <button
          className="events-nav-btn events-nav-prev"
          onClick={goPrev}
          aria-label="Previous event"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Indicators at bottom */}
        <div className="events-indicators">
          {events.map((event, index) => (
            <button
              key={event.id}
              className={`events-indicator${index === activeIndex ? " active" : ""}`}
              onClick={() => goTo(index)}
              aria-label={`Go to ${event.name}`}
              style={
                index === activeIndex
                  ? { background: event.color, width: "36px" }
                  : undefined
              }
            />
          ))}
        </div>

        <button
          className="events-nav-btn events-nav-next"
          onClick={goNext}
          aria-label="Next event"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
