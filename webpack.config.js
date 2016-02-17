/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-18 18:49:44
 * @version 1.0.0
 */
var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.join(__dirname, 'node_modules');
var deps = [
    'react/dist/react.min.js',
    'react-router/dist/react-router.min.js',
    'moment/min/moment.min.js'
]

require('es6-promise').polyfill();

var config = {
    entry: {
        'webpack-dev-server': 'webpack-dev-server/client?http://localhost:3000',
        'dev-server': 'webpack/hot/only-dev-server',
        bundle: [
            './src/js/Index.js'
            //'font-awesome-webpack!./font-awesome.config.js'
        ]
    },
    resolve: {
        alias: {
            'ActionTypes': path.join(__dirname, 'src/js/biz/ActionTypes.js'),
            'tesla': path.join(__dirname, 'src/js/tesla/core/tesla.js')
        }
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)|(font-awesome.config.js)/,
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel']
        }, {
            test: path.resolve(node_modules_dir, deps[0]),
            loader: 'expose?React'
        }],
        noParse: []
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('js/common.js'),
        new webpack.HotModuleReplacementPlugin()
    ],
    eslint: {
        configFile: '.eslintrc'
    }
};

deps.forEach(function(dep) {
    var depPath = path.resolve(node_modules_dir, dep);
    config.resolve.alias[dep.split(path.sep)[0]] = depPath;
    config.module.noParse.push(depPath);
});

module.exports = config;