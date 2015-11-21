/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-21 22:25:17
 * @version $Id$
 */

require('../sass/hello.scss');
import React from 'react';

class Hello extends React.Component{
	render() {
		return <h1>Hello World!</h1>
	}
}

React.render(<Hello/>, document.getElementById("hello"))