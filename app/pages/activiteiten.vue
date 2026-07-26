<script setup lang="ts">
useHead({ title: 'Activiteiten — Dabar Het Baken' })

const clubs = [
  {
    name: 'Kinderclub',
    age: '4 t/m 8 jaar',
    color: 'yellow',
    bg: 'white',
    paragraphs: [
      'Elke ochtend van 9:45 tot 11:30 is er Kinderclub, opgebouwd rond een wekelijks thema met drie "sporen": een verhaal-, een knutsel- en een spelspoor. Op maandag, woensdag en vrijdag heeft het programma een christelijk karakter met een kort gebed en Bijbelverhaal; op dinsdag en donderdag staat een maatschappelijk thema of prentenboek centraal.',
      'Alle kinderen zijn welkom, ongeacht achtergrond — en aan het einde van de week strijden ze in de wekelijkse kleurwedstrijd om de titel van beste kunstenaar.',
    ],
    photos: [
      { src: '/images/galerij/lydia-kinderclub-kring.jpg', alt: 'Een vrijwilliger leidt een kringgesprek bij de kinderclub', main: true },
      { src: '/images/galerij/kinderclub-kleurplaat.jpg', alt: 'Kinderen kleuren een Bijbelverhaal-werkblad bij de kinderclub' },
      { src: '/images/galerij/poppenkast-publiek.jpg', alt: 'Kinderen kijken naar de poppenkastvoorstelling' },
    ],
  },
  {
    name: 'Teen Spirit',
    age: '9 t/m 11 jaar',
    color: 'blue',
    bg: 'stone-50',
    paragraphs: [
      'Net iets te oud voor de Kinderclub en nog niet toe aan Chatpoint: voor deze leeftijdsgroep is er Teen Spirit, een dagelijkse ochtendactiviteit gebaseerd op het clubprogramma "Rock Solid" van Youth for Christ.',
      'De werkvormen zijn speels van aard, maar er is ook ruimte voor verdieping — een mooie overgang tussen de kinderclub en de tienerjaren die volgen.',
    ],
    photos: [
      { src: '/images/galerij/raketten-lanceren.jpg', alt: 'Een meisje lanceert een speelgoedraket tijdens Teen Spirit', main: true },
      { src: '/images/galerij/ringwerpen-groepsspel.jpg', alt: 'Groepsspel met ringwerpen op de camping' },
      { src: '/images/galerij/radslag-actie.jpg', alt: 'Jongens maken een radslag op het gras' },
    ],
  },
  {
    name: 'Chatpoint',
    age: '12 t/m 16 jaar',
    color: 'yellow',
    bg: 'white',
    paragraphs: [
      'Voor tieners is er dagelijks Chatpoint, gebaseerd op "Solid Friends" van Youth for Christ: een mix van gesprek, spel en Bijbel.',
      'Er is veel ruimte voor de eigen inbreng van de tieners zelf, en voor actuele onderwerpen die hen persoonlijk bezighouden — laagdrempelig, en met veel plezier.',
    ],
    photos: [
      { src: '/images/galerij/kaartspel-bunting-lach.jpg', alt: 'Tieners spelen lachend een kaartspel bij Chatpoint', main: true },
      { src: '/images/galerij/tieners-lachen-bankje.jpg', alt: 'Tieners lachen samen op een bankje' },
      { src: '/images/galerij/haren-vlechten.jpg', alt: 'Een vrijwilliger vlecht het haar van een meisje' },
    ],
  },
  {
    name: 'No Nonsense',
    age: '17+',
    color: 'blue',
    bg: 'stone-50',
    paragraphs: [
      'Twee keer per week is er de mannen- en vrouwenavond: No Nonsense. Een avond met meer diepgang dan de clubs overdag, in samenwerking met een mentor en/of het pastorale team.',
      'Eerlijke gesprekken, zonder omwegen — precies zoals de naam belooft.',
    ],
    photos: [
      { src: '/images/galerij/groepsknuffel.jpg', alt: 'Een warme groepsknuffel tussen een mentor en teamleden' },
      { src: '/images/galerij/vrijwilligers-knuffel.jpg', alt: 'Drie vrijwilligers knuffelen elkaar' },
    ],
  },
  {
    name: 'Sing-In',
    age: 'zondagavond',
    color: 'yellow',
    bg: 'white',
    paragraphs: [
      'Op zondagavond is er de Sing-In: samenzang gericht op het lofprijzen van God, live begeleid door teamleden op onder meer gitaar en viool.',
      'Tussen de liederen door zijn er korte overdenkingen die het team gedurende de week heeft voorbereid — een laagdrempelig moment van bezinning, open voor alle campinggasten.',
    ],
    photos: [
      { src: '/images/galerij/vioolspeelster-sing-in.jpg', alt: 'Een teamlid speelt viool tijdens de Sing-In', main: true },
      { src: '/images/galerij/sing-in-overzicht-zaal.jpg', alt: 'Overzicht van de Sing-In met muzikanten en gasten' },
      { src: '/images/galerij/samenzang-kruis-zaal.jpg', alt: 'Samenzang tijdens de Sing-In' },
    ],
  },
  {
    name: 'Campingpastoraat',
    age: 'volwassenen',
    color: 'blue',
    bg: 'stone-50',
    paragraphs: [
      'Waar het recreatieteam zich vooral richt op kinderen, jongeren en jongvolwassenen, is er voor de volwassen gasten het campingpastoraat — met drie aspecten: pastoraal, diaconaal en missionair.',
      'Dat betekent een luisterend oor (voor gasten én team), een helpende hand, en waar mogelijk een getuigenis van hun geloof. De campingpastors verzorgen elke week twee avondsluitingen en zoeken actief aansluiting bij volwassenen tijdens activiteiten.',
    ],
    photos: [
      { src: '/images/galerij/gasten-koffie-terras.jpg', alt: 'Twee gasten drinken samen koffie op het terras', main: true },
      { src: '/images/galerij/ferdinand-in-gesprek.jpg', alt: 'Een campingpastor in gesprek met een gast' },
      { src: '/images/galerij/volwassenen-gesprek.jpg', alt: 'Volwassenen in gesprek aan een picknicktafel' },
    ],
  },
]
</script>

<template>
  <div>
    <PageHeader
      image="/images/galerij/vreugde-door-het-water.jpg"
      label="Activiteiten"
      title="Activiteiten voor iedere leeftijd"
    />

    <section class="py-16 sm:py-20">
      <div class="mx-auto max-w-3xl px-4 sm:px-6">
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
    </section>

    <section
      v-for="(club, i) in clubs"
      :key="club.name"
      :class="club.bg === 'stone-50' ? 'bg-stone-50' : 'bg-white'"
      class="py-16 sm:py-20"
    >
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div :class="i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'" class="lg:col-span-5">
            <div class="grid grid-cols-2 gap-3 sm:gap-4" :class="club.photos.length === 3 ? 'grid-rows-2' : 'grid-rows-1'">
              <template v-for="photo in club.photos" :key="photo.src">
                <NuxtImg
                  :src="photo.src"
                  :alt="photo.alt"
                  :class="photo.main ? 'row-span-2 aspect-[3/4]' : club.photos.length === 3 ? 'aspect-square' : 'aspect-[3/4]'"
                  class="w-full rounded-2xl object-cover"
                  sizes="280px"
                  format="webp"
                />
              </template>
            </div>
          </div>
          <div :class="i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'" class="lg:col-span-7">
            <div class="mb-3 flex flex-wrap items-center gap-2">
              <StickerLabel :color="club.color" :rotate="i % 2 === 0 ? 'left' : 'right'">
                {{ club.name }}
              </StickerLabel>
              <span
                class="rounded-full px-2.5 py-1 text-xs font-semibold"
                :class="club.color === 'blue' ? 'bg-sky-100 text-sky-800' : 'bg-yellow-100 text-yellow-800'"
              >{{ club.age }}</span>
            </div>
            <div class="space-y-4 text-stone-600 leading-relaxed">
              <p v-for="paragraph in club.paragraphs" :key="paragraph">{{ paragraph }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-12 sm:py-16">
      <div class="mx-auto max-w-3xl px-4 sm:px-6">
        <a href="mailto:dabarhetbaken@gmail.com" class="inline-block font-semibold text-stone-900 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:text-stone-700">
          Vragen over het programma? Mail naar dabarhetbaken@gmail.com
        </a>
      </div>
    </section>
  </div>
</template>
