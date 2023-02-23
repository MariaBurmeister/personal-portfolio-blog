/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      standard: ["sans-serif"],
      rubikMono: ["Rubik Mono One", "sans-serif"],
      plaster: ["Plaster", "cursive"],
      baskervville: ["Baskervville", "serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
