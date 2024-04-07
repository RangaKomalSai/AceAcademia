/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "p-blue": "#4e46e5",
        "dark-blue": "#423bc4",
      },
      fontFamily: {
        "josefin-sans": ["Josefin Sans", "san-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
