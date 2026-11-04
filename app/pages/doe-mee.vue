<script setup lang="ts">
useSeoMeta({
  title: 'Doe mee',
  description: 'Dabar Het Baken draait op vrijwilligers. Word onderdeel van het team: van een enkele week op de camping tot een rol door het hele jaar heen.',
})

const roles = [
  { name: 'Commissielid', requirement: '24 jaar of ouder', description: 'Je denkt het jaar door mee over voorbereiding, uitvoering en evaluatie, vergadert één keer per maand en begeleidt één week per jaar een team op de camping.' },
  { name: 'Teamlid', requirement: '18 tot 26 jaar', description: 'Je verblijft een bakenweek op de camping, samen met een team van ongeveer negen jongeren, en getuigt er door woord en daad.' },
  { name: 'Mentor', requirement: '', description: 'Je biedt een team tijdens hun bakenweek dagelijks begeleiding en ondersteuning.' },
  { name: 'Kerkambassadeur', requirement: '', description: 'Je vertegenwoordigt je kerk, houdt de lijnen kort en helpt mee met de werving van teamleden en fondsen.' },
  { name: 'Campingpastor', requirement: '', description: 'Je bent er voor gasten die op de camping een luisterend oor, een goed gesprek of gebed zoeken.' },
]

const churches = [
  'Baptistengemeente Harderwijk',
  'CGK Harderwijk',
  'Hervormde gemeente Harderwijk (Bethelkerk, De Regenboog, Grote kerk)',
  'Hervormde gemeente Hierden (Dorpskerk, Visnet)',
  'Protestantse gemeente Harderwijk',
]
</script>

<template>
  <div>
    <PageHeader
      image="/images/galerij/team-groepsfoto-juichend.jpg"
      label="Doe mee"
      title="Word onderdeel van het team"
    />

    <section class="bg-white py-16 sm:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <StickerLabel color="blue" rotate="right" class="mb-4">Zoekt teamleden voor 2026</StickerLabel>
            <p class="text-lg text-stone-600">
              Dabar Het Baken draait volledig op vrijwilligers — mensen die tijd, aandacht
              en geloof willen delen met gasten op de camping.
            </p>
            <div class="mt-6 space-y-4 text-stone-700 leading-relaxed">
              <p>
                Als interkerkelijke evangelisatie- en recreatiecommissie organiseren we
                jaarlijks de bakenweken op Camping Kriemelberg Bushcamp in Ermelo. De
                voorbereiding daarvoor loopt het hele jaar door, en elk jaar is opnieuw een
                team nodig — en mensen die dat team voorbereiden, begeleiden en dragen.
              </p>
              <p>
                Er is op meerdere plekken ruimte om aan te sluiten, van een enkele week op
                de camping tot een rol door het hele jaar heen.
              </p>
            </div>
            <div class="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.izb.nl/dabar/camping?relation_id=32836"
                target="_blank"
                rel="noopener"
                class="rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition-colors"
              >
                Meld je aan als teamlid
              </a>
              <a
                href="mailto:dabarhetbaken@gmail.com"
                class="rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-100 transition-colors"
              >
                Liever eerst wat vragen? Mail ons
              </a>
            </div>
          </div>
          <NuxtImg
            src="/images/team-kind-spelen.jpg"
            alt="Een vrijwilliger speelt met een campingkind"
            class="aspect-[4/3] w-full rounded-2xl object-cover"
            sizes="375:100vw sm:100vw lg:560px"
            format="webp"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section class="bg-stone-50 py-16 sm:py-20">
      <div class="mx-auto max-w-5xl px-4 sm:px-6">
        <StickerLabel class="mb-4">Manieren om mee te doen</StickerLabel>
        <div class="grid gap-5 sm:grid-cols-2">
          <div
            v-for="role in roles"
            :key="role.name"
            class="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div class="flex items-baseline justify-between gap-2">
              <h2 class="text-lg font-semibold text-stone-900">{{ role.name }}</h2>
              <span v-if="role.requirement" class="shrink-0 text-xs text-stone-500">{{ role.requirement }}</span>
            </div>
            <p class="mt-2 text-sm text-stone-600 leading-relaxed">{{ role.description }}</p>
          </div>
        </div>
        <div class="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:dabarhetbaken@gmail.com"
            class="inline-block rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition-colors"
          >
            Neem contact op — dabarhetbaken@gmail.com
          </a>
          <a
            href="/documenten/vacature-commissielid.pdf"
            target="_blank"
            class="inline-block rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-100 transition-colors"
          >
            Download de vacature commissielid (PDF)
          </a>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 sm:py-20">
      <div class="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 class="text-lg font-semibold text-stone-900">Gesteund door kerken uit Harderwijk en Hierden</h2>
        <p class="mt-2 text-sm text-stone-600">
          Kerkambassadeurs vanuit deze kerken houden de lijnen met Dabar Het Baken kort:
        </p>
        <ul class="mt-4 grid gap-2 text-sm text-stone-700 sm:grid-cols-2">
          <li v-for="church in churches" :key="church" class="flex gap-2">
            <span class="text-yellow-500">●</span> {{ church }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
