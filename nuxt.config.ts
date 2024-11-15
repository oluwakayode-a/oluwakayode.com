// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate/nuxt',
    'nuxt-particles'
  ],
  ssr: false
})
