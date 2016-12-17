/**
 *
 * Created by akiva on 12/12/16.
 * //http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup
 */
var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./../webpack.config.js');
var path = require('path');
var fs = require('fs');
var mainPath = path.resolve(__dirname, '..', 'app', 'main.js');

module.exports = function () {

    // First we fire up Webpack an pass in the configuration we
    // created
    var bundleStart = null;
    var compiler = Webpack(webpackConfig);

    // notify budling is starting
    // compiler.plugin('compile', function() {
    //     console.log('Bundling...');
    // });
    //
    // // notify when it is done compiling,
    // compiler.plugin('done', function() {
    //     console.log('Bundled');
    // });

    console.log(webpackConfig.output.publicPath);
    var bundler = new WebpackDevServer(compiler, {

        // We need to tell Webpack to serve our bundled application
        // from the build path. When proxying:
        // http://localhost:9000/build -> http://localhost:8080/build
        publicPath: webpackConfig.output.publicPath,
        hot: false,
        inline: true,
        //terminal configs
        quiet: false,
        noInfo: true,
        stats: {
            colors: true
        }
    });

    // We fire up the development server and give notice in the terminal
    // that we are starting the initial bundle
    bundler.listen(9000, 'localhost', function () {
        console.log('Server Started');
    });

};