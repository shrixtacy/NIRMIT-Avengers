"use client";

export default function MarqueeBanner() {
  const marqueeItems = [
    "NIRMIT 2.0 EDITION",
    "AVENGERS ASSEMBLE",
    "10 YEARS LEGACY REBORN",
    "AGENTIC AI HACKATHON",
    "FALCON STRIKE DRONE ARENA",
    "5000+ TOP INNOVATORS",
    "NMIET BHUBANESWAR",
    "REGISTRATION DATES: TO BE REVEALED",
  ];

  const renderSilverTrack = (keyPrefix: string) => (
    <div key={keyPrefix} className="marquee-silver-item">
      {marqueeItems.map((text, idx) => (
        <span key={`${keyPrefix}-${idx}`} className="marquee-silver-item">
          <span className="marquee-text-metallic">{text}</span>
          <span className="marquee-silver-dot">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee-crossed-wrapper">
      {/* Top Ribbon - Tilted Left & Scrolling Right to Left */}
      <div className="marquee-ribbon marquee-ribbon-top">
        <div className="marquee-silver-track">
          {renderSilverTrack("top-1")}
          {renderSilverTrack("top-2")}
          {renderSilverTrack("top-3")}
          {renderSilverTrack("top-4")}
        </div>
      </div>

      {/* Bottom Ribbon - Tilted Right & Scrolling Left to Right */}
      <div className="marquee-ribbon marquee-ribbon-bottom">
        <div className="marquee-silver-track-reverse">
          {renderSilverTrack("bottom-1")}
          {renderSilverTrack("bottom-2")}
          {renderSilverTrack("bottom-3")}
          {renderSilverTrack("bottom-4")}
        </div>
      </div>
    </div>
  );
}
