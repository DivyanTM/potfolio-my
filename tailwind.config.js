/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slideProgress: {
          '0%': { width:'0%' },
          '100%': { width:'inherit' },
        },
      },
      animation: {
        progressSlide: 'slideProgress 1s ease-in-out forwards',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        Tangerine:['Tangerine','sans-serif'],
        Roboto:['Roboto','sans-serif']
      },
      fontSize:{
        'xxs':'13px',
        'xxxs':'9.5px'
      },
      backgroundImage: {
        'underline': "url('/src/unser.svg')",
      },
      spacing: {
        '24': '6rem',    
        '28': '7rem',    
        '32': '8rem',    
        '34': '10rem',
        '36':'12rem'
      }, 
      width:{
        0.1:'1px'
      },
      borderRadius:{
        'semi':'45%'
      },
      
    },
  },
  plugins: [

  ],
}

