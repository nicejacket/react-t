/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-12-05 21:35:35
 * @version 1.0.0
 */

import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import Toggle from '../../../src/js/tesla/components/Toggle.js';

describe('Toggle', () => {
	it('测试基本状态', () => {
		let instance = ReactTestUtils.renderIntoDocument(
			<Toggle name='test'/>		
		);
		assert.ok(ReactTestUtils.isDOMComponent(instance.refs.toggle));
		assert.ok(ReactTestUtils.isDOMComponent(instance.refs.input));
	});

	it('测试on状态', () => {
		let instance = ReactTestUtils.renderIntoDocument(
			<Toggle name='test'/>		
		);
		assert.isTrue(instance.refs.toggle.checked);
		assert.equal(instance.refs.input.value, 'true');
	});

	it('测试off状态', () => {
		let instance = ReactTestUtils.renderIntoDocument(
			<Toggle name='test' off/>		
		);
		assert.isFalse(instance.refs.toggle.checked);
		assert.notEqual(instance.refs.input.value, 'true');
	});

	it('测试readonly状态', () => {
		let instance = ReactTestUtils.renderIntoDocument(
			<Toggle name='test' readonly/>		
		);

		assert.isTrue(instance.refs.toggle.disabled);
		assert.equal(instance.refs.input.name, 'test');
		assert.isTrue(instance.refs.toggle.checked);
		assert.equal(instance.refs.input.value, 'true');
	});

	it('测试disabled状态', () => {
		let instance = ReactTestUtils.renderIntoDocument(
			<Toggle name='test' disabled/>		
		);

		assert.isTrue(instance.refs.toggle.disabled);
		assert.equal(instance.refs.input.name, '');
		assert.isTrue(instance.refs.toggle.checked);
		assert.equal(instance.refs.input.value, 'true');
	});
});
