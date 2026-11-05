# Meewerken aan deze repository

Korte afspraken, zodat `develop` altijd werkend en overzichtelijk blijft.

## Werkwijze

1. **Issue** — begin met een [issue](https://github.com/mikemadern/dabar-het-baken/issues/new/choose) (fout of wijziging) en geef het een **milestone**.
2. **Branch** — maak een branch vanaf `develop`, bijvoorbeeld `fix/korte-omschrijving` of `feature/korte-omschrijving`. Direct pushen naar `develop` kan niet.
3. **Pull request** — open een PR naar `develop` en zet `Closes #<nummer>` in de beschrijving. Volg de checklist in het PR-template.
4. **Merge** — zodra de checks groen zijn. Alleen *rebase-merge* is ingesteld, en de branch wordt daarna automatisch verwijderd.

## Milestones

Werk wordt per milestone gevolgd, zodat je per onderwerp de voortgang ziet:

| Milestone | Waar het over gaat |
|---|---|
| **Lancering website** | alles wat nodig is om de site live te zetten |
| **Inhoud & besluiten** | open vragen over de inhoud van de site waar een besluit over genomen moet worden |
| **Uitbreidingen** | nice-to-haves na de lancering (nieuwsbrief, online doneren, nieuwspagina, plattegrond, beheer) |
| **Onderhoud & techniek** | afhankelijkheden, beveiliging, CI en de werkwijze van de repository |

- Geef het **issue** een milestone. De PR die het issue sluit neemt die **automatisch over** (taak `milestone`).
- Is er geen milestone, dan toont de PR een waarschuwing. Dat blokkeert het mergen niet; kies er dan zelf een in de zijbalk van de PR.
- Dependabot-PR's krijgen geen milestone.

## Project

Het werk wordt gevolgd in het GitHub Project **Website Dabar Het Baken** (privé, alleen zichtbaar voor de beheerder): https://github.com/users/mikemadern/projects/1

- Issues uit de formulieren komen daar automatisch in terecht.
- De *Status* gaat vanzelf naar *Done* bij een gesloten issue of gemergde PR.
- Per milestone zie je de voortgang in de kolom *Milestone*.

Via de terminal (GitHub CLI) geef je het Project en de milestone mee:

```bash
gh issue create --milestone "Onderhoud & techniek" --project "Website Dabar Het Baken"
gh pr create --project "Website Dabar Het Baken"   # de milestone neemt de PR over van het issue
```

## Een issue bij elke PR

Elke PR hoort **in principe** bij een issue. De check `linked-issue` controleert dit.

- Kleine klus zonder issue (typefout, onderhoud)? Zet dan het label **`geen-issue`** op de PR.
- Dependabot-PR's zijn vrijgesteld.

## Geen `Co-authored-by` in commits

Commits mogen geen `Co-authored-by`-regel bevatten. De check `no-coauthor` kijkt naar alle commits in de PR en kent geen uitzonderingen.

Bestaande commits die er al een hebben, blijven zoals ze zijn: `develop` is beschermd en de geschiedenis wordt niet herschreven.

## Checks

Voordat een PR gemerged kan worden, moeten deze checks groen zijn:

| Check | Wat |
|---|---|
| `build` | `npm ci` en `npm run build` |
| `linked-issue` | de PR is gekoppeld aan een issue (of heeft het label `geen-issue`) |
| `no-coauthor` | geen `Co-authored-by` in de commits |

De taak `milestone` hoort er niet bij: die waarschuwt alleen en is niet verplicht.

## Lokaal draaien

Node-versie staat in `.nvmrc`.

```bash
npm ci
npm run dev      # ontwikkelserver op http://localhost:3000
npm run build    # productiebuild, hetzelfde als de CI
```

Inhoud en besluiten over de site staan niet in deze repository, maar in de aparte documentenmap. Beveiligingsproblemen: zie [`SECURITY.md`](SECURITY.md).
