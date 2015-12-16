/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-12-11 09:28:26
 * @version 1.0.0
 */

import React from 'react';
import 'font-awesome-webpack';
import '../../../sass/_checkbox.scss';

let Checkbox = React.createClass({
	propTypes: {
		name: React.PropTypes.string,
		value: React.PropTypes.string,
		label: React.PropTypes.string,
		checked: React.PropTypes.bool,
		readonly: React.PropTypes.bool,
		disabled: React.PropTypes.bool,
		style: React.PropTypes.object
	},
	getDefaultProps() {
		return {
			style: {
				width: '100%',
				height: '50px'
			}
		};
	},
	render() {
		return (<label className="checkbox" style={this.props.style}>
				<input type="checkbox" name={this.props.name} value={this.props.value}/>
				<i className="fa fa-circle-thin"/>
				<i className="fa fa-check"/>
				<span>{this.props.label}</span>
			</label>);
	}
});

export default Checkbox;
