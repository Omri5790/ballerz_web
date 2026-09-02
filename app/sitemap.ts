import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/clubs", priority: 0.9 },
  { path: "/schools", priority: 0.9 },
  { path: "/method", priority: 0.8 },
  { path: "/centers", priority: 0.8 },
  { path: "/join", priority: 0.9 },
  { path: "/clubs/contact", priority: 0.7 },
  { path: "/about", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
