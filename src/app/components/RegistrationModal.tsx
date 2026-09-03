"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { getRegistrationUrl, EVENT_REGISTRATION_LINKS } from "../data/registrationLinks";

interface RegistrationModalContextType {
  isOpen: boolean;
  selectedEventId?: string;
  openModal: (eventId?: string | React.MouseEvent) => void;
  closeModal: () => void;
}

const RegistrationModalContext = createContext<RegistrationModalContextType | undefined>(undefined);

export function RegistrationModalProvider({ children }: { children: ReactNode }) {
  const openModal = (eventId?: string | React.MouseEvent) => {
    let targetId: string | undefined = undefined;
    if (typeof eventId === "string") {
      targetId = eventId;
    }
    const url = getRegistrationUrl(targetId);
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const closeModal = () => {};

  return (
    <RegistrationModalContext.Provider value={{ isOpen: false, selectedEventId: undefined, openModal, closeModal }}>
      {children}
    </RegistrationModalContext.Provider>
  );
}

export function useRegistrationModal() {
  const context = useContext(RegistrationModalContext);
  if (!context) {
    throw new Error("useRegistrationModal must be used within a RegistrationModalProvider");
  }
  return context;
}

const ALL_EVENTS_LIST = [
  { name: "Drone Obstacle Course (Falcon Strike)", key: "falcon-strike" },
  { name: "IoT Display (Project Ultron)", key: "ultron" },
  { name: "Agentic AI / Ideathon", key: "multiverse" },
  { name: "FreeFire (Civil Wars)", key: "civil-wars" },
  { name: "Nextech 2.0 Project Display", key: "nextech" },
  { name: "Technical Poster Presentation", key: "tech-poster" },
  { name: "TechBiz Quiz (Quantumania)", key: "quantumania" },
  { name: "Canvas Painting (Infinity Canvas)", key: "infinity-canvas" },
  { name: "Face Painting (Infinity Faces)", key: "face-painting" },
  { name: "Marketing Maverick (Battle of Brands)", key: "marketing-showdown" },
  { name: "AD MAD SHOW (Thunderbolts)", key: "ad-mad" },
  { name: "CXO Roundtable (Shield Boardroom)", key: "cxo-summit" },
  { name: "Seminar (Marvel of Minds)", key: "marvel-minds" },
  { name: "Fireside Chat (Council of Heroes)", key: "council-heroes" },
];

function RegistrationModalOverlay({ eventId, onClose }: { eventId?: string; onClose: () => void }) {
  const activeUrl = getRegistrationUrl(eventId);

  return (
    <div
      className="reg-modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999999,
        background: "rgba(3, 7, 18, 0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        animation: "fadeIn 0.25s ease-out forwards",
      }}
    >
      <div
        className="reg-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "min(640px, 94vw)",
          maxHeight: "88vh",
          overflowY: "auto",
          background: "linear-gradient(145deg, #0f172a 0%, #030712 100%)",
          border: "1.5px solid rgba(56, 189, 248, 0.45)",
          borderRadius: "24px",
          padding: "36px 28px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.95), 0 0 40px rgba(56, 189, 248, 0.3)",
          textAlign: "center",
          animation: "scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Top Right Close 'X' Button */}
        <button
          onClick={onClose}
          aria-label="Close popup"
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#ffffff",
            fontSize: "1.2rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
        >
          ✕
        </button>

        {/* Shield Icon / Badge */}
        <div style={{ marginBottom: "16px" }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.78rem",
              fontWeight: 800,
              letterSpacing: "0.2em",
              color: "#38bdf8",
              background: "rgba(56, 189, 248, 0.12)",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              padding: "6px 18px",
              borderRadius: "999px",
              textTransform: "uppercase",
            }}
          >
            /// REGISTRATION PORTAL LIVE NOW
          </span>
        </div>

        {/* Main Heading */}
        <h3
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            fontSize: "clamp(2rem, 5vw, 2.8rem)",
            letterSpacing: "0.04em",
            margin: "0 0 10px 0",
            background: "linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.1,
          }}
        >
          OFFICIAL GOOGLE FORM REGISTRATIONS
        </h3>

        <p
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: "0.92rem",
            color: "rgba(241, 245, 249, 0.85)",
            lineHeight: 1.5,
            margin: "0 0 24px 0",
          }}
        >
          Select an event below to open its official Google Form registration sheet directly.
        </p>

        {/* If opened for a specific event */}
        {eventId && (
          <div
            style={{
              background: "rgba(56, 189, 248, 0.12)",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              borderRadius: "14px",
              padding: "18px",
              marginBottom: "24px",
            }}
          >
            <span style={{ fontSize: "0.78rem", fontFamily: "var(--font-geist-mono), monospace", color: "#38bdf8", fontWeight: 700 }}>
              SELECTED EVENT DIRECT LINK
            </span>
            <a
              href={activeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fast-assemble-btn"
              style={{
                display: "inline-flex",
                width: "100%",
                justifyContent: "center",
                marginTop: "10px",
                textDecoration: "none",
              }}
            >
              LAUNCH GOOGLE FORM FOR THIS EVENT ↗
            </a>
          </div>
        )}

        {/* List of all Event Form Links */}
        <div style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "10px", maxHeight: "320px", overflowY: "auto", paddingRight: "4px" }}>
          {ALL_EVENTS_LIST.map((item) => {
            const formUrl = getRegistrationUrl(item.key);
            const isTarget = eventId === item.key;
            return (
              <a
                key={item.key}
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  background: isTarget ? "rgba(56, 189, 248, 0.2)" : "rgba(255, 255, 255, 0.05)",
                  border: isTarget ? "1px solid rgba(56, 189, 248, 0.6)" : "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  fontFamily: "var(--font-geist-mono), monospace",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.15)";
                  e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isTarget ? "rgba(56, 189, 248, 0.2)" : "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = isTarget ? "1px solid rgba(56, 189, 248, 0.6)" : "1px solid rgba(255, 255, 255, 0.12)";
                }}
              >
                <span>{item.name}</span>
                <span style={{ color: "#38bdf8", fontWeight: 700, fontSize: "0.8rem" }}>FILL FORM ↗</span>
              </a>
            );
          })}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px 24px",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#ffffff",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          CLOSE PORTAL
        </button>
      </div>
    </div>
  );
}
