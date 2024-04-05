<script setup lang="ts">
import { getData, setData } from 'nuxt-storage/local-storage';

const fileInput = ref(null);

const loaded = ref(false);
const fileName = ref(getData('fileName'));
if (getData('file')) loaded.value = true;

function handleFile (event: any) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = handleReader;
  reader.readAsText(file);
  fileName.value = file.name;
  setData('fileName', file.name, 5, 'd');
}
function handleReader (event: any) {
  if (!process.browser) return;
  setData('file', event.target.result, 5, 'd');
  loaded.value = true;
}
</script>

<template>
  <div class="w-full min-h-screen grid place-items-center">
    <form @submit.prevent class="flex flex-col w-1/2 items-center select-none">
      <label for="file" class="w-full border-[2px] border-gray-200 p-6 rounded-3xl bg-gray-100 text-gray-400" :class="{ 'text-black': fileName }">{{ fileName ?? 'Load a file' }}</label>
      <input type="file" id="file" name="file" class="sr-only" accept=".json,.JSON" ref="fileInput" @change="handleFile" />

      <ClientOnly><NuxtLink v-if="loaded" class="flex w-max mt-12 py-4 px-12 bg-gray-800 text-white rounded-full transition-colors hover:bg-gray-900" to="/visualize">Visualize</NuxtLink></ClientOnly>
    </form>
  </div>
</template>

<style scoped>

</style>
