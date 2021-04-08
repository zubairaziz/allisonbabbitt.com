module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#8884FF',
          50: '#CBC9FF',
          100: '#C3C1FF',
          200: '#B4B2FF',
          300: '#A6A3FF',
          400: '#9793FF',
          500: '#8884FF',
          600: '#7975FF',
          700: '#6A65FF',
          800: '#5C56FF',
          900: '#4D47FF',
        },
        lavender: {
          DEFAULT: '#D7BCE8',
          50: '#F6EFFA',
          100: '#F2EAF8',
          200: '#EBDEF4',
          300: '#E5D3F0',
          400: '#DEC7EC',
          500: '#D7BCE8',
          600: '#D0B1E4',
          700: '#C9A5E0',
          800: '#C39ADC',
          900: '#BC8ED8',
        },
        gunmetal: '#292F36',
      },
    },
  },
  plugins: [],
}
