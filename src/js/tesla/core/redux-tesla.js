/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2016-01-12 14:56:41
 * @version 1.0.0
 */

const tesla = store => next => action => {
	return next(action);
};

export default tesla;
