import { MetadataRoute } from "next";

const baseUrl = "https://nirmit.space";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // All individual 15 events
  const eventIds = [
    "falcon-strike",
    "nextech",
    "multiverse",
    "ultron",
    "civil-wars",
    "groove",
    "quantumania",
    "infinity-canvas",
    "council-heroes",
    "marvel-minds",
    "tech-poster",
    "ad-mad",
    "marketing-showdown",
    "cxo-summit",
    "face-painting",
  ];

  const eventEntries: MetadataRoute.Sitemap = eventIds.map((id) => ({
    url: `${baseUrl}/events/${id}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0, // Home given top priority
    },
    {
      url: `${baseUrl}/events`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9, // Events catalog
    },
    ...eventEntries,
    {
      url: `${baseUrl}/timeline`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7, // Timeline
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5, // Contact
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4, // Gallery
    },
    {
      url: `${baseUrl}/rules`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3, // Rules & Regulations (least priority)
    },
  ];
}
