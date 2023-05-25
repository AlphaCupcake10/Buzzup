/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:
      {
        accent:'#FFBA09',
        dark:'#1F1E1D',
        darker:'#181715',
        light:'#F5F5F5'
      },
      colorsLight:
      {
        accent:'#FFBA09',
        dark:'#FFFFFF',
        darker:'#F5F5F5',
        light:'#1F1E1D'
      }
    },
  },
  plugins: [],
}

