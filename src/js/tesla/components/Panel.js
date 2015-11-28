/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-27 21:21:41
 * @version 1.0.0
 */

import React from 'react';
import 'font-awesome-webpack';
import '../../../sass/_panel.scss';

let Panel = React.createClass({
	propTypes: {
		title: React.PropTypes.string,
		onClose: React.PropTypes.func
	},
	render() {
		return (
			<div className="panel">
				<div className="title">
					{this.props.title}
					{(() => this.props.onClose ? <i className="fa fa-remove right" onClick={this.props.onClose}></i> : '')()}
				</div>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
});

export default Panel;
