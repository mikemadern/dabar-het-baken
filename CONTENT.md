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
- ⏳ *Later opnieuw vragen*: moodboards of voorbeeldsites die de gewenste stijl
  illustreren (zie Open Vragen).

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

## Programma 2026 (bron: IZB-profiel)

Beschikbare zomerweek-periodes en plaatsen (stand 2026-07-17):

| Periode | Datum | Beschikbaarheid |
|---|---|---|
| 1 | 18-07-2026 t/m 24-07-2026 | Geen plaatsen beschikbaar |
| 2 | 25-07-2026 t/m 31-07-2026 | Geen plaatsen beschikbaar |
| 3 | 01-08-2026 t/m 07-08-2026 | 3 plaatsen beschikbaar |
| 4 | 08-08-2026 t/m 14-08-2026 | 5 plaatsen beschikbaar |
| 5 | 15-08-2026 t/m 21-08-2026 | 3 plaatsen beschikbaar |

De meivakantieweek 2026 stond niet op deze pagina — datum/beschikbaarheid nog na
te vragen (zie Open Vragen).

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
- Moodboards of voorbeeldsites die de gewenste visuele stijl illustreren — later
  opnieuw uitvragen bij de gebruiker.
- Geschiedenis: klopt het dat Het Baken al sinds begin jaren '70 bestaat (25 jaar in
  Hierden + 25+ jaar op Kriemelberg), en wil de gebruiker deze langere geschiedenis
  op de nieuwe site vertellen?
- Meivakantieweek 2026: datum en beschikbaarheid (stond niet op het IZB-profiel).
- Mag het volledige overzicht van kerkambassadeurs (met namen) gepubliceerd worden op
  de nieuwe site, of liever niet/anoniemer?
- Mag het persoonlijke 06-nummer van de voorzitter (Jodrik Zuurveld) publiek op de
  nieuwe site, of liever alleen e-mail/contactformulier?
- Moet er een CMS/eenvoudige manier komen waarmee vrijwilligers zelf nieuws/foto's
  kunnen toevoegen, of blijft alles in .md-bestanden die via git aangepast worden?
- Nieuwsbrief-inschrijving ("Bakenvriend") en contactformulier terug laten komen —
  via welke dienst (bv. Mailchimp) of anders?
- Onlinedoneren (bv. iDEAL) gewenst, of blijft het tonen van IBAN/QR-code voldoende?
