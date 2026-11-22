<script setup lang="ts">
useSeoMeta({
  title: 'Steun ons',
  description: 'Dabar Het Baken draait volledig op vrijwilligers en giften. Zo steun je het clubwerk voor kinderen en jongeren en de teams op de camping.',
})

// De twee giftkaarten. IBAN's, tenaamstelling en o.v.v. staan hier zoals ze eerder op de pagina stonden.
const giften = [
  {
    id: 'gewoon',
    titel: 'Gewone gift',
    iban: 'NL43 INGB 0001 1478 23',
    regel: 't.n.v. Dabar Het Baken',
    knopLabel: 'Kopieer IBAN van de gewone gift',
    gelukt: 'IBAN van de gewone gift gekopieerd',
  },
  {
    id: 'anbi',
    titel: 'Fiscaal aftrekbare (ANBI-)gift, via de IZB',
    iban: 'NL26 RABO 0302 2061 91',
    regel: 'o.v.v. \u201CHet Baken, De Kriemelberg, Dabar\u201D',
    knopLabel: 'Kopieer IBAN van de ANBI-gift via de IZB',
    gelukt: 'IBAN van de ANBI-gift gekopieerd',
  },
]

const mislukt = 'Kopiëren lukt niet. Selecteer het IBAN en kopieer het zelf.'

// Melding per kaart (role="status"); verdwijnt na enkele seconden
const meldingen = reactive<Record<string, string>>({ gewoon: '', anbi: '' })
const timers: Record<string, ReturnType<typeof setTimeout> | undefined> = {}

async function kopieer(gift: (typeof giften)[number]) {
  // navigator.clipboard.writeText is overal beschikbaar (sinds 2020); lukt het niet (geen toestemming, of een
  // onveilige verbinding), dan staat de melding 'Kopiëren lukt niet' met de uitleg om het IBAN zelf te kopiëren.
  let gelukt = false
  try {
    await navigator.clipboard.writeText(gift.iban)
    gelukt = true
  } catch {
    gelukt = false
  }
  meldingen[gift.id] = gelukt ? gift.gelukt : mislukt
  clearTimeout(timers[gift.id])
  timers[gift.id] = setTimeout(() => {
    meldingen[gift.id] = ''
  }, 5000)
}

onBeforeUnmount(() => {
  Object.values(timers).forEach((t) => clearTimeout(t))
})
</script>

<template>
  <div>
    <PageHeader
      image="/images/headers/receptie-telefooncel.jpg"
      label="Bijdragen"
      title="Maak het Baken mogelijk"
    />

    <section class="bg-white pb-16 pt-8 sm:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <!-- De volgorde in de code is die van de telefoon: lead en doelzin, giftkaarten, overige tekst, foto, mailzin
             (dus ook voor toetsenbord en schermlezer). Desktop: tekst links, kaarten en foto rechts, met rasterplaatsing.
             De foto staat twee keer in de code: één voor de telefoon (tussen tekst en mailzin) en één voor desktop
             (onder de kaarten); de andere staat steeds op display:none. -->
        <div class="grid gap-y-4 lg:grid-cols-2 lg:grid-rows-[auto_auto_1fr] lg:items-start lg:gap-x-12 lg:gap-y-0">
          <div class="lg:col-start-1 lg:row-start-1">
            <p class="text-lg text-stone-600">
              Ons werk op de camping bestaat bij de gratie van vrijwilligers en giften.
              Elke bijdrage komt direct ten goede aan het team en de bezoekers.
            </p>
            <p class="mt-4 text-stone-700 leading-relaxed">
              Je gift gaat naar het clubwerk voor kinderen en jongeren en naar de teams op de camping.
            </p>
          </div>
          <div class="contents lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:block">
            <ul class="space-y-4">
              <li
                v-for="(gift, i) in giften"
                :key="gift.id"
                class="rounded-2xl border border-stone-200 bg-stone-50 p-5 pb-3"
              >
                <StickerLabel :rotate="i % 2 === 0 ? 'left' : 'right'">{{ gift.titel }}</StickerLabel>
                <div class="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                  <div>
                    <p class="select-all whitespace-nowrap font-display text-xl font-bold tracking-wide text-stone-900 lg:text-[22px]">
                      {{ gift.iban }}
                    </p>
                    <p class="mt-1 text-stone-600">{{ gift.regel }}</p>
                  </div>
                  <button
                    type="button"
                    class="inline-flex min-h-11 items-center rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
                    :aria-label="gift.knopLabel"
                    @click="kopieer(gift)"
                  >
                    Kopieer IBAN
                  </button>
                </div>
                <p role="status" class="mt-1 min-h-6 text-sm font-semibold text-stone-900 max-[340px]:min-h-10">{{ meldingen[gift.id] }}</p>
              </li>
            </ul>
            <div class="relative mb-4 mt-8 hidden lg:block">
              <NuxtImg
                src="/images/telefooncel-informatiebord.jpg"
                alt="Een rode telefooncel naast het informatiebord bij Kriemelberg Bushcamp."
                class="aspect-[16/9] w-full rounded-2xl object-cover"
                sizes="375:100vw sm:100vw lg:560px"
                format="webp"
                loading="lazy"
              />
              <StickerLabel rotate="right" class="absolute -bottom-4 left-6 z-10">De rode telefooncel</StickerLabel>
            </div>
          </div>
          <div class="lg:col-start-1 lg:row-start-2 lg:mt-6">
            <div class="space-y-4 text-stone-700 leading-relaxed">
              <p>
                Dabar Het Baken draait volledig op vrijwilligers en op giften. Er is geen
                betaald personeel en geen vaste financiering. Alles wat we doen wordt
                mogelijk gemaakt door mensen die meehelpen of meegeven.
              </p>
              <p>
                Een gift komt zo terecht bij het clubwerk voor kinderen en jongeren, en bij
                de teams die tijdens de bakenweken op de camping verblijven. Vragen over je gift?
                Stel ze via de <NuxtLink to="/contact" class="font-semibold text-stone-900 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-stone-700">contactpagina &rarr;</NuxtLink>.
              </p>
              <p>
                Dabar Het Baken heeft zelf geen ANBI-status. Wil je een gift fiscaal
                aftrekken, dan loopt die daarom via de IZB, die deze status wel heeft.
              </p>
              <p>
                Liever iets tastbaars? Bij de receptie op de camping staat een opvallende
                rode telefooncel als spaarpot. Gooi er gerust wat in.
              </p>
            </div>
          </div>
          <div class="relative mb-4 lg:hidden">
            <NuxtImg
              src="/images/telefooncel-informatiebord.jpg"
              alt="Een rode telefooncel naast het informatiebord bij Kriemelberg Bushcamp."
              class="aspect-[16/9] w-full rounded-2xl object-cover"
              sizes="375:100vw sm:100vw lg:560px"
              format="webp"
              loading="lazy"
            />
            <StickerLabel rotate="right" class="absolute -bottom-4 left-6 z-10">De rode telefooncel</StickerLabel>
          </div>
          <a href="mailto:dabarhetbaken@gmail.com" class="justify-self-start font-semibold lg:col-start-1 lg:row-start-3 lg:mt-6 text-stone-900 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-stone-700">
            Vragen over een gift? Mail naar dabarhetbaken@gmail.com
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
