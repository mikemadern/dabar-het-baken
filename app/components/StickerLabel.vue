<script setup lang="ts">
withDefaults(defineProps<{ color?: 'yellow' | 'blue', rotate?: 'left' | 'right' }>(), {
  color: 'yellow',
  rotate: 'left',
})
</script>

<template>
  <span
    class="inline-block rounded-md px-3 py-1 font-display text-sm font-semibold shadow-sm"
    :class="[
      color === 'blue' ? 'bg-sky-400 text-white' : 'bg-yellow-400 text-stone-900',
      rotate === 'left' ? '-rotate-2' : 'rotate-2',
    ]"
  >
    <slot />
  </span>
</template>
