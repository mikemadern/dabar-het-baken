<script setup lang="ts">
const words = [
  "Evangelisatie",
  "Ontspanning",
  "Gebed",
  "Zingen",
  "Ontmoeting",
  "Plezier",
];

const props = withDefaults(
  defineProps<{
    tilt?: "left" | "right";
  }>(),
  {
    tilt: "left",
  }
);
</script>

<template>
  <div class="relative h-8 sm:h-9">
    <div
      class="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 bg-sky-400 py-2 overflow-hidden"
      :class="[props.tilt === 'left' ? '-rotate-1' : 'rotate-1']"
    >
      <p
        class="whitespace-nowrap text-center text-xs font-bold uppercase tracking-wide text-white sm:text-sm"
      >
        <template v-for="n in 4" :key="n">
          <span v-for="word in words" :key="word">{{ word }} &bull; </span>
        </template>
      </p>
    </div>
  </div>
</template>
