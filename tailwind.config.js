/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./App.vue", // Main Nuxt app file
    "./components/**/*.{vue,js,ts}", // Scan components
    "./layouts/**/*.vue", // Scan layouts
    "./pages/**/*.vue", // Scan pages
    "./plugins/**/*.{js,ts}", // Scan plugins
  ],
  theme: {
    container: {
      center: true,
      padding: "30px", // Always 30 px padding on both sides
      screens: {
        DEFAULT: "375px",
        tablet: "750px", // 690px content + 30px left + 30px right
        desktop: "1110px", // 1050px content + 30px left + 30px right
      },
    },
    screens: {
      tablet: "750px",
      desktop: "1110px",
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
      lineHeight: {
        "extra-tight": 1.1,
        140: 1.4,
        160: 1.6,
      },
      safelist: ["bg-primary-dark", "font-workSans"],
    },
  },
  plugins: [],
};
