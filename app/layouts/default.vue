<script setup lang="ts">
const navLinks = [
  { to: '/missie', label: 'Missie' },
  { to: '/activiteiten', label: 'Activiteiten' },
  { to: '/programma', label: 'Programma 2026' },
  { to: '/fotos', label: "Foto's" },
  { to: '/doe-mee', label: 'Doe mee' },
  { to: '/steun-ons', label: 'Steun ons' },
  { to: '/contact', label: 'Contact' },
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white text-stone-900">
    <!-- Nav -->
    <header class="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
          <NuxtImg src="/images/logo-het-baken.png" alt="Het Baken" class="h-9 w-auto sm:h-10" />
        </NuxtLink>
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-stone-700">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="hover:text-stone-950 transition-colors"
            active-class="text-stone-950 font-semibold"
          >{{ link.label }}</NuxtLink>
        </nav>
        <div class="flex items-center gap-2">
          <NuxtLink
            to="/doe-mee"
            class="shrink-0 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition-colors"
          >Doe mee</NuxtLink>
          <button
            type="button"
            class="shrink-0 rounded-full border border-stone-300 p-2 md:hidden"
            :aria-expanded="mobileMenuOpen"
            aria-label="Menu"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>
      </div>
      <nav
        v-if="mobileMenuOpen"
        class="flex flex-col gap-1 border-t border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-700 md:hidden"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-2 py-2 hover:bg-stone-50"
          active-class="bg-stone-50 font-semibold text-stone-950"
          @click="mobileMenuOpen = false"
        >{{ link.label }}</NuxtLink>
      </nav>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer id="contact" class="bg-stone-900 py-16 text-stone-300">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <NuxtImg src="/images/logo-het-baken.png" alt="Het Baken" class="h-10 w-auto brightness-0 invert opacity-90" />
            <p class="mt-4 text-sm">
              Vraag, idee, of zin om mee te doen? We horen graag van je.
            </p>
          </div>
          <div>
            <h3 class="text-sm font-semibold uppercase tracking-wide text-stone-400">Contact</h3>
            <ul class="mt-4 space-y-2 text-sm">
              <li><a href="mailto:dabarhetbaken@gmail.com" class="hover:text-white">dabarhetbaken@gmail.com</a></li>
              <li><a href="https://www.facebook.com/baken.harderwijk/" target="_blank" rel="noopener" class="hover:text-white">Facebook — baken.harderwijk</a></li>
              <li><a href="https://www.instagram.com/baken_harderwijk/" target="_blank" rel="noopener" class="hover:text-white">Instagram — baken_harderwijk</a></li>
              <li><a href="https://www.youtube.com/@bakenharderwijk7193" target="_blank" rel="noopener" class="hover:text-white">YouTube — bakenharderwijk7193</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold uppercase tracking-wide text-stone-400">Camping</h3>
            <ul class="mt-4 space-y-2 text-sm">
              <li>Kriemelberg Bushcamp</li>
              <li>Drieerweg 104, 3852 MC Ermelo</li>
              <li><a href="https://www.kriemelberg.nl" target="_blank" rel="noopener" class="hover:text-white">www.kriemelberg.nl</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-stone-800 pt-6 text-xs text-stone-500">
          <p>© {{ new Date().getFullYear() }} Dabar Het Baken</p>
          <div class="flex gap-4">
            <NuxtLink to="/jaarverslagen" class="hover:text-white">Jaarverslagen</NuxtLink>
            <NuxtLink to="/fotobeleid" class="hover:text-white">Fotobeleid</NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
