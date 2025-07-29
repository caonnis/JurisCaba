import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.juriscaba.com", // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // Add other pages if you have them, e.g., /servicios, /contacto
    // {
    //   url: 'https://www.juriscaba.com/servicios',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: 'https://www.juriscaba.com/contacto',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
  ]
}
