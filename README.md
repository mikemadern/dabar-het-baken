# Dabar Het Baken

De website van **Dabar Het Baken** (tot nu toe Het Baken Harderwijk): een interkerkelijke evangelisatie- en recreatiecommissie die in de meivakantie en de zomerweken aanwezig is op Camping Kriemelberg Bushcamp in Ermelo. De site informeert campinggasten, werft teamleden en commissieleden, en ondersteunt de fondsenwerving.

## Techniek

- [Nuxt 4](https://nuxt.com) (Vue 3, TypeScript) met [`@nuxt/content`](https://content.nuxt.com) en [`@nuxt/image`](https://image.nuxt.com)
- [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite`; de lettertypen Fredoka en Poppins worden zelf gehost (Fontsource)
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
app/pages/           de pagina's, één bestand per route (fotos/[album].vue is de albumpagina)
app/components/      PageHeader, StickerLabel en ValueTicker
app/layouts/         default.vue met het menu en de footer
app/data/albums.ts   de fotoalbums
app/assets/css/      Tailwind-instellingen, kleuren en lettertypen
public/images/       afbeeldingen (galerij/ en headers/)
public/documenten/   downloads, zoals de vacature
```

## Foto's toevoegen

1. Verklein de foto tot maximaal 2000 px breed en zet hem in `public/images/galerij/`.
2. Voeg hem toe aan het juiste album in `app/data/albums.ts` (`src` en een `alt`-tekst), of maak een nieuw album aan.
3. Bekijk de foto zelf en houd je aan het fotobeleid op de site (pagina `/fotobeleid`).

Ruwe originelen horen niet in git; de map `photos/` wordt genegeerd.

## Documentatie in de repo

| Bestand | Waar het over gaat |
|---|---|
| [`CONTENT.md`](CONTENT.md) | alle feiten, besluiten en open vragen over de site, plus een Status-logboek |
| [`SHOTLIST.md`](SHOTLIST.md) | de lijst met gewenste foto's |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | de werkwijze (issue, branch, PR), de milestones en de checks |
| [`SECURITY.md`](SECURITY.md) | hoe je een kwetsbaarheid vertrouwelijk meldt |

## Meewerken

Direct pushen naar `develop` kan niet. Werk via een issue, een branch en een pull request; zie [`CONTRIBUTING.md`](CONTRIBUTING.md).
