<script setup lang="ts">
const navLinks = [
  { to: "/missie", label: "Missie" },
  { to: "/activiteiten", label: "Activiteiten" },
  { to: "/programma", label: "Programma 2027" },
  { to: "/fotos", label: "Foto's" },
  { to: "/steun-ons", label: "Steun ons" },
  { to: "/contact", label: "Contact" },
];

const mobileMenuOpen = ref(false);

// Het mobiele menu sluit met Escape (de focus gaat terug naar de menuknop), met een tik buiten het menu en bij een
// andere pagina. De knop en de keuze van een link sluiten het al.
const menuKnop = ref<HTMLButtonElement | null>(null);
const mobielMenu = ref<HTMLElement | null>(null);
function sluitMenu(focusTerug = false) {
  if (!mobileMenuOpen.value) return;
  mobileMenuOpen.value = false;
  if (focusTerug) menuKnop.value?.focus();
}
function bijToets(event: KeyboardEvent) {
  if (event.key === 'Escape') sluitMenu(true);
}
function bijKlik(event: MouseEvent) {
  // composedPath en niet event.target: Vue wisselt het icoon in de knop bij een klik, waarna het aangeklikte
  // element al uit de pagina is en `contains` onwaar zou geven (het menu sloot dan meteen weer)
  const pad = event.composedPath();
  if (!pad.includes(mobielMenu.value as EventTarget) && !pad.includes(menuKnop.value as EventTarget)) sluitMenu();
}
// Wordt het venster zo breed dat het gewone menu verschijnt (vanaf 1024 px, de `lg` van Tailwind), dan sluit het
// mobiele menu, zodat het niet openstaat als het venster weer smaller wordt.
const breedScherm = typeof window === 'undefined' ? null : window.matchMedia('(min-width: 64rem)');
function bijBreedte(event: MediaQueryListEvent) {
  if (event.matches) sluitMenu();
}
onMounted(() => {
  document.addEventListener('keydown', bijToets);
  document.addEventListener('click', bijKlik);
  breedScherm?.addEventListener('change', bijBreedte);
});
onBeforeUnmount(() => {
  document.removeEventListener('keydown', bijToets);
  document.removeEventListener('click', bijKlik);
  breedScherm?.removeEventListener('change', bijBreedte);
});

// Rond icoon voor de sociale-medialinks in de footer: 40 x 40 px, wit bij hover, witte focusomlijning
const socialLinkClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 text-stone-300 transition-colors hover:border-white hover:bg-white hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

// Actief voor de pagina zelf én voor onderliggende paden (bv. /fotos/[album]).
// vue-router's active-class kijkt naar de routeketen; albums zijn een zusterroute
// van /fotos, dus daar is een padcontrole nodig. `${to}/` voorkomt dat /fotobeleid
// als "Foto's" telt.
const route = useRoute();
watch(() => route.path, () => sluitMenu());
const isActive = (to: string) =>
  route.path === to || route.path.startsWith(`${to}/`);

// Eigen deelafbeelding (og:image en twitter:image) per pagina, 1200 x 630; zie app/data/shareImages.json
const share = useShareImage();
useSeoMeta({
  ogImage: () => share.value.image,
  twitterImage: () => share.value.image,
  ogImageAlt: () => share.value.alt,
  twitterImageAlt: () => share.value.alt,
  ogImageType: () => (share.value.sized ? "image/jpeg" : undefined),
  twitterImageType: () => (share.value.sized ? "image/jpeg" : undefined),
  ogImageWidth: () => (share.value.sized ? 1200 : undefined),
  twitterImageWidth: () => (share.value.sized ? 1200 : undefined),
  ogImageHeight: () => (share.value.sized ? 630 : undefined),
  twitterImageHeight: () => (share.value.sized ? 630 : undefined),
});
</script>

<template>
  <div
    class="flex min-h-dvh flex-col bg-white text-stone-900 overflow-x-clip"
  >
    <!-- Sla-over-link voor het toetsenbord: de eerste tab komt hier, zodat de navigatie niet bij elke pagina
         opnieuw doorlopen hoeft te worden (WCAG 2.4.1). Alleen zichtbaar bij focus. -->
    <a
      href="#inhoud"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 sm:focus:left-[max(1.5rem,calc(50%-34.5rem))] focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-stone-900 focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-stone-900"
      >Ga naar de inhoud</a
    >
    <!-- Nav. De wrapper hierboven heeft overflow-x-clip, niet -hidden: hidden maakt er een
         scrollcontainer van en dan blijft deze plakkende header niet bovenaan staan. -->
    <!-- Tikvlakken in de kop: de kop wordt niet groter, maar het vlak dat je kunt aanraken wel, met een onzichtbaar
         `::after` (de `after:`-klassen hieronder). Logo, 'Doe mee' en menuknop komen op 44 px hoog (de menuknop
         ook 46 px breed), de menulinks op desktop op 40 px; de norm is 24 px. Zie het nalooprapport (Designer, punt 3). -->
    <header
      class="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur"
    >
      <div
        class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 max-[341px]:gap-2 sm:px-6"
      >
        <NuxtLink to="/" class="relative flex items-center gap-2 shrink-0 after:absolute after:inset-x-0 after:top-1/2 after:h-11 after:-translate-y-1/2 after:content-['']">
          <img
            src="/images/logo-het-baken.svg"
            alt="Het Baken"
            width="1402"
            height="333"
            class="h-9 w-auto max-[333px]:h-auto max-[333px]:w-[calc(100vw-181.4px)] sm:h-10"
          />
        </NuxtLink>
        <nav
          class="hidden lg:flex items-center gap-6 whitespace-nowrap text-sm font-medium text-stone-700"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="relative hover:text-stone-950 transition-colors after:absolute after:-inset-y-2.5 after:inset-x-0 after:content-['']"
            :class="{ 'text-stone-950 font-semibold': isActive(link.to) }"
            >{{ link.label }}</NuxtLink
          >
        </nav>
        <div class="flex items-center gap-2">
          <NuxtLink
            to="/doe-mee"
            class="relative shrink-0 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition-colors after:absolute after:-inset-y-1 after:inset-x-0 after:content-['']"
            active-class="ring-2 ring-stone-900"
            >Doe mee</NuxtLink
          >
          <button
            ref="menuKnop"
            type="button"
            class="relative shrink-0 rounded-full border border-stone-300 p-2 lg:hidden after:absolute after:-inset-1 after:content-['']"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobiel-menu"
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
        v-show="mobileMenuOpen"
        id="mobiel-menu"
        ref="mobielMenu"
        aria-label="Hoofdmenu"
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

    <main id="inhoud" tabindex="-1" class="flex-1 focus:outline-none">
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
            <h2
              class="text-sm font-semibold uppercase tracking-wide text-stone-400"
            >
              Contact
            </h2>
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
            <h2
              class="text-sm font-semibold uppercase tracking-wide text-stone-400"
            >
              Camping
            </h2>
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
        <!-- De onderste regel: 14 px in plaats van 12, lichter dan stone-500 (dat gaf 3,7:1 op deze achtergrond, de norm is
             4,5:1), de twee links onderstreept en 44 px hoog om aan te raken (voorstel van de Designer). -->
        <div
          class="mt-12 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-stone-800 pt-6 text-sm text-stone-400"
        >
          <p>© {{ new Date().getFullYear() }} Dabar Het Baken</p>
          <div class="flex gap-4">
            <NuxtLink
              to="/jaarverslagen"
              class="inline-flex min-h-11 items-center text-stone-300 underline underline-offset-4 hover:text-white"
              >Jaarverslagen</NuxtLink
            >
            <NuxtLink
              to="/fotobeleid"
              class="inline-flex min-h-11 items-center text-stone-300 underline underline-offset-4 hover:text-white"
              >Fotobeleid</NuxtLink
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
