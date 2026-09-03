// Mapping of Event IDs & aliases to official Google Form registration links
export const EVENT_REGISTRATION_LINKS: Record<string, string> = {
  // 1. Drone Obstacle Course / Falcon Strike
  "falcon-strike": "https://forms.gle/sMXNxXFRSriizdGh7",
  "drone-arena": "https://forms.gle/sMXNxXFRSriizdGh7",
  "drone-obstacle": "https://forms.gle/sMXNxXFRSriizdGh7",
  "falcon strike": "https://forms.gle/sMXNxXFRSriizdGh7",

  // 2. Project Ultron / IoT Display
  "ultron": "https://forms.gle/TQBDYEtTqSSkGhdR7",
  "project-ultron": "https://forms.gle/TQBDYEtTqSSkGhdR7",
  "iot-display": "https://forms.gle/TQBDYEtTqSSkGhdR7",
  "project ultron": "https://forms.gle/TQBDYEtTqSSkGhdR7",

  // 3. Ideathon / Agentic AI
  "multiverse": "https://forms.gle/oDAdvxs7fg6viyuXA",
  "multiverse-of-ideas": "https://forms.gle/oDAdvxs7fg6viyuXA",
  "ideathon": "https://forms.gle/oDAdvxs7fg6viyuXA",

  // 4. FreeFire / Civil Wars
  "civil-wars": "https://forms.gle/mc3Fqu7PjZDF7Z1a9",
  "freefire": "https://forms.gle/mc3Fqu7PjZDF7Z1a9",
  "free-fire": "https://forms.gle/mc3Fqu7PjZDF7Z1a9",
  "civil wars": "https://forms.gle/mc3Fqu7PjZDF7Z1a9",

  // 5. Nextech 2.0
  "nextech": "https://forms.gle/a5Ku5skKYipyPF4o7",
  "nextech-2": "https://forms.gle/a5Ku5skKYipyPF4o7",
  "nextech 2.0": "https://forms.gle/a5Ku5skKYipyPF4o7",

  // 6. Technical Poster Presentation / Stark Expo
  "tech-poster": "https://forms.gle/42MMzzfjJRKKA84b9",
  "technical-poster": "https://forms.gle/42MMzzfjJRKKA84b9",
  "stark-expo": "https://forms.gle/42MMzzfjJRKKA84b9",

  // 7. TechBiz Quiz / Quantumania
  "quantumania": "https://forms.gle/Cz3xXSj118PxoQQF8",
  "techbiz-quiz": "https://forms.gle/Cz3xXSj118PxoQQF8",

  // 8. Canvas Painting / Infinity Canvas
  "infinity-canvas": "https://forms.gle/eboJZ7eihgdHXa666",
  "canvas-painting": "https://forms.gle/eboJZ7eihgdHXa666",

  // 9. CXO Roundtable / Shield Boardroom
  "cxo-summit": "https://forms.gle/Dqj4zCB7DtUZ4nb6A",
  "cxo-roundtable": "https://forms.gle/Dqj4zCB7DtUZ4nb6A",
  "shield-boardroom": "https://forms.gle/Dqj4zCB7DtUZ4nb6A",

  // 10. Seminar / Marvel of Minds
  "marvel-minds": "https://forms.gle/YiCNmv9xtRQ6geTg6",
  "seminar": "https://forms.gle/YiCNmv9xtRQ6geTg6",

  // 11. Fireside Chat / Council of Heroes
  "council-heroes": "https://forms.gle/BG4BgSWEDm9r2u4m6",
  "council-of-heroes": "https://forms.gle/BG4BgSWEDm9r2u4m6",
  "fireside-chat": "https://forms.gle/BG4BgSWEDm9r2u4m6",

  // 12. Ad Mad Show / Thunderbolts
  "ad-mad": "https://forms.gle/AwF261EDazXgKDYB8",
  "thunderbolts": "https://forms.gle/AwF261EDazXgKDYB8",
  "ad-mad-show": "https://forms.gle/AwF261EDazXgKDYB8",

  // 13. Face Painting / Infinity Faces
  "face-painting": "https://forms.gle/xeny2dPtw2ExGWc37",
  "infinity-faces": "https://forms.gle/xeny2dPtw2ExGWc37",

  // 14. Marketing Maverick / Battle of Brands
  "marketing-showdown": "https://forms.gle/wmNdJcSVfvUZxZ779",
  "marketing-maverick": "https://forms.gle/wmNdJcSVfvUZxZ779",
  "battle-of-brands": "https://forms.gle/wmNdJcSVfvUZxZ779",

  // Default General Form if unmapped
  "default": "https://forms.gle/a5Ku5skKYipyPF4o7",
};

export function getRegistrationUrl(eventId?: string): string {
  if (!eventId) return EVENT_REGISTRATION_LINKS["default"];
  const key = eventId.toLowerCase().trim();
  return EVENT_REGISTRATION_LINKS[key] || EVENT_REGISTRATION_LINKS["default"];
}
