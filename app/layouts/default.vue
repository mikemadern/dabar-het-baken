<script setup lang="ts">
const navLinks = [
  { to: "/missie", label: "Missie" },
  { to: "/activiteiten", label: "Activiteiten" },
  { to: "/programma", label: "Programma 2026" },
  { to: "/fotos", label: "Foto's" },
  { to: "/steun-ons", label: "Steun ons" },
  { to: "/contact", label: "Contact" },
];

const mobileMenuOpen = ref(false);

// Rond icoon voor de sociale-medialinks in de footer: 40 x 40 px, wit bij hover, witte focusomlijning
const socialLinkClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 text-stone-300 transition-colors hover:border-white hover:bg-white hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

// Actief voor de pagina zelf én voor onderliggende paden (bv. /fotos/[album]).
// vue-router's active-class kijkt naar de routeketen; albums zijn een zusterroute
// van /fotos, dus daar is een padcontrole nodig. `${to}/` voorkomt dat /fotobeleid
// als "Foto's" telt.
const route = useRoute();
const isActive = (to: string) =>
  route.path === to || route.path.startsWith(`${to}/`);
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-white text-stone-900 overflow-x-clip"
  >
    <!-- Nav. De wrapper hierboven heeft overflow-x-clip, niet -hidden: hidden maakt er een
         scrollcontainer van en dan blijft deze plakkende header niet bovenaan staan. -->
    <header
      class="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur"
    >
      <div
        class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
          <img
            src="/images/logo-het-baken.svg"
            alt="Het Baken"
            width="1402"
            height="333"
            class="h-9 w-auto sm:h-10"
          />
        </NuxtLink>
        <nav
          class="hidden lg:flex items-center gap-6 whitespace-nowrap text-sm font-medium text-stone-700"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="hover:text-stone-950 transition-colors"
            :class="{ 'text-stone-950 font-semibold': isActive(link.to) }"
            >{{ link.label }}</NuxtLink
          >
        </nav>
        <div class="flex items-center gap-2">
          <NuxtLink
            to="/doe-mee"
            class="shrink-0 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition-colors"
            active-class="ring-2 ring-stone-900"
            >Doe mee</NuxtLink
          >
          <button
            type="button"
            class="shrink-0 rounded-full border border-stone-300 p-2 lg:hidden"
            :aria-expanded="mobileMenuOpen"
            aria-label="Menu"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <svg
              v-if="!mobileMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>
      <nav
        v-if="mobileMenuOpen"
        class="flex max-h-[calc(100dvh-4.5rem)] flex-col gap-1 overflow-y-auto border-t border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-700 lg:hidden"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-2 py-2 hover:bg-stone-50"
          :class="{ 'bg-stone-50 font-semibold text-stone-950': isActive(link.to) }"
          @click="mobileMenuOpen = false"
          >{{ link.label }}</NuxtLink
        >
      </nav>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <ValueTicker tilt="right" class="z-10" />

    <!-- Footer -->
    <footer id="contact" class="bg-stone-900 py-16 text-stone-300 -mt-4">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <img
              src="/images/logo-het-baken.svg"
              alt="Het Baken"
              width="1402"
              height="333"
              class="h-10 w-auto brightness-0 invert opacity-90"
            />
            <p class="mt-4 text-sm">
              Vraag, idee, of zin om mee te doen? We horen graag van je.
            </p>
          </div>
          <div>
            <h3
              class="text-sm font-semibold uppercase tracking-wide text-stone-400"
            >
              Contact
            </h3>
            <ul class="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:dabarhetbaken@gmail.com"
                  class="hover:text-white"
                  >dabarhetbaken@gmail.com</a
                >
              </li>
            </ul>
            <!-- Sociale media als iconen naast elkaar. De icoon is een link met een naam via aria-label;
                 40 x 40 px is ruim boven de 24 x 24 px die WCAG 2.5.8 vraagt. Iconen: Lucide (ISC). -->
            <ul class="mt-5 flex gap-3" aria-label="Sociale media">
              <li>
                <a
                  href="https://www.facebook.com/baken.harderwijk/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Facebook (opent in een nieuw venster)"
                  :class="socialLinkClass"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/baken_harderwijk/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram (opent in een nieuw venster)"
                  :class="socialLinkClass"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@bakenharderwijk7193"
                  target="_blank"
                  rel="noopener"
                  aria-label="YouTube (opent in een nieuw venster)"
                  :class="socialLinkClass"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="text-sm font-semibold uppercase tracking-wide text-stone-400"
            >
              Camping
            </h3>
            <ul class="mt-4 space-y-2 text-sm">
              <li>Kriemelberg Bushcamp</li>
              <li>Drieerweg 104, 3852 MC Ermelo</li>
              <li>
                <a
                  href="https://www.kriemelberg.nl"
                  target="_blank"
                  rel="noopener"
                  class="hover:text-white"
                  >www.kriemelberg.nl</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-stone-800 pt-6 text-xs text-stone-500"
        >
          <p>© {{ new Date().getFullYear() }} Dabar Het Baken</p>
          <div class="flex gap-4">
            <NuxtLink to="/jaarverslagen" class="hover:text-white"
              >Jaarverslagen</NuxtLink
            >
            <NuxtLink to="/fotobeleid" class="hover:text-white"
              >Fotobeleid</NuxtLink
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
