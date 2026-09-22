import type { MetadataRoute } from 'next'
import { site } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: site.url, lastModified, priority: 1 },
    { url: `${site.url}/mentions-legales`, lastModified, priority: 0.3 },
    { url: `${site.url}/confidentialite`, lastModified, priority: 0.3 },
  ]
}
