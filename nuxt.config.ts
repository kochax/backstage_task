// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@nuxt/content", "@nuxt/image", "@nuxt/ui"],
  css: ["~/css/reset.scss", "~/css/global.scss"],
  components: {
    dirs: [{ path: "./components" }],
  },
  devtools: { enabled: true },
  image: {
    domains: ["placehold.co"],
  },
  ui: {
    icons: ["grommet-icons"],
  },
});
