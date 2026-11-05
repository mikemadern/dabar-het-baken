# Dabar Het Baken

De website van **Dabar Het Baken** (tot nu toe Het Baken Harderwijk): een interkerkelijke evangelisatie- en recreatiecommissie die in de meivakantie en de zomerweken aanwezig is op Camping Kriemelberg Bushcamp in Ermelo. De site informeert campinggasten, werft teamleden en commissieleden, en ondersteunt de fondsenwerving.

## Techniek

- [Nuxt 4](https://nuxt.com) (Vue 3, TypeScript) met [`@nuxt/content`](https://content.nuxt.com) en [`@nuxt/image`](https://image.nuxt.com)
- [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite`; de lettertypen Ubuntu (titels) en Poppins (tekst) worden zelf gehost (Fontsource)
- Zoekmachine-optimalisatie via [`@nuxtjs/seo`](https://nuxtseo.com): meta-beschrijvingen, Open Graph, canonical, `sitemap.xml`, `robots.txt` en JSON-LD. De instellingen staan in `nuxt.config.ts`
- Hosting op [Vercel](https://vercel.com): elke PR krijgt een preview en elke merge naar `develop` wordt een productie-deployment. Bezoekcijfers lopen via Vercel Web Analytics

## Lokaal draaien

De Node-versie staat in `.nvmrc`.

```bash
nvm use
npm ci
npm run dev       # ontwikkelserver op http://localhost:3000
npm run build     # productiebuild, hetzelfde als de CI
npm run preview   # de gebouwde site lokaal bekijken
```

## Indeling

```
app/pages/           de pagina's, één bestand per route (fotos/[album].vue is de albumpagina);
                     elke pagina zet `title` en `description` met `useSeoMeta`, zonder de sitenaam
                     (die voegt het titelsjabloon zelf toe)
app/components/      PageHeader, StickerLabel en ValueTicker
app/layouts/         default.vue met het menu en de footer
app/data/albums.ts   de fotoalbums
app/assets/css/      Tailwind-instellingen, kleuren en lettertypen
public/images/       afbeeldingen (galerij/ en headers/)
public/og-image.jpg  de deelafbeelding bij het delen van een link (1200 × 630)
public/documenten/   downloads, zoals de vacature
```

## Foto's toevoegen

1. Verklein de foto tot maximaal 2000 px breed en zet hem in `public/images/galerij/`.
2. Voeg hem toe aan het juiste album in `app/data/albums.ts` (`src` en een `alt`-tekst), of maak een nieuw album aan.
3. Bekijk de foto zelf en houd je aan het fotobeleid op de site (pagina `/fotobeleid`).

Ruwe originelen horen niet in deze repository; ze worden bewaard in de aparte documentenmap, buiten deze repository.

## Documentatie in de repo

| Bestand | Waar het over gaat |
|---|---|
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | de werkwijze (issue, branch, PR), de milestones en de checks |
| [`SECURITY.md`](SECURITY.md) | hoe je een kwetsbaarheid vertrouwelijk meldt |

Feiten, besluiten en open vragen over de site, de shotlist, de huisstijl en de communicatie staan niet in deze (openbare) repository, maar in een aparte documentenmap.

## Meewerken

Direct pushen naar `develop` kan niet. Werk via een issue, een branch en een pull request; zie [`CONTRIBUTING.md`](CONTRIBUTING.md).
