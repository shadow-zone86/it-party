// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-01-22',
  srcDir: './src',
  devtools: { enabled: true },
  
  modules: [
    '@pinia/nuxt',
  ],

  css: [
    '@/app/styles/main.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/app/styles/_variables" as *;
            @use "@/app/styles/_mixins" as *;
          `,
        },
      },
    },
  },

})
