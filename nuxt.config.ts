// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: {enabled: true},

	runtimeConfig: {
		public: {
			apiBase: process.env.API_BASE || 'http://localhost:3001/api'
		}
	},

	css: [
		'toastify-js/src/toastify.css'
	],

	app: {
		head: {
			// titleTemplate: "%s - MSS Admin",
			titleTemplate: (titleChunk) => {
				return titleChunk ? `${titleChunk} - MSS Admin` : 'MSS Admin';
			},
			meta: [
				{charset: "utf-8"},
				{name: "viewport", content: "width=device-width, initial-scale=1"},
			],
			link:[
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
			]
		}
	},

	modules: [
		"@nuxtjs/tailwindcss",
		'@pinia/nuxt',
	]
})