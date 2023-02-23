const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "0px 0px 32px 6px rgba(147, 51, 234, 0.1)",
      },
    },
    fontFamily: {
      standard: ["sans-serif"],
      rubikMono: ["Rubik Mono One", "sans-serif"],
      plaster: ["Plaster", "cursive"],
      baskervville: ["Baskervville", "serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
