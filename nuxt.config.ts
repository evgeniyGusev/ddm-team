// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "./assets/styles/global.scss";',
				},
			},
		},
	},
	build: {
		transpile: ['swiper']
	}
})
