<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const isNotFound = computed(() => props.error.statusCode === 404)

const title = computed(() =>
  isNotFound.value ? 'Pagina niet gevonden' : 'Er ging iets mis',
)

const intro = computed(() =>
  isNotFound.value
    ? 'Deze pagina bestaat niet of is verplaatst. Kies hieronder waar je naartoe wilt, of ga terug naar de startpagina.'
    : 'Er ging iets mis bij het laden van deze pagina. Probeer het later nog eens, of ga terug naar de startpagina.',
)

// De foutstatus verandert niet meer tijdens het renderen, dus de meta-tags zijn vaste tekst.
// Het titelsjabloon (sitenaam erachter) wordt op de foutpagina niet toegepast, dus die staat hier erin.
useSeoMeta({
  title: isNotFound.value
    ? 'Pagina niet gevonden | Dabar Het Baken'
    : 'Er ging iets mis | Dabar Het Baken',
  description: isNotFound.value
    ? 'Deze pagina bestaat niet of is verplaatst. Ga naar de startpagina van Dabar Het Baken of kies een andere pagina.'
    : 'Er ging iets mis op deze pagina van Dabar Het Baken. Ga naar de startpagina of kies een andere pagina.',
  robots: 'noindex, nofollow',
})
// Ook de header (X-Robots-Tag) van de foutpagina moet noindex zijn: de module zet er anders 'index, follow' op,
// terwijl de meta-tag noindex zegt. De statuscode (404) blijft leidend, maar de twee zeggen nu hetzelfde.
useRobotsRule('noindex, nofollow')

// Wist de fout en gaat naar de voorpagina; zonder clearError blijft de foutpagina staan.
const goHome = () => clearError({ redirect: '/' })

const links = [
  { to: '/missie', label: 'Missie' },
  { to: '/activiteiten', label: 'Activiteiten' },
  { to: '/programma', label: 'Programma 2027' },
  { to: '/fotos', label: "Foto's" },
  { to: '/steun-ons', label: 'Steun ons' },
  { to: '/doe-mee', label: 'Doe mee' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <NuxtLayout>
    <section class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1
        class="inline-block -rotate-1 rounded-lg bg-yellow-400 px-4 py-2 font-display text-3xl font-bold text-stone-900 shadow-sm sm:text-5xl"
      >
        {{ title }}
      </h1>

      <p class="mt-6 text-lg text-stone-600">{{ intro }}</p>

      <button
        type="button"
        class="mt-8 rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition duration-100 active:bg-yellow-500 motion-safe:active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
        @click="goHome"
      >
        Naar de startpagina
      </button>

      <nav aria-label="Kies een pagina" class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="block rounded-2xl border border-stone-200 bg-stone-50 p-6 font-display text-lg font-semibold text-stone-900 hover:bg-yellow-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </section>
  </NuxtLayout>
</template>
