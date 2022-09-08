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
      }
    },
  },
  plugins: [],
}