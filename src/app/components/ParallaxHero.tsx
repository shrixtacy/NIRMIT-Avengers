"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface LayerConfig {
  src: string;
  depth: number;
  scale: number;
  baseOffsetX?: number;
}

const layers: LayerConfig[] = [
  { src: "/layers/0 Layer.webp", depth: 0, scale: 1.12 },
  { src: "/layers/1 Layer.webp", depth: 18, scale: 1.12, baseOffsetX: -20 },
  { src: "/layers/2 Layer.webp", depth: 36, scale: 1.16 },
  { src: "/layers/3.5.webp", depth: 48, scale: 1.2 },
  { src: "/layers/3 Layer.webp", depth: 60, scale: 1.24 },
  { src: "/layers/4 Layer.webp", depth: 85, scale: 1.3 },
  { src: "/layers/5 Layer.webp", depth: 110, scale: 1.35 },
];

const INTRO_INITIAL_DELAY = 150;
const INTRO_STAGGER = 60;
const INTRO_DURATION = 900;

export default function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef    = useRef<HTMLDivElement>(null);
  const layerRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const textRef      = useRef<HTMLDivElement>(null);
  const sceneRef     = useRef<HTMLDivElement>(null);

  // Refs for 60fps RAF — no useState to avoid re-render cost
  const targetRef = useRef({ x: 0, y: 0 });
  const motionRef = useRef({ x: 0, y: 0 });

  const [introComplete, setIntroComplete]   = useState(false);
  const [introTriggered, setIntroTriggered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile]             = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Intro animation (desktop only)
  useEffect(() => {
    if (isMobile) {
      setIntroTriggered(true);
      setIntroComplete(true);
      return;
    }
    const t1 = setTimeout(() => setIntroTriggered(true), INTRO_INITIAL_DELAY);
    const total = INTRO_INITIAL_DELAY + INTRO_STAGGER * layers.length + INTRO_DURATION + 50;
    const t2 = setTimeout(() => setIntroComplete(true), total);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [isMobile]);

  // --- Input listeners (gyro / touch / mouse) ---
  useEffect(() => {
    // 1. Gyroscope handler — beta-45 trick: natural hold angle = neutral
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        const nx = Math.max(-1, Math.min(1, e.gamma / 25));
        const ny = Math.max(-1, Math.min(1, (e.beta - 45) / 25));
        targetRef.current = { x: nx, y: ny };
      }
    };

    // 2. Touch fallback — dragging across screen tilts the scene
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const nx = (touch.clientX - window.innerWidth  / 2) / (window.innerWidth  / 2);
        const ny = (touch.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
        targetRef.current = {
          x: Math.max(-1, Math.min(1, nx)),
          y: Math.max(-1, Math.min(1, ny)),
        };
      }
    };

    // 3. iOS 13+ permission — triggered on first tap
    const requestGyroPermission = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const DOE = (window as any).DeviceOrientationEvent;
      if (DOE && typeof DOE.requestPermission === "function") {
        try {
          const state = await DOE.requestPermission();
          if (state === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        } catch (err) {
          console.error("Gyroscope permission error:", err);
        }
      }
    };

    // 4. Desktop mouse
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = {
        x: Math.max(-1, Math.min(1, (e.clientX - window.innerWidth  / 2) / (window.innerWidth  / 2))),
        y: Math.max(-1, Math.min(1, (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2))),
      };
    };

    // Attach touch listeners (always — touch fallback + iOS permission trigger)
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", requestGyroPermission, { once: true });

    // Android / non-permission browsers: attach orientation immediately
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const DOE = (window as any).DeviceOrientationEvent;
    if (DOE && typeof DOE.requestPermission !== "function") {
      window.addEventListener("deviceorientation", handleOrientation);
    }

    // Desktop mouse
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", requestGyroPermission);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // --- 60fps RAF render loop ---
  useEffect(() => {
    let animId: number;

    const loop = () => {
      // Smooth LERP toward target
      motionRef.current.x += (targetRef.current.x - motionRef.current.x) * 0.07;
      motionRef.current.y += (targetRef.current.y - motionRef.current.y) * 0.07;

      const cx = motionRef.current.x;
      const cy = motionRef.current.y;

      // Scene-level 3D tilt
      if (sceneRef.current) {
        sceneRef.current.style.transform =
          `rotateX(${-cy * 5}deg) rotateY(${cx * 6}deg)`;
      }

      // Per-layer parallax translation
      layerRefs.current.forEach((el, i) => {
        if (!el) return;
        const layer  = layers[i];
        const baseX  = layer.baseOffsetX ?? 0;
        const m      = isMobile ? 0.6 : 1;
        const tx     = cx * layer.depth * m + baseX;
        const ty     = cy * layer.depth * m;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${layer.scale})`;
      });

      // Text wrapper
      if (textRef.current) {
        const opacity = isMobile ? 0.9 : 0.25 + scrollProgress * 0.75;
        const tsc     = 0.95 + scrollProgress * 0.25;
        textRef.current.style.transform = `translate3d(${cx * 15}px, ${cy * 15}px, 0) scale(${tsc})`;
        textRef.current.style.opacity   = String(opacity);
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isMobile, scrollProgress]);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect      = containerRef.current.getBoundingClientRect();
      const scrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      setScrollProgress(Math.max(0, Math.min(1, -rect.top / scrollable)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero-parallax" ref={containerRef} className="parallax-hero">
      <div
        ref={stickyRef}
        className="parallax-sticky"
        style={{ perspective: "1200px" }}
      >
        <div
          ref={sceneRef}
          className="parallax-scene"
          style={{ transformStyle: "preserve-3d" }}
        >
          {layers.map((layer, index) => (
            <div
              key={index}
              ref={(el) => { layerRefs.current[index] = el; }}
              className="parallax-layer"
              style={{
                zIndex: index,
                transform: `scale(${layer.scale})`,
              }}
            >
              <Image
                src={layer.src}
                alt={`Parallax layer ${index}`}
                fill
                sizes="100vw"
                quality={85}
                priority={index < 4}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          ))}

          <div
            ref={textRef}
            className="nirmit-text-wrapper"
            style={{
              zIndex: scrollProgress > 0.1 ? 4 : 3,
              opacity: isMobile ? 0.9 : 0.25,
            }}
          >
            <h1 className="nirmit-text">NIRMIT</h1>
          </div>
        </div>

        <div className="parallax-vignette" />
        <div className="parallax-corner-shadows" />

        {/* Mobile-only tagline overlay — sits above everything */}
        {isMobile && (
          <div className="hero-mobile-tagline">
            <p className="hero-mobile-tagline-text">
              The Tech &amp; Management Fest of NMIET
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
