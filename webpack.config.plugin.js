/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2016-01-08 13:51:42
 * @version 1.0.0
 */

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

var modernizrConfig = {
    'feature-detects': [
        'input',
        'canvas',
        'css/resize',
        'css/checked'
    ],
    filename: 'js/modernizr.js',
    minify: {
        output: {
            comments: true,
            beautify: true
        }
    }
}

var config = {
    module: {
        loaders: [{
            test: /\.css$/, loader: ExtractTextPlugin.extract('style!css!')
        },{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        },{ 
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
        },{ 
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' 
        }],
        noParse: []
    },
    plugins: [
        new ExtractTextPlugin('css/bundle.css', {
            allChunks: true
        }),
        new ModernizrWebpackPlugin(modernizrConfig)
    ],
};

module.exports = config;
