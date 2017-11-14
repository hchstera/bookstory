let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Manage styles
 |--------------------------------------------------------------------------
 */

// precompile and copy Asiayo's design css & assets to public
mix.sass('./styles/framework/sass/style.sass', 'public/css/style.css');
mix.copyDirectory('./styles/framework/images', 'public/images');