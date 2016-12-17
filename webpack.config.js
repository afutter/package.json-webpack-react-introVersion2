var Webpack = require('webpack');
var path = require('path');

module.exports = {

    devtool: 'source-map',
    entry: [

        // For hot style updates
        //'webpack/hot/dev-server',

        // The script refreshing the browser on none hot updates
        //'webpack-dev-server/client?http://localhost:9000',
        path.resolve(__dirname, 'app', 'main.js')],
    output: {
        path:  __dirname+'/public',
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    module: {

        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [ path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }

        ]
    }

    // manually add the Hot Replacement plugin when running
    // from Node
    //plugins: [new Webpack.HotModuleReplacementPlugin()]
};

