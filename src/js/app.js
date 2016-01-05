/**
 * @authors Your Name (you@example.org)
 * @date    2015-11-26 16:36:12
 * @version $Id$
 */
import '../sass/hello.scss';
import React from 'react';
import Hello from './hello.js';
import Side, { Left, Right } from './tesla/components/Side.js';
import Accordion, {AccordionItem} from './tesla/components/Accordion.js';

let App = React.createClass({
	getInitialState() {
		return {
			component: <Hello/>
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
	render() {
		return (
			<div>
				<div style={{borderBottom: '1px solid #CCC', height: '50px'}}>
					top bar
				</div>
				<Side ref="side" style={{top: '50px', bottom: '20px'}}>
					<Left style={{borderRight: '1px solid #CCC'}}>
						<Accordion>
							{[{title: 'title1', content: 'content1'}, {title: 'title2', content: 'content2'}].map((item, index) => {
								return (<AccordionItem title={item.title} key={index}>
									{item.content}
								</AccordionItem>);
							})}
						</Accordion>
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

export default App;
