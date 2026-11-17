<script setup lang="ts">
// De vijf activiteiten als tegels met foto, gele sticker en regel. Elke tegel linkt naar het onderdeel
// op /activiteiten (de id's staan daar). Gebruikt door de homepage en de programmapagina.
// `rij`: vanaf lg alle vijf vierkant op één rij (programmapagina); zonder `rij` het raster van de homepage.
defineProps<{ rij?: boolean }>()

const activiteitenTegels = [
  {
    naam: "Kinderclub",
    regel: "4 t/m 8 jaar",
    anker: "kinderclub",
    sizes: "375:70vw sm:50vw lg:300px",
    foto: "/images/galerij/lydia-kinderclub-kring.jpg",
    alt: "Een vrijwilliger leidt een kringgesprek bij de kinderclub",
    klasse: "aspect-square sm:col-span-2",
  },
  {
    naam: "Teen Spirit",
    regel: "9 t/m 11 jaar",
    anker: "teen-spirit",
    sizes: "375:45vw lg:200px",
    foto: "/images/galerij/raketten-lanceren.jpg",
    alt: "Een meisje lanceert een speelgoedraket tijdens Teen Spirit",
    klasse: "aspect-square sm:col-span-2",
  },
  {
    naam: "Chatpoint",
    regel: "12 t/m 16 jaar",
    anker: "chatpoint",
    sizes: "375:45vw lg:200px",
    foto: "/images/galerij/kaartspel-bunting-lach.jpg",
    alt: "Een lachende jongen in een geel shirt en rode pet houdt twee speelkaarten omhoog bij een kaartspel.",
    klasse: "aspect-square sm:col-span-2",
  },
  {
    naam: "Sing-In",
    regel: "zondagavond",
    anker: "sing-in",
    sizes: "375:45vw sm:50vw lg:310px",
    foto: "/images/galerij/vioolspeelster-sing-in.jpg",
    alt: "Een teamlid speelt viool tijdens de Sing-In",
    klasse: "aspect-square sm:col-span-3 sm:aspect-[3/2]",
  },
  {
    naam: "Campingpastoraat",
    regel: "volwassenen",
    anker: "campingpastoraat",
    sizes: "375:100vw sm:50vw lg:310px",
    foto: "/images/galerij/gasten-koffie-terras.jpg",
    alt: "Twee gasten drinken samen koffie op het terras",
    klasse: "col-span-2 aspect-[21/9] sm:col-span-3 sm:aspect-[3/2]",
    positie: "object-[center_30%]",
  },
];
</script>

<template>
  <div class="grid grid-cols-2 gap-3 sm:grid-cols-6 sm:gap-4" :class="rij && 'lg:grid-cols-5'">
    <NuxtLink
      v-for="tegel in activiteitenTegels"
      :key="tegel.anker"
      :to="`/activiteiten#${tegel.anker}`"
      class="group relative block overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
      :class="[tegel.klasse, rij && 'lg:col-span-1 lg:aspect-square']"
    >
      <NuxtImg
        :src="tegel.foto"
        :alt="tegel.alt"
        class="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:scale-105"
        :class="tegel.positie"
        :sizes="tegel.sizes"
        format="webp"
        loading="lazy"
      />
      <div
        class="absolute inset-x-0 bottom-0 bg-linear-to-t from-stone-900/80 via-stone-900/40 to-transparent px-3 pb-3 pt-10"
      >
        <StickerLabel
          :rotate="tegel.anker === 'teen-spirit' || tegel.anker === 'sing-in' ? 'right' : 'left'"
        >
          {{ tegel.naam }}
        </StickerLabel>
        <p class="mt-1.5 text-sm font-medium text-white">{{ tegel.regel }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
