/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-27 21:21:41
 * @version 1.0.0
 */

import React, { Component, PropTypes } from 'react';

export default class Panel extends Component {
	constructor() {
		super();

		this.state = {
			show: true
		};
		this.closePanel = this.closePanel.bind(this);
	}

	closePanel() {
		this.setState({show: false});
	}

	render() {
		let _view;

		if (this.state.show) {
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
}

Panel.propTypes = {
	title: PropTypes.string.isRequired,
	closeable: PropTypes.bool
};
