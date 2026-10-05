import { MetadataRoute } from "next";

const siteUrl = "https://www.vriddhiassociates.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      priority: 1,
    },
  ];
}
