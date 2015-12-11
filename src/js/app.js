/**
 * @authors Your Name (you@example.org)
 * @date    2015-11-26 16:36:12
 * @version $Id$
 */
import '../sass/hello.scss';
import React from 'react';
import Hello from './hello.js';

let radioStyle = {
	width: '400px'
};

let App = React.createClass({
	getInitialState() {
		return {
			component: <Hello/>
		};
	},
	loadPanel() {
		require.ensure([], () => {
			let Panel = require('./tesla/components/Panel').default;
			let Toggle = require('./tesla/components/Toggle').default;
			let Radio = require('./tesla/components/Radio').default;
			let Checkbox = require('./tesla/components/Checkbox.js').default;
			this.setState({
				component: (<Panel title="this is a title" closeable>
						<div>this is content!<Toggle name="ischecked"/></div>
						<Radio label="radi button0" value="test" name="testradio" style={radioStyle}/>
						<Checkbox label="checkbox 1" value="test" name="testcheckbox"/>
						<Checkbox label="checkbox 2" value="test1" name="testcheckbox"/>
						<Checkbox label="checkbox 3" value="test2" name="testcheckbox"/>
					</Panel>)
			});
		});
	},
	render() {
		return (
			<div>
				<h1>App</h1>
				<button onClick={this.loadPanel}>test</button>
				{this.state.component}
				{this.props.children}
			</div>
		);
	}
});

export default App;
