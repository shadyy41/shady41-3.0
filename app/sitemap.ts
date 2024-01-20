import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://shady41.vercel.app',
      lastModified: new Date(),
      priority: 1
    },
    {
      url: 'https://shady41.vercel.app/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://shady41.vercel.app/work',
      lastModified: new Date(),
    },
    {
      url: 'https://shady41.vercel.app/work/project/codeshack',
      lastModified: new Date(),
    },
    {
      url: 'https://shady41.vercel.app/work/project/breeze',
      lastModified: new Date(),
    },
    {
      url: 'https://shady41.vercel.app/work/project/snippetshare',
      lastModified: new Date(),
    },
    {
      url: 'https://shady41.vercel.app/work/project/tictactoe',
      lastModified: new Date(),
    },
  ]
}