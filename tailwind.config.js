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
        inter: 'Inter'
      },
      colors: {
        color1: '#001b2e',
        color2: '#1d3f58',
        color3: '#537692',
        color4: '#b3cde4',
        color5: '#eef3f9',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
      },
    },
  },
  plugins: [],
}
