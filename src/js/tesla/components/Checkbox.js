/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-12-11 09:28:26
 * @version 1.0.0
 */

import React, { Component, PropTypes} from 'react';

export default class Checkbox extends Component {
	constructor() {
		super();
	}

	render() {
		return (<label className="checkbox" style={this.props.style}>
				<input type="checkbox" name={this.props.name} value={this.props.value}/>
				<i className="fa fa-circle-thin"/>
				<i className="fa fa-check"/>
				<span>{this.props.label}</span>
			</label>);
	}
}

Checkbox.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	readonly: PropTypes.bool,
	disabled: PropTypes.bool
};
