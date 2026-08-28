"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";

interface GalleryImage {
  src: string;
  title: string;
  category: string;
  year: string;
  description: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/about-arena.webp",
    title: "NIRMIT 1.0 Inaugural Arena",
    category: "Throwback 2016",
    year: "2016",
    description: "The historic opening ceremony of NIRMIT 1.0 held at NMIET Campus.",
  },
  {
    src: "/falcon-left.webp",
    title: "Falcon Strike Drone Deck",
    category: "Drone Arena",
    year: "2026 Preview",
    description: "High-speed quadcopter obstacle course navigation track.",
  },
  {
    src: "/thanos-bg.webp",
    title: "Agentic AI Hackathon",
    category: "Hackathon Sprint",
    year: "2026 Preview",
    description: "48-hour continuous coding sprint for autonomous LLM agents.",
  },
  {
    src: "/ultron-left.webp",
    title: "Project Ultron IoT Showcase",
    category: "IoT Display",
    year: "2026 Preview",
    description: "Live connected sensors, microcontrollers, and automation modules.",
  },
  {
    src: "/civil-wars-bg.webp",
    title: "Civil Wars Esports Arena",
    category: "Esports Showdown",
    year: "2026 Preview",
    description: "Free Fire squad battle royale with live stadium shoutcasting.",
  },
  {
    src: "/about-panorama.webp",
    title: "Valedictory Gala",
    category: "Awards & Keynote",
    year: "2016",
    description: "Grand prize distribution and keynote valedictory session.",
  },
  {
    src: "/ironman-left.webp",
    title: "Techno Dance Choreography",
    category: "Cultural Battle",
    year: "2026 Preview",
    description: "High-octane synth techno choreography with synced lighting.",
  },
  {
    src: "/council-heroes-bg.webp",
    title: "Council of Heroes Symposium",
    category: "Panel Discussion",
    year: "2026 Preview",
    description: "Industry CTOs and academic directors discussing autonomous AI.",
  },
  {
    src: "/marvel-minds-bg.webp",
    title: "Marvel of Minds Seminar",
    category: "Expert Masterclass",
    year: "2026 Preview",
    description: "Deep Tech & Quantum AI lecture series by industry leaders.",
  },
];

interface MagneticCarouselProps {
  images?: GalleryImage[];
  collapsedWidth?: number;
  hoverWidth?: number;
  collapsedHeight?: number;
  hoverHeight?: number;
  openSize?: number;
  gap?: number;
  influence?: number;
  blur?: number;
}

function MagneticCarousel({
  images = GALLERY_IMAGES,
  collapsedWidth = 90,
  hoverWidth = 180,
  collapsedHeight = 360,
  hoverHeight = 420,
  openSize = 560,
  gap = 14,
  influence = 180,
  blur = 4,
}: MagneticCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const count = images.length;

  const [factors, setFactors] = useState<number[]>(() => images.map(() => 0));
  const [open, setOpen] = useState<number | null>(null);

  const targetRef = useRef<number[]>(images.map(() => 0));
  const curRef = useRef<number[]>(images.map(() => 0));
  const loopRef = useRef<number>(0);

  useEffect(() => {
    targetRef.current = images.map(() => 0);
    curRef.current = images.map(() => 0);
    setFactors(images.map(() => 0));
  }, [count, images]);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(loopRef.current);
    };
  }, []);

  const startLoop = () => {
    if (loopRef.current) return;
    const step = () => {
      const tgt = targetRef.current;
      const cur = curRef.current;
      let moving = false;
      for (let i = 0; i < cur.length; i++) {
        const d = (tgt[i] ?? 0) - cur[i];
        if (Math.abs(d) > 0.001) {
          cur[i] += d * 0.2; // Smooth lerp
          moving = true;
        } else {
          cur[i] = tgt[i] ?? 0;
        }
      }
      setFactors([...cur]);
      loopRef.current = moving ? requestAnimationFrame(step) : 0;
    };
    loopRef.current = requestAnimationFrame(step);
  };

  const setTargetFromCursor = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = clientX - rect.left;
    const n = images.length;
    const totalBase = n * collapsedWidth + (n - 1) * gap;
    const startX = Math.max(0, (rect.width - totalBase) / 2);

    targetRef.current = images.map((_, i) => {
      const center = startX + i * (collapsedWidth + gap) + collapsedWidth / 2;
      const dist = Math.abs(cx - center);
      const f = Math.max(0, 1 - dist / influence);
      return f * f * (3 - 2 * f); // Smoothstep falloff curve
    });
    startLoop();
  };

  const onMove = (e: React.MouseEvent) => {
    if (open !== null) return;
    setTargetFromCursor(e.clientX);
  };

  const onLeave = () => {
    if (open !== null) return;
    targetRef.current = images.map(() => 0);
    startLoop();
  };

  const close = () => {
    targetRef.current = images.map(() => 0);
    curRef.current = images.map(() => 0);
    setFactors(images.map(() => 0));
    setOpen(null);
  };

  const sizeFor = (i: number) => {
    if (open !== null) {
      return i === open
        ? { width: openSize, height: openSize }
        : { width: collapsedWidth, height: collapsedHeight };
    }
    const f = factors[i] ?? 0;
    return {
      width: collapsedWidth + (hoverWidth - collapsedWidth) * f,
      height: collapsedHeight + (hoverHeight - collapsedHeight) * f,
    };
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        minHeight: "520px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: `${gap}px`,
        position: "relative",
        overflowX: "auto",
        padding: "40px 20px",
        userSelect: "none",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Backdrop overlay when an item is expanded */}
      {open !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(4, 5, 7, 0.75)",
            backdropFilter: "blur(8px)",
            pointerEvents: "auto",
            transition: "opacity 0.3s ease",
          }}
          onClick={close}
        />
      )}

      {images.map((img, i) => {
        const { width, height } = sizeFor(i);
        const isOpen = open === i;
        const blurred = open !== null && !isOpen;

        return (
          <div
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              if (isOpen) close();
              else setOpen(i);
            }}
            style={{
              flex: "none",
              width: `${width}px`,
              height: `${height}px`,
              borderRadius: isOpen ? "16px" : "12px",
              overflow: "hidden",
              cursor: "pointer",
              transition: open !== null ? "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
              willChange: "width, height",
              position: isOpen ? "fixed" : "relative",
              top: isOpen ? "50%" : "auto",
              left: isOpen ? "50%" : "auto",
              transform: isOpen ? "translate(-50%, -50%)" : "none",
              zIndex: isOpen ? 101 : 2,
              filter: blurred ? `blur(${blur}px)` : "none",
              opacity: blurred ? 0.4 : 1,
              border: isOpen
                ? "2px solid rgba(255, 255, 255, 0.5)"
                : "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: isOpen
                ? "0 25px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(255, 255, 255, 0.2)"
                : "0 8px 24px rgba(0, 0, 0, 0.6)",
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay Info Card on Hover/Open */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: isOpen
                  ? "linear-gradient(180deg, transparent 40%, rgba(4,5,7,0.95) 100%)"
                  : "linear-gradient(180deg, transparent 60%, rgba(4,5,7,0.85) 100%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: isOpen ? "24px" : "12px",
                opacity: isOpen || (factors[i] ?? 0) > 0.4 ? 1 : 0.6,
                transition: "opacity 0.3s ease, padding 0.3s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: isOpen ? "0.78rem" : "0.65rem",
                  fontWeight: 700,
                  color: "#cbd5e1",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {img.category} • {img.year}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-bebas-neue), sans-serif",
                  fontSize: isOpen ? "1.8rem" : "1.1rem",
                  color: "#ffffff",
                  margin: "2px 0 4px 0",
                  lineHeight: 1,
                  whiteSpace: isOpen ? "normal" : "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {img.title}
              </h3>
              {isOpen && (
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "rgba(241,245,249,0.85)",
                    lineHeight: "1.5",
                    margin: "4px 0 0 0",
                  }}
                >
                  {img.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function GalleryPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#040507", color: "#ffffff", paddingTop: "100px" }}>
      <div className="section-container" style={{ paddingBottom: "100px" }}>
        {/* Header Block */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(148,163,184,0.1) 100%)",
              border: "1px solid rgba(255,255,255,0.25)",
              padding: "6px 22px",
              borderRadius: "999px",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.82rem",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "0.15em",
              }}
            >
              MAGNETIC PHOTO ARCHIVES • NIRMIT LEGACY
            </span>
          </div>

          <h1 className="section-title" style={{ display: "block" }}>
            NIRMIT GALLERY
          </h1>
          <p className="section-subtitle" style={{ margin: "16px auto 0 auto", maxWidth: "800px" }}>
            Hover across the magnetic carousel bars to magnify captures. Click any card to expand full view.
          </p>
        </div>

        {/* Magnetic Dock Carousel */}
        <MagneticCarousel />
      </div>

      <Footer />
    </main>
  );
}
