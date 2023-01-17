/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        amita: ["Amita", "cursive"],
        darker: ["Darker Grotesque", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tw-elements/dist/plugin")],
};
