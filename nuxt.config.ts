// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "@nuxt/icon",
    "nuxt-toast",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
  ],
  devServer: {
    port: 4000,
  },
  colorMode: {
    fallback: "light", // fallback value if not system preference found
    preference: "dark", // default value of $colorMode.preference. could be system as well
    storage: "localStorage", // or 'sessionStorage' or 'cookie'
    componentName: "ColorScheme",
    hid: "nuxt-color-mode-script",
    storageKey: "nuxt-color-mode",
    globalName: "__NUXT_COLOR_MODE__",
  },
  icon: {
    collections: ["heroicons"],
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
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
        },
      ],
    },
  },
});
