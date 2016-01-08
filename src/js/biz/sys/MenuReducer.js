/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2016-01-08 10:47:41
 * @version 1.0.0
 */

import { combineReducers } from 'redux';
import { SYS_MENU_LIST } from 'ActionTypes';

function list(state = [], action) {
	switch (action.type) {
		case SYS_MENU_LIST:
			return action.list;
		default:
			return state;
	}
}

export default combineReducers({
	list
});
