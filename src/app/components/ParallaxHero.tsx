"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface LayerConfig {
  src: string;
  depth: number;
  scale: number;
  baseOffsetX?: number;
  baseOffsetY?: number;
}

const desktopLayers: LayerConfig[] = [
  { src: "/layers/hero-layer-0.webp", depth: 0, scale: 1.12 },
  { src: "/layers/hero-layer-1.webp", depth: 18, scale: 1.12, baseOffsetX: -20 },
  { src: "/layers/hero-layer-2.webp", depth: 36, scale: 1.16 },
  { src: "/layers/hero-layer-3.webp", depth: 60, scale: 1.24 },
  { src: "/layers/hero-layer-4.webp", depth: 85, scale: 1.3 },
  { src: "/layers/hero-layer-5.webp", depth: 110, scale: 1.35 },
];

const mobileLayers: LayerConfig[] = [
  { src: "/layers/mobile-layer-0.webp", depth: 0, scale: 1.12 },
  { src: "/layers/mobile-layer-1.webp", depth: 25, scale: 1.18, baseOffsetY: -35 },
  { src: "/layers/mobile-layer-2.webp", depth: 50, scale: 1.22, baseOffsetY: -45 },
  { src: "/layers/mobile-layer-3.webp", depth: 75, scale: 1.25, baseOffsetY: -40 },
  { src: "/layers/mobile-layer-4.webp", depth: 100, scale: 1.30 },
];

const INTRO_INITIAL_DELAY = 150;
const INTRO_STAGGER = 60;
const INTRO_DURATION = 900;

export default function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef    = useRef<HTMLDivElement>(null);
  const desktopLayerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileLayerRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const textRef      = useRef<HTMLDivElement>(null);
  const sceneRef     = useRef<HTMLDivElement>(null);

  // Refs for 60fps RAF — no useState to avoid re-render cost
  const targetRef = useRef({ x: 0, y: 0 });
  const motionRef = useRef({ x: 0, y: 0 });

  const [introComplete, setIntroComplete]   = useState(false);
  const [introTriggered, setIntroTriggered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile]             = useState(false);
  const [isIOS, setIsIOS]                   = useState(false);
  const [gyroRequested, setGyroRequested]   = useState(false);
  const [gyroActive, setGyroActive]         = useState(false);

  // Detect mobile & iOS platform
  useEffect(() => {
    const check = () => {
      const isMob = window.innerWidth <= 768;
      setIsMobile(isMob);
      const userAgent = window.navigator.userAgent || "";
      const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      setIsIOS(isIOSDevice);
    };
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
    const total = INTRO_INITIAL_DELAY + INTRO_STAGGER * desktopLayers.length + INTRO_DURATION + 50;
    const t2 = setTimeout(() => setIntroComplete(true), total);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [isMobile]);

  // Gyroscope orientation handler with landscape angle support
  const handleOrientation = useCallback((e: DeviceOrientationEvent) => {
    if (e.gamma === null || e.beta === null) return;
    
    const rawX = e.gamma; // -90 to 90
    const rawY = e.beta;  // -180 to 180

    // Account for screen orientation (portrait vs landscape)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const angle = window.screen?.orientation?.angle ?? (typeof (window as any).orientation === "number" ? (window as any).orientation : 0);
    let x = rawX;
    let y = rawY;

    if (angle === 90) {
      x = -rawY;
      y = rawX;
    } else if (angle === -90 || angle === 270) {
      x = rawY;
      y = -rawX;
    } else if (angle === 180) {
      x = -rawX;
      y = -rawY;
    }

    // Natural hold angle in portrait: phone held at ~45deg pitch
    const nx = Math.max(-1, Math.min(1, x / 22));
    const ny = Math.max(-1, Math.min(1, (y - 45) / 22));

    targetRef.current = { x: nx, y: ny };
    setGyroActive(true);
  }, []);

  // Explicit user gesture request for iOS 13+
  const requestGyroPermission = useCallback(async () => {
    if (gyroRequested) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const DOE = (window as any).DeviceOrientationEvent;
    if (DOE && typeof DOE.requestPermission === "function") {
      try {
        const state = await DOE.requestPermission();
        setGyroRequested(true);
        if (state === "granted") {
          window.addEventListener("deviceorientation", handleOrientation);
          setGyroActive(true);
        }
      } catch (err) {
        console.error("iOS Gyroscope permission error:", err);
        setGyroRequested(true);
      }
    } else if (DOE) {
      window.addEventListener("deviceorientation", handleOrientation);
      setGyroRequested(true);
      setGyroActive(true);
    }
  }, [gyroRequested, handleOrientation]);

  // Input listeners
  useEffect(() => {
    // 1. Touch fallback — dragging finger across screen tilts scene immediately
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const nx = (touch.clientX - window.innerWidth  / 2) / (window.innerWidth  / 2);
        const ny = (touch.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
        targetRef.current = {
          x: Math.max(-1, Math.min(1, nx * 1.25)),
          y: Math.max(-1, Math.min(1, ny * 1.25)),
        };
      }
    };

    // 2. Desktop mouse
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = {
        x: Math.max(-1, Math.min(1, (e.clientX - window.innerWidth  / 2) / (window.innerWidth  / 2))),
        y: Math.max(-1, Math.min(1, (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2))),
      };
    };

    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    // Auto-attach deviceorientation if requestPermission is NOT required (Android / non-iOS)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const DOE = (window as any).DeviceOrientationEvent;
    if (DOE && typeof DOE.requestPermission !== "function") {
      window.addEventListener("deviceorientation", handleOrientation);
      setGyroActive(true);
    }

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleOrientation]);

  // 60fps RAF render loop
  useEffect(() => {
    let animId: number;

    const loop = () => {
      motionRef.current.x += (targetRef.current.x - motionRef.current.x) * 0.07;
      motionRef.current.y += (targetRef.current.y - motionRef.current.y) * 0.07;

      const cx = motionRef.current.x;
      const cy = motionRef.current.y;

      if (sceneRef.current) {
        sceneRef.current.style.transform =
          `rotateX(${-cy * 5}deg) rotateY(${cx * 6}deg)`;
      }

      const isMob = window.innerWidth <= 768;
      const activeLayersConfig = isMob ? mobileLayers : desktopLayers;
      const activeRefsArray   = isMob ? mobileLayerRefs : desktopLayerRefs;

      activeRefsArray.current.forEach((el, i) => {
        if (!el) return;
        const layer  = activeLayersConfig[i];
        if (!layer) return;
        const baseX  = layer.baseOffsetX ?? 0;
        const baseY  = layer.baseOffsetY ?? 0;
        const m      = isMob ? 0.75 : 1;
        const tx     = cx * layer.depth * m + baseX;
        const ty     = cy * layer.depth * m + baseY;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${layer.scale})`;
      });

      if (textRef.current) {
        const opacity = isMob ? 0.95 : 0.25 + scrollProgress * 0.75;
        const tsc     = 0.95 + scrollProgress * 0.25;
        textRef.current.style.transform = `translate3d(${cx * 15}px, ${cy * 15}px, 0) scale(${tsc})`;
        textRef.current.style.opacity   = String(opacity);
        textRef.current.style.zIndex    = (isMob || scrollProgress > 0.12) ? "10" : "3";
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [scrollProgress]);

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

  // Trigger iOS permission on user interaction
  const handleUserInteraction = () => {
    if (!gyroRequested) {
      requestGyroPermission();
    }
  };

  return (
    <section 
      id="hero-parallax" 
      ref={containerRef} 
      className="parallax-hero"
      onClick={handleUserInteraction}
      onTouchStart={handleUserInteraction}
    >
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
          {/* Desktop Layers (visible on desktop) */}
          {!isMobile &&
            desktopLayers.map((layer, index) => (
              <div
                key={`desk-${index}`}
                ref={(el) => { desktopLayerRefs.current[index] = el; }}
                className="parallax-layer desktop-parallax-layer"
                style={{
                  zIndex: index,
                  transform: `scale(${layer.scale})`,
                }}
              >
                <Image
                  src={layer.src}
                  alt={`Desktop layer ${index}`}
                  fill
                  unoptimized
                  priority={index < 4}
                  sizes="100vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            ))}

          {/* Mobile Layers (visible on mobile) */}
          {isMobile &&
            mobileLayers.map((layer, index) => (
              <div
                key={`mob-${index}`}
                ref={(el) => { mobileLayerRefs.current[index] = el; }}
                className="parallax-layer mobile-parallax-layer"
                style={{
                  zIndex: index,
                  transform: `scale(${layer.scale})`,
                }}
              >
                <Image
                  src={layer.src}
                  alt={`Mobile layer ${index}`}
                  fill
                  unoptimized
                  priority={index < 3}
                  sizes="100vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            ))}

          <div
            ref={textRef}
            className="nirmit-text-wrapper"
            style={{
              zIndex: scrollProgress > 0.12 ? 10 : 3,
              opacity: isMobile ? 0.95 : 0.25,
            }}
          >
            <h1 className="nirmit-text">NIRMIT</h1>
          </div>
        </div>

        <div className="parallax-vignette" />
        <div className="parallax-corner-shadows" />

        {/* Mobile-only tagline & optional iOS Motion Enable Badge */}
        {isMobile && (
          <div className="hero-mobile-tagline">
            <p className="hero-mobile-tagline-text">
              The Tech &amp; Management Fest of NMIET
            </p>
            {isIOS && !gyroActive && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  requestGyroPermission();
                }}
                className="gyro-enable-badge"
              >
                <span>✨ TAP TO ENABLE 3D GYRO MOTION</span>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
