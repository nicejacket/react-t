/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2016-01-07 10:43:31
 * @version 1.0.0
 */

import { SYS_MENU_LIST } from 'ActionTypes';
import tesla from 'tesla';

export function getMenuList(userId) {
	return (dispatch) => {
		return tesla.getJSON('json/sys-menu-list.json').then(json => {
			dispatch({
				type: SYS_MENU_LIST,
				list: json,
				userId
			});
		});
	};
}
