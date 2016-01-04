/**
 * @authors Your Name (you@example.org)
 * @date    2015-11-26 16:36:12
 * @version $Id$
 */
import '../sass/hello.scss';
import React from 'react';
import Hello from './hello.js';
import Side, { Left, Right } from './tesla/components/Side.js';

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
						<Radio label="radi button0" value="test" name="testradio" style={{width: '400px'}}/>
						<Radio label="radi button1" value="test1" name="testradio" style={{width: '400px'}}/>
						<Checkbox label="checkbox 1" value="test" name="testcheckbox"/>
						<Checkbox label="checkbox 2" value="test1" name="testcheckbox"/>
						<Checkbox label="checkbox 3" value="test2" name="testcheckbox"/>
					</Panel>)
			});
		});
	},
	toggleSide() {
		this.refs.side.toggle();
	},
	render() {
		return (
			<Side ref="side" style={{top: '100px'}}>
				<Left style={{background: '#000', color: '#FFF'}}>
					test
				</Left>
				<Right>
					<div>
						<h1>App</h1>
						<button onClick={this.loadPanel}>test</button>
						<button onClick={this.toggleSide}>toggle</button>
						{this.state.component}
						{this.props.children}
					</div>
				</Right>
			</Side>
		);
	}
});

export default App;
