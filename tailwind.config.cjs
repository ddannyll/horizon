/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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