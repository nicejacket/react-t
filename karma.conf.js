/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-18 20:21:31
 * @version 1.0.0
 */

var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack'),
    path = require('path');

require('es6-promise').polyfill();

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    frameworks: ['mocha'], //use the mocha test framework
    files: [
      'test/*.test.js' //just load this file
    ],
    preprocessors: {
      'tests/*.test.js': ['webpack'] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: {
      module: {
          loaders: [{
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract('css!sass')
          }, {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader"
          }]
      },
      plugins: [
          new ExtractTextPlugin('style.css', {
              allChunks: true
          })
      ]
    },
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: false,
    plugins: [
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-webpack'
    ]
  });
};