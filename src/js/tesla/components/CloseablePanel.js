/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-28 11:27:31
 * @version 1.0.0
 */

import React from 'react';
import Panel from './Panel';

let CloseablePanel = React.createClass({
	getInitialState() {
		return {
			showPanel: true
		};
	},
	closePanel() {
		this.setState({showPanel: false});
	},
	render() {
		return (
			<div>
				{(() => this.state.showPanel ? <Panel {...this.props} onClose={this.closePanel}/> : '')()}
			</div>
		);
	}
});

export default CloseablePanel;
