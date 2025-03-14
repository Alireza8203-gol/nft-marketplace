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
      padding: {
        DEFAULT: "30px",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        // "2xl": "6rem",
      },
    },
    screens: {
      // mobile: "375px", tablet: "834px", desktop: "1280",
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      // "2xl": "1536px",
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
      safelist: ["bg-primary-dark", "font-workSans"],
    },
  },
  plugins: [],
};
