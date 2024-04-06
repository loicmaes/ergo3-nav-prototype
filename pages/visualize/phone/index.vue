<script setup lang="ts">
definePageMeta({
  layout: 'visualizer'
})
</script>

<template>
  <main class="w-full min-h-screen grid place-items-center">
    <div data-wrapper class="isolate w-[360px] h-[740px] outline outline-8 outline-black rounded-3xl overflow-y-auto">
      <header class="sticky flex gap-2 items-center top-0 w-full px-6 py-5">
        <button class="aspect-square w-8 grid place-items-center">🍔</button>
        <button class="aspect-square w-8 grid place-items-center">🏠</button>
        <button class="aspect-square w-8 grid place-items-center ml-auto">🔍</button>
      </header>
    </div>
  </main>
</template>

<style scoped>

</style>
