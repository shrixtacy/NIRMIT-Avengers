"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface NavItem {
  id: string;
  href: string;
  label: string;
  icon: React.ReactNode;
}

const HomeIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const EventsIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const TimelineIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22" />
    <circle cx="12" cy="6" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="18" r="2" />
    <line x1="14" y1="6" x2="20" y2="6" />
    <line x1="14" y1="12" x2="20" y2="12" />
    <line x1="14" y1="18" x2="20" y2="18" />
  </svg>
);

const RulesIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const ContactIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const navItems: NavItem[] = [
  { id: "home",     href: "/",         label: "Home",              icon: <HomeIcon />     },
  { id: "events",   href: "/events",   label: "Events",            icon: <EventsIcon />   },
  { id: "timeline", href: "/timeline", label: "Timeline",          icon: <TimelineIcon /> },
  { id: "rules",    href: "/rules",    label: "Rules & Regs",      icon: <RulesIcon />    },
  { id: "contact",  href: "/contact",  label: "Contact",           icon: <ContactIcon />  },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [hoveredId, setHoveredId]   = useState<string | null>(null);
  const [isMobile, setIsMobile]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // ── Mobile burger layout ──────────────────────────────────────────────────
  if (isMobile) {
    return (
      <>
        {menuOpen && (
          <div
            className="mobile-nav-backdrop"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <nav id="bottom-nav" className="mobile-nav-root" aria-label="Main navigation">
          <div className={`mobile-nav-pill-wrap${menuOpen ? " open" : ""}`}>
            {/* Items stacked inside the pill */}
            <div className={`mobile-nav-items${menuOpen ? " open" : ""}`}>
              {navItems.map((item, i) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`mobile-nav-item${isActive ? " active" : ""}`}
                    style={{ transitionDelay: menuOpen ? `${i * 35}ms` : `${(navItems.length - 1 - i) * 25}ms` }}
                    onClick={() => setMenuOpen(false)}
                    aria-label={item.label}
                  >
                    <span className="mobile-nav-item-icon">{item.icon}</span>
                  </Link>
                );
              })}
            </div>

            {/* Circular Burger Button */}
            <button
              className="mobile-nav-burger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="burger-line" />
              <span className="burger-line" />
              <span className="burger-line" />
            </button>
          </div>
        </nav>
      </>
    );
  }

  // ── Desktop pill layout (unchanged) ───────────────────────────────────────
  return (
    <nav id="bottom-nav" className="bottom-nav" aria-label="Main metallic navigation">
      <div className="bottom-nav-pill-metallic">
        {navItems.map((item) => {
          const isActive  = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          const isHovered = hoveredId === item.id;
          const isExpanded = isActive || isHovered;

          return (
            <Link
              key={item.id}
              id={`nav-${item.id}`}
              href={item.href}
              className={`bottom-nav-item-metallic${isActive ? " active" : ""}${isExpanded ? " expanded" : ""}`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={item.label}
            >
              <span className="bottom-nav-icon">{item.icon}</span>
              <span className={`bottom-nav-label-grid${isExpanded ? " expanded" : ""}`}>
                <span className="bottom-nav-label-inner">{item.label}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
