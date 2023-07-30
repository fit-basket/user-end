/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
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
        300: "rgb(209 213 219)",
        500: "rgb(107 114 128)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

// #F9B81D, #800080, #47C0A8
