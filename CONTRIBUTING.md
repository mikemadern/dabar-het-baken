# Meewerken aan deze repository

Korte afspraken, zodat `develop` altijd werkend en overzichtelijk blijft.

## Werkwijze

1. **Issue** — begin met een [issue](https://github.com/mikemadern/dabar-het-baken/issues/new/choose) (fout of wijziging).
2. **Branch** — maak een branch vanaf `develop`, bijvoorbeeld `fix/korte-omschrijving` of `feature/korte-omschrijving`. Direct pushen naar `develop` kan niet.
3. **Pull request** — open een PR naar `develop` en zet `Closes #<nummer>` in de beschrijving. Volg de checklist in het PR-template.
4. **Merge** — zodra de checks groen zijn. Alleen *rebase-merge* is ingesteld, en de branch wordt daarna automatisch verwijderd.

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

## Lokaal draaien

Node-versie staat in `.nvmrc`.

```bash
npm ci
npm run dev      # ontwikkelserver op http://localhost:3000
npm run build    # productiebuild, hetzelfde als de CI
```

Voor inhoud en besluiten over de site: zie [`CONTENT.md`](CONTENT.md). Beveiligingsproblemen: zie [`SECURITY.md`](SECURITY.md).
