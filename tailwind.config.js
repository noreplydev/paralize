/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0a0a0a', 
        'primary': '#151515',
        'secondary': '#252525', 
        'gray': '#404040',
        'accent': '#0056ff'
      }, 
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
        'scale-down': 'scale-down 0.12s 0.2s ease-out forwards', 
        'scale-down-md': 'scale-down 0.12s 0.4s ease-out forwards', 
        'scale-down-lg': 'scale-down 0.12s 0.6s ease-out forwards',
      }
    }
  },
  plugins: [

  ],
}
