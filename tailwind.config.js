/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue", // Main Nuxt app file
    "./components/**/*.{vue,js,ts}", // Scan components
    "./layouts/**/*.vue", // Scan layouts
    "./pages/**/*.vue", // Scan pages
    "./plugins/**/*.{js,ts}", // Scan plugins
  ],
  theme: {
    container: {
      center: true,
      padding: "30px", // Always 30px padding on both sides
      screens: {
        mobile: "375px", // 315px content + 30px left + 30px right
        tablet: "750px", // 690px content + 30px left + 30px right
        desktop: "1110px", // 1050px content + 30px left + 30px right
      },
    },
    screens: {
      // mobile: "375px", tablet: "834px", desktop: "1280",
      mobile: "375px",
      tablet: "834px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        spaceMono: ["'Space Mono'", "monospace"],
        workSans: ["'Work Sans'", "sans-serif"],
      },
      colors: {
        "primary-dark": "#2B2B2B",
        "primary-light": "#D4D4D4",
        pink: "#A259FF",
      },
      spacing: {
        7.5: "30px",
      },
      safelist: ["bg-primary-dark", "font-workSans"],
    },
  },
  plugins: [],
};
