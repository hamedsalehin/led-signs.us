import { MetadataRoute } from 'next'
import { products } from '../lib/products-data'
import { applications } from '../lib/applications-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://led-signs.us'

  const staticUrls = [
    '',
    '/shop/products',
    '/gallery',
    '/privacy',
    '/terms',
    '/sitemap',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const applicationUrls = applications.map((app) => ({
    url: `${baseUrl}/applications/${app.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...staticUrls, ...productUrls, ...applicationUrls]
}
