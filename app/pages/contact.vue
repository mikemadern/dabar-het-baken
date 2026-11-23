<script setup lang="ts">
useSeoMeta({
  title: 'Contact',
  description: 'Vragen over vrijwilligerswerk, kerksamenwerking of een gift? Neem contact op met Dabar Het Baken, we horen graag van je.',
})

const name = ref('')
const email = ref('')
const message = ref('')

// Rand: stone-500 haalt 4,8:1 op wit (WCAG 1.4.11 vraagt 3:1). Focus: donkere rand plus een
// donkere omlijning met ruimte erbuiten, want geel op wit haalt maar 1,3:1 (2.4.7).
const fieldClass =
  'veld mt-1 block w-full rounded-lg border border-stone-500 px-3 py-2 text-sm focus:border-stone-900 focus:outline-2 focus:outline-offset-2 focus:outline-stone-900'

// Schermlezers: aria-invalid en aria-describedby volgen precies de zichtbare staat (:user-invalid), zodat
// een leeg verplicht veld niet wordt voorgelezen voordat de bezoeker iets heeft gedaan. Een melding die
// verschijnt als je een veld verlaat wordt via één beleefd live-gebied voorgelezen. Bij versturen met een
// fout zet de browser de focus op het eerste foute veld; dan leest de schermlezer de melding daar voor.
// De ingebouwde ballon van de browser blijft staan: zonder JavaScript werkt het formulier dan ook.
const aankondiging = ref('')
const velden = [
  { id: 'name', fout: 'name-fout' },
  { id: 'email', fout: 'email-fout' },
  { id: 'message', fout: 'message-fout' },
]
let aankondigingTimer: ReturnType<typeof setTimeout> | undefined
let aangekondigd = new Set<string>()

function synchroniseer(id: string, aankondigen = false) {
  const veld = velden.find((v) => v.id === id)
  const el = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null
  if (!veld || !el) return
  if (el.matches(':user-invalid')) {
    if (aankondigen && !aangekondigd.has(id)) {
      aangekondigd.add(id)
      const tekst = document.getElementById(veld.fout)?.textContent?.replace(/\s+/g, ' ').trim() ?? ''
      clearTimeout(aankondigingTimer)
      aankondiging.value = ''
      // Even wachten: de schermlezer leest eerst het veld voor waar de focus naartoe gaat.
      aankondigingTimer = setTimeout(() => { aankondiging.value = tekst }, 500)
    }
    el.setAttribute('aria-invalid', 'true')
    el.setAttribute('aria-describedby', veld.fout)
  } else {
    el.setAttribute('aria-invalid', 'false')
    el.removeAttribute('aria-describedby')
    aangekondigd.delete(id)
  }
}

onMounted(() => {
  const form = document.getElementById(velden[0]!.id)?.closest('form')
  if (!form) return
  velden.forEach((v) => synchroniseer(v.id))
  form.addEventListener('focusout', (e) => synchroniseer((e.target as HTMLElement).id, true))
  form.addEventListener('input', (e) => {
    if (velden.some((v) => v.id === (e.target as HTMLElement).id)) synchroniseer((e.target as HTMLElement).id)
  })
  // 'invalid' komt op elk fout veld bij versturen (ook bij velden die de bezoeker niet aanraakte) en borrelt niet op.
  form.addEventListener('invalid', (e) => {
    const id = (e.target as HTMLElement).id
    aangekondigd.add(id)
    synchroniseer(id)
  }, true)
})

function sendMessage() {
  const subject = `Bericht via de website van ${name.value || 'iemand'}`
  const body = `Naam: ${name.value}\nE-mail: ${email.value}\n\n${message.value}`
  window.location.href = `mailto:dabarhetbaken@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <div>
    <PageHeader
      image="/images/galerij/team-groepsfoto-welkom.jpg"
      label="Contact"
      title="Contact"
    />

    <section class="tekstkolom mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p class="text-lg text-stone-600">
        Vraag, idee, of zin om mee te doen? We horen graag van je.
      </p>
      <p class="mt-4 text-stone-700 leading-relaxed">
        Voor vragen over vrijwilligerswerk, kerksamenwerking of een gift mail je ons direct.
        Voor praktische vragen over een verblijf op de camping kun je terecht bij Kriemelberg
        Bushcamp zelf. Wil je eerst weten wat vrijwilligerswerk inhoudt? Lees het bij
        <NuxtLink to="/doe-mee" class="font-semibold text-stone-900 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-stone-700">Doe mee &rarr;</NuxtLink>.
      </p>

      <div class="mt-10 grid gap-6 sm:grid-cols-2">
        <div class="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-stone-500">Dabar Het Baken</h2>
          <ul class="mt-4 space-y-2 text-stone-700">
            <li><a href="mailto:dabarhetbaken@gmail.com" class="font-semibold text-stone-900 underline decoration-yellow-400 decoration-2 underline-offset-4">dabarhetbaken@gmail.com</a></li>
            <li><a href="https://www.facebook.com/baken.harderwijk/" target="_blank" rel="noopener" class="hover:text-stone-950">Facebook: baken.harderwijk</a></li>
            <li><a href="https://www.instagram.com/baken_harderwijk/" target="_blank" rel="noopener" class="hover:text-stone-950">Instagram: baken_harderwijk</a></li>
            <li><a href="https://www.youtube.com/@bakenharderwijk7193" target="_blank" rel="noopener" class="hover:text-stone-950">YouTube: bakenharderwijk7193</a></li>
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

      <!-- Met JavaScript maakt sendMessage het bericht (onderwerp, naam, e-mail en tekst) en opent het e-mailprogramma. Zonder
           JavaScript, of voordat de pagina is geladen, doet het formulier zelf hetzelfde (mailto, als platte tekst): er gaat
           niets als GET naar het adres van de pagina. -->
      <form
        class="mt-10 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
        method="post"
        action="mailto:dabarhetbaken@gmail.com"
        enctype="text/plain"
        @submit.prevent="sendMessage"
      >
        <h2 class="text-lg font-semibold text-stone-900">Stuur ons een bericht</h2>
        <p class="mt-1 text-sm text-stone-500">
          Dit opent je e-mailprogramma met je bericht ingevuld. Controleer het en verstuur het daar.
        </p>
        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label for="name" class="block text-sm font-medium text-stone-700">Naam</label>
            <input
              id="name"
              v-model="name"
              name="naam"
              type="text"
              autocomplete="name"
              enterkeyhint="next"
              required
              :class="fieldClass"
            >
            <VeldFout id="name-fout">Vul je naam in.</VeldFout>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-stone-700">E-mail</label>
            <input
              id="email"
              v-model="email"
              name="e-mail"
              type="email"
              autocomplete="email"
              autocapitalize="none"
              autocorrect="off"
              spellcheck="false"
              enterkeyhint="next"
              required
              :class="fieldClass"
            >
            <VeldFout id="email-fout">Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.</VeldFout>
          </div>
        </div>
        <div class="mt-4">
          <label for="message" class="block text-sm font-medium text-stone-700">Bericht</label>
          <textarea
            id="message"
            v-model="message"
            name="bericht"
            rows="5"
            required
            :class="fieldClass"
          />
          <VeldFout id="message-fout">Vul je bericht in.</VeldFout>
        </div>
        <div class="sr-only" aria-live="polite">{{ aankondiging }}</div>
        <button
          type="submit"
          class="mt-6 rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-stone-900 hover:bg-yellow-300 transition duration-100 active:bg-yellow-500 motion-safe:active:translate-y-px"
        >
          Neem contact met ons op
        </button>
      </form>
    </section>
  </div>
</template>
