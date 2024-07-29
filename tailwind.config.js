/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'underline': "url('/src/unser.svg')",
      },
      spacing: {
        '24': '6rem',    // Adding a new margin class m-24
        '28': '7rem',    // Adding a new margin class m-28
        '32': '8rem',    // Adding a new margin class m-32
        '34': '10rem',
        '36':'12rem'
      }, 
    },
  },
  plugins: [],
}

