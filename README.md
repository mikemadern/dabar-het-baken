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
npm run build     # productiebuild, hetzelfde als de CI (controleert eerst de deelafbeeldingen)
npm run preview   # de gebouwde site lokaal bekijken
npm run og        # de deelafbeeldingen opnieuw maken (zie "Deelafbeeldingen")
npm run og:check  # controleren of de deelafbeeldingen nog kloppen
```

## Indeling

```
app/pages/           de pagina's, één bestand per route (fotos/[album].vue is de albumpagina);
                     elke pagina zet `title` en `description` met `useSeoMeta`, zonder de sitenaam
                     (die voegt het titelsjabloon zelf toe)
app/components/      PageHeader, StickerLabel en ValueTicker
app/layouts/         default.vue met het menu en de footer
app/data/albums.ts   de fotoalbums
app/data/shareImages.json  per pagina label, titel, foto, uitsnede en alt van de deelafbeelding
app/composables/     useShareImage: kiest de deelafbeelding bij de pagina
scripts/og/          het script dat de deelafbeeldingen maakt en controleert (maak.mjs, check.mjs, manifest.json)
scripts/geen-em-dash.mjs  controleert dat er geen lang gedachtestreepje in app/, content/ en public/ staat (draait in npm run build)
app/assets/css/      Tailwind-instellingen, kleuren en lettertypen
public/images/       afbeeldingen (galerij/ en headers/)
public/og/           de deelafbeeldingen bij het delen van een link, één per pagina en per album (1200 × 630)
public/og-image.jpg  de oude, algemene deelafbeelding (blijft staan als terugval)
public/documenten/   downloads, zoals de vacature
```

## Foto's toevoegen

1. Verklein de foto tot maximaal 2000 px breed en zet hem in `public/images/galerij/`.
2. Voeg hem toe aan het juiste album in `app/data/albums.ts` (`src` en een `alt`-tekst), of maak een nieuw album aan.
3. Bekijk de foto zelf en houd je aan het fotobeleid op de site (pagina `/fotobeleid`).

Ruwe originelen horen niet in deze repository; ze worden bewaard in de aparte documentenmap, buiten deze repository.

## Deelafbeeldingen

Elke pagina en elk album heeft een eigen afbeelding voor als je een link deelt (WhatsApp, Facebook, X, LinkedIn):
`public/og/<naam>.jpg`, 1200 × 630, onder 200 KB. De foto is de kopfoto van de pagina, met het logo, een gele sticker
(het label) en een blauw plaatje met de titel. Ze worden niet bij elke bouw gemaakt maar staan in de repo.

**Na een wijziging opnieuw maken** (één commando):

```bash
npm run og
```

Commit daarna de gewijzigde bestanden in `public/og/` en `scripts/og/manifest.json`. `npm run og -- home` maakt alleen
`home` opnieuw.

Wanneer? Als je een titel of label, de foto of de uitsnede van een pagina wijzigt, een album toevoegt of hernoemt, de
eerste foto van een album wijzigt, of het logo of de opmaak (`scripts/og/maak.mjs`) verandert. Je hoeft het niet te onthouden:
`npm run build` (en dus de CI) controleert dit eerst met `npm run og:check` en faalt als een afbeelding ontbreekt, niet
meer past bij de gegevens, niet 1200 × 630 is, groter is dan 200 KB, of bij niets meer hoort. De melding zegt welke.

**Een nieuwe pagina toevoegen:** zet een blok in `pages` in `app/data/shareImages.json` met `key` (de bestandsnaam), `path`,
`sticker` (het label), `title` (maximaal twee regels, met de hand gelijkmatig afgebroken), `photo`, `position` (uitsnede in
procenten, zoals `object-position`) en `alt`. Draai daarna `npm run og`. Niets anders: de pagina vindt de afbeelding zelf.

**Een nieuw album** hoef je nergens toe te voegen: het script maakt de afbeelding vanzelf uit `app/data/albums.ts`
(titel = albumtitel, foto = eerste foto). Wil je een andere uitsnede of een eigen alt, zet dat dan bij `albums.overrides` in
`shareImages.json`.

Een link naar één foto in een album (`?foto=…`) toont die foto zelf als voorbeeld, in een kleinere versie van 1200 × 630.

Techniek: [satori](https://github.com/vercel/satori) (tekst en vormen) en [sharp](https://sharp.pixelplumbing.com) (foto en
jpg), beide alleen als `devDependencies`. De check zelf gebruikt alleen Node. Node 22.18 of nieuwer is nodig (`.nvmrc`).

## Documentatie in de repo

| Bestand | Waar het over gaat |
|---|---|
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | de werkwijze (issue, branch, PR), de milestones en de checks |
| [`SECURITY.md`](SECURITY.md) | hoe je een kwetsbaarheid vertrouwelijk meldt |

Feiten, besluiten en open vragen over de site, de shotlist, de huisstijl en de communicatie staan niet in deze (openbare) repository, maar in een aparte documentenmap.

## Meewerken

Direct pushen naar `develop` kan niet. Werk via een issue, een branch en een pull request; zie [`CONTRIBUTING.md`](CONTRIBUTING.md).
