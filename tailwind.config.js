/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      rubikMono: ["Rubik Mono One", "sans-serif"],
      plaster: ["Plaster", "cursive"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
