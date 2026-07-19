<script setup lang="ts">
useHead({ title: "Foto's — Dabar Het Baken" })

const photos = [
  { src: '/images/galerij/team-onderweg-tent.jpg', alt: 'Teamlid op weg naar de tenten op de camping' },
  { src: '/images/galerij/welkom-camping.jpg', alt: 'Welkomstbord bij de ingang van Kriemelberg Bushcamp' },
  { src: '/images/galerij/volleybal.jpg', alt: 'Team en gasten spelen samen volleybal' },
  { src: '/images/galerij/clowns.jpg', alt: 'Teamleden verkleed als clowns rennen over de camping' },
  { src: '/images/galerij/schommelen.jpg', alt: 'Een meisje schommelt op de camping' },
  { src: '/images/galerij/trampoline-lachen.jpg', alt: 'Een meisje lacht op de trampoline' },
  { src: '/images/galerij/trampoline-glijbaan.jpg', alt: 'Een meisje glijdt van de trampoline-glijbaan' },
  { src: '/images/galerij/high-five.jpg', alt: 'Een teamlid geeft een high-five tijdens een groepsspel' },
  { src: '/images/galerij/voetbal.jpg', alt: 'Kinderen voetballen samen met een teamlid' },
]

const openIndex = ref<number | null>(null)

function open(index: number) {
  openIndex.value = index
}
function close() {
  openIndex.value = null
}
function next() {
  if (openIndex.value === null) return
  openIndex.value = (openIndex.value + 1) % photos.length
}
function prev() {
  if (openIndex.value === null) return
  openIndex.value = (openIndex.value - 1 + photos.length) % photos.length
}
</script>

<template>
  <div>
    <section class="bg-stone-900 py-16 text-white sm:py-20">
      <div class="mx-auto max-w-3xl px-4 sm:px-6">
        <p class="mb-2 inline-block rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-stone-900">
          Foto's
        </p>
        <h1 class="text-3xl font-bold tracking-tight sm:text-5xl">Sfeerbeelden van de camping</h1>
        <p class="mt-4 max-w-xl text-stone-300">
          Een impressie van een bakenweek op Kriemelberg Bushcamp — clubs, spel en een team
          in knalgele shirts.
        </p>
      </div>
    </section>

    <section class="bg-stone-50 py-16 sm:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <button
            v-for="(photo, index) in photos"
            :key="photo.src"
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
      </div>
    </section>

    <!-- Lightbox -->
    <div
      v-if="openIndex !== null"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      @click.self="close"
    >
      <button
        type="button"
        class="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        aria-label="Sluiten"
        @click="close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
      <button
        type="button"
        class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        aria-label="Vorige"
        @click.stop="prev"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        type="button"
        class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        aria-label="Volgende"
        @click.stop="next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 5l7 7-7 7" /></svg>
      </button>
      <NuxtImg
        :src="photos[openIndex].src"
        :alt="photos[openIndex].alt"
        class="max-h-[85vh] max-w-full rounded-lg object-contain"
        format="webp"
        width="1600"
      />
    </div>
  </div>
</template>
