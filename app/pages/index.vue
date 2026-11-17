<script setup lang="ts">
import { albums } from "~/data/albums";

useSeoMeta({
  title: 'Dabar Het Baken | evangelisatie door recreatie',
  titleTemplate: '%s',
  description: 'Dabar Het Baken is een interkerkelijke evangelisatie- en recreatiecommissie op Camping Kriemelberg Bushcamp in Ermelo: zes weken per jaar, voor gasten van jong tot oud.',
});

// Homepage-blok met albums: maximaal drie, in de volgorde van albums.ts
const albumOmslagen = albums.slice(0, 3);
const aantalFotos = (n: number) => (n === 1 ? "1 foto" : `${n} foto's`);

const activiteitenChips = [
  "Kinderclub 4-8",
  "Teen Spirit 9-11",
  "Chatpoint 12-16",
  "Sing-In",
  "Campingpastoraat",
];
// Labels in het blok Doe mee: elk is een link naar de rol op /doe-mee (de id's staan daar)
const doeMeeChips = [
  { label: "Commissielid 24+", anker: "commissielid", aria: "Commissielid 24+: lees meer op Doe mee" },
  { label: "Teamlid 18-26", anker: "teamlid", aria: "Teamlid 18-26: lees meer op Doe mee" },
  { label: "Mentor", anker: "mentor", aria: "Mentor: lees meer op Doe mee" },
  { label: "Kerkambassadeur", anker: "kerkambassadeur", aria: "Kerkambassadeur: lees meer op Doe mee" },
  { label: "Campingpastor", anker: "campingpastor", aria: "Campingpastor: lees meer op Doe mee" },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="-mb-4 relative flex min-h-[560px] items-end overflow-hidden bg-stone-900 text-white sm:min-h-[680px]"
      style="clip-path: polygon(0 0, 100% 0, 100% 99%, 0 100%)"
    >
      <NuxtImg
        src="/images/team-onderweg-camping.jpg"
        alt=""
        class="absolute inset-0 h-full w-full object-cover"
        sizes="sm:100vw md:100vw lg:100vw xl:100vw"
        format="webp"
        fetchpriority="high"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/50 to-transparent"
      />
      <div
        class="relative mx-auto w-full max-w-2xl px-4 pb-16 text-center sm:px-6 sm:pb-20"
      >
        <StickerLabel class="z-10 relative"
          >Evangelisatie door recreatie</StickerLabel
        >
        <h1
          class="z-0 -mt-2 relative rotate-1 inline-block rounded-lg bg-sky-400 px-5 py-2 font-display text-4xl font-bold text-white shadow-lg sm:px-7 sm:py-3 sm:text-6xl"
        >
          Dabar Het Baken
        </h1>
        <p class="mt-5 text-balance text-lg text-stone-200 sm:text-xl">
          Zes weken per jaar op de camping, voor gasten van jong tot oud.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <NuxtLink
            to="/activiteiten"
            class="rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition-colors"
          >
            Programma voor gasten
          </NuxtLink>
          <NuxtLink
            to="/doe-mee"
            class="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Word vrijwilliger
          </NuxtLink>
        </div>
      </div>
    </section>

    <ValueTicker />

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
            sizes="375:100vw sm:100vw lg:480px"
            format="webp"
            loading="lazy"
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
              overtuigen, maar om er gewoon te zijn: tussen de tenten, op het
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
        <div class="lg:col-span-5">
          <StickerLabel rotate="right" class="mb-3">Activiteiten</StickerLabel>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            Voor iedere leeftijd
          </h2>
          <p class="mt-4 text-stone-600 leading-relaxed">
            Elke ochtend gaat de camping open voor een club per leeftijdsgroep.
            's Avonds is er de Sing-In, en de hele week door is er het
            campingpastoraat voor volwassenen die een luisterend oor zoeken.
          </p>
          <NuxtLink
            to="/activiteiten"
            class="mt-6 inline-block font-semibold text-stone-900 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-stone-700"
          >
            Bekijk alle activiteiten &rarr;
          </NuxtLink>
        </div>
        <div class="lg:col-span-7">
          <ActiviteitenTegels />
        </div>
      </div>
    </section>

    <!-- 03 Albums -->
    <section
      class="relative overflow-hidden bg-stone-900 py-12 text-white"
    >
      <NuxtImg
        src="/images/galerij/welkom-camping.jpg"
        alt=""
        class="absolute inset-0 h-full w-full object-cover opacity-10"
        width="640"
        quality="30"
        densities="1"
        format="webp"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-linear-to-t from-stone-900 via-stone-900/90 to-stone-900/70"
      />
      <div class="relative">
        <div class="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <StickerLabel class="mb-3">Foto's</StickerLabel>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            Een kijkje op de camping
          </h2>
          <p class="mt-4 text-stone-300">
            Van de kinderclub en de Sing-In tot het Hawaii-feest.
          </p>
        </div>
        <div class="mx-auto px-4 sm:px-6">
          <div
            class="mx-auto mt-5 grid max-w-[15rem] grid-cols-1 gap-x-6 gap-y-3"
            :class="
              albumOmslagen.length > 2
                ? 'sm:max-w-3xl sm:grid-cols-2 lg:grid-cols-3'
                : 'sm:max-w-xl sm:grid-cols-2'
            "
          >
            <NuxtLink
              v-for="(album, i) in albumOmslagen"
              :key="album.slug"
              :to="`/fotos/${album.slug}`"
              class="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <div class="relative">
                <div class="aspect-4/3 overflow-hidden rounded-2xl shadow-lg">
                  <NuxtImg
                    :src="album.photos[0]?.src"
                    :alt="album.photos[0]?.alt"
                    class="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:scale-105"
                    format="webp"
                    loading="lazy"
                    sizes="375:60vw sm:276px"
                  />
                </div>
                <StickerLabel
                  :rotate="i % 2 === 0 ? 'left' : 'right'"
                  class="absolute -bottom-4 left-6 z-10"
                >
                  {{ album.title }}
                </StickerLabel>
              </div>
              <p class="mt-6 pl-6 text-sm text-stone-300">
                {{ aantalFotos(album.photos.length) }}
              </p>
            </NuxtLink>
          </div>
          <div class="mt-4 text-center">
            <NuxtLink
              to="/fotos"
              class="inline-block rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Bekijk alle albums &rarr;
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 04 Doe mee -->
    <section class="bg-white py-20 sm:py-24">
      <div
        class="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-16"
      >
        <div class="relative lg:col-span-5">
          <NuxtImg
            src="/images/galerij/verkleedpartij-rennen-camping.jpg"
            alt="Verklede vrijwilligers rennen met kinderen over de camping"
            class="aspect-square w-full rounded-2xl object-cover shadow-lg"
            sizes="375:100vw sm:100vw lg:480px"
            format="webp"
            loading="lazy"
          />
          <NuxtImg
            src="/images/galerij/team-armen-omhoog.jpg"
            alt="Vier vrijwilligers juichen met de armen omhoog"
            class="absolute -bottom-6 -right-6 hidden aspect-square w-2/5 rounded-2xl border-4 border-white object-cover shadow-lg sm:block"
            sizes="200px"
            format="webp"
            loading="lazy"
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
            Wij zoeken jou
          </h2>
          <p class="mt-4 text-stone-600 leading-relaxed">
            Dabar Het Baken draait volledig op vrijwilligers. Elk jaar is er
            weer een team nodig: teamleden van 18 tot 26 jaar in teams van
            ongeveer negen, aangevuld met mentoren, kerkambassadeurs,
            campingpastors en commissieleden van 24 jaar en ouder.
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            <NuxtLink
              v-for="(chip, i) in doeMeeChips"
              :key="chip.anker"
              :to="`/doe-mee#${chip.anker}`"
              :aria-label="chip.aria"
              class="relative rounded-full px-2.5 py-1 text-xs font-semibold transition-[background-color] after:absolute after:inset-x-0 after:-inset-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
              :class="
                i % 2 === 0
                  ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-300'
                  : 'bg-sky-100 text-sky-800 hover:bg-sky-200'
              "
            >
              {{ chip.label }}
            </NuxtLink>
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
            Dabar Het Baken draait volledig op vrijwilligers en giften. Er is
            geen betaald personeel. Elke bijdrage komt direct ten goede aan het
            team en de bezoekers op de camping.
          </p>
          <ul class="mt-6 space-y-2 text-sm text-stone-700">
            <li class="flex gap-2">
              <span class="text-yellow-500">&bull;</span> Tijd: word
              vrijwilliger of teamlid.
            </li>
            <li class="flex gap-2">
              <span class="text-yellow-500">&bull;</span> Gebed: draag het team
              en de gasten in gedachten mee.
            </li>
            <li class="flex gap-2">
              <span class="text-yellow-500">&bull;</span> Gift: gewoon of
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
            src="/images/telefooncel-informatiebord.jpg"
            alt="De rode telefooncel naast het informatiebord"
            class="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            sizes="375:100vw sm:100vw lg:560px"
            format="webp"
            loading="lazy"
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
