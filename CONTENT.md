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
  (Fredoka geïnstalleerd als beste gratis match) voor koppen/labels, en gekantelde
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
  lettertypen — het ronde "bubble"-font (Fredoka, al geïnstalleerd) alleen voor
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

- **Homepage-hero: schuine onderrand toegevoegd, bewust géén 1-op-1 kopie van de
  subpagina's** (2026-07-20): de hero (in `index.vue`, blijft een eigen, andere
  opzet dan `PageHeader.vue` omdat hij veel meer bevat — label, titel, twee
  intro-alinea's én drie CTA-knoppen in één beeld i.p.v. alleen een titel):
  - Dezelfde `clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%)` als op de
    subpagina's toegepast op de hero-sectie, met dezelfde kantelrichting
    (links lager, rechts hoger) als de `-rotate-1` van de `ValueTicker`
    eronder — de schuine fotorand en de gekantelde ticker lopen zo optisch in
    elkaar over.
  - Bottom-padding vergroot (`pb-28 sm:pb-36` i.p.v. symmetrische `py-24 sm:py-32`)
    zodat de CTA-knoppenrij ruim boven de schuine rand blijft en nooit wordt
    weg geclipt.
  - De `ValueTicker` direct na de hero krijgt een kleine negatieve margin
    (`-mt-4 sm:-mt-6`, alleen op deze plek via een class-override — de ticker
    onderaan elke pagina in `app/layouts/default.vue` blijft ongewijzigd) zodat
    hij aansluit op de schuine rand in plaats van er los onder te "zweven".
  - Geverifieerd dat de CTA-rij ruim boven de clip-lijn blijft (gemeten:
    ~85px marge op desktop), op desktop + mobiel, en met een succesvolle
    `nuxi build`.
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
  vuurtoren-icoon) is uit de vacature-PDF geëxtraheerd op hoge resolutie en staat als
  [public/images/logo-het-baken.png](public/images/logo-het-baken.png) (transparante
  achtergrond) en `-wit-bg.png` (witte achtergrond) in het project.
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
- **No Nonsense** (17+) — tijdens de mannen- en vrouwenavond (2x per week), een
  avond met meer diepgang, in samenwerking met een mentor en/of het pastorale team.
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
