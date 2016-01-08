/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-27 20:58:54
 * @version 1.0.0
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Accordion extends Component {
	constructor() {
		super();

		this.defaultProps = {
			data: []
		};
	}

	render() {
		return (<section className="accordion">
			{this.props.data.map((item, index) => {
				return (<AccordionItem title={item.title} key={index} list={item.list || []} onClick={this.props.onClick}/>);
			})}
			{this.props.children}
		</section>);
	}
}

Accordion.propTypes = {
	data: PropTypes.array,
	onClick: PropTypes.func
};

class AccordionItem extends Component {
	constructor() {
		super();

		this.defaultProps = {
			list: []
		};
		this.state = {
			open: true
		};
		this.toggle = this.toggle.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	toggle() {
		this.setState({open: !this.state.open});
	}

	onClick(event) {
		if (this.props.onClick) {
			let _target = event.target || event.currentTarget;
			let	_data = JSON.parse(_target.attributes['data-menu'].value);
			this.props.onClick(_data);
		}
	}

	render() {
		let className = classNames({
			close: !this.state.open
		});

		return (<dl className={className}>
			<dt onClick={this.toggle}><i className="fa fa-sort-down"></i>{this.props.title}</dt>
			<dd>
				{this.props.list.map((item, index) => {
					return (<a href="#" key={index} onClick={this.onClick} data-menu={JSON.stringify(item)}>{item.label}</a>);
				})}
				{this.props.children}
			</dd>
		</dl>);
	}
}

AccordionItem.propTypes = {
	title: PropTypes.string.isRequired,
	list: PropTypes.array,
	onClick: PropTypes.func
};

export { AccordionItem };
