/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        pop: "#FFE97F"
      },
      keyframes: {
        'slow-spin': {
          '0%' : { transform: 'rotate(0deg) ' },
          '50%': { transform: ' rotate(180deg) scale(1, 2)' },
          '100%' : { transform: 'rotate(360deg) ' } 
        }
      },
      animation: {
        'slow-spin': 'slow-spin 15s linear infinite',
      }
    },
  },
  plugins: [],
}