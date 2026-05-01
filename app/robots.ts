import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://shamanaz12.github.io/shama-resume/sitemap.xml', // Update this after you have a final domain
  };
}
