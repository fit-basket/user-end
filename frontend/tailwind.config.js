/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    ringWidth: {
      2: "2px",
    },
    colors: {
      primary: "#F9B81D",
      secondary: {
        light: "#8062D6",
        dark: "#800080",
      },
      button: {
        lighter: "#dff7f2",
        light: "#65cfb9",
        main: "#47C0A8",
        dark: "#359c87",
      },
      white: "#ffffff",
      danger: {
        dark: "#f43f5e",
        main: "#fb7185",
      },
      gray: {
        50: " rgb(249 250 251)",
        200: "rgb(229 231 235);",
        300: "rgb(209 213 219)",
        500: "rgb(107 114 128)",
        900: "rgb(17 24 39)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

// #F9B81D, #800080, #47C0A8
