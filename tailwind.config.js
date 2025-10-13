/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./App.vue", // Main Nuxt app file
    "./pages/**/*.vue", // Scan pages
    "./layouts/**/*.vue", // Scan layouts
    "./plugins/**/*.{js,ts}", // Scan plugins
    "./components/**/*.{vue,js,ts}", // Scan components
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
        "2.3xl": "26px",
        "2.6xl": "28px",
        "4.2xl": "38px",
        "5.1xl": "51px",
      },
      colors: {
        pink: "#A259FF",
        "custom-gray": "#858584",
        "primary-dark": "#2B2B2B",
        "custom-green": "#00AC4F",
        "primary-light": "#D4D4D4",
        "secondary-dark": "#3B3B3B",
        "custom-gray-light": "#CCCCCC",
      },
      borderRadius: {
        "2.5xl": "20px",
      },
      spacing: {
        half: "50%",
        1.25: "5px",
        3.75: "15px",
        5.5: "22px",
        6.25: "25px",
        7.5: "30px",
        12.5: "50px",
        15: "60px",
        22.5: "90px",
        25: "100px",
        30: "120px",
        53.75: "215px",
        55: "220px",
        62.5: "250px",
        78.75: "315px",
        82.5: "330px",
        107.5: "430px",
        130: "520px",
        172.5: "690px",
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
