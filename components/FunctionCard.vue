<script setup lang="ts">
type Props = {
  name: string,
  current: number,
  max: number,
};
defineProps<Props>();
</script>

<template>
  <article class="p-6 pl-4 flex items-center justify-between select-none cursor-pointer transition-all hover:pr-4">
    <div class="flex flex-col">
      <p>{{ name }}</p>
      <p class="text-xs text-gray-300">{{ current }}/{{ max }}</p>
    </div>
    <span>→</span>
  </article>
</template>

<style scoped>

</style>
