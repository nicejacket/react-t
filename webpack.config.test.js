/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-12-06 10:12:41
 * @version 1.0.0
 */

require('es6-promise').polyfill();

var config = {
    entry: {
        bundle:[
            './src/js/index.js',
            'font-awesome-webpack!./font-awesome.config.js'
        ] 
    },
    resolve: {
        alias: {}
    },
    output: {
        path: 'build',
        filename: '[name].js'
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/, 
            exclude: /(node_modules)|(font-awesome.config.js)/, 
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.css$/, loader: 'style!css!'
        },{
            test: /\.scss$/,
            loader: 'css!sass'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel-loader']
        },{ 
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
        },{ 
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' 
        }],
        noParse: []
    }
};

module.exports = config;