/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-18 20:21:31
 * @version 1.0.0
 */

var webpack = require('webpack'),
    webpackConfig = require('./webpack.config.test.js');

webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'], //run in Chrome

        frameworks: ['mocha', 'sinon-chai'], //use the mocha test framework

        files: [
            'test/test.bundle.js' //just load this file
        ],

        preprocessors: {
            'test/test.bundle.js': ['webpack', 'sourcemap']
        },

        reporters: ['mocha', 'coverage'], //report results in this format

        mochaReporter: {
            output: 'autowatch'
        },

        coverageReporter: {
            dir: 'dist/coverage/',
            reporters: [{
                type: 'html'
            }, {
                type: 'lcovonly'
            }]
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        },

        logLevel: config.LOG_INFO,

        singleRun: true,

        port: 9876,

        colors: true,

        plugins: [
            require('mocha'),
            require('sinon'),
            require('sinon-chai'),
            require('karma-chrome-launcher'),
            require('karma-chai'),
            require('karma-sinon-chai'),
            require('karma-mocha'),
            require('karma-coverage'),
            require('karma-mocha-reporter'),
            require('karma-sourcemap-loader'),
            require('karma-webpack')
        ]
    });
};
