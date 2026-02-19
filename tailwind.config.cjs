/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md}',
  ],
  theme: {
    extend: {
      colors: {
        'stw-primary': '#2d2473',
        'stw-secondary': '#f4e623',
        'stw-accent': '#c6312d'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}