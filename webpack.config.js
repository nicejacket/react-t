/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-18 18:49:44
 * @version 1.0.0
 */

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: "build",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query : {
                presets; ['es2015', 'react']
            }
        }]
    }
};
