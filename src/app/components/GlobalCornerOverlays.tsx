"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function GlobalCornerOverlays() {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setIsOpened(false);
      const t = setTimeout(() => setIsOpened(true), 900);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  const cornerSize = isMobile ? "clamp(220px, 52vw, 340px)" : "clamp(280px, 34vw, 560px)";

  // Only animate transform — GPU composited, zero layout cost = no glitch
  const closeT = "transform 0.55s cubic-bezier(0.55, 0, 1, 0.45)";
  const openT  = "transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)";
  const t      = isOpened ? openT : closeT;

  return (
    <>
      {/* Blur overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          pointerEvents: "none",
          backdropFilter: isOpened ? "blur(0px)" : "blur(14px)",
          WebkitBackdropFilter: isOpened ? "blur(0px)" : "blur(14px)",
          background: isOpened ? "rgba(0,0,0,0)" : "rgba(4,5,7,0.55)",
          transition: isOpened
            ? "backdrop-filter 0.6s ease, background 0.6s ease"
            : "backdrop-filter 0.35s ease, background 0.35s ease",
        }}
      />

      {/* Bottom Left — pinned to bottom-left, translate toward center when closed */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: isMobile ? "-4px" : "8px",
          zIndex: 9999,
          pointerEvents: "none",
          width: cornerSize,
          height: cornerSize,
          // translate to center = move right by ~50vw and up by ~50vh
          transform: isOpened
            ? "translate3d(0, 0, 0) scale(1)"
            : "translate3d(calc(50vw - 50%), calc(-50vh + 50%), 0) scale(1.15)",
          transition: t,
          willChange: "transform",
          filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.85))",
        }}
      >
        <Image
          src="/corner-bottom-left.webp"
          alt=""
          fill
          priority
          unoptimized
          style={{ objectFit: "contain", objectPosition: "bottom left", pointerEvents: "none" }}
        />
      </div>

      {/* Top Right — pinned to top-right, translate toward center when closed */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isMobile ? "-4px" : "0px",
          zIndex: 9999,
          pointerEvents: "none",
          width: cornerSize,
          height: cornerSize,
          transform: isOpened
            ? "translate3d(0, 0, 0) scale(1)"
            : "translate3d(calc(-50vw + 50%), calc(50vh - 50%), 0) scale(1.15)",
          transition: t,
          willChange: "transform",
          filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.85))",
        }}
      >
        <Image
          src="/corner-top-right.webp"
          alt=""
          fill
          priority
          unoptimized
          style={{ objectFit: "contain", objectPosition: "top right", pointerEvents: "none" }}
        />
      </div>
    </>
  );
}
