"use client";

import Link from "next/link";

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socialLinks = [
  { icon: <InstagramIcon />, href: "https://instagram.com", label: "Instagram" },
  { icon: <TwitterIcon />, href: "https://x.com", label: "X (Twitter)" },
  { icon: <LinkedInIcon />, href: "https://linkedin.com", label: "LinkedIn" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Timeline", href: "/timeline" },
  { label: "Rules & Regulations", href: "/rules" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact & FAQs", href: "/contact" },
];

export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="section-container">
        <div className="footer-inner">
          {/* Brand Column */}
          <div>
            <div className="footer-brand-name">NIRMIT 2.0</div>
            <p className="footer-brand-desc">
              NM Institute of Engineering & Technology (NMIET), Bhubaneswar.
              Returning after 10 years of historic legacy — 5,000+ innovators assembling across 4 high-octane days.
            </p>
            <div className="footer-socials">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-social-link"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="footer-col-title">Navigation</p>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-col-title">Venue & Help Desk</p>
            <ul className="footer-links">
              <li>
                <a href="mailto:nirmit@nmiet.ac.in">nirmit@nmiet.ac.in</a>
              </li>
              <li>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <span>NMIET Campus, Sijua, Patrapada, Bhubaneswar, Odisha 751019</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} NIRMIT 2.0 — NMIET Bhubaneswar. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="/rules">Rules & Protocols</Link>
            <Link href="/contact">Support & FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
