<script setup lang="ts">
import DeviceCard from "~/components/DeviceCard.vue";
import DesktopIcon from "~/components/icons/DesktopIcon.vue";
import TabletIcon from "~/components/icons/TabletIcon.vue";
import PhoneIcon from "~/components/icons/PhoneIcon.vue";
</script>

<template>
  <main class="flex items-center justify-center gap-6 min-h-screen">
    <DeviceCard version="desktop">
      <template #icon>
        <DesktopIcon />
      </template>
      <template #name>Desktop</template>
    </DeviceCard> <!-- Desktop -->
    <DeviceCard version="tablet">
      <template #icon>
        <TabletIcon />
      </template>
      <template #name>Tablette</template>
    </DeviceCard> <!-- Tablet -->
    <DeviceCard version="phone">
      <template #icon>
        <PhoneIcon />
      </template>
      <template #name>Mobile</template>
    </DeviceCard> <!-- Phone -->
  </main>
</template>

<style scoped>

</style>
