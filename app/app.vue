<script setup lang="ts">
// De drie lettertypebestanden die de eerste weergave nodig heeft (koppen in Ubuntu 700, tekst in Poppins 400,
// halfvette tekst in Poppins 600, alleen de latin-subset) worden meteen opgehaald, parallel aan de CSS. Anders
// ontdekt de browser ze pas als de CSS binnen is en verspringt de koptekst op de telefoon als ze arriveren.
// De ?url-import geeft dezelfde bestandsnaam met hash als de @font-face in de CSS, dus er wordt maar één keer
// gedownload. Niet meer dan drie preloads (guide: te veel preloads concurreren met het belangrijkste).
import ubuntu700 from '@fontsource/ubuntu/files/ubuntu-latin-700-normal.woff2?url'
import poppins400 from '@fontsource/poppins/files/poppins-latin-400-normal.woff2?url'
import poppins600 from '@fontsource/poppins/files/poppins-latin-600-normal.woff2?url'

useHead({
  link: [ubuntu700, poppins400, poppins600].map((href) => ({
    rel: 'preload',
    as: 'font',
    type: 'font/woff2',
    href,
    crossorigin: 'anonymous',
  })),
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>