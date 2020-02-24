// See https://next.tailwindcss.com/docs/configuration for details
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1ABD7D',
        'brand-secondary': '#EEFBF6',
        gray: {
          ...colors.gray,
          brand: '#222222',
          'brand-light': '#6F767E'
        }
      },
      screens: {
        brand: '1440px'
      },
      spacing: {
        hero: '42.5rem',
        card: '22rem',
        pricecard: '33.75rem'
      },
      fontFamily: {
        title: ['"Mikado Bold DEMO"', 'sans-serif'],
        brand: ['"Sailec Regular"', 'sans-serif'],
        'brand-bold': ['"Sailec Bold"', 'sans-serif'],
        'brand-medium': ['"Sailec Medium"', 'sans-serif']
      },
      zIndex: {
        '-10': '-10'
      }
    }
  },
  variants: {},
  plugins: []
};
