<script setup lang="ts">
import { getData } from 'nuxt-storage/local-storage';
import FunctionCard from "~/components/FunctionCard.vue";
import Panel from "~/components/Panel.vue";

definePageMeta({
  layout: 'visualizer'
})

const router = useRouter();
if (!getData('file')) router.push('/');

const fileContent = getData('file');
const file = fileContent ? JSON.parse(fileContent) : undefined;

const search = ref<string>();
const searchDeployed = ref<boolean>(false);
</script>

<template>
  <main class="grid grid-cols-5 grid-rows-[max-content] h-screen gap-6 p-4">
    <header class="flex h-max gap-4 col-span-5 py-3 px-6">
      <button class="nav-button">🍔</button>
      <button class="nav-button bg-gray-100">🏠</button>
      <div v-if="searchDeployed" class="ml-auto">
        <input type="text" name="search" class="outline outline-[2px] outline-gray-200 px-4 py-2 rounded-xl" placeholder="Rechercher..." v-model="search" />
        <button class="nav-button" @click.prevent="searchDeployed = false">&times;</button>
      </div>
      <button class="nav-button ml-auto" @click.prevent="searchDeployed = true" v-else>🔍</button>
    </header>
    <Panel class="panel-2 grid grid-cols-2 divide-x divide-gray-300">
      <div></div>
      <div class="flex flex-col divide-y divide-gray-300">
        <FunctionCard name="Light" :current="3" :max="10" />
        <FunctionCard name="Blind" :current="8" :max="8" />
        <FunctionCard name="Heat" :current="10" :max="24" />
      </div>
    </Panel>
    <Panel class="panel-2"></Panel>
    <Panel class="panel-1"></Panel>
  </main>
</template>

<style scoped>
.nav-button {
  @apply aspect-square w-12 rounded-full;
}
.panel-1 {
  @apply outline outline-red-100 rounded-xl overflow-auto;
}
.panel-2 {
  @apply outline outline-red-100 col-span-2 rounded-xl overflow-auto;
}
</style>
