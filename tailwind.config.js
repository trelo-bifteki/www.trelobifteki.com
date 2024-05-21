/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'header-foreground': '#F1F3FA',
      'header-background': '#3C3F50',
      'party-pink'       : '#FF0066',
      'theme-orange'     : '#E69D50',
      'theme-white'      : '#F8F8F7',
    },
    extend: {},
  },
  plugins: [],
}

