/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-12-06 15:26:04
 * @version 1.0.0
 */

import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import Radio from '../../../src/js/tesla/components/Radio.js';

describe('Radio', () => {
	it('测试正常情况', () => {
		let instance = ReactTestUtils.renderIntoDocument(
			<Radio label="radio button" name="testradio" value="test"/>
		);

		assert.equal(instance.refs.radio.value, 'test');
		assert.equal(instance.refs.radio.name, 'testradio');
		assert.equal(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'span').innerText, 'radio button');
		assert.isFalse(instance.refs.radio.checked);
	});

	it('测试选中情况', () => {
		let instance = ReactTestUtils.renderIntoDocument(
			<Radio label="radio button" name="testradio" checked/>
		);

		assert.equal(instance.refs.radio.name, 'testradio');
		assert.equal(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'span').innerText, 'radio button');
		assert.isTrue(instance.refs.radio.checked);
	});
});
