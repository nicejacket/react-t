/**
 * @authors Your Name (you@example.org)
 * @date    2015-11-26 16:36:12
 * @version $Id$
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Side, { Left, Right } from './tesla/components/Side.js';
import Accordion from './tesla/components/Accordion.js';

let App = React.createClass({
	propTypes: {
		sys: PropTypes.shape({
			menu: PropTypes.shape({
				list: PropTypes.array
			})
		}),
		dispatch: PropTypes.func
	},
	getInitialState() {
		return {
			component: <div>test</div>
		};
	},
	loadPanel() {
		require.ensure([], (require) => {
			let Panel = require('./tesla/components/Panel').default;
			let Toggle = require('./tesla/components/Toggle').default;
			let Radio = require('./tesla/components/Radio').default;
			let Checkbox = require('./tesla/components/Checkbox.js').default;
			this.setState({
				component: (<Panel title="this is a title" closeable>
						<div>this is content!<Toggle name="ischecked"/></div>
						<Radio label="radi button0" value="test" name="testradio" style={{width: '400px'}}/>
						<Radio label="radi button1" value="test1" name="testradio" style={{width: '400px'}}/>
						<Checkbox label="checkbox 1" value="test" name="testcheckbox" style={{width: '400px'}}/>
						<Checkbox label="checkbox 2" value="test1" name="testcheckbox" style={{width: '400px'}}/>
						<Checkbox label="checkbox 3" value="test2" name="testcheckbox" style={{width: '400px'}}/>
					</Panel>)
			});
		});
	},
	toggleSide() {
		this.refs.side.toggle();
	},
	onAccordionItemClick(data) {
		let { dispatch } = this.props;
		dispatch({type: data.action});
	},
	render() {
		return (
			<div>
				<div style={{borderBottom: '1px solid #CCC', height: '50px'}}>
					top bar test
				</div>
				<Side ref="side" style={{top: '50px', bottom: '20px'}}>
					<Left style={{borderRight: '1px solid #CCC'}}>
						<Accordion data={this.props.sys.menu.list} onClick={this.onAccordionItemClick}/>
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
			</div>
		);
	}
});

export default connect(state => state)(App);
