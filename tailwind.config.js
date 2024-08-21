/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/assets/index.css"

  ],
  theme: {
    extend: {
      colors:{
        mintcream: "#F4FFFD"
      }
    },
  },
  plugins: [],
}

