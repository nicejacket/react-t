/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-27 22:02:21
 * @version 1.0.0
 */

module.exports = {
	styleLoader: require('extract-text-webpack-plugin').extract('style-loader', 'css-loader!less-loader'),
	styles: {
    	"mixins": true,
    	"core": true,
    	"icons": true,
    	"larger": true,
    	"path": true,
	}
};
