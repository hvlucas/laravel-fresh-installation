let mix = require('laravel-mix');

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

mix.webpackConfig({
    target: 'node',
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.json'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        enforceExtension: false,
        enforceModuleExtension: false
    },
    /*
    module: {
        exprContextCritical: false
    }
    */
});

mix.js('screenshot.js', 'public/js/screenshot.js');
