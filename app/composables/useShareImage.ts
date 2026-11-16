import shareImages from '~/data/shareImages.json'
import { findAlbum } from '~/data/albums'

// De deelafbeelding (og:image) bij de huidige pagina. Eén bron: app/data/shareImages.json, dezelfde gegevens
// waaruit scripts/og/maak.mjs de afbeeldingen maakt. Albums komen uit app/data/albums.ts.
// Een gedeelde link naar één foto (?foto=) krijgt die foto zelf; dat regelt de albumpagina.
export function useShareImage() {
  const route = useRoute()
  return computed(() => {
    const path = route.path.replace(/\/+$/, '') || '/'
    let key: string | undefined
    let alt: string | undefined

    const page = shareImages.pages.find((p) => p.path === path)
    if (page) {
      key = page.key
      alt = page.alt
    } else {
      const slug = /^\/fotos\/([^/]+)$/.exec(path)?.[1]
      const album = slug ? findAlbum(slug) : undefined
      if (album) {
        const overrides = shareImages.albums.overrides as Record<string, { alt?: string }>
        key = `${shareImages.albums.keyPrefix}${album.slug}`
        alt = overrides[album.slug]?.alt ?? album.photos[0]?.alt
      }
    }

    // Onbekende pagina (bijvoorbeeld de 404): de standaardafbeelding
    if (!key) {
      const fallback = shareImages.pages.find((p) => p.key === shareImages.fallback)!
      key = fallback.key
      alt = fallback.alt
    }
    return {
      image: `/og/${key}.jpg`,
      alt,
      // Bij een link naar één foto vervangt de albumpagina de afbeelding door die foto; dan gelden deze maten niet.
      sized: !(path.startsWith('/fotos/') && route.query.foto),
    }
  })
}
