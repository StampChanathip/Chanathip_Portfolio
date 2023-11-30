/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      light: "#f5edd6",
      dark: "#1a1818",
      highlight: "#363030",
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        "Luxurious-Roman": ["Luxurious Roman", "serif"],
        "Playfair-Display": ["Playfair Display", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
