// Gedeeld door maak.mjs (genereren) en check.mjs (controleren): welke deelafbeeldingen er moeten zijn,
// en een vingerafdruk (hash) van alles waar een afbeelding van afhangt.
// Bewust zonder satori of sharp, zodat de controle ook in de build snel en licht blijft.
// Leest app/data/albums.ts rechtstreeks; dat kan met Node vanaf 22.18 (zie .nvmrc).
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
export const PUBLIC = path.join(ROOT, 'public')
export const OUT_DIR = path.join(PUBLIC, 'og')
export const MANIFEST = path.join(ROOT, 'scripts/og/manifest.json')
export const GENERATOR = path.join(ROOT, 'scripts/og/maak.mjs')
export const LOGO = path.join(PUBLIC, 'images/logo-het-baken.svg')
export const WIDTH = 1200
export const HEIGHT = 630
export const MAX_BYTES = 200 * 1024

export const sha256 = (buffer) => crypto.createHash('sha256').update(buffer).digest('hex')

// "Zomer 2026": een woord en het getal erachter blijven bij elkaar (vaste spatie), zodat het niet verkeerd afbreekt.
const bindNumber = (text) => text.replace(/ (\d+)$/, ' $1')

export async function loadShareImages() {
  const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'app/data/shareImages.json'), 'utf8'))
  const { albums } = await import('../../app/data/albums.ts')

  const items = data.pages.map((page) => ({
    key: page.key,
    sticker: page.sticker,
    lines: page.title,
    photo: page.photo,
    position: page.position,
    alt: page.alt,
  }))

  // Albums komen vanzelf mee: titel = albumtitel, foto = eerste foto van het album.
  for (const album of albums) {
    const override = data.albums.overrides?.[album.slug] ?? {}
    items.push({
      key: `${data.albums.keyPrefix}${album.slug}`,
      sticker: data.albums.sticker,
      lines: [bindNumber(album.title)],
      photo: album.photos[0].src,
      position: override.position ?? data.albums.defaultPosition,
      alt: override.alt ?? album.photos[0].alt,
    })
  }

  const generatorHash = sha256(fs.readFileSync(GENERATOR))
  const logoHash = sha256(fs.readFileSync(LOGO))
  for (const item of items) {
    const photoFile = path.join(PUBLIC, item.photo)
    if (!fs.existsSync(photoFile)) throw new Error(`Foto bestaat niet: ${item.photo} (voor ${item.key})`)
    // Alles waar de afbeelding van afhangt: label, titel, foto (en de bytes ervan), uitsnede, logo en opmaak.
    item.hash = sha256(
      JSON.stringify([
        item.sticker,
        item.lines,
        item.photo,
        item.position,
        sha256(fs.readFileSync(photoFile)),
        logoHash,
        generatorHash,
      ]),
    )
    item.file = path.join(OUT_DIR, `${item.key}.jpg`)
  }
  return { items, fallback: data.fallback }
}

// Afmeting van een jpg lezen zonder pakket (SOF-marker).
export function jpegSize(buffer) {
  let i = 2
  while (i < buffer.length) {
    if (buffer[i] !== 0xff) { i++; continue }
    const marker = buffer[i + 1]
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { height: buffer.readUInt16BE(i + 5), width: buffer.readUInt16BE(i + 7) }
    }
    i += 2 + buffer.readUInt16BE(i + 2)
  }
  return null
}

export function readManifest() {
  try {
    return JSON.parse(fs.readFileSync(MANIFEST, 'utf8'))
  } catch {
    return {}
  }
}
