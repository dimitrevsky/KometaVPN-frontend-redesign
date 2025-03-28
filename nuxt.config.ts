export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  postcss: {
    plugins: {
      // postCSS плагины

      "cssnano": {},
      "autoprefixer": {},
      "postcss-apply": {},
    },
  },

  modules: ["@vueuse/nuxt"],
});