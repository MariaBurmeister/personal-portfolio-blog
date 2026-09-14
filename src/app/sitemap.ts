import type { MetadataRoute } from "next";

const baseUrl = "https://mariaburmeister.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/experience`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // {
    //   url: `${baseUrl}/blog`,
    //   lastModified: now,
    //   changeFrequency: "yearly",
    //   priority: 0.3,
    // },
  ];
}
