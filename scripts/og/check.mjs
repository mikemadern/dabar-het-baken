// Controleert of de deelafbeeldingen in public/og/ nog bij de gegevens passen. Faalt (exit 1) als een
// afbeelding ontbreekt, niet meer past bij titel, label, foto, uitsnede, logo of opmaak, niet 1200 x 630 is,
// te groot is, of bij niets meer hoort. Maakt zelf niets aan: dat doet npm run og.
// Draait zonder extra pakketten, in de build (npm run build) en dus ook in de CI.
import fs from 'node:fs'
import path from 'node:path'
import { HEIGHT, MAX_BYTES, OUT_DIR, WIDTH, jpegSize, loadShareImages, readManifest, sha256 } from './data.mjs'

const { items } = await loadShareImages()
const manifest = readManifest()
const problems = []

for (const item of items) {
  const name = `og/${item.key}.jpg`
  if (!fs.existsSync(item.file)) {
    problems.push(`${name} ontbreekt`)
    continue
  }
  const buffer = fs.readFileSync(item.file)
  const entry = manifest[item.key]
  if (!entry) problems.push(`${name} staat niet in scripts/og/manifest.json`)
  else if (entry.hash !== item.hash) problems.push(`${name} past niet meer bij de gegevens (titel, label, foto, uitsnede, logo of opmaak is gewijzigd)`)
  else if (entry.file !== sha256(buffer)) problems.push(`${name} is gewijzigd na het maken (niet door npm run og)`)
  const size = jpegSize(buffer)
  if (!size || size.width !== WIDTH || size.height !== HEIGHT) problems.push(`${name} is ${size ? `${size.width} x ${size.height}` : 'geen geldige jpg'}, moet ${WIDTH} x ${HEIGHT} zijn`)
  if (buffer.length > MAX_BYTES) problems.push(`${name} is ${Math.round(buffer.length / 1024)} KB, groter dan ${MAX_BYTES / 1024} KB`)
}

const keys = new Set(items.map((item) => item.key))
if (fs.existsSync(OUT_DIR)) {
  for (const file of fs.readdirSync(OUT_DIR)) {
    if (file.endsWith('.jpg') && !keys.has(file.slice(0, -4))) problems.push(`og/${file} hoort bij geen pagina of album meer`)
  }
}
for (const key of Object.keys(manifest)) {
  if (!keys.has(key)) problems.push(`scripts/og/manifest.json noemt ${key}, maar dat is geen pagina of album meer`)
}

if (problems.length) {
  console.error('Deelafbeeldingen kloppen niet meer met de gegevens:')
  for (const problem of problems) console.error(`  - ${problem}`)
  console.error('Maak ze opnieuw met: npm run og   (uitleg: README.md, "Deelafbeeldingen"), en commit public/og/ en scripts/og/manifest.json.')
  process.exit(1)
}
console.log(`Deelafbeeldingen in orde: ${items.length} van ${items.length} (${path.relative(process.cwd(), OUT_DIR)}/).`)
