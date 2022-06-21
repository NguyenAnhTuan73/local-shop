/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: ({ colors }) => ({
      main: "#A82A27",
      footer: "#273241",
      btnLeft: "#FFBE02",
      white: "#ffff",
      black: "#2F2F2F",
      bg: "#F6F6F6",
      surface_title: "#B91C1C",
    }),
  },
  plugins: [],
};
