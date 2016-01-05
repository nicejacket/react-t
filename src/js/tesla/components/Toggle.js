/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-12-05 08:59:45
 * @version 1.0.0
 */

import React, { Component, PropTypes } from 'react';

export default class Toggle extends Component {
	constructor() {
		super();

		this.defaultProps = {
			off: false,
			readonly: false,
			disabled: false
		};
		this.changeInputValue = this.changeInputValue.bind(this);
	}

	componentDidMount() {
		if (!this.props.off) {
			this.refs.toggle.setAttribute('checked', 'checked');
		}
		if (this.props.readonly || this.props.disabled) {
			this.refs.toggle.setAttribute('disabled', 'disabled');
		}

		this.changeInputValue();
	}

	changeInputValue() {
		this.refs.input.value = !!this.refs.toggle.checked;
	}

	render() {
		return (<label className="toggle">
				<input type="checkbox" ref="toggle" onChange={this.changeInputValue}/>
				<div className="track">
					<div className="label on">on</div>
					<div className="handle"/>
					<div className="label off">off</div>
				</div>
				<input type="hidden" ref="input" name={this.props.disabled ? '' : this.props.name} value="false"/>
			</label>);
	}
}

Toggle.propTypes = {
	name: PropTypes.string,
	off: PropTypes.bool,
	readonly: PropTypes.bool,
	disabled: PropTypes.bool
};
