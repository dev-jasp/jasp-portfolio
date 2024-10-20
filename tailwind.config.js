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
        Poppins: 'Poppins'
      },
      colors: {
        facebook: '#1877F2', 
        instagram: '#E4405F',
        linkedin: '#0077B5',
      },
    },
  },
  plugins: [],
}
