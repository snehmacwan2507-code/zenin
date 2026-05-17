import type { MetadataRoute } from "next";

export const siteConfig = {
  name: "Zenin Growth Partners",
  shortName: "Zenin Growth Partners",
  tagline: "growth partners",
  description:
    "Zenin Growth Partners handles operations, customer support, and backend workflows so your team can focus on growth.",
  url: "https://www.zeningrowthpartners.com",
  logoPath: "/logo-dragon-transparent-v2.png",
  ogImagePath: "/og-image.svg",
  emails: {
    hello: "hello@zeningrowthpartners.com",
    careers: "careers@zeningrowthpartners.com",
    directors: [
      "sneh@zeningrowthpartners.com",
      "cajetan@zeningrowthpartners.com",
    ],
  },
} as const;

export const sitePages: Array<{
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  {
    path: "/services/customer-care-outsourcing",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/services/back-office-operations",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/services/customer-experience",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/services/sales-support-lead-gen",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  { path: "/about", changeFrequency: "monthly", priority: 0.75 },
  { path: "/careers", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
];
