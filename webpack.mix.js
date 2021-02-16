const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/app/app.js', 'public/app')
    .vue()
    .sass('resources/assets/scss/main.scss', 'public/css');

mix.js('resources/app/lotr.js', 'public/app')
    .vue()

mix.alias({
    '@': '/resources/sass',
    '~': '/resources/',
});

