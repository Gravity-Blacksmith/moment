// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/i18n', 'nuxt-gtag'],
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-9KW53KVMGN',
  },
  i18n: {
    defaultLocale: 'fr',
    detectBrowserLanguage: false,
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'fr', iso: 'fr-FR', name: 'Français' }
    ],
    vueI18n: './i18n.config.js'
  },
})