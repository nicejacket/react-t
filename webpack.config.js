/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-18 18:49:44
 * @version 1.0.0
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

require('es6-promise').polyfill();

module.exports = {
    entry: {
        bundle:[
            './src/js/index.js',
            'font-awesome-webpack!./font-awesome.config.js'
        ] ,
        html5shiv: './node_modules/html5shiv/src/html5shiv.js',
        'html5shiv-printshiv': './node_modules/html5shiv/src/html5shiv-printshiv.js',
        'es5-shim': './node_modules/es5-shim/es5-shim.js',
        'es5-sham': './node_modules/es5-shim/es5-sham.js'
    },
    output: {
        path: "build",
        filename: "[name].js"
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/, 
            exclude: /(node_modules)|(font-awesome.config.js)/, 
            loader: "eslint-loader"
        }],
        loaders: [{
            test: /\.css$/, loader: ExtractTextPlugin.extract("style!css!")
        },{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },{ 
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" 
        },{ 
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" 
        }]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ],
    eslint: {  
        configFile: '.eslintrc'
    }
};
