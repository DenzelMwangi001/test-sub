/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'], // Old-money elegance
        body: ['Inter', 'sans-serif'],            // Modern readability
      },
      colors: {
        ivory: '#fdfcf9',      // Light prestige background
        gold: '#c9aa71',       // Luxurious detail
        charcoal: '#2f2f2f',   // Deep readable black
        emerald: '#0d9488',    // Futuristic accent
        frost: 'rgba(255,255,255,0.15)', // Glassmorphic overlay
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}


