// See https://next.tailwindcss.com/docs/configuration for details
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1ABD7D',
        gray: {
          ...colors.gray,
          brand: '#222222'
        }
      },
      screens: {
        brand: '1440px'
      },
      fontFamily: {
        title: ['"Mikado Bold DEMO"', 'sans-serif'],
        brand: ['"Sailec Regular"', 'sans-serif'],
        'brand-bold': ['"Sailec Bold"', 'sans-serif'],
        'brand-medium': ['"Sailec Medium"', 'sans-serif']
      }
    }
  },
  variants: {},
  plugins: []
};
