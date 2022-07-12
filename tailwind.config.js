/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [ './src/**/*.js' ],
  theme: {
    extend: {
      fontFamily: {
        'display': [ 'Finlandica', defaultTheme.fontFamily.sans ],
        'body': [ 'Inter', defaultTheme.fontFamily.serif ]
      }
    },
  },
  plugins: [],
}
