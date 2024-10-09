/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1fb6ff',
        'custom-pink': '#ff49db',
        'custom-orange': '#ff7849',
        'custom-green': '#13ce66',
        'custom-yellow': '#ffc82c',
        'custom-gray-dark': '#273444',
        'custom-gray': '#8492a6',
        'custom-gray-light': '#d3dce6',
        'custom-gray-person': '#2C3E50',
      },
      fontFamily: { // Fuente personalizada
        playwrite: ['Playwrite DK Loopet', 'cursive'], // Otra fuente personalizada (opcional)
        exo : ['Exo 2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

