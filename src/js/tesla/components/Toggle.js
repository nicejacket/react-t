/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-12-05 08:59:45
 * @version 1.0.0
 */

import React from 'react';
import '../../../sass/_toggle.scss';

let ToggleButton = React.createClass({
	propTypes: {
		name: React.PropTypes.string,
		off: React.PropTypes.bool,
		readonly: React.PropTypes.bool,
		disabled: React.PropTypes.bool
	},
	componentDidMount() {
		if (!this.props.off) {
			this.refs.toggle.setAttribute('checked', 'checked');
		}
		if (this.props.readonly || this.props.disabled) {
			this.refs.toggle.setAttribute('disabled', 'disabled');
		}

		this.changeInputValue();
	},
	changeInputValue() {
		this.refs.input.value = !!this.refs.toggle.checked;
	},
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
});

export default ToggleButton;
