import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/led2.pdf'],
    },
    sitemap: 'https://led-signs.us/sitemap.xml',
  }
}
