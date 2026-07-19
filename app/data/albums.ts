export interface AlbumPhoto {
  src: string
  alt: string
}

export interface Album {
  slug: string
  title: string
  description: string
  photos: AlbumPhoto[]
}

export const albums: Album[] = [
  {
    slug: 'camping',
    title: 'Op de camping',
    description: 'Sfeerbeelden van Kriemelberg Bushcamp in Ermelo.',
    photos: [
      { src: '/images/galerij/welkom-camping.jpg', alt: 'Welkomstbord bij de ingang van Kriemelberg Bushcamp' },
      { src: '/images/telefooncel-informatiebord.jpg', alt: 'De rode telefooncel bij het informatiebord' },
      { src: '/images/team-onderweg-camping.jpg', alt: 'Team onderweg over de camping' },
    ],
  },
  {
    slug: 'zomerweek-1-2026',
    title: 'Zomerweek 1 — juli 2026',
    description: 'De eerste zomerweek van 2026: clubs, spel en een team in knalgele shirts.',
    photos: [
      { src: '/images/galerij/team-onderweg-tent.jpg', alt: 'Teamlid op weg naar de tenten op de camping' },
      { src: '/images/team-kind-spelen.jpg', alt: 'Een teamlid speelt met een campingkind' },
      { src: '/images/galerij/schommelen.jpg', alt: 'Een meisje schommelt op de camping' },
      { src: '/images/galerij/trampoline-lachen.jpg', alt: 'Een meisje lacht op de trampoline' },
      { src: '/images/galerij/trampoline-glijbaan.jpg', alt: 'Een meisje glijdt van de trampoline-glijbaan' },
      { src: '/images/galerij/volleybal.jpg', alt: 'Team en gasten spelen samen volleybal' },
      { src: '/images/galerij/clowns.jpg', alt: 'Teamleden verkleed als clowns rennen over de camping' },
      { src: '/images/galerij/high-five.jpg', alt: 'Een teamlid geeft een high-five tijdens een groepsspel' },
      { src: '/images/galerij/voetbal.jpg', alt: 'Kinderen voetballen samen met een teamlid' },
    ],
  },
]

export function findAlbum(slug: string) {
  return albums.find(album => album.slug === slug)
}
