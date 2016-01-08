/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2016-01-08 16:08:59
 * @version 1.0.0
 */

let tesla = {
	getJSON(service) {
		let promise = new Promise((resolve, reject) => {
			fetch(service).then(response => {
				response.json().then(json => {
					resolve(json);
				});
			}).catch(error => {
				reject(error);
			});
		});
		return promise;
	}
};

export default tesla;
