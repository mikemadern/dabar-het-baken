<script setup lang="ts">
import { albums, findAlbum } from '~/data/albums'

const route = useRoute()
const album = findAlbum(route.params.album as string)

if (!album) {
  throw createError({ statusCode: 404, statusMessage: "Album niet gevonden" })
}

useSeoMeta({
  title: `${album.title} — Foto's`,
  description: album.description,
})

const photos = album.photos
const openIndex = ref<number | null>(null)

// De miniaturen (om de focus bij sluiten terug te zetten) en de lightbox zelf
const thumbs: (HTMLElement | null)[] = []
const dialog = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)

async function open(index: number) {
  openIndex.value = index
  // De focus gaat de lightbox in, anders blijft hij op de miniatuur achter de donkere laag staan
  await nextTick()
  closeButton.value?.focus()
}
function close() {
  const index = openIndex.value
  openIndex.value = null
  // Terug naar de miniatuur van de foto die je het laatst zag
  if (index !== null) nextTick(() => thumbs[index]?.focus())
}
// Richting van de laatste wissel: de foto schuift mee in die richting. De richting wordt eerst gezet en
// de foto pas een tick later gewisseld: de vertrekkende foto gebruikt de transitienaam van de vorige
// render, dus anders schuift hij nog de vorige richting op.
const direction = ref<'next' | 'prev'>('next')

async function next() {
  if (openIndex.value === null) return
  direction.value = 'next'
  await nextTick()
  if (openIndex.value !== null) openIndex.value = (openIndex.value + 1) % photos.length
}
async function prev() {
  if (openIndex.value === null) return
  direction.value = 'prev'
  await nextTick()
  if (openIndex.value !== null) openIndex.value = (openIndex.value - 1 + photos.length) % photos.length
}

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

// Tab blijft in de lightbox: van de laatste knop naar de eerste en omgekeerd
function trapFocus(event: KeyboardEvent) {
  const buttons = dialog.value?.querySelectorAll<HTMLElement>('button')
  if (!dialog.value || !buttons?.length) return
  const first = buttons[0]!
  const last = buttons[buttons.length - 1]!
  const outside = !dialog.value.contains(document.activeElement)
  if (event.shiftKey && (document.activeElement === first || outside)) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && (document.activeElement === last || outside)) {
    event.preventDefault()
    first.focus()
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (openIndex.value === null) return
  if (event.key === 'Escape') close()
  else if (event.key === 'ArrowRight') next()
  else if (event.key === 'ArrowLeft') prev()
  else if (event.key === 'Tab') trapFocus(event)
}

// Zolang de lightbox open is, is de rest van de pagina (#__nuxt) niet bereikbaar met toetsenbord,
// muis of schermlezer. De lightbox staat in #teleports, buiten #__nuxt.
function setPageInert(inert: boolean) {
  document.getElementById('__nuxt')?.toggleAttribute('inert', inert)
}

watch(openIndex, (value) => {
  document.body.style.overflow = value === null ? '' : 'hidden'
  setPageInert(value !== null)
  photoLoaded.value = false
})

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
  setPageInert(false)
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

    <!-- Lightbox: in #teleports (naast #__nuxt), zodat de rest van de pagina op slot kan -->
    <Teleport to="#teleports">
      <Transition name="lightbox">
        <div
          v-if="openIndex !== null"
          ref="dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Foto vergroten"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          @click.self="close"
        >
          <button
            ref="closeButton"
            type="button"
            class="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Sluiten (Esc)"
            @click="close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <button
            type="button"
            class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Vorige foto"
            @click.stop="prev"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            type="button"
            class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style>
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
