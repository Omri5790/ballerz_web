import type { MetadataRoute } from "next";
import { site, features } from "@/data/site";
import { publishedArticles } from "@/data/articles";

const allRoutes = [
  { path: "/", priority: 1 },
  { path: "/combine", priority: 0.95 },
  { path: "/centers", priority: 0.9 },
  { path: "/join", priority: 0.9 },
  { path: "/method", priority: 0.85 },
  { path: "/schools", priority: 0.8 },
  { path: "/schools/articles", priority: 0.75 },
  { path: "/clubs", priority: 0.7 },
  { path: "/clubs/contact", priority: 0.6 },
  { path: "/about", priority: 0.6 },
];

const routes = allRoutes.filter(
  (r) =>
    (features.clubs || !r.path.startsWith("/clubs")) &&
    (features.combine || r.path !== "/combine"),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${site.url}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));

  const articleRoutes: MetadataRoute.Sitemap = publishedArticles.map((a) => ({
    url: `${site.url}/schools/articles/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...articleRoutes];
}
