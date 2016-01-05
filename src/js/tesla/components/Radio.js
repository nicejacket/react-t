/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-12-05 21:17:11
 * @version 1.0.0
 */

import React from 'react';

let Radio = React.createClass({
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
				width: '100%'
			}
		};
	},
	componentDidMount() {
		if (this.props.checked) {
			this.refs.radio.setAttribute('checked', 'checked');
		}
		if (this.props.readonly || this.props.disabled) {
			this.refs.radio.setAttribute('disabled', 'disabled');
		}
		if (this.props.readonly) {
			this.refs.hidden.name = this.props.name;
			this.refs.hidden.value = this.props.value;
		}
	},
	render() {
		return (<label className="radio" style={this.props.style}>
				<input ref="radio" type="radio" name={this.props.name} value={this.props.value}/>
				<span>{this.props.label}</span>
				<i className="fa fa-check"/>
				<input type="hidden" ref="hidden"/>
			</label>);
	}
});

export default Radio;
