<script setup lang="ts">
import { findAlbum } from '~/data/albums'

const route = useRoute()
const router = useRouter()
const album = findAlbum(route.params.album as string)

if (!album) {
  throw createError({ statusCode: 404, statusMessage: "Album niet gevonden" })
}

const photos = album.photos

// Een foto heet in het adres als zijn bestandsnaam zonder extensie (?foto=welkom-camping): leesbaar en
// stabiel, ook als er foto's bijkomen of de volgorde verandert. In alle albums zijn die namen uniek.
const photoIds = photos.map((photo) => photo.src.split('/').pop()!.replace(/\.[^.]+$/, ''))
function indexOfPhoto(id: unknown) {
  const index = typeof id === 'string' ? photoIds.indexOf(id) : -1
  return index === -1 ? null : index
}

// Een gedeelde link (?foto=...) krijgt die foto als voorbeeldafbeelding (Facebook, WhatsApp) en de
// beschrijving van die foto. Dit wordt op de server gelezen, dus ook crawlers zien het.
const linkedPhoto = computed(() => {
  const index = indexOfPhoto(route.query.foto)
  return index === null ? null : photos[index]
})
// Niet het origineel (tot 1,3 MB) maar een kleinere versie van 1200 x 630; veel apps tonen grote voorbeelden niet of traag.
const img = useImage()
const sharePhoto = computed(() =>
  linkedPhoto.value
    ? img(linkedPhoto.value.src, { width: 1200, height: 630, fit: 'cover', format: 'jpeg', quality: 75 })
    : undefined,
)
useSeoMeta({
  title: `${album.title} | Foto's`,
  description: () => linkedPhoto.value?.alt ?? album.description,
  ogImage: () => sharePhoto.value,
  twitterImage: () => sharePhoto.value,
  ogImageAlt: () => linkedPhoto.value?.alt,
  twitterImageAlt: () => linkedPhoto.value?.alt,
})

// Broodkruimels: Home > Foto's > dit album
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: "Foto's", item: '/fotos' },
      { name: album.title, item: route.path },
    ],
  }),
])

const openIndex = ref<number | null>(null)

// De miniaturen (om de focus bij sluiten terug te zetten) en de lightbox zelf
const thumbs: (HTMLElement | null)[] = []
const dialog = ref<HTMLDialogElement | null>(null)

// Het adres bepaalt wat open is, maar alleen als de router navigeert: een directe link, Terug en
// Vooruit. Bladeren door de foto's past het adres rechtstreeks aan (zie go()), zonder router.
let mounted = false
watch(() => route.query.foto, (id) => {
  if (mounted) openIndex.value = indexOfPhoto(id)
})

// Een foto openen is één stap in de geschiedenis: Terug sluit hem weer en Vooruit opent hem opnieuw
function open(index: number) {
  openIndex.value = index
  router.push({ query: { ...route.query, foto: photoIds[index] } })
}
function close() {
  if (openIndex.value === null) return
  openIndex.value = null
  // Zelf geopend vanuit dit album: dan staat de stap ervoor het album zonder foto, en is Terug de nette
  // manier om te sluiten. Bij een directe link is er niets om naartoe terug te gaan: alleen de foto uit
  // het adres halen, in dezelfde stap.
  if (window.history.state?.back === route.path) router.back()
  else router.replace({ query: {} })
}

// Richting van de laatste wissel: de foto schuift mee in die richting. De richting wordt eerst gezet en
// de foto pas een tick later gewisseld: de vertrekkende foto gebruikt de transitienaam van de vorige
// render, dus anders schuift hij nog de vorige richting op.
const direction = ref<'next' | 'prev'>('next')

async function go(step: 1 | -1) {
  if (openIndex.value === null) return
  direction.value = step === 1 ? 'next' : 'prev'
  await nextTick()
  if (openIndex.value === null) return
  const index = (openIndex.value + step + photos.length) % photos.length
  openIndex.value = index
  // Het adres volgt de foto, maar er komt geen stap bij in de geschiedenis (replaceState). Dit gaat niet
  // via de router: Vercel Analytics telt elke routewijziging als paginaweergave, en dan levert een
  // bezoeker die tien foto's bekijkt er tien op. De bestaande history.state blijft behouden, zodat de
  // router Terug en Vooruit blijft begrijpen.
  const url = new URL(window.location.href)
  url.searchParams.set('foto', photoIds[index]!)
  window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash)
}
const next = () => go(1)
const prev = () => go(-1)

// De vorige en de volgende foto worden alvast opgehaald (verborgen, met dezelfde instellingen als de
// foto in de lightbox, zodat de browser ze uit zijn cache haalt). Anders is er bij wisselen even niets
// te zien terwijl de nieuwe foto laadt. Dat gebeurt pas als de getoonde foto klaar is, zodat ze niet
// met die foto om de verbinding concurreren.
const photoLoaded = ref(false)
const neighbours = computed(() => {
  const i = openIndex.value
  if (i === null || !photoLoaded.value) return []
  const list = [photos[(i + 1) % photos.length], photos[(i - 1 + photos.length) % photos.length]]
  // zonder dubbelen (bij een album van 2 foto's zijn vorige en volgende dezelfde) en zonder de foto zelf
  return list.filter((photo, k): photo is NonNullable<typeof photo> => !!photo && photo !== photos[i] && list.indexOf(photo) === k)
})

// Delen en downloaden van de foto die open is
const currentPhoto = computed(() => (openIndex.value === null ? null : photos[openIndex.value]))
const downloadName = computed(() => currentPhoto.value?.src.split('/').pop() ?? '')
const notice = ref('')
let noticeTimer: ReturnType<typeof setTimeout> | undefined
function showNotice(text: string) {
  notice.value = text
  clearTimeout(noticeTimer)
  noticeTimer = setTimeout(() => (notice.value = ''), 2500)
}

// Met het deelmenu van het apparaat als dat er is (telefoons, Safari, Chrome op Windows), anders de
// link kopiëren. Het adres in de adresbalk is altijd dat van de getoonde foto.
async function share() {
  if (!currentPhoto.value) return
  const data = { title: `${album!.title} | Dabar Het Baken`, text: currentPhoto.value.alt, url: window.location.href }
  if (navigator.share) {
    try {
      await navigator.share(data)
      return
    } catch (error) {
      // Het deelmenu zelf wegklikken is geen fout; bij een echte fout vallen we terug op kopiëren
      if ((error as DOMException).name === 'AbortError') return
    }
  }
  try {
    await navigator.clipboard.writeText(data.url)
    showNotice('Link gekopieerd')
  } catch {
    showNotice('Kopiëren is niet gelukt. Kopieer de link uit de adresbalk.')
  }
}

const lightboxButton =
  'rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

// Pijltjes bladeren door de foto's. Escape, de focus in het venster (Tab blijft erin) en de rest van de pagina
// op slot (inert) regelt het ingebouwde <dialog> zelf, omdat het met showModal() is geopend.
function handleKeydown(event: KeyboardEvent) {
  if (openIndex.value === null) return
  if (event.key === 'ArrowRight') next()
  else if (event.key === 'ArrowLeft') prev()
  else if (event.key === 'Tab') keepTabInside(event)
}

// Een modaal <dialog> houdt de focus binnen de pagina, maar na het laatste (of voor het eerste) element gaat Tab
// naar de adresbalk van de browser. De lightbox houdt Tab liever in het venster: van het laatste element terug naar
// het eerste en omgekeerd.
function keepTabInside(event: KeyboardEvent) {
  const items = dialog.value?.querySelectorAll<HTMLElement>('button, a[href]')
  if (!dialog.value || !items?.length) return
  const first = items[0]!
  const last = items[items.length - 1]!
  const outside = !dialog.value.contains(document.activeElement)
  if (event.shiftKey && (document.activeElement === first || outside)) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && (document.activeElement === last || outside)) {
    event.preventDefault()
    first.focus()
  }
}

// Het <dialog> sluit zichzelf bij Escape (en bij de terugbeweging van sommige telefoons). De staat en het adres
// volgen dan via close(), net als bij de sluitknop. Sluiten we zelf (openIndex is al leeg), dan is dit een no-op.
function onDialogClose() {
  if (openIndex.value !== null) close()
}

let lastIndex: number | null = null
watch(openIndex, (value, previous) => {
  photoLoaded.value = false
  if (value !== null) lastIndex = value
  // Openen: als modaal venster (showModal): de rest van de pagina is niet bereikbaar en de focus gaat naar de
  // sluitknop (autofocus). Bij sluiten verdwijnt het <dialog> uit de pagina (zie restoreFocus voor de focus).
  if (previous === null && value !== null) nextTick(() => dialog.value?.showModal())
})

// Pas als het venster helemaal weg is (na het uitfaden) is de pagina erachter weer bereikbaar en kan de focus terug
// naar de miniatuur van de foto die je het laatst zag, ook als het Terug van de browser of Escape was
function restoreFocus() {
  if (lastIndex !== null) thumbs[lastIndex]?.focus()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  mounted = true
  // De lightbox opent pas na het laden van de pagina, zodat de server en de eerste render hetzelfde zijn
  const index = indexOfPhoto(route.query.foto)
  if (index !== null) openIndex.value = index
  else if (route.query.foto !== undefined) router.replace({ query: {} })
})
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  clearTimeout(noticeTimer)
})
</script>

<template>
  <div>
    <PageHeader
      :image="album.photos[0].src"
      label="Foto's"
      :title="album.title"
    >
      <NuxtLink to="/fotos" class="text-sm font-medium text-stone-500 hover:text-stone-700">
        &larr; Alle albums
      </NuxtLink>
      <p class="mt-2 max-w-xl text-stone-600">{{ album.description }}</p>
    </PageHeader>

    <section class="bg-stone-50 py-16 sm:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <button
            v-for="(photo, index) in photos"
            :key="photo.src"
            :ref="(el) => { thumbs[index] = el as HTMLElement | null }"
            type="button"
            class="group aspect-square overflow-hidden rounded-2xl bg-stone-200"
            @click="open(index)"
          >
            <NuxtImg
              :src="photo.src"
              :alt="photo.alt"
              class="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
              width="500"
              height="500"
              sizes="375:50vw sm:33vw lg:357px"
              format="webp"
              loading="lazy"
            />
          </button>
        </div>

        <NuxtLink
          to="/fotobeleid"
          class="mt-10 inline-block text-sm text-stone-400 underline decoration-stone-300 underline-offset-4 hover:text-stone-600"
        >
          Bezwaar tegen een foto? Bekijk ons fotobeleid
        </NuxtLink>
      </div>
    </section>

    <!-- Lightbox: het ingebouwde <dialog>, geopend met showModal(). Dat regelt zelf de laag erachter (::backdrop),
         de focus in het venster, Escape en de rest van de pagina op slot (inert). -->
    <Teleport to="#teleports">
      <Transition name="lightbox" @after-leave="restoreFocus">
        <dialog
          v-if="openIndex !== null"
          ref="dialog"
          aria-label="Foto vergroten"
          class="lightbox-dialoog fixed inset-0 m-0 h-full max-h-none w-full max-w-none items-center justify-center overflow-hidden border-0 bg-black/90 p-4 text-inherit open:flex"
          @click.self="close"
          @close="onDialogClose"
        >
          <!-- Delen, downloaden en sluiten rechtsboven. Iconen: Lucide (ISC). -->
          <div class="absolute right-4 top-4 flex gap-2">
            <button
              type="button"
              :class="lightboxButton"
              aria-label="Foto delen"
              title="Foto delen"
              @click="share"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
            </button>
            <a
              :href="currentPhoto?.src"
              :download="downloadName"
              :class="lightboxButton"
              aria-label="Foto downloaden"
              title="Foto downloaden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            </a>
            <button
              autofocus
              type="button"
              :class="lightboxButton"
              aria-label="Sluiten (Esc)"
              @click="close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </div>
          <button
            type="button"
            :class="[lightboxButton, 'absolute left-4 top-1/2 -translate-y-1/2']"
            aria-label="Vorige foto"
            @click.stop="prev"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            type="button"
            :class="[lightboxButton, 'absolute right-4 top-1/2 -translate-y-1/2']"
            aria-label="Volgende foto"
            @click.stop="next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 5l7 7-7 7" /></svg>
          </button>
          <!-- Bij wisselen schuift de oude foto weg en de nieuwe erin, in de richting van de wissel -->
          <Transition :name="`lightbox-photo-${direction}`" mode="out-in">
            <NuxtImg
              :key="openIndex"
              :src="photos[openIndex].src"
              :alt="photos[openIndex].alt"
              class="lightbox-photo max-h-[85vh] max-w-full rounded-lg object-contain"
              format="webp"
              width="1600"
              @load="photoLoaded = true"
            />
          </Transition>
          <NuxtImg
            v-for="photo in neighbours"
            :key="photo.src"
            :src="photo.src"
            alt=""
            aria-hidden="true"
            class="hidden"
            format="webp"
            width="1600"
          />
          <p class="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-stone-400">
            {{ openIndex + 1 }} / {{ photos.length }}
          </p>
          <!-- Melding na delen (Link gekopieerd). Het element blijft staan, zodat een schermlezer de
               verandering meldt. -->
          <p
            role="status"
            class="pointer-events-none absolute bottom-14 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-2 text-sm font-medium text-stone-900 shadow-lg transition-opacity duration-200"
            :class="notice ? 'opacity-100' : 'opacity-0'"
          >
            {{ notice }}
          </p>
        </dialog>
      </Transition>
    </Teleport>
  </div>
</template>

<style>
/* Zolang de lightbox open is, verdwijnt de schuifbalk van de pagina (zoals voorheen, met overflow: hidden op de
   body): anders staat hij naast de donkere laag. De pagina scrolt dan ook niet mee onder het venster. */
html:has(dialog.lightbox-dialoog:modal) {
  overflow: hidden;
}

/* Het <dialog> vult het scherm met zijn eigen donkere laag; de standaardlaag van de browser (::backdrop) is niet
   nodig. overscroll-behavior: de pagina erachter scrolt niet mee, ook niet boven de laag. */
.lightbox-dialoog {
  overscroll-behavior: contain;
}
.lightbox-dialoog::backdrop {
  background: transparent;
}

/* Lightbox: de donkere laag fadet in en uit en de foto zoomt er licht in (±200 ms). Bij wisselen
   schuift de oude foto weg en de nieuwe erin, in de richting van de wissel (±150 + 220 ms). */
.lightbox-enter-active {
  transition: opacity 200ms ease-out;
}
.lightbox-leave-active {
  transition: opacity 150ms ease-in;
  pointer-events: none;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
.lightbox-enter-active .lightbox-photo {
  transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1);
}
.lightbox-enter-from .lightbox-photo {
  transform: scale(0.94);
}

.lightbox-photo-next-enter-active,
.lightbox-photo-prev-enter-active {
  transition: opacity 220ms ease-out, transform 220ms ease-out;
}
.lightbox-photo-next-leave-active,
.lightbox-photo-prev-leave-active {
  transition: opacity 150ms ease-in, transform 150ms ease-in;
}
.lightbox-photo-next-enter-from,
.lightbox-photo-prev-leave-to {
  opacity: 0;
  transform: translateX(32px);
}
.lightbox-photo-next-leave-to,
.lightbox-photo-prev-enter-from {
  opacity: 0;
  transform: translateX(-32px);
}

/* Beweging verminderen: geen zoom en geen verschuiving, alleen een korte fade */
@media (prefers-reduced-motion: reduce) {
  .lightbox-enter-active,
  .lightbox-leave-active,
  .lightbox-photo-next-enter-active,
  .lightbox-photo-prev-enter-active,
  .lightbox-photo-next-leave-active,
  .lightbox-photo-prev-leave-active {
    transition: opacity 100ms linear;
  }
  .lightbox-enter-active .lightbox-photo {
    transition: none;
  }
  .lightbox-enter-from .lightbox-photo,
  .lightbox-photo-next-enter-from,
  .lightbox-photo-next-leave-to,
  .lightbox-photo-prev-enter-from,
  .lightbox-photo-prev-leave-to {
    transform: none;
  }
}
</style>
