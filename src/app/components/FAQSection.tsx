"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "When do NIRMIT 2.0 registrations open and close?",
    answer:
      "Registrations officially open on 4th September 2026 and close on 23rd September 2026. Official festival dates are 11th October – 15th October 2026. Seats are allocated on a First-Come, First-Served (FCFS) basis.",
  },
  {
    question: "What makes NIRMIT 2.0 Edition special?",
    answer:
      "NIRMIT 2.0 marks the grand return of NMIET's flagship festival after a 10-year hiatus following NIRMIT 1.0 (2016). It features 15+ high-octane flagship events including Falcon Strike Drone Arena, Agentic AI Hackathon, Project Ultron IoT Display, Infinity Faces, and Civil Wars Esports.",
  },
  {
    question: "How can I contact the NIRMIT 2.0 team for queries?",
    answer:
      "You can reach our official helpline desk at +91 7328829287 or email us directly at edcell@nmiet.ac.in. All student & faculty inquiries are handled through this unified contact channel.",
  },
  {
    question: "Who can participate in NIRMIT 2.0?",
    answer:
      "NIRMIT 2.0 is open to all engineering, polytechnic, science, and management students from institutions nationwide. Bring your valid college ID card for verification during on-campus reporting.",
  },
  {
    question: "How do team registrations and constraints work?",
    answer:
      "One team leader registers the squad via our portal. Note that Agentic AI Hackathon requires mandatory attendance during the Day 1 Mid-Evaluation. Teams failing mid-evaluation will not advance to Day 2 final judging.",
  },
  {
    question: "Is accommodation provided at NMIET Campus?",
    answer:
      "Yes, outstation participants can request hostel accommodation during registration. Allocation is provided on a first-come, first-served basis.",
  },
  {
    question: "What equipment must participants bring?",
    answer:
      "Hackathon coders must bring laptops & power strips; drone pilots must bring FPV rigs & LiPo safety bags; gamers must bring mobile devices with tournament builds. All venue infrastructure is provided by NMIET.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isRevealed, setIsRevealed] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  const handleTouchEnd = (index: number, e: React.TouchEvent) => {
    e.preventDefault();
    toggle(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [toggle]);

  return (
    <section id="faq" className="faq-section" ref={sectionRef} style={{ position: "relative", zIndex: 50 }}>
      <div className="section-container" style={{ position: "relative", zIndex: 50 }}>
        <div className={`faq-header reveal${isRevealed ? " revealed" : ""}`} style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="section-subtitle" style={{ margin: "12px auto 0 auto" }}>
            Got questions about NIRMIT 2.0? Find answers about registration dates, evaluation checkpoints, and campus rules.
          </p>
        </div>

        <div className="faq-list" style={{ position: "relative", zIndex: 50 }}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item reveal reveal-delay-${Math.min(index + 1, 6)}${isRevealed ? " revealed" : ""}${isOpen ? " open" : ""}`}
                style={{ position: "relative", zIndex: 50 }}
              >
                <div
                  className="faq-question"
                  onClick={() => toggle(index)}
                  onTouchEnd={(e) => handleTouchEnd(index, e)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggle(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  id={`faq-q-${index}`}
                  style={{ cursor: "pointer", touchAction: "none" }}
                >
                  <span>{item.question}</span>
                  <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
