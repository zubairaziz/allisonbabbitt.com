const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const pxToRem = require('postcss-pxtorem')
const nested = require('postcss-nested')
const postCssImport = require('postcss-import')
const cssnano = require('cssnano')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = {
  plugins: [
    postCssImport,
    nested,
    tailwindcss,
    pxToRem,
    autoprefixer,
    !dev &&
      cssnano({
        preset: 'default',
      }),
  ],
}
