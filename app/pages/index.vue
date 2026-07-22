<script setup lang="ts">
useHead({ title: "Dabar Het Baken — evangelisatie door recreatie" });

const activiteitenChips = [
  "Kinderclub 4-8",
  "Teen Spirit 9-11",
  "Chatpoint 12-16",
  "No Nonsense 17+",
  "Sing-In",
  "Campingpastoraat",
];
const doeMeeChips = [
  "Commissielid 24+",
  "Teamlid 18-26",
  "Mentor",
  "Kerkambassadeur",
  "Campingpastor",
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="relative overflow-hidden bg-stone-900 text-white"
      style="clip-path: polygon(0 0, 100% 0, 100% 99%, 0 100%)"
    >
      <NuxtImg
        src="/images/team-onderweg-camping.jpg"
        alt=""
        class="absolute inset-0 h-full w-full object-cover"
        fill
        format="webp"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/40 to-transparent"
      />
      <div
        class="relative mx-auto max-w-6xl px-4 pb-28 pt-24 sm:px-6 sm:pb-36 sm:pt-32"
      >
        <StickerLabel class="mb-3">
          Evangelisatie door recreatie — op Camping Kriemelberg Bushcamp in
          Ermelo
        </StickerLabel>
        <h1
          class="inline-block -rotate-1 rounded-lg bg-sky-400 px-4 py-2 font-display text-3xl font-bold text-white shadow-lg sm:px-6 sm:py-3 sm:text-5xl"
        >
          Dabar Het Baken
        </h1>
        <div class="mt-6 max-w-xl space-y-4 text-stone-200">
          <p>
            Dabar Het Baken is een interkerkelijke evangelisatie- en
            recreatiecommissie. Tijdens de meivakantie en vijf zomerweken zorgt
            een team van vrijwilligers voor clubs, activiteiten en een
            luisterend oor — voor gasten van jong tot oud.
          </p>
          <p>
            De organisatie draait volledig op vrijwilligers, en op de steun van
            kerken en donateurs.
          </p>
        </div>
        <div class="mt-10 flex flex-wrap gap-3">
          <NuxtLink
            to="/activiteiten"
            class="rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition-colors"
          >
            Programma voor gasten
          </NuxtLink>
          <NuxtLink
            to="/doe-mee"
            class="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Word vrijwilliger
          </NuxtLink>
          <NuxtLink
            to="/steun-ons"
            class="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Steun ons werk
          </NuxtLink>
        </div>
      </div>
    </section>

    <ValueTicker class="-mt-4 sm:-mt-6" />

    <!-- 01 Missie -->
    <section class="bg-white py-20 sm:py-24">
      <div
        class="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-16"
      >
        <div class="relative lg:col-span-5">
          <NuxtImg
            src="/images/headers/team-gesprek-gast.jpg"
            alt="Teamleden in gesprek met een campinggast"
            class="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            sizes="480px"
            format="webp"
          />
          <StickerLabel
            color="blue"
            rotate="right"
            class="absolute -bottom-4 left-6 z-10"
          >
            Ermelo, sinds eind jaren '90
          </StickerLabel>
        </div>
        <div class="lg:col-span-7">
          <StickerLabel class="mb-3">Missie</StickerLabel>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            Wie we zijn
          </h2>
          <div class="mt-4 space-y-4 text-stone-600 leading-relaxed">
            <p>
              Al sinds het einde van de vorige eeuw staat er een team in gele
              shirts op Camping Kriemelberg Bushcamp in Ermelo. Niet om te
              overtuigen, maar om er gewoon te zijn — tussen de tenten, op het
              terras, bij de receptie.
            </p>
            <p>
              Dabar Het Baken is een interkerkelijke evangelisatie- en
              recreatiecommissie. Ons motto: evangelisatie door recreatie. We
              werken hierin samen met Dabar-IZB, dat op zo'n twintig campings in
              Nederland actief is.
            </p>
          </div>
          <NuxtLink
            to="/missie"
            class="mt-6 inline-block font-semibold text-stone-900 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-stone-700"
          >
            Lees ons hele verhaal &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 02 Activiteiten -->
    <section class="bg-stone-50 py-20 sm:py-24">
      <div
        class="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-16"
      >
        <div class="lg:col-span-6">
          <StickerLabel color="blue" rotate="right" class="mb-3"
            >Activiteiten</StickerLabel
          >
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            Voor iedere leeftijd
          </h2>
          <p class="mt-4 text-stone-600 leading-relaxed">
            Elke ochtend gaat de camping open voor een club per leeftijdsgroep.
            's Avonds is er de Sing-In, en de hele week door is er het
            campingpastoraat voor volwassenen die een luisterend oor zoeken.
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="(chip, i) in activiteitenChips"
              :key="chip"
              class="rounded-full px-2.5 py-1 text-xs font-semibold"
              :class="
                i % 2 === 0
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-sky-100 text-sky-800'
              "
            >
              {{ chip }}
            </span>
          </div>
          <NuxtLink
            to="/activiteiten"
            class="mt-6 inline-block font-semibold text-stone-900 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-stone-700"
          >
            Bekijk alle activiteiten &rarr;
          </NuxtLink>
        </div>
        <div class="lg:col-span-6">
          <div class="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
            <NuxtImg
              src="/images/galerij/trampoline-lachen.jpg"
              alt="Een meisje lacht op de trampoline"
              class="row-span-2 aspect-[3/4] w-full rounded-2xl object-cover"
              sizes="280px"
              format="webp"
            />
            <NuxtImg
              src="/images/headers/poppenkast.jpg"
              alt="Een handbeschilderde poppenkast met Jos en Jet"
              class="aspect-square w-full rounded-2xl object-cover"
              sizes="260px"
              format="webp"
            />
            <NuxtImg
              src="/images/headers/voetbal-alt.jpg"
              alt="Kinderen voetballen samen met een teamlid"
              class="aspect-square w-full rounded-2xl object-cover"
              sizes="260px"
              format="webp"
            />
            <NuxtImg
              src="/images/galerij/high-five.jpg"
              alt="Een teamlid geeft een high-five tijdens een groepsspel"
              class="col-span-2 aspect-[2/1] w-full rounded-2xl object-cover"
              sizes="560px"
              format="webp"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 03 Programma 2026 -->
    <section
      class="relative overflow-hidden bg-stone-900 py-20 text-white sm:py-28"
    >
      <NuxtImg
        src="/images/galerij/welkom-camping.jpg"
        alt=""
        class="absolute inset-0 h-full w-full object-cover opacity-10"
        fill
        format="webp"
      />
      <div
        class="absolute inset-0 bg-linear-to-t from-stone-900 via-stone-900/90 to-stone-900/70"
      />
      <div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <StickerLabel class="mb-3">Programma 2026</StickerLabel>
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          Zes weken op de Kriemelberg
        </h2>
        <p class="mt-4 text-stone-300">
          Meivakantie + vijf zomerweken — sommige weken zitten al vol, in andere
          is nog volop ruimte.
        </p>
        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div class="text-center">
            <p
              class="font-display text-5xl font-bold text-yellow-400 sm:text-6xl"
            >
              6
            </p>
            <p
              class="mt-2 text-sm font-semibold uppercase tracking-wide text-stone-300"
            >
              bakenweken per jaar
            </p>
          </div>
          <div class="text-center">
            <p
              class="font-display text-5xl font-bold text-yellow-400 sm:text-6xl"
            >
              3
              <span
                class="ml-1 inline-block rounded bg-red-500 px-2 py-0.5 align-middle text-xs font-bold uppercase text-white"
                >vol</span
              >
            </p>
            <p
              class="mt-2 text-sm font-semibold uppercase tracking-wide text-stone-300"
            >
              weken al vol (meivakantie, week 1 en 2)
            </p>
          </div>
          <div class="text-center">
            <p
              class="font-display text-5xl font-bold text-yellow-400 sm:text-6xl"
            >
              3
            </p>
            <p
              class="mt-2 text-sm font-semibold uppercase tracking-wide text-stone-300"
            >
              zomerweken met nog ruimte (week 3, 4 en 5)
            </p>
          </div>
        </div>
        <NuxtLink
          to="/programma"
          class="mt-10 inline-block rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition-colors"
        >
          Bekijk het volledige programma &rarr;
        </NuxtLink>
      </div>
    </section>

    <!-- 04 Doe mee -->
    <section class="bg-white py-20 sm:py-24">
      <div
        class="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-16"
      >
        <div class="relative lg:col-span-5">
          <NuxtImg
            src="/images/headers/clowns-sprong.jpg"
            alt="Teamleden verkleed als clowns rennen over de camping"
            class="aspect-square w-full rounded-2xl object-cover shadow-lg"
            sizes="480px"
            format="webp"
          />
          <NuxtImg
            src="/images/headers/teamportret-2.jpg"
            alt="Teamleden voetballen met kinderen"
            class="absolute -bottom-6 -right-6 hidden aspect-square w-2/5 rounded-2xl border-4 border-white object-cover shadow-lg sm:block"
            sizes="200px"
            format="webp"
          />
        </div>
        <div class="lg:col-span-7">
          <div class="mb-3 flex flex-wrap gap-2">
            <StickerLabel>Doe mee</StickerLabel>
            <StickerLabel color="blue" rotate="right">
              Zoekt teamleden!
            </StickerLabel>
          </div>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            We zoeken je
          </h2>
          <p class="mt-4 text-stone-600 leading-relaxed">
            Dabar Het Baken draait volledig op vrijwilligers. Elk jaar is er
            weer een team nodig: teamleden van 18 tot 26 jaar in teams van
            ongeveer negen, aangevuld met mentoren, kerkambassadeurs,
            campingpastors en commissieleden van 24 jaar en ouder.
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="(chip, i) in doeMeeChips"
              :key="chip"
              class="rounded-full px-2.5 py-1 text-xs font-semibold"
              :class="
                i % 2 === 0
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-sky-100 text-sky-800'
              "
            >
              {{ chip }}
            </span>
          </div>
          <NuxtLink
            to="/doe-mee"
            class="mt-6 inline-block rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition-colors"
          >
            Bekijk de rollen en meld je aan &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 05 Steun ons -->
    <section class="bg-stone-50 py-20 sm:py-24">
      <div
        class="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-16"
      >
        <div class="lg:col-span-6">
          <StickerLabel class="mb-3">Steun ons</StickerLabel>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            Met tijd, gebed of een gift
          </h2>
          <p class="mt-4 text-stone-600 leading-relaxed">
            Dabar Het Baken draait volledig op vrijwilligers en giften — er is
            geen betaald personeel. Elke bijdrage komt direct ten goede aan het
            team en de bezoekers op de camping.
          </p>
          <ul class="mt-6 space-y-2 text-sm text-stone-700">
            <li class="flex gap-2">
              <span class="text-yellow-500">&bull;</span> Tijd — word
              vrijwilliger of teamlid.
            </li>
            <li class="flex gap-2">
              <span class="text-yellow-500">&bull;</span> Gebed — draag het team
              en de gasten in gedachten mee.
            </li>
            <li class="flex gap-2">
              <span class="text-yellow-500">&bull;</span> Gift — gewoon of
              fiscaal aftrekbaar via de IZB, of een muntje in de rode
              telefooncel bij de receptie.
            </li>
          </ul>
          <NuxtLink
            to="/steun-ons"
            class="mt-6 inline-block rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white hover:bg-stone-700 transition-colors"
          >
            Bekijk alle manieren om te steunen &rarr;
          </NuxtLink>
        </div>
        <div class="relative lg:col-span-6">
          <NuxtImg
            src="/images/headers/receptie-breed.jpg"
            alt="Het receptiegebouw van Kriemelberg Bushcamp"
            class="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            sizes="560px"
            format="webp"
          />
          <StickerLabel
            color="blue"
            rotate="left"
            class="absolute -bottom-4 right-6"
          >
            De rode telefooncel bij de receptie
          </StickerLabel>
        </div>
      </div>
    </section>
  </div>
</template>
