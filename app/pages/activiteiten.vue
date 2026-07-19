<script setup lang="ts">
useHead({ title: 'Activiteiten — Dabar Het Baken' })

const clubs = [
  { name: 'Kinderclub', age: '4 t/m 8 jaar', description: 'Elke ochtend een weekthema vol verhalen, knutselen en spel.' },
  { name: 'Teen Spirit', age: '9 t/m 11 jaar', description: 'Een ochtendprogramma tussen kinderclub en Chatpoint in: speels, met ruimte voor verdieping.' },
  { name: 'Chatpoint', age: '12 t/m 16 jaar', description: 'Dagelijks gesprek, spel en Bijbel, met veel ruimte voor de eigen inbreng van tieners.' },
  { name: 'No Nonsense', age: '17+', description: 'Tijdens de mannen- en vrouwenavond een avond met meer diepgang, samen met een mentor.' },
  { name: 'Sing-In', age: 'zondagavond', description: 'Samen zingen en een kort moment van overdenking, voor alle campinggasten.' },
  { name: 'Campingpastoraat', age: 'volwassenen', description: 'Een luisterend oor, een helpende hand en, als daar ruimte voor is, een geloofsgesprek.' },
]
</script>

<template>
  <div>
    <section class="bg-stone-900 py-16 text-white sm:py-20">
      <div class="mx-auto max-w-3xl px-4 sm:px-6">
        <p class="mb-2 inline-block rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-stone-900">
          Activiteiten
        </p>
        <h1 class="text-3xl font-bold tracking-tight sm:text-5xl">Activiteiten voor iedere leeftijd</h1>
      </div>
    </section>

    <section class="bg-stone-50 py-16 sm:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="max-w-2xl">
          <p class="text-lg text-stone-600">
            Tijdens de meivakantie en vijf zomerweken is er op Kriemelberg Bushcamp voor
            iedereen wat te doen: elke ochtend een club per leeftijdsgroep, op zondagavond
            de Sing-In, en het hele verblijf door aandacht voor volwassenen via het
            campingpastoraat.
          </p>
          <p class="mt-4 text-stone-600">
            Zes weken per jaar is Dabar Het Baken aanwezig op de camping. Van kinderclub tot
            gesprek onder volwassenen: er is voor elke leeftijd een eigen plek om mee te doen
            — en, voor wie dat wil, ook het gesprek over geloof aan te gaan.
          </p>
        </div>
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="club in clubs"
            :key="club.name"
            class="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <div class="flex items-baseline justify-between gap-2">
              <h2 class="text-lg font-semibold text-stone-900">{{ club.name }}</h2>
              <span class="shrink-0 rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-800">{{ club.age }}</span>
            </div>
            <p class="mt-3 text-sm text-stone-600 leading-relaxed">{{ club.description }}</p>
          </div>
        </div>
        <a href="mailto:dabarhetbaken@gmail.com" class="mt-8 inline-block font-semibold text-stone-900 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-stone-700">
          Vragen over het programma? Mail naar dabarhetbaken@gmail.com
        </a>
      </div>
    </section>
  </div>
</template>
