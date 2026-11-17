// Controleert dat er geen lang gedachtestreepje (em dash) in de tekst van de site staat: niet het teken zelf,
// niet &mdash;, &#8212; of &#x2014; en niet als —. Gebruik een komma, punt, dubbele punt of haakjes,
// en ' | ' tussen delen van een titel. Het korte streepje (en dash) en het koppelteken mogen wel.
// Zoekt in app/, content/ en public/ (waar die bestaan), alleen in tekstbestanden. Draait zonder extra
// pakketten, vóór de build (npm run build) en dus ook in de CI.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const wortel = fileURLToPath(new URL('..', import.meta.url))
const EM_DASH = /—|&mdash;|&#8212;|&#x2014;|\\u2014/i
const TEKST_BESTAND = /\.(md|vue|ts|mjs|js|json|ya?ml|svg|txt|html|css|xml)$/
const fouten = []

function zoek(map) {
  for (const naam of readdirSync(map)) {
    const pad = join(map, naam)
    if (statSync(pad).isDirectory()) zoek(pad)
    else if (TEKST_BESTAND.test(naam)) {
      readFileSync(pad, 'utf-8')
        .split('\n')
        .forEach((regel, i) => {
          if (EM_DASH.test(regel)) fouten.push(`${relative(wortel, pad)}:${i + 1}`)
        })
    }
  }
}

for (const naam of ['app', 'content', 'public']) {
  const map = join(wortel, naam)
  if (existsSync(map)) zoek(map)
}

if (fouten.length) {
  console.error('Lang gedachtestreepje (em dash) gevonden. Gebruik een komma, punt, dubbele punt of haakjes, en " | " in titels:')
  for (const plek of fouten) console.error(`  - ${plek}`)
  process.exit(1)
}
console.log('Geen lang gedachtestreepje in app/, content/ en public/.')
