// Maakt de deelafbeeldingen (og:image, 1200 x 630) in public/og/ en schrijft scripts/og/manifest.json.
// Opmaak: Designer (design/deelafbeeldingen.md): foto met uitsnede, verloop, wit logo, gele sticker en een
// lichtblauw titelplaatje met witte tekst. Techniek: satori (tekst en vormen) + sharp (foto en jpg).
//
// Gebruik:  npm run og            alle afbeeldingen opnieuw maken
//           npm run og -- home    alleen de genoemde (bijvoorbeeld home of fotos-camping)
// Niets hiervan draait in de build; de afbeeldingen staan in de repo. npm run og:check controleert of ze nog kloppen.
import fs from 'node:fs'
import path from 'node:path'
import satori from 'satori'
import sharp from 'sharp'
import { HEIGHT, LOGO, MANIFEST, MAX_BYTES, OUT_DIR, PUBLIC, ROOT, WIDTH, loadShareImages, readManifest, sha256 } from './data.mjs'

// Lettertype: Ubuntu Bold uit Fontsource (woff; woff2 kan satori niet lezen). Geen nieuwe fonts.
const font = fs.readFileSync(path.join(ROOT, 'node_modules/@fontsource/ubuntu/files/ubuntu-latin-700-normal.woff'))
const logoSvg = fs.readFileSync(LOGO, 'utf8').replaceAll('fill="#000"', 'fill="#fff"')
const logoUri = 'data:image/svg+xml;base64,' + Buffer.from(logoSvg).toString('base64')

const only = process.argv.slice(2)
const { items } = await loadShareImages()
const unknown = only.filter((name) => !items.some((item) => item.key === name))
if (unknown.length) {
  console.error(`Onbekende naam: ${unknown.join(', ')}. Mogelijk: ${items.map((item) => item.key).join(', ')}`)
  process.exit(1)
}

const el = (type, style, children) => ({ type, props: { style: { display: 'flex', ...style }, children } })
const shade = (alpha) => `rgba(28,25,23,${alpha})`

// Foto bijsnijden zoals CSS object-fit: cover met object-position.
async function crop(file, [px, py]) {
  const source = path.join(PUBLIC, file)
  const meta = await sharp(source).metadata()
  const scale = Math.max(WIDTH / meta.width, HEIGHT / meta.height)
  const w = Math.round(meta.width * scale)
  const h = Math.round(meta.height * scale)
  const left = Math.min(w - WIDTH, Math.round(((w - WIDTH) * px) / 100))
  const top = Math.min(h - HEIGHT, Math.round(((h - HEIGHT) * py) / 100))
  return sharp(source).resize(w, h).extract({ left, top, width: WIDTH, height: HEIGHT }).toBuffer()
}

async function render(item) {
  const tree = el('div', { position: 'relative', width: WIDTH, height: HEIGHT, fontFamily: 'Ubuntu', fontWeight: 700 }, [
    // verloop boven (zodat het logo leesbaar is) en onder (zoals de hero van de site)
    el('div', { position: 'absolute', left: 0, top: 0, width: WIDTH, height: HEIGHT, backgroundImage: `linear-gradient(to bottom, ${shade(0.6)}, ${shade(0)} 34%)` }),
    el('div', { position: 'absolute', left: 0, top: 0, width: WIDTH, height: HEIGHT, backgroundImage: `linear-gradient(to top, ${shade(0.94)}, ${shade(0.55)} 38%, ${shade(0)} 68%)` }),
    { type: 'img', props: { src: logoUri, width: 278, height: 66, style: { position: 'absolute', left: 56, top: 44, width: 278, height: 66 } } },
    // kolom omgekeerd: plaatje eerst in de boom, sticker erna, zodat de sticker boven op het plaatje ligt
    el('div', { position: 'absolute', left: 0, right: 0, bottom: 50, flexDirection: 'column-reverse', alignItems: 'center' }, [
      el('div', { flexDirection: 'column', alignItems: 'center', maxWidth: 680, background: '#38b6ff', color: '#ffffff', fontSize: 68, lineHeight: 1.12, padding: '14px 36px 16px', borderRadius: 14, boxShadow: '0 14px 22px -4px rgba(0,0,0,0.4)', transform: 'rotate(1deg)', marginTop: -6, textShadow: '0 2px 3px rgba(28,25,23,0.55)' },
        item.lines.map((line) => el('div', {}, line))),
      el('div', { background: '#ffde59', color: '#1c1917', fontSize: 30, lineHeight: '40px', padding: '6px 20px', borderRadius: 10, boxShadow: '0 2px 4px rgba(0,0,0,0.25)', transform: 'rotate(-2deg)', whiteSpace: 'nowrap' }, item.sticker),
    ]),
  ])
  const svg = await satori(tree, { width: WIDTH, height: HEIGHT, fonts: [{ name: 'Ubuntu', data: font, weight: 700, style: 'normal' }] })
  const base = await crop(item.photo, item.position)
  // Kwaliteit zakt zo nodig, zodat elk bestand onder de grens blijft.
  for (const quality of [80, 74, 68, 62]) {
    const out = await sharp(base).composite([{ input: Buffer.from(svg) }]).jpeg({ quality, mozjpeg: true, progressive: true }).toBuffer()
    if (out.length <= MAX_BYTES || quality === 62) return out
  }
}

fs.mkdirSync(OUT_DIR, { recursive: true })
const manifest = readManifest()
for (const item of items) {
  if (only.length && !only.includes(item.key)) continue
  const buffer = await render(item)
  fs.writeFileSync(item.file, buffer)
  manifest[item.key] = { hash: item.hash, file: sha256(buffer), bytes: buffer.length }
  console.log(item.key.padEnd(26), `${Math.round(buffer.length / 1000)} KB`)
}

// Bij een volledige run: afbeeldingen en regels van pagina's of albums die er niet meer zijn opruimen.
if (!only.length) {
  const keys = new Set(items.map((item) => item.key))
  for (const key of Object.keys(manifest)) if (!keys.has(key)) delete manifest[key]
  for (const name of fs.readdirSync(OUT_DIR)) {
    if (name.endsWith('.jpg') && !keys.has(name.slice(0, -4))) {
      fs.rmSync(path.join(OUT_DIR, name))
      console.log(`verwijderd: ${name} (hoort bij niets meer)`)
    }
  }
}
const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)))
fs.writeFileSync(MANIFEST, JSON.stringify(sorted, null, 2) + '\n')
