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
        tablet: "750px",
        desktop: "1110px",
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
      fontSize: {
        "1.5xl": "22px",
      },
      colors: {
        "primary-dark": "#2B2B2B",
        "secondary-dark": "#3B3B3B",
        "primary-light": "#D4D4D4",
        "custom-gray": "#858584",
        pink: "#A259FF",
      },
      borderRadius: {
        "2.5xl": "20px",
      },
      spacing: {
        3.75: "15px",
        5.5: "22px",
        7.5: "30px",
        12.5: "50px",
        15: "60px",
        30: "120px",
        78.75: "315px",
        82.5: "330px",
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
