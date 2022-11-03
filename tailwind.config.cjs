/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ss: "620px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      // colors: {
      //   primaryClr: "rgb(var(--whitePrimaryColor) / <alpha-value>)",
      //   secondaryClr: "rgb(var(--whiteSecColor) / <alpha-value>)",
      // },
      colors: {
        zinc: {
          700: "rgb(36, 41, 47)",
        },
        yellow: {
          400: "#FFB633",
        },
        sky: {
          500: "rgb(9, 105, 218)",
        },
        repoColor: "rgb(87, 96, 106)",
        gitGreen: "rgb(45, 164, 78)",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
