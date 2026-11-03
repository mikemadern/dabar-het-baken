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

function handleKeydown(event: KeyboardEvent) {
  if (openIndex.value === null) return
  if (event.key === 'Escape') close()
  else if (event.key === 'ArrowRight') next()
  else if (event.key === 'ArrowLeft') prev()
}

watch(openIndex, (value) => {
  document.body.style.overflow = value === null ? '' : 'hidden'
})

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
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

    <!-- Lightbox -->
    <div
      v-if="openIndex !== null"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      @click.self="close"
    >
      <button
        type="button"
        class="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        aria-label="Sluiten (Esc)"
        @click="close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
      <button
        type="button"
        class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        aria-label="Vorige foto"
        @click.stop="prev"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button
        type="button"
        class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        aria-label="Volgende foto"
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
      <p class="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-stone-400">
        {{ openIndex + 1 }} / {{ photos.length }}
      </p>
    </div>
  </div>
</template>
