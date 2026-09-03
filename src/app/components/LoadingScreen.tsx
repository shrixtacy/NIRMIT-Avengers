"use client";

import { useEffect, useState } from "react";

const CRITICAL_IMAGES = [
  "/rules-bg.webp",
  "/layers/hero-layer-0.webp",
  "/layers/hero-layer-1.webp",
  "/layers/mobile-layer-0.webp",
  "/layers/mobile-layer-1.webp",
];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isFadingHud, setIsFadingHud] = useState(false);
  const [isOpeningGate, setIsOpeningGate] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = CRITICAL_IMAGES.length;

    // Fast image preloader
    CRITICAL_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
      };
    });

    // Smooth RAF progress counter (completes in ~2.4s)
    let startTimestamp: number | null = null;
    const DURATION = 2400; // ms

    let animId: number;

    const animateProgress = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const calculatedProgress = Math.min(100, Math.floor((elapsed / DURATION) * 100));

      setProgress(calculatedProgress);

      if (calculatedProgress < 100) {
        animId = requestAnimationFrame(animateProgress);
      } else {
        // Step 1: Fade out HUD text
        setIsFadingHud(true);

        setTimeout(() => {
          // Step 2: Trigger gate split open
          setIsOpeningGate(true);

          setTimeout(() => {
            // Step 3: Unmount loading overlay completely
            setIsComplete(true);
          }, 850); // Matches gate slide transition duration
        }, 220); // Delay before gates split open
      }
    };

    animId = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(animId);
  }, []);

  if (isComplete) return null;

  return (
    <div className="loader-gate-wrapper">
      {/* Desktop Left & Right Split Gate Panels */}
      <div
        className={`loader-gate-panel loader-gate-primary ${
          isOpeningGate ? "gate-split-primary" : ""
        }`}
      >
        <div className="loader-gate-bg" />
      </div>

      <div
        className={`loader-gate-panel loader-gate-secondary ${
          isOpeningGate ? "gate-split-secondary" : ""
        }`}
      >
        <div className="loader-gate-bg loader-gate-bg-sec" />
      </div>

      <div
        className={`loader-gate-seam ${isOpeningGate ? "seam-fade" : ""}`}
      />

      {/* Mobile Single Full-Screen Panel (Slides Entirely Up) */}
      <div
        className={`loader-mobile-panel ${
          isOpeningGate ? "mobile-slide-up" : ""
        }`}
      />

      {/* Central Metallic HUD Loading Interface */}
      <div
        className={`loader-hud-container ${
          isFadingHud ? "hud-fade-out" : ""
        }`}
      >
        <div className="loader-hud-content">
          <div className="loader-counter-display">
            <span className="loader-number">{progress}</span>
            <span className="loader-percent">%</span>
          </div>

          {/* Sleek Metallic Progress Bar */}
          <div className="loader-bar-outer">
            <div
              className="loader-bar-inner"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
