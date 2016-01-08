/**
 * 
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-12-14 16:12:15
 * @version 1.0.0
 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: 'dis',
  hot: true,
  inline: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});