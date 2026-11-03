<script setup lang="ts">
useSeoMeta({
  title: 'Programma 2026',
  description: 'In 2026 is Dabar Het Baken zes weken te vinden op Camping Kriemelberg Bushcamp: de meivakantieweek en vijf zomerweken. Bekijk de weken en meld je aan voor een team.',
})

const meivakantie = [
  { label: 'Zaterdag 25 april t/m vrijdag 1 mei', vol: true },
]

const zomerweken = [
  { label: 'Zomerweek 1: za 18 juli t/m vr 24 juli', vol: true },
  { label: 'Zomerweek 2: za 25 juli t/m vr 31 juli', vol: true },
  { label: 'Zomerweek 3: za 1 aug t/m vr 7 aug', vol: false },
  { label: 'Zomerweek 4: za 8 aug t/m vr 14 aug', vol: false },
  { label: 'Zomerweek 5: za 15 aug t/m vr 21 aug', vol: false },
]
</script>

<template>
  <div>
    <PageHeader
      image="/images/galerij/broodjebakken-groep.jpg"
      label="Programma 2026"
      title="In 2026 zijn we weer zes weken op Kriemelberg Bushcamp"
    />

    <section class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p class="text-lg text-stone-600">
        In 2026 is Dabar Het Baken weer zes weken te vinden op Camping Kriemelberg Bushcamp:
        de meivakantieweek en vijf zomerweken.
      </p>
      <p class="mt-4 text-stone-700 leading-relaxed">
        Sommige weken zitten al vol, in andere is nog ruimte. Meld je snel aan als je mee wilt
        draaien in een team.
      </p>

      <div class="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <StickerLabel class="mb-4">Meivakantie</StickerLabel>
          <div class="space-y-2">
            <div
              v-for="week in meivakantie"
              :key="week.label"
              class="flex items-center justify-between gap-2 rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <span>{{ week.label }}</span>
              <span v-if="week.vol" class="shrink-0 rounded bg-red-500 px-2 py-0.5 text-xs font-bold uppercase">vol</span>
            </div>
          </div>
        </div>
        <div>
          <StickerLabel class="mb-4">Zomervakantie</StickerLabel>
          <div class="space-y-2">
            <div
              v-for="week in zomerweken"
              :key="week.label"
              class="flex items-center justify-between gap-2 rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <span>{{ week.label }}</span>
              <span v-if="week.vol" class="shrink-0 rounded bg-red-500 px-2 py-0.5 text-xs font-bold uppercase">vol</span>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-6 text-sm text-stone-500">
        Beschikbaarheid kan snel veranderen — voor de allerlaatste stand kun je terecht bij de
        camping of bij ons.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <a
          href="https://www.izb.nl/dabar/camping?relation_id=32836"
          target="_blank"
          rel="noopener"
          class="rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition-colors"
        >
          Meld je aan
        </a>
        <a href="https://www.kriemelberg.nl" target="_blank" rel="noopener" class="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white hover:bg-stone-700 transition-colors">
          Vraag naar beschikbaarheid bij Kriemelberg Bushcamp
        </a>
        <a href="mailto:dabarhetbaken@gmail.com" class="rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-100 transition-colors">
          Mail Dabar Het Baken
        </a>
      </div>
    </section>
  </div>
</template>
