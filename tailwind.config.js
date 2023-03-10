/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1440px' 
      },
      colors: {
        'white': '#FFFFFF',
        'black': '#0A0A0A',
        'green': '#DFDEBF',
        'green-secondary': '#649c88',  
        'green-secondary-hover': '#649c88BF',
        'green-primary': '#0B2B24',
        'green-light': '#C6D7D1',
        'yellow': '#FFDC3F',
        'pink': '#F2CDC4',
      },
      spacing: {
        '15': '70px',
        '18': '4.75rem',
        '24.5': '6.25rem',
        '25': '113px',
        '50': '200px'
      },
      fontFamily: {
        'sans': '"Open Sans"'
      }
    },
  },
  plugins: [],
}