/**
 * 
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-22 22:20:42
 * @version 1.0.0
 */

import 'babel-core/polyfill';

let context = require.context('.', true, /-test\.jsx?$/);
context.keys().forEach(context);