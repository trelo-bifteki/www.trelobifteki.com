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
      'rainbow-red'      : '#BA2766',
      'rainbow-blue'     : '#1F98C6',
      'rainbow-orange'   : '#F97C39',
      'rainbow-lila'     : '#E52D98',
      'post-background'  : '#F6F4F7',
    },
    extend: {
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
      }
    },
  },
  plugins: [],
}

