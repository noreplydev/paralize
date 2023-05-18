/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid': 'url("/assets/svg/grid.svg")'
      },
      keyframes: {
        'scale-down': {
          '0%': { transform: 'scale(1.1)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        }
      }, 
      animation: {
        'scale-down': 'scale-down 0.12s 1s ease-out forwards', 
        'scale-down-md': 'scale-down 0.12s 1.20s ease-out forwards', 
        'scale-down-lg': 'scale-down 0.12s 1.40s ease-out forwards',
      }
    }
  },
  plugins: [

  ],
}
