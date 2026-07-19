<script setup lang="ts">
useHead({ title: 'Dabar Het Baken — evangelisatie door recreatie' })

const teasers = [
  {
    to: '/missie',
    label: 'Missie',
    heading: 'Wie we zijn',
    body: 'Een interkerkelijke evangelisatie- en recreatiecommissie, aanwezig met het evangelie op een manier die uitnodigt in plaats van overtuigt.',
    cta: 'Lees ons verhaal',
  },
  {
    to: '/activiteiten',
    label: 'Activiteiten',
    heading: 'Voor iedere leeftijd',
    body: 'Elke ochtend een club per leeftijdsgroep, de Sing-In op zondagavond, en het campingpastoraat voor volwassenen.',
    cta: 'Bekijk alle activiteiten',
  },
  {
    to: '/programma',
    label: 'Programma 2026',
    heading: 'Meivakantie + vijf zomerweken',
    body: 'De zomerweken lopen van 18 juli t/m 21 augustus 2026. Sommige weken zitten al vol, in andere is nog ruimte.',
    cta: 'Bekijk het programma',
  },
  {
    to: '/doe-mee',
    label: 'Doe mee',
    heading: 'We zoeken je',
    body: 'Commissieleden, teamleden, mentoren, kerkambassadeurs en campingpastors — doorlopend welkom.',
    cta: 'Bekijk de rollen',
  },
  {
    to: '/steun-ons',
    label: 'Steun ons',
    heading: 'Met tijd, gebed of een gift',
    body: 'Dabar Het Baken draait volledig op vrijwilligers en giften. Elke bijdrage komt direct ten goede aan het team en de bezoekers.',
    cta: 'Bekijk hoe je kan steunen',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-stone-900 text-white">
      <NuxtImg
        src="/images/team-onderweg-camping.jpg"
        alt=""
        class="absolute inset-0 h-full w-full object-cover opacity-40"
        sizes="100vw"
        format="webp"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-stone-900/30" />
      <div class="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <p class="mb-3 inline-block rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-stone-900">
          Evangelisatie door recreatie — op Camping Kriemelberg Bushcamp in Ermelo
        </p>
        <h1 class="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Dabar Het Baken
        </h1>
        <div class="mt-6 max-w-xl space-y-4 text-stone-200">
          <p>
            Dabar Het Baken is een interkerkelijke evangelisatie- en recreatiecommissie.
            Tijdens de meivakantie en vijf zomerweken zorgt een team van vrijwilligers
            voor clubs, activiteiten en een luisterend oor — voor gasten van jong tot oud.
          </p>
          <p>De organisatie draait volledig op vrijwilligers, en op de steun van kerken en donateurs.</p>
        </div>
        <div class="mt-10 flex flex-wrap gap-3">
          <NuxtLink to="/activiteiten" class="rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition-colors">
            Programma voor gasten
          </NuxtLink>
          <NuxtLink to="/doe-mee" class="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
            Word vrijwilliger
          </NuxtLink>
          <NuxtLink to="/steun-ons" class="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
            Steun ons werk
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Teasers -->
    <section class="bg-stone-50 py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="teaser in teasers"
            :key="teaser.to"
            :to="teaser.to"
            class="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span class="inline-block w-fit rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-800">
              {{ teaser.label }}
            </span>
            <h2 class="mt-4 text-lg font-semibold text-stone-900">{{ teaser.heading }}</h2>
            <p class="mt-2 flex-1 text-sm text-stone-600 leading-relaxed">{{ teaser.body }}</p>
            <span class="mt-4 text-sm font-semibold text-stone-900 underline decoration-yellow-400 decoration-2 underline-offset-4 group-hover:text-stone-700">
              {{ teaser.cta }} &rarr;
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
