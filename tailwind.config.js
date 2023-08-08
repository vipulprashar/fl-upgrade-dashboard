module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'primary-100': '#E6EFF9',
        'primary-200': '#C3D7F3',
        'primary-300': '#A1BEED',
        'primary-400': '#84AAE7',
        'primary-500': '#6795E1',
        'primary-600': '#4C81DB',
        'primary-700': '#336ED5',
        'primary-800': '#195ACF',
        'primary-900': '#0047C9',
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary-100': '#E6EFF9',
        'primary-200': '#C3D7F3',
        'primary-300': '#A1BEED',
        'primary-400': '#84AAE7',
        'primary-500': '#6795E1',
        'primary-600': '#4C81DB',
        'primary-700': '#336ED5',
        'primary-800': '#195ACF',
        'primary-900': '#0047C9',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};