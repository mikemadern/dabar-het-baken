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
    description: 'De eerste zomerweek van 2026: van Sing-In tot Hawaii-feest, waterspelletjes en een bingoavond.',
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
      { src: '/images/galerij/team-groepsfoto-welkom.jpg', alt: 'Het team poseert bij het welkomstbord van Kriemelberg Bushcamp' },
      { src: '/images/galerij/onderweg-naar-kerk.jpg', alt: 'Team en gasten op weg naar de kerk in Ermelo' },
      { src: '/images/galerij/cajon-speler-portret.jpg', alt: 'Een teamlid speelt cajon' },
      { src: '/images/galerij/vioolspeelster-sing-in.jpg', alt: 'Een teamlid speelt viool tijdens de Sing-In' },
      { src: '/images/galerij/mc-microfoon-praatje.jpg', alt: 'Een teamlid spreekt de gasten toe tijdens de Sing-In' },
      { src: '/images/galerij/sing-in-overzicht-zaal.jpg', alt: 'Overzicht van de Sing-In met muzikanten en gasten' },
      { src: '/images/galerij/samenzang-kruis-zaal.jpg', alt: 'Samenzang tijdens de Sing-In' },
      { src: '/images/galerij/tieners-lachen-bankje.jpg', alt: 'Tieners lachen samen op een bankje' },
      { src: '/images/galerij/ferdinand-microfoon-praatje.jpg', alt: 'Een teamlid spreekt tijdens de Sing-In' },
      { src: '/images/galerij/kinderclub-kleurplaat.jpg', alt: 'Kinderen kleuren een Bijbelverhaal-werkblad bij de kinderclub' },
      { src: '/images/galerij/vijver-waterspeeltuin.jpg', alt: 'De speelvijver van de camping met spelende kinderen' },
      { src: '/images/galerij/raketten-lanceren.jpg', alt: 'Een meisje lanceert een speelgoedraket' },
      { src: '/images/galerij/team-armen-omhoog.jpg', alt: 'Vier vrijwilligers juichen met de armen omhoog' },
      { src: '/images/galerij/hawaii-bloemenkettingen.jpg', alt: 'Een vrijwilliger deelt bloemenkettingen uit tijdens het Hawaii-thema' },
      { src: '/images/galerij/limbo-hawaiifeest.jpg', alt: 'Kinderen doen een limbo-wedstrijd tijdens het Hawaii-feest' },
      { src: '/images/galerij/chef-en-vossenjacht.jpg', alt: 'Een verklede vrijwilliger praat met een jongen over de vossenjacht' },
      { src: '/images/galerij/vintage-kostuums-portret.jpg', alt: 'Twee vrijwilligers in vintage kostuum' },
      { src: '/images/galerij/gerwin-op-schouders.jpg', alt: 'Een vrijwilliger draagt een jongen op zijn schouders' },
      { src: '/images/galerij/team-groepsfoto-juichend.jpg', alt: 'Het voltallige team juicht tijdens de groepsfoto' },
      { src: '/images/galerij/samen-van-de-glijbaan.jpg', alt: 'Verklede vrijwilligers gaan samen van de glijbaan' },
      { src: '/images/galerij/poppenkast-optreden.jpg', alt: 'Een poppenkastvoorstelling voor de kinderen' },
      { src: '/images/galerij/kaartspel-bunting-lach.jpg', alt: 'Vrijwilligers lachen tijdens een kaartspel' },
      { src: '/images/galerij/voetballen-in-kooi.jpg', alt: 'Jongens voetballen in de voetbalkooi' },
      { src: '/images/galerij/gezamenlijke-maaltijd.jpg', alt: 'Gasten en team eten samen aan een lange tafel' },
      { src: '/images/galerij/nestschommel-lach.jpg', alt: 'Twee meisjes lachen op de nestschommel' },
      { src: '/images/galerij/clown-portret.jpg', alt: 'Portret van een verklede vrijwilliger' },
      { src: '/images/galerij/radslag-actie.jpg', alt: 'Jongens maken een radslag op het gras' },
      { src: '/images/galerij/ringwerpen-groepsspel.jpg', alt: 'Groepsspel met ringwerpen op de camping' },
      { src: '/images/galerij/glijbaan-fisheye.jpg', alt: 'Een jongen glijdt lachend van de waterglijbaan' },
      { src: '/images/galerij/vreugde-door-het-water.jpg', alt: 'Een vrijwilliger rent vrolijk door het water' },
      { src: '/images/galerij/groepsknuffel.jpg', alt: 'Een warme groepsknuffel tussen vrijwilligers' },
      { src: '/images/galerij/overwinning-nat.jpg', alt: 'Een doorweekte jongen viert een overwinning' },
      { src: '/images/galerij/waterpistolen-fontein.jpg', alt: 'Kinderen spelen met waterpistolen bij de fontein' },
      { src: '/images/galerij/haren-vlechten.jpg', alt: 'Een vrijwilliger vlecht het haar van een meisje' },
      { src: '/images/galerij/vrijwilligers-knuffel.jpg', alt: 'Drie vrijwilligers knuffelen elkaar' },
      { src: '/images/galerij/glimlach-nagellak.jpg', alt: 'Een meisje lacht terwijl haar nagels worden gelakt' },
      { src: '/images/galerij/broodjebakken-groep.jpg', alt: 'Kinderen bakken broodjes boven het kampvuur' },
      { src: '/images/galerij/vader-en-zoon-vuur.jpg', alt: 'Een man helpt een jongen met zijn broodje boven het vuur' },
      { src: '/images/galerij/kringspel-hoog-vijf-volleybalveld.jpg', alt: 'Kinderen en vrijwilligers geven high-fives bij het volleybalveld' },
      { src: '/images/galerij/lydia-kinderclub-kring.jpg', alt: 'Een vrijwilliger leidt een kringgesprek bij de kinderclub' },
      { src: '/images/galerij/verkleedpartij-rennen-camping.jpg', alt: 'Verklede vrijwilligers rennen met kinderen over de camping' },
      { src: '/images/galerij/poppenkast-pippi.jpg', alt: 'De poppenkast met een Pippi Langkous-pop' },
      { src: '/images/galerij/poppenkast-publiek.jpg', alt: 'Kinderen kijken naar de poppenkastvoorstelling' },
      { src: '/images/galerij/kinderen-aan-tafel.jpg', alt: 'Kinderen en tieners aan een picknicktafel' },
      { src: '/images/galerij/bingo-presentatoren-podium.jpg', alt: 'Twee presentatoren leiden de bingoavond' },
      { src: '/images/galerij/bingo-balletjes-macro.jpg', alt: 'Close-up van de bingoballetjes' },
      { src: '/images/galerij/vrijwilliger-jongen-dansen.jpg', alt: 'Een vrijwilliger danst met een jongen' },
      { src: '/images/galerij/bingo-prijs-jongen.jpg', alt: 'Een jongen met zijn gewonnen bingoprijs' },
      { src: '/images/galerij/kinderen-spannend-wachten.jpg', alt: 'Kinderen wachten gespannen af tijdens een spel' },
    ],
  },
]

export function findAlbum(slug: string) {
  return albums.find(album => album.slug === slug)
}
