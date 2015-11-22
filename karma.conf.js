/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-18 20:21:31
 * @version 1.0.0
 */

var webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js');

webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome', 'PhantomJS'], //run in Chrome
    frameworks: ['chai', 'mocha'], //use the mocha test framework
    files: [
      'test/tests.bundle.js' //just load this file
    ],
    preprocessors: {
      'test/tests.bundle.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'mocha' ], //report results in this format
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    plugins: [
      'mocha',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ]
  });
};