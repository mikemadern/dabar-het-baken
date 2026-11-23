<script setup lang="ts">
// Foutmelding onder een formulierveld. Staat altijd in de pagina; de CSS (veld-fout in main.css)
// toont hem pas als het veld ervoor :user-invalid is (na het verlaten van het veld of bij versturen).
// Het veld koppelt hem zelf aan zichzelf met aria-describedby zolang het fout is (zie contact.vue).
defineProps<{ id: string }>()
</script>

<template>
  <p :id="id" class="veld-fout">
    <svg class="veld-fout-icoon" viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false">
      <circle cx="8" cy="8" r="7.25" stroke="currentColor" stroke-width="1.5" />
      <path d="M8 4.25v4.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" />
      <circle cx="8" cy="11.5" r="1" fill="currentColor" />
    </svg>
    <span><slot /></span>
  </p>
</template>
