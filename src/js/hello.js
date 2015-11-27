/**
 * @authors Your Name (you@example.org)
 * @date    2015-11-21 22:25:17
 * @version $Id$
 */

import '../sass/hello.scss';
import React from 'react';
import Reflux from 'reflux';

let HelloActions = Reflux.createActions(['init']);
let HelloStore = Reflux.createStore({
	listenables: HelloActions,
	onInit(state) {
		this.trigger(state);
	}
});

let Hello = React.createClass({
	mixins: [Reflux.connect(HelloStore, 'text')],
	getInitialState() {
		return {
			text: 'Hello!'
		};
	},
	changeText(e) {
		e.preventDefault();
		HelloActions.init(this.refs.text.value);
	},
	render() {
		return (
			<div>
				<h1>{this.state.text}</h1>
				<input type="text" name="text" ref="text"/>
				<button type="button" onClick={this.changeText}>hello</button>
			</div>
		);
	}
});

export default Hello;
