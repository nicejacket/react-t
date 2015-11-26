/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-21 22:25:17
 * @version $Id$
 */

import '../sass/hello.scss';
import React from 'react';
import Reflux from 'reflux';
//import ReactDOM from 'react-dom';

let HelloActions = Reflux.createActions(['init']);
let HelloStore = Reflux.createStore({
	listenables : HelloActions,
	onInit : function(state) {
		this.trigger(state);
	}
});

let Hello = React.createClass({
	mixins: [Reflux.connect(HelloStore, 'text')],
	getInitialState: function() {
		return {
			text : "Hello!"
		};
	},
	changeText: function(e){
		e.preventDefault();
		console.log(this.refs.text);
		//let text = this.refs.text.value;
		HelloActions.init("..." + this.refs.text.value);
	},
	render: function() {
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