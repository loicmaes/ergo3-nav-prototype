<script setup lang="ts">
type Props = {
  version: string,
};
defineProps<Props>();
</script>

<template>
  <div class="group relative rounded-3xl border-[2px] border-gray-100 w-32 p-8 flex flex-col items-center gap-6 transition-transform">
    <span class="aspect-square w-2/3 opacity-50 transition-opacity"><slot name="icon" /></span>
    <p class="opacity-50 transition-opacity"><slot name="name" /></p>
    <NuxtLink :to="`/visualize/${version}`" class="absolute inset-0" />
  </div>
</template>

<style scoped>
div:hover {
  @apply -translate-y-2
}
div:hover > p, div:hover > span {
  @apply opacity-100;
}
</style>
