<script setup lang="ts">
useHead({ title: 'Steun ons — Dabar Het Baken' })
</script>

<template>
  <div>
    <section class="bg-stone-900 py-16 text-white sm:py-20">
      <div class="mx-auto max-w-3xl px-4 sm:px-6">
        <p class="mb-2 inline-block rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-stone-900">
          Steun ons
        </p>
        <h1 class="text-3xl font-bold tracking-tight sm:text-5xl">Steun ons</h1>
      </div>
    </section>

    <section class="bg-stone-50 py-16 sm:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p class="text-lg text-stone-600">
              Ons werk op de camping bestaat bij de gratie van vrijwilligers en giften —
              elke bijdrage komt direct ten goede aan het team en de bezoekers.
            </p>
            <div class="mt-6 space-y-4 text-stone-700 leading-relaxed">
              <p>
                Dabar Het Baken draait volledig op vrijwilligers en op giften. Er is geen
                betaald personeel en geen vaste financiering — alles wat we doen wordt
                mogelijk gemaakt door mensen die meehelpen of meegeven.
              </p>
              <p>
                Een gift komt zo terecht bij het clubwerk voor kinderen en jongeren, en bij
                de teams die tijdens de bakenweken op de camping verblijven.
              </p>
              <p>
                Dabar Het Baken heeft zelf geen ANBI-status. Wilt u een gift fiscaal
                aftrekken, dan loopt die daarom via de IZB, die deze status wel heeft.
              </p>
              <p>
                Liever iets tastbaars? Bij de receptie op de camping staat een opvallende
                rode telefooncel als spaarpot — gooi er gerust wat in.
              </p>
            </div>
            <ul class="mt-6 space-y-3 text-sm text-stone-700">
              <li class="rounded-xl border border-stone-200 bg-white p-4">
                <span class="block font-semibold text-stone-900">Gewone gift</span>
                IBAN NL43 INGB 0001 1478 23, t.n.v. Het Baken Harderwijk
              </li>
              <li class="rounded-xl border border-stone-200 bg-white p-4">
                <span class="block font-semibold text-stone-900">Fiscaal aftrekbare (ANBI-)gift, via de IZB</span>
                IBAN NL26 RABO 0302 2061 91, o.v.v. &ldquo;Het Baken, De Kriemelberg, Dabar&rdquo;
              </li>
            </ul>
            <a href="mailto:dabarhetbaken@gmail.com" class="mt-6 inline-block font-semibold text-stone-900 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-stone-700">
              Vragen over een gift? Mail naar dabarhetbaken@gmail.com
            </a>
          </div>
          <NuxtImg
            src="/images/telefooncel-informatiebord.jpg"
            alt="De rode telefooncel bij de receptie van Kriemelberg Bushcamp"
            class="aspect-[4/3] w-full rounded-2xl object-cover"
            sizes="600px"
            format="webp"
          />
        </div>
      </div>
    </section>
  </div>
</template>
