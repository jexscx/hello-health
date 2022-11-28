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
        '3xl': '-4px 3px 10px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
