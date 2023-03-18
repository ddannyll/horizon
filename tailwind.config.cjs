/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slow-spin': {
          '0%' : { transform: 'rotate(0deg) ' },
          '50%': { transform: ' rotate(180deg) scale(1, 1.5)' },
          '100%' : { transform: 'rotate(360deg) ' } 
        }
      },
      animation: {
        'slow-spin': 'slow-spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}