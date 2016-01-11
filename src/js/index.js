/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-18 19:24:01
 * @version 1.0.0
 */

import App from './App.js';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import entryReducer from './biz/EntryReducer.js';
import { getMenuList } from './biz/sys/MenuAction.js';

const initialState = {
	sys: {
		menu: {
			list: []
		}
	}
};

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);
const store = createStoreWithMiddleware(entryReducer, initialState);
store.dispatch(getMenuList('U000000000001'));

ReactDOM.render((
	<Provider store={store}>
		<Router>
			<Route path="/" component={App} />
		</Router>
  </Provider>
), document.getElementById('root'));
