<script setup lang="ts">
withDefaults(
  defineProps<{
    image: string;
    imageAlt?: string;
    label: string;
    labelColor?: "yellow" | "blue";
    title: string;
  }>(),
  {
    imageAlt: "",
    labelColor: "yellow",
  }
);
</script>

<template>
  <section
    class="relative overflow-hidden bg-stone-900 text-white"
    style="clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%)"
  >
    <!-- Eerste grote afbeelding op elke pagina: geen lazy loading, wel meteen ophalen -->
    <NuxtImg
      :src="image"
      :alt="imageAlt"
      class="absolute inset-0 h-full w-full object-cover"
      sizes="sm:100vw md:100vw lg:100vw xl:100vw"
      format="webp"
      fetchpriority="high"
    />
    <div
      class="absolute inset-0 bg-linear-to-t from-stone-900/90 via-stone-900/15 to-transparent"
    />
    <div
      class="relative mx-auto flex h-64 max-w-3xl flex-col items-start justify-end px-4 pb-8 sm:h-80 sm:px-6 sm:pb-11"
    >
      <StickerLabel :color="labelColor">{{ label }}</StickerLabel>
    </div>
  </section>
  <div class="relative mx-auto max-w-3xl px-4 sm:px-6">
    <!-- De sticker schuift met translate omhoog, maar zijn plek in de opmaak blijft staan. De negatieve
         onderrand (even groot als de verschuiving) haalt die weg, zodat de ruimte onder de titel gelijk
         is aan de ruimte onder de inhoud. Dat werkt alleen als de titel een blok is: bij inline-block
         houdt de regel eromheen zelf nog ruimte vast. Met tekst onder de titel (slot) blijft het
         zoals het was. -->
    <h1
      class="-translate-y-6.75 -rotate-1 rounded-lg bg-sky-400 px-4 py-2 font-display text-2xl font-bold text-white shadow-lg sm:-translate-y-9 sm:px-6 sm:py-3 sm:text-4xl"
      :class="$slots.default ? 'inline-block' : 'block w-fit -mb-6.75 sm:-mb-9'"
    >
      {{ title }}
    </h1>
    <div v-if="$slots.default" class="pb-8 sm:pb-10">
      <slot />
    </div>
  </div>
</template>
