/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
    
  ],
  theme: {
    extend: {
      colors: {
        'hoverColor': '#6209DB'
      },
      fontFamily: {
        burtons: 'burtons',
      }
    },
  },
  plugins: [],
  
}

