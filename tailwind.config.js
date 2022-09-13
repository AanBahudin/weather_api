/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'dosis': ['Dosis', 'sans-serif'],
        'kanit': ['Kanit', 'sans-serif']
      },
      colors : {
        'bgLight': '#4BB3FD',
        'bgDark': '#222222',
        'lightSecondary': '#9B9B9B',
        'darkPrimary': '#4C4C4C',
        'darkSecondary': '#656565'
      }
    },
  },
  plugins: [],
}