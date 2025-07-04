export default {
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@vueuse/nuxt"],
  build: {
    transpile: ["@headlessui/vue"],
  },
  nitro: {
    preset: "vercel-edge",
  },
  colorMode: {
    classSuffix: "",
  },
};
