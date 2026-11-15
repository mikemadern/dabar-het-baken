<script setup lang="ts">
// CONCEPT 2027: de datums zijn nog niet bekend. Vervang [datum t.b.c.] zodra de eigenaar ze aanlevert.
useSeoMeta({
  title: 'Programma 2027: weken op de camping',
  description: 'Het programma van Dabar Het Baken voor 2027 op Camping Kriemelberg Bushcamp in Ermelo. De datums zijn nog [datum t.b.c.]; kom terug zodra de weken vast staan.',
})

const meivakantie = [
  { label: 'Meivakantieweek — [datum t.b.c.]' },
]

const zomerweken = [
  { label: 'Zomerweek 1 — [datum t.b.c.]' },
  { label: 'Zomerweek 2 — [datum t.b.c.]' },
  { label: 'Zomerweek 3 — [datum t.b.c.]' },
  { label: 'Zomerweek 4 — [datum t.b.c.]' },
  { label: 'Zomerweek 5 — [datum t.b.c.]' },
]
</script>

<template>
  <div>
    <PageHeader
      image="/images/galerij/broodjebakken-groep.jpg"
      label="Programma 2027"
      title="Op de camping in 2027"
    />

    <section class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p class="text-lg text-stone-600">
        Het programma voor 2027 op Camping Kriemelberg Bushcamp in Ermelo komt hier te staan. De datums van de weken zijn nog [datum t.b.c.]. Zodra ze vast staan, zie je hier welke weken er zijn en hoe je je aanmeldt voor een team.
      </p>

      <div class="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <StickerLabel class="mb-4">Meivakantie</StickerLabel>
          <div class="space-y-2">
            <div
              v-for="week in meivakantie"
              :key="week.label"
              class="rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <span>{{ week.label }}</span>
            </div>
          </div>
        </div>
        <div>
          <StickerLabel class="mb-4">Zomervakantie</StickerLabel>
          <div class="space-y-2">
            <div
              v-for="week in zomerweken"
              :key="week.label"
              class="rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <span>{{ week.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-6 text-sm text-stone-500">
        Beschikbaarheid kan snel veranderen — voor de allerlaatste stand kun je terecht bij de
        camping of bij ons.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <!-- CONCEPT: deze aanmeldlink is die van 2026. De link voor 2027 moet nog komen. -->
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
