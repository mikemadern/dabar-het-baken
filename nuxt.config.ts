import tailwindcss from '@tailwindcss/vite'
import { albums } from './app/data/albums'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@vercel/analytics/nuxt',
    '@nuxtjs/seo',
  ],
  // Gedeelde instellingen voor @nuxtjs/seo (canonical, Open Graph, sitemap, robots, JSON-LD)
  site: {
    // Voorlopig het beoogde domein; definitief zodra het aan Vercel gekoppeld is (#24)
    url: 'https://dabarhetbaken.nl',
    name: 'Dabar Het Baken',
    description:
      'Interkerkelijke evangelisatie- en recreatiecommissie op Camping Kriemelberg Bushcamp in Ermelo.',
    // Met regio, zodat ook og:locale (nl_NL) wordt gezet; <html lang> wordt "nl-NL"
    defaultLocale: 'nl-NL',
    separator: '—',
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Dabar Het Baken',
      alternateName: 'Het Baken Harderwijk',
      logo: '/images/logo-het-baken.svg',
      email: 'dabarhetbaken@gmail.com',
      sameAs: [
        'https://www.facebook.com/baken.harderwijk/',
        'https://www.instagram.com/baken_harderwijk/',
        'https://www.youtube.com/@bakenharderwijk7193',
      ],
    },
  },
  // De albumpagina's zijn een dynamische route en staan daarom niet vanzelf in de sitemap
  sitemap: {
    urls: albums.map((album) => ({ loc: `/fotos/${album.slug}` })),
  },
  // Twee modules uit de bundel die we niet willen: llms.txt en Markdown-versies van pagina's,
  // en het bewaren van oude builds
  aiReady: false,
  skewProtection: false,
  // De deelafbeelding is een vast bestand (public/og-image.jpg), dus geen afbeeldingen genereren
  ogImage: { enabled: false },
  // De site wordt niet vooraf gegenereerd, dus er is op build-tijd niets te controleren
  linkChecker: { runOnBuild: false },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
