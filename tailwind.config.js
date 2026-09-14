/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "2xl": "0px 0px 32px 6px rgba(147, 51, 234, 0.1)",
      },
      fontFamily: {
        standard: ["sans-serif"],
        rubikMono: ["var(--font-rubik-mono)", "Rubik Mono One", "sans-serif"],
        baskervville: ["var(--font-baskervville)", "Baskervville", "serif"],
      },
    },
  },
  plugins: [],
};
