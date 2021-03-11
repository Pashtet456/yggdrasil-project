const mix = require('laravel-mix');
const path = require('path');
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
    .js('resources/app/lotr.js', 'public/app')
    .sass('resources/assets/scss/main.scss', 'public/css')
    .vue();

mix.webpackConfig(
    {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/utilities/'),
                '~': path.resolve(__dirname, 'resources/assets/scss/'),
            },
        }
    })

