/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-27 20:58:54
 * @version 1.0.0
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Accordion extends Component {

	render() {
		return (<section className="accordion">
			{this.props.children}
		</section>);
	}
}

class AccordionItem extends Component {
	constructor() {
		super();

		this.state = {
			open: true
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({open: !this.state.open});
	}

	render() {
		let className = classNames({
			close: !this.state.open
		});

		return (<dl className={className}>
			<dt onClick={this.toggle}><i className="fa fa-sort-down"></i>{this.props.title}</dt>
			<dd>
				{this.props.children}
			</dd>
		</dl>);
	}
}

AccordionItem.propTypes = {
	title: PropTypes.string.isRequired
};

export { AccordionItem };
