// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: 'assets/tailwind.css',
    configPath: 'tailwind.config',
  }
})
