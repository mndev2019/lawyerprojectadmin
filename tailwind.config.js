/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#14489e",
        secondary:"white",
        light:"#bcdcff;"
      }
    },
  },
  plugins: [],
}