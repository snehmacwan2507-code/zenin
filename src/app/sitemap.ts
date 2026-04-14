import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zeningrowth.com";
  
  const routes = [
    "",
    "/services",
    "/services/customer-experience",
    "/services/back-office-operations",
    "/services/sales-support-lead-gen",
    "/about",
    "/careers",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
