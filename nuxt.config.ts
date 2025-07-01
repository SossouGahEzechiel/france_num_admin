// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiBase: process.env.PUBLIC_API_BASE || 'http://localhost:3001/api'
    }
  },

  css: [
		'toastify-js/src/toastify.css'
	],

  modules: [
    "@nuxtjs/tailwindcss",
    '@pinia/nuxt',
  ]
})