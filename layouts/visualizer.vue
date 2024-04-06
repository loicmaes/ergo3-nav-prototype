<script setup lang="ts">
import {getData} from "nuxt-storage/local-storage";
import DesktopIcon from "~/components/icons/DesktopIcon.vue";
import PhoneIcon from "~/components/icons/PhoneIcon.vue";
import TabletIcon from "~/components/icons/TabletIcon.vue";

const router = useRouter();

const fileName = getData('fileName');

const panelOpened = ref<boolean>(false);
</script>

<template>
  <div>
    <header class="fixed z-10 inset-x-20 rounded-3xl bg-white border-[2px] border-gray-100 flex items-center justify-between px-6 py-4 transition-all duration-500" :class="{ 'top-4': panelOpened, 'top-0 translate-y-[-100%]': !panelOpened }">
      <NuxtLink to="/" class="aspect-square grid place-items-center w-8 transition-transform duration-300 hover:-translate-x-1">←</NuxtLink>
      <span class="ratio-square w-8"></span>
      <span class="ratio-square w-8"></span>

      <p class="mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400">{{ fileName ?? 'Unknown file' }}</p>

      <div class="flex items-center gap-2">
        <NuxtLink class="link" active-class="active" to="/visualize/desktop" @click="panelOpened = false"><DesktopIcon class="w-3/4" /></NuxtLink>
        <NuxtLink class="link" active-class="active" to="/visualize/tablet" @click="panelOpened = false"><TabletIcon class="w-3/4" /></NuxtLink>
        <NuxtLink class="link" active-class="active" to="/visualize/phone" @click="panelOpened = false"><PhoneIcon class="w-3/4" /></NuxtLink>
      </div>

      <button id="toggle" class="aspect-square w-4 inline-flex items-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[150%] transition-all opacity-40 hover:opacity-100" :class="{ 'active': panelOpened }" @click.prevent="panelOpened = !panelOpened">
        <span class="inline-block w-full h-2 bg-black"></span>
      </button>
    </header>

    <slot />
  </div>
</template>

<style scoped>
.link {
  @apply aspect-square w-8 grid place-items-center opacity-50 transition-all duration-300 hover:opacity-100 hover:-translate-y-1;
}
.link.active {
  @apply opacity-100;
}

#toggle {
  --_polygon: polygon(0% 30%, 0% 70%, 100% 70%, 100% 30%);
}
#toggle:hover {
  --_polygon: polygon(0% 0%, 0% 40%, 50% 100%, 100% 40%, 100% 0%, 50% 60%);
}
#toggle.active {
  --_polygon: polygon(0% 60%, 0% 100%, 50% 40%, 100% 100%, 100% 60%, 50% 0%);
}
#toggle > span {
  clip-path: var(--_polygon);
  transition: clip-path 500ms ease-in-out;
}
</style>
