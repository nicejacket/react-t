/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-18 20:21:31
 * @version 1.0.0
 */


module.exports = function(config) {
    config.set({
        // ... normal karma configuration

        files: [
            // all files ending in "_test"
            'test/*_test.js',
            'test/**/*_test.js'
            // each file acts as entry point for the webpack configuration
        ],

        preprocessors: {
            // add webpack as preprocessor
            'test/*_test.js': ['webpack'],
            'test/**/*_test.js': ['webpack']
        },

        webpack: {
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies

            // webpack configuration
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },

        plugins: [
            require("karma-webpack")
        ]

    });
};