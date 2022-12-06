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
        tahiti: {
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
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

        ".h2": {
          "@apply text-xl font-bold": {},
        },
      });
    },
  ],
};
