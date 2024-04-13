/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        'Kanit': ['kanit','sans-serif']
      },
      scale: {
        'small': '0.1'
      },
      backgroundColor: {
        'main': '#058ED9'
      },
      colors:{
        'main':'#058ED9'
      }
      
    },
  },
  plugins: [],
}
