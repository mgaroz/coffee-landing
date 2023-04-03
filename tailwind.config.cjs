const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
        'merriweather': ['Merriweather, serif;'],
        'playfair': ['Playfair Display, serif']
      },
      colors: {
        'color-background': '#1b1b1b',
        'color-cream': '#EEE0D3',
        'color-green': '#1C5F3F',
        'color-grayish': '#2A2829',
        'color-white': '#fff',
        'color-gray-text': '#7B7B7B',
      },
      screens: {
        'xs': '475px',
        '2xs': '360px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
