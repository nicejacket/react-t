/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-18 18:49:44
 * @version 1.0.0
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.join(__dirname, 'node_modules');
var deps = [
    'react/dist/react.min.js',
    'react-router/dist/react-router.min.js',
    'moment/min/moment.min.js'
];
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

require('es6-promise').polyfill();

var config = {
    entry: {
        'webpack-dev-server': 'webpack-dev-server/client?http://0.0.0.0:8080',
        'dev-server': 'webpack/hot/dev-server',
        bundle:[
            './src/js/Index.js'
            //'font-awesome-webpack!./font-awesome.config.js'
        ]
    },
    resolve: {
        alias: {}
    },
    output: {
        path: 'dist',
        filename: 'js/[name].js'
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/, 
            exclude: /(node_modules)|(font-awesome.config.js)/, 
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.css$/, loader: ExtractTextPlugin.extract('style!css!')
        },{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel-loader']
        },{
          test: path.resolve(node_modules_dir, deps[0]),
          loader: 'expose?React'
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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('js/common.js'),
        new ModernizrWebpackPlugin(modernizrConfig)
    ],
    eslint: {  
        configFile: '.eslintrc'
    }
};

deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;