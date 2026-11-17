<script setup lang="ts">
// Programma 2027: datums en status volgens de IZB-pagina van de camping.
// De status staat in woorden, zonder aantallen: aantallen veranderen snel en staan op de IZB-pagina.
useSeoMeta({
  title: 'Programma 2027: weken op de camping',
  description: 'Het programma van Dabar Het Baken in 2027 op Camping Kriemelberg Bushcamp in Ermelo: de meivakantie en vijf zomerweken, van 24 april t/m 20 augustus 2027.',
})

// status: 'gesloten' = "Teamplaatsen vol" (de teamplaatsen zijn vol, niet de camping), 'ruimte' = "Nog plek in het team"
type Status = 'gesloten' | 'ruimte'

const weken: { naam: string, datum: string, status: Status }[] = [
  { naam: 'Meivakantie', datum: 'za 24 april t/m vr 30 april', status: 'gesloten' },
  { naam: 'Zomerweek 1', datum: 'za 17 juli t/m vr 23 juli', status: 'ruimte' },
  { naam: 'Zomerweek 2', datum: 'za 24 juli t/m vr 30 juli', status: 'ruimte' },
  { naam: 'Zomerweek 3', datum: 'za 31 juli t/m vr 6 augustus', status: 'ruimte' },
  { naam: 'Zomerweek 4', datum: 'za 7 augustus t/m vr 13 augustus', status: 'ruimte' },
  { naam: 'Zomerweek 5', datum: 'za 14 augustus t/m vr 20 augustus', status: 'ruimte' },
]

const statusTekst: Record<Status, string> = {
  gesloten: 'Teamplaatsen vol',
  ruimte: 'Nog plek in het team',
}

const statusKlasse: Record<Status, string> = {
  gesloten: 'bg-stone-200 text-stone-700',
  ruimte: 'bg-yellow-400 text-stone-900',
}

const tekstlinkKlasse =
  'font-semibold text-stone-900 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900'
</script>

<template>
  <div>
    <PageHeader
      image="/images/galerij/broodjebakken-groep.jpg"
      label="Op de camping"
      title="Het programma van 2027"
    />

    <section class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p class="text-lg text-stone-600">
        In 2027 is Dabar Het Baken op Camping Kriemelberg Bushcamp in Ermelo: de meivakantieweek en vijf zomerweken. Bekijk de weken hieronder en meld je aan voor een team.
      </p>

      <p class="mt-4 text-stone-700 leading-relaxed">
        Voor de meivakantie zijn de teamplaatsen al vol. Voor de zomerweken is er nog plek in het team. Meld je aan als je mee wilt draaien in een team.
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
            :class="statusKlasse[week.status]"
          >
            {{ statusTekst[week.status] }}
          </span>
        </li>
      </ul>

      <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          href="https://www.izb.nl/dabar/camping/registratie-eerste-keer/32836"
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
