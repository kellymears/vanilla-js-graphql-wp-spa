const mix = require ('laravel-mix')
mix.pug = require('laravel-mix-pug')

mix.setResourceRoot(`${__dirname}/src`)

mix.postCss('src/css/app.css', 'dist/css', [
  require('postcss-import'),
  require('tailwindcss'),
])

mix.js('src/app.js', 'dist/js')

mix.pug('./src/pug/*.pug', '../../dist')

mix.setPublicPath('dist').options({
  processCssUrls: false
})
