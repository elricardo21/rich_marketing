import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://richmarketing.cz";
  const now = new Date();

  const services = [
    "sprava-google-ads",
    "sprava-meta-ads",
    "shoptet-partner",
    "ai-automatizace-marketingu",
    "ga4-tracking-analytika",
    "ppc-pro-eshopy",
    "marketingovy-audit",
    "xml-feedy-a-porovnavace",
    "kompletni-sprava-marketingu",
    "ai-a-marketing",
  ];

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...services.map((slug) => ({
      url: `${base}/sluzby/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
