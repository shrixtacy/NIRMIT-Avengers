"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface RegistrationModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const RegistrationModalContext = createContext<RegistrationModalContextType | undefined>(undefined);

export function RegistrationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <RegistrationModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && <RegistrationModalOverlay onClose={closeModal} />}
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

function RegistrationModalOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="reg-modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999999,
        background: "rgba(3, 7, 18, 0.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
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
          width: "min(520px, 92vw)",
          background: "linear-gradient(145deg, #0f172a 0%, #030712 100%)",
          border: "1.5px solid rgba(56, 189, 248, 0.4)",
          borderRadius: "24px",
          padding: "36px 28px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(56, 189, 248, 0.25)",
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
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(239, 68, 68, 0.2)";
            e.currentTarget.style.borderColor = "#ef4444";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
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
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#38bdf8",
              background: "rgba(56, 189, 248, 0.12)",
              border: "1px solid rgba(56, 189, 248, 0.35)",
              padding: "6px 18px",
              borderRadius: "999px",
              textTransform: "uppercase",
            }}
          >
            /// NOTICE PROTOCOL
          </span>
        </div>

        {/* Main Heading */}
        <h3
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            fontSize: "clamp(2rem, 6vw, 3rem)",
            letterSpacing: "0.04em",
            margin: "0 0 12px 0",
            background: "linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1,
          }}
        >
          REGISTRATIONS START ON 5TH SEPT
        </h3>

        {/* Description Text */}
        <p
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: "0.95rem",
            color: "rgba(241, 245, 249, 0.85)",
            lineHeight: 1.6,
            margin: "0 0 28px 0",
          }}
        >
          Online registrations for <strong>NIRMIT 2.0 Edition</strong> will officially open on <strong>September 5th, 2026</strong>. Assemble your teams and stay tuned!
        </p>

        {/* Action Button */}
        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: "14px 24px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            color: "#ffffff",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.9rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            cursor: "pointer",
            boxShadow: "0 10px 25px rgba(56, 189, 248, 0.4)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 14px 30px rgba(56, 189, 248, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(56, 189, 248, 0.4)";
          }}
        >
          GOT IT — CLOSE
        </button>
      </div>
    </div>
  );
}
