/**
 * @authors Your Name (you@example.org)
 * @date    2015-11-26 16:36:12
 * @version $Id$
 */
import '../sass/hello.scss';
import React from 'react';
import Panel from './tesla/components/Panel';

const App = React.createClass({
	render() {
		return (
			<div>
				<h1>App</h1>
				<Panel title="this is a title!" closeable>
					<div>这是panel的内容</div>
				</Panel>
				{this.props.children}
			</div>
		);
	}
});

export default App;
