/**
 * @authors Your Name (you@example.org)
 * @date    2015-11-26 16:36:12
 * @version $Id$
 */
import '../sass/hello.scss';
import React from 'react';

const App = React.createClass({
	render() {
		return (
          <div>
            <h1>App</h1>
            <ul></ul>{this.props.children}</div>
        );
	}
});

export default App;
