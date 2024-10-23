/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: 'Poppins',
        londrinaSketch: 'Londrina Sketch'
      },
      colors: {
        color1: '#E6E6E6',
        color2: '#AAcolor7D8',
        color3: '#768A96',
        color4: '#44576D',
        color5: '#29353C',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
      },
    },
  },
  plugins: [],
}
