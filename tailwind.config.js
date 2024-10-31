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
        sans: ['Open Sans', 'sans-serif'],
        // inter: 'Inter',

      },
      colors: {
        javascript: '#F7DF1E',
        typescript: '#007ACC',
        framerMotion: '#FF0081',
        tailwind: '#3B82F6',
        react: '#61DAFB',
        next: '#000000',
        mui: '#1976D2',
        chakra: '#38B2AC',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
      },
    },
  },
  plugins: [],
}
