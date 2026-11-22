<script setup lang="ts">
import { albums } from "~/data/albums";

useSeoMeta({
  title: "Foto's",
  description: "Foto's van Dabar Het Baken: sfeerbeelden van Kriemelberg Bushcamp en de zomer van 2026, met de kinderclub, de Sing-In en het Hawaii-feest.",
});
</script>

<template>
  <div>
    <PageHeader
      image="/images/galerij/poppenkast-pippi.jpg"
      label="Foto's"
      title="Albums"
    >
      <p class="max-w-xl text-stone-600">
        Een impressie van de camping en van eerdere bakenweken.
      </p>
    </PageHeader>

    <section class="bg-stone-50 py-16 sm:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="(album, index) in albums"
            :key="album.slug"
            :to="`/fotos/${album.slug}`"
            class="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <!-- De eerste miniatuur staat boven de vouw en is het grootste element van de pagina (LCP): niet lazy en
                 met hoge prioriteit. De rest blijft lazy. -->
            <div class="aspect-4/3 overflow-hidden bg-stone-200">
              <NuxtImg
                :src="album.photos[0]?.src"
                :alt="album.photos[0]?.alt"
                class="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                width="500"
                height="375"
                format="webp"
                :loading="index === 0 ? 'eager' : 'lazy'"
                :fetchpriority="index === 0 ? 'high' : undefined"
              />
            </div>
            <div class="p-5">
              <h2 class="text-lg font-semibold text-stone-900">
                {{ album.title }}
              </h2>
              <p class="mt-1 text-sm text-stone-600">{{ album.description }}</p>
              <p class="mt-3 text-xs font-medium text-stone-500">
                {{ album.photos.length }} foto's
              </p>
            </div>
          </NuxtLink>
        </div>

        <NuxtLink
          to="/fotobeleid"
          class="mt-10 inline-block text-sm text-stone-400 underline decoration-stone-300 underline-offset-4 hover:text-stone-600"
        >
          Bezwaar tegen een foto? Bekijk ons fotobeleid
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
