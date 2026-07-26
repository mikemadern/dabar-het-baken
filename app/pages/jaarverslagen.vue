<script setup lang="ts">
useHead({ title: 'Jaarverslagen — Dabar Het Baken' })

const reports = [
  { year: '2024', href: 'https://bakenharderwijk.nl/wp-content/uploads/2025/05/Jaarverslag-2024.pdf' },
  { year: '2022', href: 'https://bakenharderwijk.nl/wp-content/uploads/2023/03/Jaarverslag-2022.pdf' },
  { year: '2021', href: 'https://bakenharderwijk.nl/wp-content/uploads/2023/03/Jaarverslag-2021.pdf' },
  { year: '2020', href: 'https://bakenharderwijk.nl/wp-content/uploads/2023/03/Jaarverslag-2020.pdf' },
  { year: '2019', href: 'https://bakenharderwijk.nl/wp-content/uploads/2023/03/Jaarverslag-2019.pdf' },
  { year: '2018', href: 'https://bakenharderwijk.nl/wp-content/uploads/2023/03/Jaarverslag-2018.pdf' },
  { year: '2017', href: 'https://bakenharderwijk.nl/wp-content/uploads/2023/03/Jaarverslag-2017.pdf' },
]
</script>

<template>
  <div>
    <PageHeader
      image="/images/galerij/radslag-actie.jpg"
      label="Jaarverslagen"
      title="Jaarverslagen"
    />

    <section class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p class="text-stone-600">
        Hieronder alle beschikbare jaarverslagen.
      </p>
      <ul class="mt-6 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
        <li v-for="report in reports" :key="report.year">
          <a
            :href="report.href"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-between gap-4 px-6 py-4 hover:bg-stone-50"
          >
            <span class="font-medium text-stone-900">Jaarverslag {{ report.year }}</span>
            <span class="text-sm font-semibold text-stone-500 group-hover:text-stone-900">PDF &rarr;</span>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
