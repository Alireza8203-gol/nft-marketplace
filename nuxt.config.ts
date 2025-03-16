// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
  ],
  devServer: {
    port: 4000,
  },
  colorMode: {
    preference: "dark", // default value of $colorMode.preference. could be system as well
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    storage: "localStorage", // or 'sessionStorage' or 'cookie'
    storageKey: "nuxt-color-mode",
  },
  icon: {
    // provider: "server",
    // customCollections: [
    //   {
    //     prefix: "local",
    //     dir: "~/assets/svg-icons",
    //   },
    // ],
  },
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous", // ✅ Use lowercase "crossorigin"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },
});
