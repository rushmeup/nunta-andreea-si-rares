import { resolve } from "path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
      "@": resolve(__dirname, "/"),
  },

  app: {
      head: {
          meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
          title: "Wendola - Wedding & Planner NuxtJS Template",
          script: []
      }
  },

  css: [
      'swiper/css',
      'swiper/css/navigation',
      'swiper/css/pagination',
      "/public/css/bootstrap.min.css",
      "/public/css/style.css"
  ],

  modules: [
      [
          "@nuxtjs/google-fonts",
          {
              families: {
                  Cinzel: {
                      wght: [400, 500, 600, 700, 800]
                  },
                  "Manrope": {
                      wght: [300, 400, 500, 600, 700]
                  },
                  download: true,
                  inject: true
              }
          }
      ],
  ],

  compatibilityDate: "2024-09-20",
})