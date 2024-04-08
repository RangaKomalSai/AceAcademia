/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "p-blue": "#4e46e5",
        "light-blue": "rgba(78, 70, 229, 0.2)",
        "dark-blue": "#4c0bce",
        "s-orange": "#FF7426",
        "light-orange": "rgba(255, 116, 38,0.1)",
      },
      fontFamily: {
        "josefin-sans": ["Josefin Sans", "san-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
