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
        'silver': '#BFBFBF',
        'cardDark': '#272727',
        'darkSecondary': '#575757',
        'darkBg': '#1D1E18',
        'lightBg': '#5ab2f7'
      }
    },
  },
  plugins: [],
}