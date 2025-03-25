// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  runtimeConfig: {
    googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    googlePrivateKeyId: process.env.GOOGLE_PRIVATE_KEY_ID,
    googleProjectId: process.env.GOOGLE_PROJECT_ID,
    googleClientEmail: process.env.GOOGLE_CLIENT_EMAIL,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientX509CertUrl: process.env.GOOGLE_CLIENT_X509_CERT_URL,
    googleSpreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,

  },
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