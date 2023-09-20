/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}","./src/app/components/dashboard/"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Mooli':['Mooli','sans-serif'],
        'Roboto':['Roboto Slab','sans-serif']
      }
    },
  },
  plugins: [],
}