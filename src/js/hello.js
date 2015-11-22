/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-21 22:25:17
 * @version $Id$
 */

import '../sass/hello.scss';
import React from 'react';

class Hello extends React.Component{
	render() {
		return <h1>Hello World!</h1>
	}
}

export default Hello
React.render(<Hello/>, document.getElementById("hello"))