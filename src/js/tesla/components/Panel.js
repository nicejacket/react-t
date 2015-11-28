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
		closeable: React.PropTypes.bool
	},
	getInitialState() {
		return {
			showPanel: true
		};
	},
	closePanel() {
		this.setState({showPanel: false});
	},
	render() {
		let _view;

		if (this.state.showPanel) {
			_view = (
				<div className="panel">
					<div className="title">
						{this.props.title}
						{(() => this.props.closeable ? <i className="fa fa-remove right" onClick={this.closePanel}></i> : '')()}
					</div>
					<div className="content">
						{this.props.children}
					</div>
				</div>
			);
		} else {
			_view = (<span></span>);
		}

		return _view;
	}
});

export default Panel;
