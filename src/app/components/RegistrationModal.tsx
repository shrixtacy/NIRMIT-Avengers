"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface RegistrationModalContextType {
  isOpen: boolean;
  selectedEventId?: string;
  openModal: (eventId?: string | React.MouseEvent) => void;
  closeModal: () => void;
}

const RegistrationModalContext = createContext<RegistrationModalContextType | undefined>(undefined);

export function RegistrationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | undefined>(undefined);

  const openModal = (eventId?: string | React.MouseEvent) => {
    let targetId: string | undefined = undefined;
    if (typeof eventId === "string") {
      targetId = eventId;
    }
    setSelectedEventId(targetId);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedEventId(undefined);
  };

  return (
    <RegistrationModalContext.Provider value={{ isOpen, selectedEventId, openModal, closeModal }}>
      {children}
      {isOpen && <RegistrationModalOverlay eventId={selectedEventId} onClose={closeModal} />}
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

function RegistrationModalOverlay({ eventId, onClose }: { eventId?: string; onClose: () => void }) {
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
      }}
    >
      <div
        className="reg-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "min(520px, 94vw)",
          background: "linear-gradient(145deg, #0f172a 0%, #030712 100%)",
          border: "1.5px solid rgba(255, 255, 255, 0.25)",
          borderRadius: "24px",
          padding: "40px 32px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.95), 0 0 40px rgba(255, 255, 255, 0.15)",
          textAlign: "center",
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
          }}
        >
          ✕
        </button>

        {/* Shield Icon / Badge */}
        <div style={{ marginBottom: "20px" }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.78rem",
              fontWeight: 800,
              letterSpacing: "0.15em",
              color: "#f59e0b",
              background: "rgba(245, 158, 11, 0.12)",
              border: "1px solid rgba(245, 158, 11, 0.35)",
              padding: "6px 18px",
              borderRadius: "999px",
              textTransform: "uppercase",
            }}
          >
            🗓️ REGISTRATION ANNOUNCEMENT
          </span>
        </div>

        {/* Main Heading */}
        <h3
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            letterSpacing: "0.04em",
            margin: "0 0 14px 0",
            color: "#ffffff",
            lineHeight: 1.05,
          }}
        >
          FORM WILL OPEN ON<br />
          <span style={{ color: "#38bdf8", textShadow: "0 0 20px rgba(56, 189, 248, 0.5)" }}>5TH SEPT 2026</span>
        </h3>

        <p
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: "0.95rem",
            color: "rgba(241, 245, 249, 0.85)",
            lineHeight: 1.6,
            margin: "0 0 24px 0",
          }}
        >
          Official registration forms for NIRMIT 2.0 will be released on <strong>5th September 2026</strong>. Prepare your team and stay tuned!
        </p>

        {/* Event Specific Badge if triggered from an event page */}
        {eventId && (
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "12px",
              padding: "12px",
              marginBottom: "24px",
              fontSize: "0.82rem",
              fontFamily: "var(--font-geist-mono), monospace",
              color: "#cbd5e1",
            }}
          >
            TARGET EVENT: <strong style={{ color: "#ffffff", textTransform: "uppercase" }}>{eventId.replace(/-/g, " ")}</strong>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={onClose}
          className="fast-assemble-btn"
          style={{
            width: "100%",
            justifyContent: "center",
            padding: "14px 28px",
            fontSize: "0.92rem",
            cursor: "pointer",
            border: "none",
          }}
        >
          GOT IT, I WILL CHECK BACK ON 5TH SEPT →
        </button>
      </div>
    </div>
  );
}

