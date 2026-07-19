<script setup lang="ts">
useHead({ title: 'Contact — Dabar Het Baken' })
</script>

<template>
  <div>
    <section class="bg-stone-900 py-16 text-white sm:py-20">
      <div class="mx-auto max-w-3xl px-4 sm:px-6">
        <p class="mb-2 inline-block rounded-full bg-yellow-400 px-3 py-1 text-sm font-semibold text-stone-900">
          Contact
        </p>
        <h1 class="text-3xl font-bold tracking-tight sm:text-5xl">Contact</h1>
      </div>
    </section>

    <section class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p class="text-lg text-stone-600">
        Vraag, idee, of zin om mee te doen? We horen graag van je.
      </p>
      <p class="mt-4 text-stone-700 leading-relaxed">
        Voor vragen over vrijwilligerswerk, kerksamenwerking of een gift mail je ons direct.
        Voor praktische vragen over een verblijf op de camping kun je terecht bij Kriemelberg
        Bushcamp zelf.
      </p>

      <div class="mt-10 grid gap-6 sm:grid-cols-2">
        <div class="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-stone-500">Dabar Het Baken</h2>
          <ul class="mt-4 space-y-2 text-stone-700">
            <li><a href="mailto:dabarhetbaken@gmail.com" class="font-semibold text-stone-900 underline decoration-yellow-400 decoration-2 underline-offset-4">dabarhetbaken@gmail.com</a></li>
            <li><a href="https://www.facebook.com/baken.harderwijk/" target="_blank" rel="noopener" class="hover:text-stone-950">Facebook — baken.harderwijk</a></li>
            <li><a href="https://www.instagram.com/baken_harderwijk/" target="_blank" rel="noopener" class="hover:text-stone-950">Instagram — baken_harderwijk</a></li>
            <li><a href="https://www.youtube.com/@bakenharderwijk7193" target="_blank" rel="noopener" class="hover:text-stone-950">YouTube — bakenharderwijk7193</a></li>
          </ul>
        </div>
        <div class="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-stone-500">Camping Kriemelberg Bushcamp</h2>
          <ul class="mt-4 space-y-2 text-stone-700">
            <li>Drieerweg 104</li>
            <li>3852 MC Ermelo</li>
            <li><a href="https://www.kriemelberg.nl" target="_blank" rel="noopener" class="font-semibold text-stone-900 underline decoration-yellow-400 decoration-2 underline-offset-4">www.kriemelberg.nl</a></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
