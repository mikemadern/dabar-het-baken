import { existsSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { albums } from './app/data/albums'

// De jaarverslag-PDF's (public/documenten/jaarverslag-<jaar>.pdf) komen niet in zoekmachines: een regel
// per bestand, zodat een nieuw jaarverslag er vanzelf bij komt. De rest van public/documenten (de
// vacature-PDF) blijft indexeerbaar, en de pagina /jaarverslagen ook.
const documentenMap = fileURLToPath(new URL('./public/documenten', import.meta.url))
const jaarverslagenNoindex = Object.fromEntries(
  (existsSync(documentenMap) ? readdirSync(documentenMap) : [])
    .filter((bestand) => /^jaarverslag-.+\.pdf$/.test(bestand))
    .map((bestand) => [`/documenten/${bestand}`, { headers: { 'X-Robots-Tag': 'noindex' } }]),
)

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
    separator: '|',
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Dabar Het Baken',
      logo: '/images/logo-het-baken.svg',
      email: 'dabarhetbaken@gmail.com',
      // Locatie van de camping waar de commissie zit (zoals op de contactpagina), niet het adres van de stichting
      location: {
        '@type': 'Place',
        name: 'Camping Kriemelberg Bushcamp',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Drieerweg 104',
          postalCode: '3852 MC',
          addressLocality: 'Ermelo',
          addressCountry: 'NL',
        },
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'dabarhetbaken@gmail.com',
        contactType: 'customer service',
      },
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
  // Op Vercel is de standaardkwaliteit van @nuxt/image 100, een afbeelding zonder breedte wordt
  // 1536 px en elke breedte wordt afgerond naar een waarde uit screens. Daarom kwaliteit 75 en
  // extra kleine breedtes. Vercel bewaart bewerkte afbeeldingen standaard maar 5 minuten; de
  // foto's veranderen zelden, dus een week.
  image: {
    quality: 75,
    screens: { xxs: 320, xs: 480 },
    vercel: { minimumCacheTTL: 60 * 60 * 24 * 7 },
  },
  // Beveiligingsheaders op alle pagina's en bestanden (Vercel zet er zelf alleen HSTS op). De site laadt geen scripts of
  // frames van anderen en wordt nergens ingesloten, dus: geen MIME-sniffing, niet in een frame (twee manieren, voor
  // oude en nieuwe browsers), alleen de herkomst als verwijzer naar andere sites, en geen toegang tot camera,
  // microfoon, locatie en betalen. Een Content-Security-Policy voor scripts volgt apart (vraagt een ontvangstadres).
  routeRules: {
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Content-Security-Policy': "frame-ancestors 'none'",
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
      },
    },
    // Statische bestanden uit public/ hebben geen hash in de naam; Vercel geeft ze 'max-age=0, must-revalidate', waardoor
    // de browser ze bij elk bezoek opnieuw controleert. Een week bewaren (net als de bewerkte foto's van @nuxt/image):
    // een vervangen bestand met dezelfde naam is dan hoogstens een week oud bij wie het al had. De PDF's van de
    // jaarverslagen houden hun noindex.
    '/images/**': { headers: { 'Cache-Control': 'public, max-age=604800' } },
    '/og/**': { headers: { 'Cache-Control': 'public, max-age=604800' } },
    '/documenten/**': { headers: { 'Cache-Control': 'public, max-age=604800' } },
    '/favicon.ico': { headers: { 'Cache-Control': 'public, max-age=604800' } },
    '/icon.svg': { headers: { 'Cache-Control': 'public, max-age=604800' } },
    '/apple-touch-icon.png': { headers: { 'Cache-Control': 'public, max-age=604800' } },
    '/og-image.jpg': { headers: { 'Cache-Control': 'public, max-age=604800' } },
    ...jaarverslagenNoindex,
  },
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
