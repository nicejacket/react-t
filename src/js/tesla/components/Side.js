/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-12-15 09:47:38
 * @version 1.0.0
 */

import React, { Component } from 'react';
import classNames from 'classnames';
import '../../../sass/_side.scss';

export default class Side extends Component {
	constructor() {
		super();

		this.state = {
			open: true
		};
	}

	toggle() {
		this.setState({open: !this.state.open});
	}

	render() {
		let className = classNames({
			side: true,
			close: !this.state.open
		});
		return (<div className={className} style={this.props.style}>
				{this.props.children}
			</div>);
	}
}

class Left extends Component {
	render() {
		return (<div className="side-left" style={this.props.style}>
				{this.props.children}
			</div>);
	}
}

class Right extends Component {
	render() {
		return (<div className="side-right">
				{this.props.children}
			</div>);
	}
}

Side.Left = Left;
Side.Right = Right;

export { Left, Right };
