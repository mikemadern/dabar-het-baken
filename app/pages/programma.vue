<script setup lang="ts">
// CONCEPT 2027: de datums en de beschikbaarheid zijn nog niet bekend.
// Vervang [datum t.b.c.] en zet de status zodra de eigenaar ze aanlevert.
useSeoMeta({
  title: 'Programma 2027: weken op de camping',
  description: 'Het programma van Dabar Het Baken voor 2027 op Camping Kriemelberg Bushcamp in Ermelo. De datums zijn nog niet bekend; kom terug zodra de weken vast staan.',
})

// status: 'gesloten' = "Teamplaatsen vol", 'ruimte' = "Nog plek in het team", null = nog niet bekend
type Status = 'gesloten' | 'ruimte' | null

const weken: { naam: string, datum: string, status: Status }[] = [
  { naam: 'Meivakantie', datum: '[datum t.b.c.]', status: null },
  { naam: 'Zomerweek 1', datum: '[datum t.b.c.]', status: null },
  { naam: 'Zomerweek 2', datum: '[datum t.b.c.]', status: null },
  { naam: 'Zomerweek 3', datum: '[datum t.b.c.]', status: null },
  { naam: 'Zomerweek 4', datum: '[datum t.b.c.]', status: null },
  { naam: 'Zomerweek 5', datum: '[datum t.b.c.]', status: null },
]

const statusTekst: Record<'gesloten' | 'ruimte' | 'onbekend', string> = {
  gesloten: 'Teamplaatsen vol',
  ruimte: 'Nog plek in het team',
  onbekend: '[status t.b.c.]',
}

const statusKlasse: Record<'gesloten' | 'ruimte' | 'onbekend', string> = {
  gesloten: 'bg-stone-200 text-stone-700',
  ruimte: 'bg-yellow-400 text-stone-900',
  onbekend: 'border border-dashed border-stone-300 text-stone-600',
}

const statusSleutel = (status: Status) => status ?? 'onbekend'

const tekstlinkKlasse =
  'font-semibold text-stone-900 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900'
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
        Het programma voor 2027 op Camping Kriemelberg Bushcamp in Ermelo komt hier te staan. De datums voor 2027 zijn nog niet bekend. Zodra ze vast staan, zie je hier welke weken er zijn en hoe je je aanmeldt voor een team.
      </p>

      <!-- Pas tonen zodra er voor minstens één week een status is: voor 2027 is die nog niet bekend. -->
      <p v-if="weken.some((week) => week.status)" class="mt-4 text-stone-700 leading-relaxed">
        Voor sommige weken zijn de teamplaatsen al vol, voor andere is nog plek. Meld je snel aan
        als je mee wilt draaien in een team.
      </p>

      <ul class="mt-10 space-y-3">
        <li
          v-for="week in weken"
          :key="week.naam"
          class="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-2xl border border-stone-200 px-5 py-4 sm:grid sm:grid-cols-[200px_1fr_auto]"
          :class="week.status === 'ruimte' ? 'bg-white' : 'bg-stone-50'"
        >
          <span class="order-1 font-display text-lg font-semibold text-stone-900 sm:order-none">
            {{ week.naam }}
          </span>
          <span class="order-3 basis-full text-stone-600 sm:order-none sm:basis-auto">
            {{ week.datum }}
          </span>
          <span
            class="order-2 whitespace-nowrap rounded-full px-3 py-1 text-sm font-semibold sm:order-none"
            :class="statusKlasse[statusSleutel(week.status)]"
          >
            {{ statusTekst[statusSleutel(week.status)] }}
          </span>
        </li>
      </ul>

      <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <!-- CONCEPT: deze aanmeldlink is die van 2026. De link voor 2027 moet nog komen. -->
        <a
          href="https://www.izb.nl/dabar/camping?relation_id=32836"
          target="_blank"
          rel="noopener"
          class="rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
        >
          Meld je aan voor een team
        </a>
        <a
          href="https://www.kriemelberg.nl"
          target="_blank"
          rel="noopener"
          :class="tekstlinkKlasse"
        >
          Vraag bij de camping &rarr;
        </a>
        <a
          href="mailto:dabarhetbaken@gmail.com"
          :class="tekstlinkKlasse"
        >
          Mail ons &rarr;
        </a>
      </div>
    </section>
  </div>
</template>
