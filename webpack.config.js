/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-18 18:49:44
 * @version 1.0.0
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

require('es6-promise').polyfill();

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: "build",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]
};
