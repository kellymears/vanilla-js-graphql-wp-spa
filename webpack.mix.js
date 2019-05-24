const mix = require ('laravel-mix')
mix.pug = require('laravel-mix-pug')

mix.setResourceRoot(__dirname + '/src')

mix.browserSync(({
  proxy: 'http://ndnstatic.valet',
  files: [
    `./src/**/*.js`,
    `./src/**/*.css`,
  ],
}))

mix.postCss('./src/css/app.css', 'dist/css', [
  require('postcss-import'),
  require('tailwindcss'),
  require('postcss-preset-env'),
  require('postcss-hexrgba'),
  require('postcss-nested'),
  require('postcss-url'),
  require('cssnano')({
    preset: 'default'
  }),
])

mix.pug('./src/pug/*.pug', '../../dist')

.js('src/app.js', 'dist/js')
.copyDirectory('src/assets/images','dist/images')
.copyDirectory('src/assets/svg','dist/svg')
.copyDirectory('src/assets/fonts','dist/fonts')


.setPublicPath('dist')
.options({ processCssUrls: false })