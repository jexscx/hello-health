/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 1px 4px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        powderblue: {
          100: "#147EB8",
          200: "#1272A5",
          300: "#7EC9F1",
          400: "#0E5981",
          500: "#0C4C6E",
          600: "#0a3f5c",
          700: "#083249",
          800: "#062537",
          900: "#2A324B",
        },
        pinky: {
          100: "#f1bbd3",
          200: "#ea9abc",
          300: "#e278a6",
          400: "#db5790",
          500: "#d5347d",
          600: "#ba2669",
          700: "#981f56",
          800: "#771843",
          900: "#551130",
        },
        // ...
      },
    },
  },
  plugins: [
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addComponents }) => {
      addComponents({
        ".btn-primary": {
          "@apply outline outline-2 outline-orange-300 bg-orange-300 rounded w-full h-12 text-left pl-4 text-white font-bold":
            {},
        },
        ".btn-primary-blue": {
          "@apply bg-sky-900 outline-sky-900 w-1/4 justify-self-end outline outline-2 rounded h-12 text-center text-white font-bold":
            {},
        },
        ".btn-outline": {
          "@apply outline outline-2 outline-sky-900 rounded px-4 h-12 flex justify-center items-center":
            {},
        },
        ".inputField": {
          "@apply rounded w-full h-12 pl-4 mt-4": {},
        },
        ".text": {
          "@apply text-base text-left tracking-wide": {},
        },
        ".text-bold": {
          "@apply text-base text-left font-bold tracking-wide": {},
        },
        ".h1": {
          "@apply text-3xl font-bold": {},
        },
        ".h1-md": {
          "@apply text-xl font-bold": {},
        },

        ".h2": {
          "@apply text-xl font-bold": {},
        },
      });
    },
  ],
};
