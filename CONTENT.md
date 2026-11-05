# Content — Dabar het Baken

Dit bestand verzamelt alle ruwe informatie, ideeën en tekst die later gebruikt wordt
om de website te genereren. Voeg gerust op elk moment iets toe (los stukje tekst,
een zin, een idee) — het hoeft niet compleet of netjes geformuleerd te zijn.

## Bronnen

- **https://bakenharderwijk.nl/** — de huidige (oude) website van Het Baken
  Harderwijk. Belangrijkste bron voor deze notities: hier wordt nog veel inhoud
  van overgenomen voor de nieuwe site (teksten, structuur, contactgegevens, etc.).
  Opgehaald op 2026-07-17.
- **https://www.izb.nl/dabar/camping?relation_id=32836** — het IZB/Dabar-profiel
  van de camping. Bevat actuelere info dan de oude site (o.a. programma/beschikbare
  plaatsen 2026, teamsamenstelling, extra activiteiten). Opgehaald op 2026-07-17.
- **dabarhetbaken.nl** — is al geregistreerd als domein en redirect momenteel naar
  bakenharderwijk.nl (dezelfde content). Vermeld op de IZB-pagina als het adres van
  "Dabar Het Baken".

## Over het project

- **Het Baken** is een interkerkelijke evangelisatie-/recreatiecommissie in Harderwijk.
- Sinds januari 2010 een **samenwerkingsverband** met **Dabar-IZB**, een landelijke
  organisatie die op zo'n 20 campings in Nederland actief is. *(Letterlijke
  formulering op de huidige site — bewust los verband, geen onderdeel van het IZB.)*
- Organiseert het evangelisatie- en recreatiewerk op **Camping Kriemelberg Bushcamp**
  in Ermelo.
- Non-profit, draait volledig op vrijwilligers.
- **Geschiedenis**: volgens het IZB-profiel heeft Het Baken eerst 25 jaar op een
  camping in **Hierden** gewerkt, en is sinds het einde van de vorige eeuw (ca. 1998)
  aanwezig op Kriemelberg Bushcamp. De "Baken 25 jaar"-viering in 2024 lijkt dus te
  slaan op 25 jaar op Kriemelberg specifiek — de organisatie zelf bestaat vermoedelijk
  al sinds begin jaren '70. *(Nog te bevestigen — zie Open Vragen.)*
  Jaarverslagen zijn beschikbaar vanaf 2017 (2017, 2018, 2019, 2020, 2021, 2022, 2024).
- **Rebranding**: de stichting wil naar de naam **"Dabar Het Baken"** gaan. Deze naam
  wordt door het IZB zelf al gebruikt, en het domein **dabarhetbaken.nl** is al
  geregistreerd (redirect nu nog naar de oude site).
- Dit is de stichting waarvoor de nieuwe website wordt gebouwd — zie "Bronnen"
  hierboven voor de huidige website(s).

## Doel & scope nieuwe website

- **Hoofddoel** (alle drie even belangrijk): informeren van campinggasten, werving
  van teamleden/commissieleden, en fondsenwerving.
- Een **sprekende homepage** die de sfeer meteen overbrengt.
- Pagina's hoeven **niet 1-op-1** overgenomen te worden van de oude site — de
  informatie moet vooral **overzichtelijk, gestructureerd en simpel** zijn.
- **Alleen Nederlandstalig.**

## Visueel / merk

- **Naam op de nieuwe site: "Dabar Het Baken"** — dit is besloten, de rebranding
  wordt dus al doorgevoerd in de tekst/naamgeving.
- **Logo: voorlopig het huidige logo aanhouden** ("Het Baken — Evangelisatie en
  Recreatie") totdat er een nieuw logo is voor "Dabar Het Baken".
- **Herkenningskleur: knalgeel** — de vrijwilligers dragen tijdens de zomerweken
  knalgele t-shirts. Dit is het belangrijkste visuele anker.
- Er is geen vaste huisstijl of lettertype vastgelegd — de website wordt in feite
  zelf (mede) de huisstijl.
- **Doelgroep tijdens de campingweken is vooral kinderen** — kleurgebruik en
  typografie mogen daarop aansluiten, maar mag niet te kinderachtig worden, want
  fondsenwerving en communicatie richting kerken/donateurs moet ook serieus
  overkomen.
- **Foto's**: er is weinig bestaand beeldmateriaal. Nieuwe, eigen foto's worden deze
  week gemaakt op de camping — zie [SHOTLIST.md](SHOTLIST.md) voor de lijst met
  gewenste opnames.
- **Huisstijl bevestigd** (2026-07-19, op basis van 3 bestaande social media-posts
  voor Dabar Het Baken): knalgeel **#ffe058** + lichtblauw **#38b0ff** (bevestigd
  door pixels uit de posters te meten), een vetgedrukt rond "bubble"-lettertype
  (Fredoka geïnstalleerd als beste gratis match; sinds 2026-11-03 vervangen door
  Ubuntu Bold, zie Status) voor koppen/labels, en gekantelde
  "sticker"-banners met witte/zwarte tekst voor titels/labels — vaak een gele
  naamsticker met een blauwe sticker eronder voor een subboodschap (bv. "Zoekt
  teamleden!"). Gebruiker koos expliciet om dit **overal consistent** door te
  voeren (niet alleen op camping-gerichte pagina's), ook op Missie/Steun ons.
  Geïmplementeerd: `app/assets/css/main.css` (kleuren + font via Tailwind
  `@theme`), `app/components/StickerLabel.vue` (herbruikbare gekantelde badge,
  geel of blauw).
- **Huisstijl verfijnd** (2026-07-19, op basis van een door de gebruiker zelf
  gemaakte poster "Zoekt jou!" — PDF via WhatsApp): exacte kleuren opnieuw gemeten
  uit dit (nieuwere/voorkeurs-)ontwerp en toegepast: geel **#ffde59**, blauw
  **#38b6ff**, en een nieuwe **rode accentkleur #ff3131** voor "vol"-labels.
  Twee nieuwe stijlelementen uit de poster overgenomen:
  - `app/components/ValueTicker.vue` — het blauwe "lint" met herhalende
    kernwoorden (Evangelisatie · Ontspanning · Gebed · Zingen · Ontmoeting ·
    Plezier), nu boven en onder op elke pagina via `app/layouts/default.vue`.
  - Programma 2026-pagina herbouwd naar de schema-stijl uit de poster: twee
    kolommen (Meivakantie/Zomervakantie) met zwarte balken en rode "VOL"-tags
    voor volle weken.
  - De poster leverde ook **nieuwe, actuelere programma-data**: de
    meivakantieweek is nu bekend (zaterdag 25 april t/m vrijdag 1 mei 2026) en
    zit vol, net als zomerweek 1 en 2. Zomerweek 3, 4 en 5 hebben nog ruimte.
    Verwerkt op de Programma-pagina en hieronder bij "Programma 2026".
- **Tweede lettertype toegevoegd** (2026-07-19): de poster gebruikt twee
  lettertypen — het ronde "bubble"-font (Fredoka, al geïnstalleerd; later vervangen
  door Ubuntu Bold, zie Status) alleen voor
  koppen/banners, en een strak vetgedrukt geometrisch schreefloos lettertype voor
  lopende tekst/subtitels ("EVANGELISATIE & RECREATIE"). **Poppins** geïnstalleerd
  als beste match en ingesteld als standaard bodyfont (`--font-sans` in
  `app/assets/css/main.css`). De PDF had geen ingebouwde tekstlaag (het is één
  platte afbeelding) — lettertypen zijn dus visueel geïdentificeerd, niet uit
  metadata gehaald.
- **Subtiele schuine lijn overgenomen** (2026-07-19): de poster gebruikt een
  lichte kanteling voor het lint bovenaan/onderaan. Verwerkt als:
  - `ValueTicker.vue` zelf kantelt nu subtiel (-1°) i.p.v. strak horizontaal.
  - Nieuw `app/components/DiagonalAccent.vue` — een dun, transparant, gekanteld
    lijn-element — toegevoegd aan de donkere kop-sectie van alle pagina's
    (Missie, Activiteiten, Programma, Doe mee, Steun ons, Contact, Foto's-
    overzicht + albumdetail, Fotobeleid, Jaarverslagen). Bewust *niet* op de
    homepage-hero, die al een foto+overlay heeft en anders te druk zou worden.

## Status

- **Transities in de lightbox (2026-11-05, #64)**: openen, sluiten en wisselen van foto in de albums
  (`app/pages/fotos/[album].vue`) gaan nu vloeiend in plaats van in één keer.
  - **Openen en sluiten:** de donkere laag fadet in (200 ms) en uit (150 ms) en de foto zoomt er van 94% naar
    100% in (250 ms). Een sluitende lightbox laat klikken door (`pointer-events: none`).
  - **Wisselen:** de oude foto schuift 32 px weg en fadet uit (150 ms), de nieuwe schuift erin en fadet in
    (220 ms), in de richting van de wissel: volgende van rechts naar links, vorige andersom.
  - **Geen flits:** de vorige en volgende foto worden alvast opgehaald met verborgen afbeeldingen die
    dezelfde instellingen hebben als de foto in de lightbox (`width="1600"`, `webp`), zodat de browser ze
    uit zijn cache haalt.
  - **Beweging verminderen:** met `prefers-reduced-motion: reduce` geen zoom en geen verschuiving, alleen
    een fade van 100 ms (WCAG 2.3.3 is AAA, maar het hoort bij de toegankelijkheidswerkwijze, #38).
  - **Vue-valkuil:** bij een dynamische transitienaam (de richting) gebruikt de vertrekkende foto de naam
    van de *vorige* render. Daarom zet `next()`/`prev()` eerst de richting, wacht een tick en wisselt dan
    pas de foto; anders schuift de oude foto nog de vorige kant op.
  - Ongewijzigd: focus naar binnen en terug, Tab binnen de lightbox, Esc en de pijltjestoetsen, `inert`
    op de rest van de pagina (#50). Er is geen veeg-gebaar op een telefoon toegevoegd.
- **Header blijft bovenaan staan (2026-11-05, #53)**: de header had `sticky top-0`, maar scrolde
  gewoon weg. De wrapper in `app/layouts/default.vue` had `overflow-x-hidden`, en dat maakt van die
  `div` een scrollcontainer waarin de header "plakt" aan een container die zelf niet scrolt. Besluit:
  de header **blijft plakken** (dat was de bedoeling van de code).
  - **`overflow-x-hidden` → `overflow-x-clip`:** knipt horizontaal hetzelfde af zonder scrollcontainer
    te worden. Gecontroleerd op 11 pagina's op 375 px: geen horizontaal scrollen (`scrollX` blijft 0),
    de brede ticker wordt nog steeds afgeknipt.
  - **`scroll-padding-top: 5rem` op `html`** (`app/assets/css/main.css`): de header is ±65 px hoog. Zonder
    deze ruimte komt een link of veld dat met het toetsenbord omhoog scrolt tegen de bovenrand te
    staan, dus achter de header (WCAG 2.4.11). Gemeten: zonder de instelling op 0 px, met de
    instelling op 80 px.
  - **Mobiel menu scrolt binnen zichzelf** (`max-h-[calc(100dvh-4.5rem)] overflow-y-auto`): een
    geopend menu is 324 px hoog. Op een liggende kleine telefoon (≈320 px hoog) viel het onderste
    deel buiten beeld, en omdat de header nu plakt kon je er niet naartoe scrollen.
  - Wil je de header toch niet laten plakken? Haal dan `sticky top-0 z-50` weg; `overflow-x-clip` en
    `scroll-padding-top` kunnen blijven staan.
- **Lightbox met toetsenbord en schermlezer bruikbaar (2026-11-05, #50)**: oplossing uit de
  toegankelijkheidscontrole (#38), in `app/pages/fotos/[album].vue`.
  - **Dialoog (4.1.2):** `role="dialog"`, `aria-modal="true"` en `aria-label="Foto vergroten"`.
  - **Focus (2.4.3):** bij openen gaat de focus naar de sluitknop; Tab en Shift+Tab blijven in de
    lightbox; bij sluiten (Esc, knop of klik naast de foto) komt de focus terug op de miniatuur van de
    foto die je het laatst zag.
  - **De rest van de pagina op slot:** de lightbox staat nu in `#teleports` (de plek die Nuxt naast
    `#__nuxt` aanbiedt) en zolang hij open is krijgt `#__nuxt` het attribuut `inert`. Daardoor is de
    pagina erachter niet bereikbaar met toetsenbord, muis of schermlezer. Bij sluiten en bij het
    verlaten van de pagina wordt dat weer weggehaald (ook met de terugknop van de browser).
  - De knoppen kregen een witte focusomlijning (`focus-visible`) op de donkere laag.
  - Ongewijzigd: Esc en de pijltjestoetsen, de knoppen met hun namen, het vergrendelen van scrollen.
  - **Niet getest:** met een schermlezer. Een foto wisselt met de pijltjes of de knoppen, maar de
    alt-tekst van de nieuwe foto wordt dan niet voorgelezen (voorstel voor een vervolg, zie #54).
- **Contactformulier toegankelijker (2026-11-05, #49)**: eerste oplossing uit de toegankelijkheidscontrole
  (#38). Op `/contact` (`app/pages/contact.vue`):
  - **Focus zichtbaar (2.4.7):** een veld met focus krijgt een donkere rand en een donkere omlijning van
    2 px met 2 px ruimte (`stone-900`, 17,5:1 op wit). Daarvoor was het een gele rand van 1,3:1 en
    `focus:outline-none`.
  - **Rand van de velden (1.4.11):** `stone-500` in plaats van `stone-300`: 4,8:1 in plaats van 1,5:1
    (nodig: 3:1).
  - **`autocomplete` (1.3.5):** `name` en `email` bij die twee velden, het berichtveld blijft zonder.
  - De drie klassenlijsten zijn één constante (`fieldClass`) geworden, zodat de velden gelijk blijven.
  - Niet veranderd: het formulier opent nog steeds het mailprogramma en toont geen eigen melding
    (staat als voorstel in #54).
- **Toegankelijkheidscontrole WCAG 2.2 AA (2026-11-04, #38)**: de site is getoetst en de bevindingen
  staan als losse issues. De volledige tabel met criterium, niveau en ernst staat als reactie op
  [#38](https://github.com/mikemadern/dabar-het-baken/issues/38). Er is in deze stap **niets aan de
  site veranderd**; de oplossingen komen per issue.
  - **Getest:** productiebuild van `develop`, 12 routes op 1280 en 375 px, met axe-core 4.14.0
    (WCAG 2.0, 2.1 en 2.2 A en AA plus best practices) en handmatig: echte toetsaanslagen, inzoomen tot
    320 px breed, vergrote tekstafstand, contrast over de herofoto per pixel en alle alt-teksten.
  - **Bevindingen:** #47 wit op het lichtblauw haalt 2,25:1 (huisstijl, besluit nodig); #48 kleine rode
    en grijze tekst en de hero-ondertitel op een telefoon; #49 contactformulier (focus, rand,
    `autocomplete`); #50 lightbox (dialoog, focus, Tab); #51 footerkoppen en clubnamen; #52 vacature-PDF
    niet getagd; #53 header plakt niet door `overflow-x-hidden`; #54 kleine verbeteringen en wat nog
    handmatig getest moet worden.
  - **Goed:** `lang="nl-NL"`, landmarks, alt-teksten, geen links of knoppen zonder naam, reflow en
    tekstafstand zonder afgekapte tekst, doelgrootte, hamburgermenu met het toetsenbord, statische ticker.
  - **Niet getest:** VoiceOver/TalkBack, een echt apparaat, WAVE, en de PDF's van de jaarverslagen op de
    oude site. De routelijst voor VoiceOver staat in #54.
  - **Open besluiten:** welke oplossing voor het blauw (#47, raakt ook #31), of de header moet plakken
    (#53), en of er een toegankelijkheidsverklaring komt (vinkje in #54).
- **Afbeeldingen sneller laden (2026-11-04, #44)**: de afbeeldingen waren de zwaarste onderdelen van
  elke pagina. Gemeten op de gebouwde site, op telefoonbreedte (375 px), lokaal met IPX en vóór en ná
  op dezelfde manier: 11 pagina's samen **7553 KB → 3057 KB** als alles geladen is (−60%) en
  **2203 KB** bij het eerste laden (−71%). De zwaarste afbeelding per pagina ging van maximaal
  649 KB naar maximaal 221 KB; de homepage van 1584 KB naar 522 KB (166 KB bij het laden).
  - **Paginakoppen en homepage-hero** (`PageHeader.vue`, `index.vue`): `sizes="sm:100vw md:100vw
    lg:100vw xl:100vw"` en `fetchpriority="high"`. Er stond `fill` op, maar dat is geen instelling
    van `NuxtImg`: het kwam als los attribuut op de `<img>` en de afbeelding kreeg dus geen breedte.
  - **Alles onder de vouw** is `loading="lazy"` (homepage, Activiteiten, Doe mee, Steun ons en het
    albumoverzicht). De albumminiaturen waren dat al; de lightbox laadt pas bij openen.
  - **`sizes` met een telefoonsleutel** (`375:100vw sm:100vw lg:480px`): een telefoon (375 px, 2×) krijgt
    dan 750 px in plaats van 960 tot 1120. Let op: `@nuxt/image` slaat een grootte **zonder
    schermnaam** (`100vw`) over en levert dan een afbeelding van 2 px. Gebruik een sleutel (`sm:`,
    `lg:` of een getal), of een vaste pixelbreedte (`480px`).
  - **Bijna onzichtbare achtergrond** (`welkom-camping.jpg` met 10% dekking in de donkere sectie op de
    homepage): 640 px, kwaliteit 30, één resolutie en lazy. 434 KB werd 34 KB.
  - **`nuxt.config.ts`, blok `image`:** `quality: 75`, extra schermbreedtes 320 en 480, en
    `vercel.minimumCacheTTL` van 7 dagen.
  - **Op Vercel werkt het anders dan lokaal.** `@nuxt/image` kiest daar automatisch de
    afbeeldingsdienst van Vercel (`provider: "auto"`). Zonder instelling was de kwaliteit 100, kreeg
    een afbeelding zonder breedte 1536 px, werd elke breedte afgerond naar de lijst `image.screens`
    en bewaarde Vercel bewerkte afbeeldingen maar 5 minuten. Gecontroleerd met een build met de
    Vercel-provider: 110 URL's, alle breedtes staan in de toegestane lijst (320 tot 1536) en de
    kwaliteit is overal 75 (30 voor de achtergrond). `.vercel/output/config.json` bevat de nieuwe
    lijst en `minimumCacheTTL: 604800`. Vercel staat elke kwaliteit van 1 tot 100 toe zolang
    `qualities` niet is ingesteld.
  - **Niet gemeten:** de echte snelheid op Vercel (de site staat nog achter inloggen). Dat hoort bij
    het meten na het koppelen van het domein (#40).
  - **CLS** bleef 0 bij herhaalde metingen. Eén eerste run na het laden van het tabblad gaf eenmalig
    0,038 en kwam in vijf herhalingen niet terug (waarschijnlijk een letterwissel op een koude cache).
  - **Voor een nieuwe afbeelding:** standaard `loading="lazy"`, behalve de eerste grote afbeelding
    van een pagina (`fetchpriority="high"`), en geef een `sizes` die bij de plek past.
- **No Nonsense (17+) van de site gehaald (2026-11-04, #42)**: de mannen- en vrouwenavond is niet
  langer onderdeel van het programma. Weggehaald zijn de sectie op de pagina Activiteiten en het
  label "No Nonsense 17+" bij "Voor iedere leeftijd" op de homepage.
  - De secties op Activiteiten wisselen af in achtergrond en kleur van het label, en dat staat per
    club vast in `app/pages/activiteiten.vue` (`bg` en `color`). Daarom zijn Sing-In (nu blauw op
    grijs) en Campingpastoraat (nu geel op wit) omgewisseld, en is de afsluitende "Vragen"-sectie
    grijs geworden. Het patroon is nu geel/wit, blauw/grijs, geel/wit, blauw/grijs, geel/wit en
    dan grijs. Wie een club toevoegt of weghaalt, moet `color`, `bg` en de achtergrond van de
    afsluiter opnieuw laten kloppen.
  - De foto's `groepsknuffel.jpg` en `vrijwilligers-knuffel.jpg` blijven in
    `public/images/galerij/`; ze staan ook in het album Zomerweek 1.
  - Het aanbod hieronder (Diensten) en `SHOTLIST.md` zijn bijgewerkt. De oude aantekening van
    juli 2026 over de activiteitenpagina laat ik staan als geschiedenis.
- **SEO-basis op orde met `@nuxtjs/seo` (2026-11-03, #39)**: de bundel `@nuxtjs/seo` (versie 6)
  is geïnstalleerd en ingesteld in `nuxt.config.ts` (`site`, `schemaOrg`, `sitemap`).
  - **Per pagina** (`useSeoMeta`): een eigen beschrijving en een titel zónder de sitenaam. Het
    titelsjabloon voegt " — Dabar Het Baken" toe (scheidingsteken `site.separator`), dus de
    zichtbare titels zijn gelijk gebleven. De homepage heeft `titleTemplate: '%s'`. De albumpagina's
    gebruiken de beschrijving uit `app/data/albums.ts`. Een nieuwe pagina krijgt dus altijd een
    `useSeoMeta({ title, description })`.
  - **Door de bundel gezet:** canonical, `og:title`, `og:description`, `og:type`, `og:site_name`,
    `og:url`, `og:locale` (`nl_NL`), Twitter Card, `<html lang="nl-NL">`, `robots.txt` (alles toegestaan,
    met verwijzing naar de sitemap), `sitemap.xml` en JSON-LD (WebSite, WebPage en Organization).
  - **Sitemap:** de 10 pagina's komen vanzelf; de albums (een dynamische route) staan er via
    `sitemap.urls` in `nuxt.config.ts`. Een nieuw album komt dus vanzelf mee, omdat die lijst uit
    `app/data/albums.ts` komt.
  - **Deelafbeelding:** `public/og-image.jpg` (1200 × 630, 121 KB). Een bestand met die naam wordt
    automatisch als `og:image` en Twitter-afbeelding gebruikt. Gemaakt van
    `public/images/headers/teamportret-1.jpg` met het logo in wit linksboven. Per pagina laten
    genereren (`nuxt-og-image`) is niet gekozen: dat vraagt een renderer en meer in de build.
  - **Organisatie (JSON-LD):** naam, andere naam (Het Baken Harderwijk), logo, e-mail en de drie
    sociale kanalen uit de footer. **Geen evenementen:** alle weken van het programma 2026 liggen in
    het verleden. Toevoegen kan zodra het programma van het volgende jaar bekend is.
  - **Uitgezet uit de bundel:** `aiReady` (zou `llms.txt` en Markdown-versies van pagina's publiceren),
    `skewProtection` (bewaart oude builds), de OG-afbeeldingen en de link checker bij het bouwen.
  - **Domein:** `site.url` staat op `https://dabarhetbaken.nl` en moet bevestigd worden zodra het domein
    aan Vercel gekoppeld is (#24). Alle canonical-, Open Graph- en sitemap-adressen volgen die waarde.
  - **Previews niet indexeren:** `site.env` en `site.indexable` uit `nuxt.config.ts` worden bij het
    bouwen niet overgenomen (geprobeerd). Wat wel werkt is de omgevingsvariabele `NUXT_SITE_ENV=preview`
    op runtime: dan wordt de site `noindex` en geeft `robots.txt` `Disallow: /`. Instelling voor het
    Vercel-project, alleen voor de Preview-omgeving. Previews zitten nu al achter Vercel-inlog.
  - **Snelheid gemeten** (ingebouwde browser, gebouwde site op localhost, telefoonbreedte 375 px; geen
    Lighthouse, want er staat geen Chrome op de machine): CLS 0, laden 67 ms. De homepage haalt 12
    afbeeldingen op, waarvan 8 onder de vouw, **geen enkele met `loading="lazy"`**: samen ±1,5 MB. De
    zwaarste zijn `galerij/welkom-camping.jpg` (434 KB, ver onder de vouw) en de hero (292 KB), beide
    zonder breedte-instelling. Mogelijke winst: lazy loading en een breedte voor die twee. Niet
    aangepast in deze wijziging.
  - **Pakket:** `npm install` op macOS haalt `libc`-metadata uit `package-lock.json`; die is
    hersteld en voor de nieuwe Linux-pakketten uit het npm-register aangevuld (16 stuks, 4 arm-pakketten
    hebben ook in het register geen `libc`). Houd dat in de gaten bij elke nieuwe afhankelijkheid.
  - **Nog te doen na het koppelen van het domein:** de Rich Results Test en de deelvoorbeelden van
    Facebook en LinkedIn (die hebben een openbare URL nodig), Google Search Console en Bing Webmaster Tools
    en het indienen van de sitemap, 301-redirects vanaf de oude site (`bakenharderwijk.nl`, waar ook de
    jaarverslagen-PDF's nog staan), en een Lighthouse-run op de echte site.
- **Titels in Ubuntu Bold in plaats van Fredoka (2026-11-03, #36)**: het titelfont
  (`--font-display`) is Ubuntu Bold geworden. Het wordt gebruikt voor de basisstijl van
  `h1`/`h2`/`h3`, de stickerlabels, het blauwe label in de homepage-hero en de grote
  getallen op de homepage. Poppins blijft voor lopende tekst.
  - Keuze van de gebruiker, na een proef waarin beide fonts naast elkaar bekeken zijn
    (hero, paginakop, getallen-sectie en `/missie` op mobiel). Ubuntu is strakker en
    serieuzer, Fredoka ronder en speelser. Het wijkt bewust af van de posters, die een
    rond "bubble"-lettertype gebruiken.
  - Ubuntu 700 komt via Fontsource (`@fontsource/ubuntu/700.css`, zelf gehost) en is het
    enige geladen gewicht. Ubuntu bestaat alleen in 300, 400, 500 en 700, dus `font-semibold`
    (600) valt op 700. Wie ooit een lichter titelgewicht wil, moet dat gewicht ook
    importeren. Fredoka is verwijderd (import en afhankelijkheid).
  - Gemeten op 12 pagina's, op 375 en 1280 px breed: nergens horizontale overloop. Enig
    verschil is dat de titel op `/missie` op een telefoon twee regels wordt in plaats van één.
  - Licentie: Ubuntu Font Licence 1.0 (vrij te gebruiken en in te sluiten, aangepaste
    kopieën mogen de naam niet houden). Fredoka had de SIL OFL.
- **Logo als SVG, favicon opnieuw afgeleid (2026-11-03, #34)**: het logo staat nu als
  [public/images/logo-het-baken.svg](public/images/logo-het-baken.svg) en wordt in de
  header en de footer gebruikt in plaats van het PNG.
  - Het is een **nagetekende** versie, geen origineel. In de vacature-PDF zit het logo
    alleen als JPEG van 294 × 121 px; het PNG in de repo is een vergroting daarvan. Woordmerk
    en icoon zijn uit dat PNG getraceerd: rechte randen zijn exact recht, bogen glad, en dak,
    lichtbundels en galerij zijn symmetrisch opnieuw opgebouwd. De ondertitel is niet
    getraceerd maar gezet als letters in Oswald Regular (SIL OFL), op de gemeten plek en
    breedte van elke letter; de I met dwarsstreepjes is zelf getekend. Details van de G, R
    en C kunnen afwijken van het origineel.
  - Zelfde canvas als het PNG (1402 × 333), dus de afmetingen in de layout zijn gelijk
    gebleven. Het is een gewone `<img>` en geen `NuxtImg`: IPX optimaliseert SVG's en
    herschrijft de paden, en een vector heeft geen resizing nodig.
  - `logo-het-baken.png` en `-wit-bg.png` staan nog in de repo als bron van de trace.
  - De favicon (`public/icon.svg`, `favicon.ico`, `apple-touch-icon.png`) is opnieuw
    gemaakt met de verhoudingen van het icoon uit de logo-SVG (dak, lichtbundels, galerij,
    open toren, grond), met dikkere lijnen zodat de toren op 16 px leesbaar blijft. Werkwijze
    zoals bij #30.
  - Dit is een stand-in. Het echte logo en de bijbehorende favicon blijven #31 en #32.
- **Favicon ingesteld (2026-11-02, #30; opnieuw gemaakt in #34, zie hierboven)**:
  vereenvoudigde vuurtoren (dak, twee lichtbundels, galerij, toren, grond) in bijna-zwart
  op knalgeel (`#ffde59`). Het woordmerk past niet in 16 × 16 px en het dunne lijnwerk van
  het logo verdwijnt op die grootte, daarom is het geen kopie van het logo maar een vettere
  versie met dezelfde onderdelen. De gele achtergrond houdt het icoon zichtbaar in een
  donkere tabbladbalk.
  - Bron is [public/icon.svg](public/icon.svg) (viewBox 64 × 64). Daaruit zijn
    `public/favicon.ico` (16, 32 en 48 px) en `public/apple-touch-icon.png` (180 px,
    zonder afgeronde hoeken omdat iOS zelf afrondt) gerenderd. Bij een wijziging in de
    SVG moeten die twee opnieuw gemaakt worden.
  - De `<link>`-verwijzingen staan in `app.head.link` in `nuxt.config.ts`.
  - Bij een nieuw logo voor "Dabar Het Baken" (zie Visueel / merk) hoort ook het icoon
    mee te veranderen.
- **"Foto's" gemarkeerd in het menu op albumpagina's (2026-11-02)**
  (`app/layouts/default.vue`): `/fotos` (overzicht) en `/fotos/[album]` zijn zusterroutes
  zonder gedeelde ouderroute (`fotos.vue` bestaat niet), en vue-router's `active-class`
  kijkt naar de routeketen — dus werd "Foto's" alleen op het overzicht vet, niet in een
  album. Opgelost met een kleine padcontrole in de layout i.p.v. de routing te
  verbouwen met een ouderroute:
  `isActive = (to) => route.path === to || route.path.startsWith(`${to}/`)`, gebruikt
  voor zowel het desktopmenu als het uitklapmenu (`:class` i.p.v. `active-class`).
  - Bewust `${to}/` (met slash): anders zou `/fotobeleid` ook als "Foto's" tellen
    (beide beginnen met `/foto`). Geldt automatisch ook voor toekomstige geneste pagina's.
  - De "Doe mee"-knop in de header (ring op `/doe-mee`) werkt nog via `active-class`
    en is ongewijzigd.
  - Geverifieerd: alle hoofdpagina's markeren precies hun eigen link; `/fotos`,
    `/fotos/camping` en `/fotos/zomerweek-1-2026` markeren "Foto's"; `/fotobeleid`
    markeert niets; klikken van overzicht → album → terug → Missie schakelt correct mee
    (desktop én uitklapmenu); server-gerenderde HTML = browser (geen hydratatieverschil);
    `nuxi build` slaagt.
- **Navigatiebalk gefixt tussen ~770 en ~960px + dubbele "Doe mee" opgelost (2026-11-02)**
  (`app/layouts/default.vue`): het volledige menu verscheen al vanaf `md` (768px), maar
  gemeten (met `nowrap`) heeft het ≈ 963px nodig (logo 168 + 7 links 476 + 6×24px gaps
  + knop 95 + padding/gaps 80) — daardoor braken "Programma 2026", "Doe mee" en
  "Steun ons" over twee regels.
  - "Doe mee" stond **twee keer**: als tekstlink én als gele knop (en op mobiel ook nog in
    het uitklapmenu naast diezelfde knop). De link is uit `navLinks` gehaald; de gele knop
    blijft, op elk schermformaat zichtbaar, de enige ingang. Op de Doe mee-pagina zelf
    toont de knop nu een donkere ring (`active-class="ring-2 ring-stone-900"`) als
    vervanger van de vroegere vette actieve link.
  - Zonder die link is het menu nog ≈ 876px breed — dat past nog steeds niet op 768px, ook
    niet met krappere gaps. Daarom schakelt het menu nu op `lg` (1024px) i.p.v. `md`:
    daaronder hamburger + knop (één rij, 65px hoog), vanaf 1024px het volledige menu met
    6 links en ≥ 90px speling. Links kregen `whitespace-nowrap` als extra vangnet.
  - Gemeten op 375, 768, 869, 950, 1023, 1024, 1100 en 1440px: telkens één rij, geen
    afgebroken links, knop binnen beeld, geen horizontale scroll.
  - Op albumpagina's (`/fotos/[album]`) was "Foto's" niet gemarkeerd, omdat de albumroute
    een zusterroute van `/fotos` is, geen kindroute — opgelost in de volgende entry.
- **Vercel Web Analytics toegevoegd (2026-11-02)**: `@vercel/analytics` 2.0.1
  geïnstalleerd en geactiveerd via de officiële Nuxt-module
  (`'@vercel/analytics/nuxt'` in `modules` van `nuxt.config.ts`; die registreert zelf
  een client-only plugin, er is dus geen eigen code). Geverifieerd: pageview bij het
  laden én bij navigatie tussen pagina's (dynamische routes als `/fotos/[album]`
  worden als routepatroon gemeten), in dev het debug-script (stuurt niets naar
  Vercel), in productie `/_vercel/insights/script.js`; SSR/HTML en build-grootte
  ongewijzigd.
  - **Peer-conflict opgelost met een gerichte `override`**: `@vercel/analytics` 2.0.1
    meldt als *optionele* peer `vue-router ^4`, terwijl Nuxt 4.6 vue-router 5 gebruikt,
    waardoor `npm install` met `ERESOLVE` faalde. Alleen de losse `Analytics`-component
    gebruikt vue-router; de Nuxt-module gebruikt Nuxts eigen `useRoute`/`useRouter` — de
    oude range raakt ons dus niet. In `package.json`:
    `"overrides": { "@vercel/analytics": { "vue-router": "$vue-router" } }`. Bewust
    géén `--legacy-peer-deps`/`.npmrc` (zet de peer-controle voor het hele project uit).
    Verwijder de override zodra een stabiele `@vercel/analytics` vue-router 5 toestaat
    (nu alleen canary-builds).
  - Lockfile-wijziging bewust minimaal gehouden (alleen het nieuwe pakket): lokaal npm
    10.9 haalt anders de `libc`-metadata van optionele native pakketten uit de lockfile.
  - **Web Analytics is aangezet in het Vercel-dashboard** (*Analytics → Enable*; bevestigd
    door de beheerder op 2026-11-02). Dat kan niet vanuit de repo. Van buitenaf nog niet
    gecontroleerd: het unieke productie-adres van een deployment zit achter Vercel
    Authentication, dus `/_vercel/insights/script.js` is daar niet te testen. De controle
    op het eigen domein staat in issue #24.
- **Activiteiten-pagina herbouwd tot volwaardige secties per club (2026-07-22)**:
  op verzoek zijn de 6 club-items (Kinderclub, Teen Spirit, Chatpoint, No
  Nonsense, Sing-In, Campingpastoraat) niet langer kleine tekstkaartjes, maar
  volledige, afwisselende secties naar het voorbeeld van de homepage-teasers:
  een fotocollage (2-3 foto's) naast uitgeschreven tekst (2 alinea's per club,
  gebaseerd op de echte programmadetails uit de sectie Diensten/aanbod
  hierboven — tijden, "sporen", Youth for Christ-programma's Rock Solid/Solid
  Friends, de drie aspecten van het campingpastoraat), met per club een
  afwisselende layout (foto links/rechts) en achtergrond (wit/`stone-50`) en
  een label in de bijpassende kleur (geel/blauw, afwisselend).
  - Drie extra foto's verwerkt (resize + kopie naar `public/images/galerij/`,
    dezelfde `sips`-instellingen als eerder) om elke sectie een eigen collage
    te geven: `poppenkast-publiek.jpg`, `ferdinand-in-gesprek.jpg` en
    `volwassenen-gesprek.jpg` (dit laatste stel voor Campingpastoraat, samen
    met het al bestaande `gasten-koffie-terras.jpg`).
  - No Nonsense heeft (bewust) maar 2 foto's i.p.v. 3 — er was geen foto uit
    deze shoot die een mannen-/vrouwenavond letterlijk toont; de collage-layout
    is dynamisch (2 vs. 3 foto's geven een andere grid) om dat op te vangen
    zonder lege vakken.
  - Geverifieerd op desktop + mobiel (alle 6 secties, beide collage-varianten)
    en met een succesvolle `nuxi build`.
- **Nieuwe zomerweek-foto's ook verwerkt in headers en homepage-content**
  (2026-07-22, vervolg op de albumuitbreiding hieronder): uit de 49 net
  toegevoegde foto's een selectie gebruikt voor site-brede content, allemaal
  rechtstreeks vanuit `/images/galerij/` (geen nieuwe resizes nodig):
  - Paginaheaders vervangen (`PageHeader`'s `image`-prop): Missie →
    `gezamenlijke-maaltijd.jpg`, Activiteiten → `vreugde-door-het-water.jpg`,
    Programma 2026 → `broodjebakken-groep.jpg`, Doe mee →
    `team-groepsfoto-juichend.jpg`, Contact → `team-groepsfoto-welkom.jpg`,
    Jaarverslagen → `radslag-actie.jpg`, Foto's-overzicht →
    `poppenkast-pippi.jpg` (vervangt de oudere `poppenkast.jpg`).
    Fotobeleid en Steun ons bewust ongewijzigd gelaten: die headers zijn
    neutraal (fotobeleid) of direct gekoppeld aan specifieke content ernaast
    (de rode telefooncel bij Steun ons) en werden niet duidelijk verbeterd
    door een van de nieuwe foto's.
  - Homepage: in de Activiteiten-fotocollage `poppenkast.jpg` en
    `voetbal-alt.jpg` vervangen door `limbo-hawaiifeest.jpg` en
    `voetballen-in-kooi.jpg`; in de Doe mee-sectie `clowns-sprong.jpg` +
    `teamportret-2.jpg` vervangen door `verkleedpartij-rennen-camping.jpg` +
    `team-armen-omhoog.jpg`.
  - Geverifieerd op elke aangepaste pagina (desktop + mobiel voor de homepage)
    en met een succesvolle `nuxi build`.
- **Zomerweek 1-album flink uitgebreid met vier nieuwe shootdagen** (2026-07-22):
  nieuwe foto's ontvangen in `/Users/mike/Documents/20260719 - Baken Zomerweek 1 - ZO`
  t/m `.../20260722 - Baken Zomerweek 1 - WO` (zondag t/m woensdag van dezelfde
  zomerweek, bestandsnamen `baken-zw2-*` t/m `baken-zw5-*`; elke dagmap heeft een
  `NEF`-map met ruwe camerabestanden — genegeerd, alleen de al-geselecteerde
  `export-*`-map per dag is gebruikt). In totaal 147 export-foto's stuk voor stuk
  bekeken (via 4 parallelle subagents, één per dag, om context te sparen — elke
  agent moest elk bestand echt openen i.p.v. op bestandsnaam te gokken, vanwege
  eerdere nummer-op-inhoud-fouten). Daaruit 49 foto's geselecteerd en verwerkt
  (resize naar max 2000px breed, kwaliteit 82 via `sips`, beschrijvende
  bestandsnamen) en toegevoegd aan het bestaande `zomerweek-1-2026`-album in
  `app/data/albums.ts` — dat album ging van 9 naar 58 foto's. De week bleek veel
  meer te omvatten dan eerder bekend: een Sing-In met live muziek en kerkbezoek
  (zondag), een Hawaii-thema met limbo en een vintage-kostuumskit (maandag), een
  grote gezamenlijke maaltijd, waterglijbaan/waterpistolen-middag en
  broodjebakken-kampvuur (dinsdag), en een kinderclub-kringgesprek, poppenkast en
  bingoavond (woensdag) — de albumbeschrijving is hierop aangepast. Album en
  lightbox (navigatie, teller, wrap-around) geverifieerd met de volledige set
  van 58 foto's, en met een succesvolle `nuxi build`. Nog niet gedaan: geen van
  deze nieuwe foto's is gebruikt als vervanging van bestaande headerfoto's of
  homepage-afbeeldingen elders op de site — dat was niet expliciet gevraagd,
  maar er zitten sterke kandidaten tussen (bv. `gezamenlijke-maaltijd.jpg`,
  `vreugde-door-het-water.jpg`, `lydia-kinderclub-kring.jpg`) mocht dat later
  gewenst zijn.
- **Homepage-hero volledig herbouwd tot een echte hero** (2026-07-20): de eerdere
  poging (schuine `clip-path`-onderrand + negatieve margin om de `ValueTicker`
  ertegenaan te laten sluiten) bleek in de praktijk stuk: de knoppenrij zat te
  dicht op de clip-lijn (kon weg geclipt raken) en de kanteling was links dieper
  dan rechts terwijl de ticker overal met dezelfde vaste marge omhoog werd
  getrokken — sloot dus links wél en rechts niet goed aan. Geconstateerd dat de
  hero sowieso te veel tekst bevatte voor een hero (lange label-zin, twee
  intro-alinea's die grotendeels dezelfde inhoud als de Missie-sectie
  herhaalden, drie CTA's) — helemaal herbouwd i.p.v. verder gepatcht:
  - Geen `clip-path` meer op de hero: gewoon een rechthoekige, volle-breedte
    foto-sectie (`min-h-[560px] sm:min-h-[680px]`, tekst onderaan via
    `items-end`), met de `ValueTicker` er zonder negatieve margin direct onder
    — sluit altijd netjes aan, ongeacht viewportbreedte of tekstlengte.
  - Content drastisch ingekort en gecentreerd: kort label ("Camping
    Kriemelberg Bushcamp, Ermelo"), `Dabar Het Baken` als titel, één regel
    tagline ("Evangelisatie door recreatie — zes weken per jaar...") i.p.v. twee
    alinea's, en nog maar 2 CTA's (Programma voor gasten / Word vrijwilliger —
    "Steun ons werk" eruit, staat al in een eigen homepage-sectie en op zijn
    eigen pagina).
  - Dit is bewust een andere opzet dan `PageHeader.vue` (geen schuine rand, wél
    gecentreerd) — de homepage-hero is de "voordeur" en hoeft niet dezelfde
    formule als de subpagina-headers te volgen.
  - Geverifieerd op meerdere breedtes (375, 800, 1440) en mobiel, en met een
    succesvolle `nuxi build`.
- **"Doe mee"-pagina overgezet op `PageHeader.vue` en opnieuw opgebouwd** (2026-07-20):
  had net als de albumdetailpagina nog een eigen bespoke donkere hero. Nu:
  - `PageHeader` met `/images/headers/team-gesprek-gast.jpg`, label "Doe mee",
    titel "Word onderdeel van het team" (was kaal "Doe mee").
  - De pagina is in drie duidelijke secties opgeknipt i.p.v. één lange sectie:
    (1) intro + "Zoekt teamleden voor 2026"-badge + CTA's naast de
    campingkind-foto (`team-kind-spelen.jpg`), (2) de vijf rollen
    (Commissielid/Teamlid/Mentor/Kerkambassadeur/Campingpastor) nu als
    kaarten-grid (`sm:grid-cols-2`) i.p.v. een gestapelde lijst, met
    mail/vacature-CTA's eronder, (3) de lijst met steunende kerken.
  - Inhoud/teksten, links (IZB-aanmeldlink, vacature-PDF, mailto) en de
    kerkenlijst zijn ongewijzigd overgenomen — alleen de opmaak/structuur is
    vernieuwd.
  - Geverifieerd op desktop + mobiel (incl. de titel van twee regels op mobiel)
    en met een succesvolle `nuxi build`.
- **Albumdetailpagina (`/fotos/[album]`) overgezet op `PageHeader.vue`** (2026-07-20):
  had nog een eigen bespoke header (donkere sectie met `opacity-30`-foto, eigen
  gradient, terug-link en beschrijving los erin). Vervangen door het gedeelde
  `PageHeader`-component (label "Foto's", titel = albumnaam,
  `:image="album.photos[0].src"`) zodat de albumpagina dezelfde schuine foto-rand,
  meer-foto-zichtbaar en label-boven-titel-opmaak krijgt als de andere
  subpagina's. De "← Alle albums"-link en de albumbeschrijving staan nu in de
  slot (op wit, onder de titel) i.p.v. in de donkere sectie. Lightbox (pijltjes,
  Esc, klik-buiten) ongewijzigd getest en werkt nog. Geverifieerd op desktop +
  mobiel voor beide albums en met een succesvolle `nuxi build`.
- **Paginaheader: label direct boven titel + meer foto zichtbaar** (2026-07-20, na
  onderstaande verfijning): op verzoek nog twee aanpassingen aan `PageHeader.vue`:
  - De headerfoto-sectie is een stuk hoger geworden (`h-64 sm:h-80` i.p.v. een
    door padding bepaalde hoogte), zodat er duidelijk meer van de foto te zien is.
  - Het label staat nu direct boven de titel (vlak boven de naad) in plaats van
    verticaal gecentreerd in de foto — via `flex flex-col justify-end` in de
    foto-sectie. **Val gehad**: zonder `items-start` rekt een flex-child
    standaard uit tot de volle breedte (`align-items: stretch`), waardoor het
    label-vlak de hele containerbreedte innam — opgelost met `items-start`.
  - De titel-verschuiving is omgezet van `-translate-y-1/2` (de helft van de
    títel-hoogte zelf) naar een vaste waarde (`-translate-y-[27px]` mobiel,
    `sm:-translate-y-[36px]`, getuned op de hoogte van een titel van één regel).
    Bij `-1/2` duwde een titel van 2–3 regels (bv. Programma 2026) zichzelf zo
    ver omhoog dat hij het label erboven grotendeels overlapte; met een vaste
    verschuiving schuift een langere titel alleen verder naar beneden (het wit
    in), niet verder omhoog over het label heen.
  - Geverifieerd op desktop + mobiel voor zowel een titel van één regel (Missie)
    als drie regels (Programma 2026 op mobiel) en met een succesvolle `nuxi build`.
- **Paginaheader verder verfijnd: label/titel/schuine foto-rand** (2026-07-20): op
  `PageHeader.vue` (gebruikt door 8 subpagina's):
  - Het gele eyebrow-label staat weer boven de titel (in plaats van ernaast/eronder).
  - De titel (H1) is een blauw, licht gekanteld "sticker"-blok geworden dat nu
    precies op de naad tussen headerfoto en witte pagina-inhoud staat: met
    `transform: translateY(-50%)` (niet met een negative margin — die botste met
    hoe een `inline-block`-element marges/baseline afhandelt en gaf een
    onvoorspelbare verschuiving) staat de titel voor ongeveer de helft op de foto
    en de helft op het wit.
  - De headerfoto zelf heeft nu een schuine onderrand via
    `clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%)`: links loopt de foto door
    tot de volle hoogte, rechts stopt hij op 90% — dezelfde kantelrichting als het
    titelblok, zodat foto-rand en titel visueel op elkaar aansluiten.
  - Bijvangst: de slot-tekst op `/fotos` ("Een impressie van...") stond nog op
    `text-stone-200` (lichtgrijs, bedoeld voor op de donkere foto) maar valt nu
    buiten de foto-sectie op wit — kleur aangepast naar `text-stone-600`.
  - Geverifieerd in de browser op desktop én mobiel (incl. een titel van twee
    regels op de Programma-pagina) en met een succesvolle `nuxi build`.
- **Feedback verwerkt: ValueTicker alleen op homepage, DiagonalAccent verwijderd,
  titel in blauw label** (2026-07-19/20, vóór bovenstaande verfijning):
  - De `ValueTicker` (het rijdende woordenlint) stond eerst onder elke
    paginaheader; op correctie staat hij nu alleen nog onder de hero op de
    homepage. Onderaan elke pagina (vóór de footer) blijft hij wel overal staan.
  - `DiagonalAccent.vue` (het dunne schuine lijn-element in elke donkere
    headersectie) is volledig verwijderd — expliciete negatieve feedback ("Hier
    ziet er niet uit").
  - De overlay op headerfoto's is sterk verlicht (foto's zijn nu duidelijk
    zichtbaar i.p.v. grotendeels weggedimd) en de paginatitel staat sindsdien in
    een blauw label-blok, net als de banner-stijl uit de WhatsApp-poster.
- **Homepage herzien + headerfoto's toegevoegd** (2026-07-20): op verzoek zijn drie
  dingen aangepast:
  - `ValueTicker` staat nu ónder elke paginaheader (in `PageHeader.vue` zelf, en
    los toegevoegd na de hero op de homepage en op Doe mee/albumdetail) in plaats
    van boven het menu.
  - De 5 homepage-blokken (Missie/Activiteiten/Programma/Doe mee/Steun ons) zijn
    via een workflow (3 onafhankelijke ontwerpvoorstellen + synthese) uitgewerkt
    tot volwaardige, afwisselende secties (beeld+tekst om en om, een donkere
    "rustpunt"-band met stat-cijfers voor Programma) i.p.v. 5 uniforme kaartjes.
  - Alle paginaheaders (behalve de homepage-hero, die al een foto heeft) hebben nu
    een eigen achtergrondfoto via het nieuwe `PageHeader.vue`-component.
  - Nieuwe foto's opgeslagen in `public/images/headers/`.
  - ⚠️ **Let op voor toekomstig foto-werk**: bij het kiezen van deze headerfoto's
    bleek mijn eerdere aanname over welk fotonummer (uit
    `photos/2026-07-18-zomerweek-1/`) welke inhoud toont op meerdere plekken
    onjuist (bv. "poppenkast" bleek eerst per ongeluk een andere groepsfoto; twee
    "teamportret"-bestanden bleken action-shots i.p.v. portretten). Dit is
    gecorrigeerd door elk bronbestand opnieuw direct te bekijken vlak vóór
    gebruik — doe dat bij het toevoegen van nieuwe foto's uit deze shoot ook
    altijd opnieuw, vertrouw niet op eerdere nummer-op-inhoud-aannames uit dit
    document of eerdere gesprekken.
- **Eerste versie van de website is gebouwd als meerdere pagina's** (niet als
  onepager): `/` (homepage met hero + doorverwijskaarten), `/missie`,
  `/activiteiten`, `/programma`, `/doe-mee`, `/steun-ons`, `/contact`, `/fotos`,
  `/fotobeleid`, `/jaarverslagen`. Gedeelde header (met navigatie + mobiel
  hamburgermenu) en footer zitten in `app/layouts/default.vue`. Copy is per sectie
  geschreven en fact-gecheckt tegen dit document. Werkt responsief en bouwt zonder
  errors (`nuxi build`).
- **Vergelijking met de oude site (bakenharderwijk.nl) uitgevoerd** — wat direct kon
  worden overgenomen is toegevoegd:
  - `/fotos` — albumoverzicht (`/fotos/[album]` per album, nu "Op de camping" en
    "Zomerweek 1 — juli 2026") met een selectie uit de eigen fotoshoot van
    2026-07-18. Lightbox met vorige/volgende-knoppen, toetsenbordbediening
    (pijltjes + Esc) en een subtiele link naar het fotobeleid. Albumdata staat in
    `app/data/albums.ts` — nieuwe albums (bv. volgende zomerweken) toevoegen kan
    daar zonder de pagina's aan te passen.
  - `/fotobeleid` — beleid over foto/video-gebruik, overgenomen uit dit document.
  - `/jaarverslagen` — links naar de 7 bestaande jaarverslag-PDF's (2017–2022, 2024),
    voorlopig gehost op bakenharderwijk.nl (nog niet zelf gehost).
  - "Doe mee"-pagina: prominente "Meld je aan als teamlid"-knop die direct naar het
    bestaande IZB-inschrijfsysteem linkt
    (izb.nl/dabar/camping?relation_id=32836) — dit was op de oude site de
    belangrijkste actieknop in de header, wij hadden 'm gemist.
  - "Doe mee"-pagina: downloadlink naar de vacature-PDF, en een lijst van de
    kerken die kerkambassadeurs leveren.
  - "Contact"-pagina: een werkend contactformulier (naam/e-mail/bericht) dat bij
    versturen een vooringevulde e-mail opent — geen backend nodig.
  - Footer: links naar Jaarverslagen en Fotobeleid.
  - Alle gebruikte foto's (ook de eerder gekozen 3) zijn achteraf verkleind naar
    max. 2000px breed — scheelde ruim 500MB aan bronbestanden in de git-repo.
- **Logo**: het bestaande logo ("Het Baken — Evangelisatie en Recreatie", met
  vuurtoren-icoon) komt uit de vacature-PDF, waar het alleen als JPEG van 294 × 121 px
  zit; de PNG's zijn een vergroting daarvan en dus wazig. Ze staan als
  [public/images/logo-het-baken.png](public/images/logo-het-baken.png) (transparante
  achtergrond) en `-wit-bg.png` (witte achtergrond) in het project. De site gebruikt sinds
  #34 een nagetekende [SVG](public/images/logo-het-baken.svg) (zie Status).
- De demo-content van de Nuxt Content-starter (Counter/Alert-componenten,
  `content/index.md`, `content/about.md`) is verwijderd — de homepage is nu een losse
  Vue-pagina in plaats van markdown-gedreven. `@nuxt/content` staat nog steeds
  geïnstalleerd voor toekomstige pagina's (bijv. nieuws, uitgebreider programma).

## Techniek / functionaliteit

- Gekozen: **Nuxt + TypeScript**, met de **`@nuxt/content`-module** zodat
  pagina-inhoud in **.md-bestanden** staat en makkelijk aan te passen is
  (file-based routing + git-vriendelijke content).
- De oorspronkelijke kale Vue 3 + Vite-scaffold wordt hiervoor vervangen.
- **Styling**: Tailwind CSS v4, via de officiële `@tailwindcss/vite`-plugin (niet de
  `@nuxtjs/tailwindcss`-module, die nog vastzit op Tailwind v3).
- **Afbeeldingen**: `@nuxt/image` toegevoegd voor automatische optimalisatie
  (resize/webp) van foto's. Ruwe fotoshoot-originelen staan (buiten git) in
  [photos/](photos/); een eerste selectie staat geoptimaliseerd-klaar in
  [public/images/](public/images/) voor gebruik met `<NuxtImg>` of markdown-afbeeldingen.

## Missie / verhaal

- Doelstelling: gedreven door de liefde van Christus, aanwezig/present zijn met het
  Evangelie, daar waar mensen tot rust willen komen.
- Motto: **"evangelisatie door recreatie"** — niet opdringerig.
- Het campingpastoraat kent drie aspecten: **pastoraal, diaconaal en missionair** —
  een luisterend oor bieden (voor gasten én team), een helpende hand bieden, en waar
  mogelijk getuigen van hun geloof. Campingpastors verzorgen elke week twee
  avondsluitingen en zoeken aansluiting bij volwassenen tijdens activiteiten.
- Het recreatieteam en de campingpastors werken samen maar hebben een andere aanpak:
  het recreatieteam richt zich vooral op kinderen/jongeren/jongvolwassenen, het
  pastoraat vult dat aan richting volwassenen.
- Avondsluiting: op veel avonden wordt afgesloten met een moment waarop het woord van
  God met de campinggasten geopend en gedeeld wordt.

## Doelgroep

- **Camping gasten** van Kriemelberg Bushcamp in Ermelo — volgens het IZB-profiel
  eigenlijk **alle bezoekers, van jong tot oud** (niet uitsluitend kinderen/jongeren);
  het aanbod wordt jaarlijks afgestemd op de mix van doelgroepen.
- **Achterban**: kerken, donateurs, "bakenvrienden" en andere meelevenden, vooral uit
  Harderwijk en Hierden.
- **Vrijwilligers/teamleden**: doorlopend gezocht — commissieleden, mentoren,
  campingpastors, teamleden, kerkambassadeurs.

## Diensten / aanbod

Het recreatiewerk draait tijdens **6 "bakenweken" per jaar**: de meivakantie en 5
zomerweken. Elke ochtend zijn er clubs per leeftijdsgroep (tot en met 16 jaar):

- **Kinderclub** (4 t/m 8 jaar) — dagelijks 9:45–11:30, opgebouwd rond een
  weekthema, met 3 "sporen": verhaal-, knutsel- en spelspoor. Op maandag, woensdag
  en vrijdag christelijk karakter (kort gebed + bijbelverhaal); dinsdag/donderdag
  een maatschappelijk thema of prentenboek. Alle kinderen zijn welkom, ongeacht
  achtergrond. Wekelijkse kleurwedstrijd.
- **Teen Spirit** (9 t/m 11 jaar) — dagelijkse ochtendactiviteit, gebaseerd op
  clubprogramma "Rock Solid" van Youth for Christ. Overgang tussen kinderclub en
  Chatpoint: speelse werkvormen, met ruimte voor diepgang.
- **Chatpoint** (12 t/m 16 jaar) — dagelijks, gebaseerd op "Solid Friends" van
  Youth for Christ. Gesprek, spel en Bijbel, met veel ruimte voor inbreng van de
  tieners zelf en actuele onderwerpen.
- **No Nonsense** (17+) — **vervallen**: niet meer in het programma sinds 2026-11-04
  (#42) en niet meer op de site. Het was de mannen- en vrouwenavond (2x per week).
- **Sing-In** — zondagavond, samenzang gericht op het lofprijzen van God, afgewisseld
  met overdenkingen/stukjes die het team heeft voorbereid.
- **Campingpastoraat** — zie Missie/verhaal hierboven.

Aanvullende activiteiten (bron: IZB-profiel, niet op de oude website genoemd):
poppenkast, bingo, speurtochten, man-vrouw uitdagingen, wildfietstochten, en
vroege-vogelwandelingen. Activiteiten spelen zich af rondom **'De Opper'** (ook de
groepsaccommodatie waar de teamleden verblijven) en **'De Ruif'**.

Organisatiestructuur:

- **Bakencommissie** — eindverantwoordelijk voor de 6 bakenweken; werft teamleden,
  organiseert de band voor de Sing-Ins en de uitzend-/terugkomstdienst; is tijdens de
  weken onderdeel van het mentorenteam. Organiseert ook een voorbereidingsdag voor
  teamleden van alle weken, gecombineerd met een uitzenddienst vanuit een kerk uit de
  achterban; na de zomer volgt evaluatie en afsluiting gecombineerd met een kerkdienst.
- **Kerkambassadeurs** — vertegenwoordigers vanuit de ondersteunende kerken, houden de
  lijnen met hun gemeente kort en werven fondsen/teamleden. Aangesloten kerken:
  Baptistengemeente Harderwijk, CGK Harderwijk, Hervormde gemeente Harderwijk
  (Bethelkerk, De Regenboog, Grote kerk), Hervormde gemeente Hierden (Dorpskerk,
  Visnet), Protestantse gemeente Harderwijk.
- **Team** — elke bakenweek verblijft een team op de camping om door woord en daad
  van Gods liefde te getuigen. Volgens het IZB-profiel bestaat een team idealiter uit
  **9 teamleden**, aangevuld met 1 lokale mentor (toegewezen door de commissie) en 2
  externe mentoren. Leeftijd teamleden: **18–26 jaar** (vacaturetekst hieronder is
  leidend; het IZB-profiel noemt 16–25 jaar, maar dat houden we niet aan).

## Programma 2026 (bron: IZB-profiel + officiële "Zoekt jou!"-poster)

Meivakantieweek en zomerweek-periodes, incl. beschikbaarheid (stand poster, 2026-07-19):

| Week | Datum | Beschikbaarheid |
|---|---|---|
| Meivakantie | 25-04-2026 t/m 01-05-2026 | Vol |
| Zomerweek 1 | 18-07-2026 t/m 24-07-2026 | Vol |
| Zomerweek 2 | 25-07-2026 t/m 31-07-2026 | Vol |
| Zomerweek 3 | 01-08-2026 t/m 07-08-2026 | Nog plaatsen beschikbaar |
| Zomerweek 4 | 08-08-2026 t/m 14-08-2026 | Nog plaatsen beschikbaar |
| Zomerweek 5 | 15-08-2026 t/m 21-08-2026 | Nog plaatsen beschikbaar |

Exacte aantallen resterende plaatsen voor weken 3–5 zijn niet vermeld op de poster
(die noemt alleen "vol" voor de volle weken) — voor de website is dat ook niet meer
nodig, want dat verandert toch te snel.

## Contactgegevens

- **Voorzitter**: Jodrik Zuurveld — tel. 06 15415570 (na 17:00) *(persoonlijk
  nummer, controleren of dit publiek mag op de nieuwe site)*
- **E-mail (oud/algemeen)**: info.bakenharderwijk@gmail.com
- **E-mail (nieuw, via IZB-profiel)**: dabarhetbaken@gmail.com
- **Contactpersoon teamleden-aanmelding (IZB-profiel)**: Rutger Stegeman — tel.
  06-51911101 (na 17:00) *(is elders op de site ook bekend als secretaris van de
  kerkambassadeurs)*
- **Camping**: Kriemelberg Bushcamp, Drieerweg 104, 3852 MC Ermelo — tel. 0031 (0)341
  552142 — info@kriemelberg.nl — https://www.kriemelberg.nl
- **Social media**: Facebook (facebook.com/baken.harderwijk), YouTube
  (@bakenharderwijk7193), Instagram (@baken_harderwijk)
- **Dabar/IZB-profiel**: https://www.izb.nl/dabar/camping?relation_id=32836
- **Domeinnaam nieuwe site**: dabarhetbaken.nl (al geregistreerd, redirect nu naar
  bakenharderwijk.nl)

Financieel:

- Het Baken zelf heeft **geen ANBI-status**. Daarom lopen fiscaal aftrekbare
  giften via de IZB (die wel ANBI-status heeft):
  - Niet-ANBI giften → IBAN NL43 INGB 0001 1478 23 (t.n.v. Het Baken Harderwijk)
  - ANBI-giften → via IZB: NL26 RABO 0302 2061 91 o.v.v. "Het Baken, De Kriemelberg,
    Dabar"
- Op de camping zelf staat een spaarpot (rode telefooncel) bij de receptie
- Geen ANBI-status → geen wettelijke publicatieplicht (RSIN/KVK, bestuur,
  beleidsplan, financiële verantwoording) voor de nieuwe site.

## Overig / losse notities

- **Fotobeleid**: er worden foto's/filmpjes gemaakt tijdens activiteiten voor
  promotiedoeleinden; gasten kunnen hier bezwaar tegen maken bij het Bakenteam
  (dan worden zij niet gefotografeerd of onherkenbaar gemaakt). Relevant voor de
  nieuwe fotoshoot deze week — zie [SHOTLIST.md](SHOTLIST.md).
- **Vacatures**: doorlopend op zoek naar commissieleden, mentoren, campingpastors,
  teamleden en kerkambassadeurs — organisatie draait volledig op vrijwilligers.

  Vacaturetekst "Commissielid Baken" (bron: PDF op oude site):

  > Het Baken is een interkerkelijke evangelisatiecommissie die actief is op
  > Kriemelberg Bushcamp te Ermelo. Door middel van verschillende activiteiten op
  > het gebied van recreatie en evangelisatie willen wij laten zien wie Jezus is en
  > hoeveel Hij van ons houdt. In een team van zo'n 8 jongeren in de leeftijd van 18
  > tot 26 jaar verblijft men een week op de camping om zo door woord en daad te
  > getuigen van Zijn liefde. Daarnaast verblijft er elke week een campingpastor(s)
  > op de camping waarbij een ieder van harte welkom is voor een (leuk) gesprek of
  > gebed. De teams worden ondersteund door mentoren, die tijdens de periode op de
  > camping dagelijks aanwezig zijn om de gewenste begeleiding en/of ondersteuning
  > te bieden.
  >
  > Door het jaar heen zorgen commissieleden, ook wel ambassadeurs genoemd, voor de
  > zaken rondom de voorbereiding, uitvoering en evaluatie. Ook hebben ze korte
  > lijntjes met jeugd- en evangelisatieouderlingen. In de Bakencommissie is er nog
  > voldoende ruimte voor nieuwe commissieleden. Wij zijn dan ook op zoek naar
  > **Commissieleden (M/V)**
  >
  > - Ben jij 24 jaar oud of ouder?
  > - Geloof je in God en heb je passie voor mensen?
  > - Ben je bereid om 1 keer in de maand te vergaderen en enkele taken op je te
  >   nemen?
  > - Heb je tijd om in de meivakantie of in de zomer een week lang ondersteuning
  >   te bieden aan het team van jongeren, en hen daarin te begeleiden in de
  >   periode van voorbereiding?
  > - Vind je het gaaf om te ontdekken hoe belangrijk het is om in afhankelijkheid
  >   van God te leven bij het delen van je geloof en hoe je van elkaar kunt leren?
  >
  > Aarzel niet en neem voor meer informatie en/of een vrijblijvend gesprek contact
  > op met Jodrik Zuurveld op telefoonnummer 06 154155701 (na 17:00) of via
  > info.bakenharderwijk@gmail.com
- ⚠️ De pagina met kerkambassadeurs bevat volledige namen van individuele
  vrijwilligers — bij het maken van de nieuwe (publieke) site even bewust kiezen wat
  daarvan wel/niet online komt.
- De huidige site is een wat gedateerde WordPress-site — bruikbaar als bron voor
  structuur/inhoud, maar niet als visueel voorbeeld voor de nieuwe site.
- **"Bakenbrief"**: hier is nog niets over gevonden — zowel de zoekfunctie van
  bakenharderwijk.nl als het IZB-profiel leveren niets op. Zie Open Vragen.

## Open Vragen

- Privacy: Vercel Web Analytics is cookieloos en verzamelt geen persoonsgegevens, maar de
  site heeft nog geen privacyverklaring. Wil de organisatie een korte vermelding
  (bv. op de Fotobeleid-pagina of in de footer) dat anonieme bezoekcijfers worden
  bijgehouden?
- Wat is de "bakenbrief" precies, en hoe wordt die op dit moment verspreid/beheerd?
  (Niet gevonden op bakenharderwijk.nl of het IZB-profiel — graag toelichting of een
  voorbeeld/bron van de gebruiker.)
- Geschiedenis: klopt het dat Het Baken al sinds begin jaren '70 bestaat (25 jaar in
  Hierden + 25+ jaar op Kriemelberg), en wil de gebruiker deze langere geschiedenis
  op de nieuwe site vertellen?
- Mag het volledige overzicht van kerkambassadeurs (met namen) gepubliceerd worden op
  de nieuwe site, of liever niet/anoniemer?
- Mag het persoonlijke 06-nummer van de voorzitter (Jodrik Zuurveld) publiek op de
  nieuwe site, of liever alleen e-mail/contactformulier?
- Moet er een CMS/eenvoudige manier komen waarmee vrijwilligers zelf nieuws/foto's
  kunnen toevoegen, of blijft alles in .md-bestanden die via git aangepast worden?
- Nieuwsbrief-inschrijving ("Bakenvriend") — via welke dienst (bv. Mailchimp) of
  anders? *(Contactformulier is inmiddels wel toegevoegd, via mailto — zie Status.)*
- Onlinedoneren (bv. iDEAL) gewenst, of blijft het tonen van IBAN/QR-code voldoende?
- **Altijd-zichtbare donatieknop**: de oude site heeft een ronde, permanente
  "Gift"-knop rechtsonder op elke pagina (vermoedelijk de Givt-app, gezien icoon en
  bestandsnaam "icon_gift" — niet 100% kunnen bevestigen). Wil je dit ook op de
  nieuwe site, en zo ja: heb je (of wil je) een Givt-account (of vergelijkbare
  dienst) voor de organisatie?
- **Nieuws/actualiteiten-pagina**: de oude homepage had een doorlopend nieuwsfeed
  (aanmeldingen open, programma bekend, etc.) met archief terug tot 2019. Wil je dit
  terug op de nieuwe site? Zo ja: wie schrijft en onderhoudt dit, en wat zou het
  eerste bericht moeten zijn? (Ontbreekt nu nog, want er is geen content om mee te
  starten.)
- **Plattegrond van de camping**: leuk voor gasten, maar het is eigenlijk content van
  Kriemelberg Bushcamp zelf, niet van Dabar Het Baken. Gewoon doorlinken naar de
  camping (die we al noemen), of toch een eigen plattegrond-pagina/verwijzing
  toevoegen?
