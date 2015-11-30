/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-28 14:57:42
 * @version 1.0.0
 */

import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import Panel from '../../../src/js/tesla/components/Panel.js';

describe('Panel', () => {
	it('往页面插入一段带有strong标签的组件', () => {
		let instance = ReactTestUtils.renderIntoDocument(
			<Panel title="this is a title" closeable>
				<strong>Message</strong>
			</Panel>
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'strong'));
	});

	it('测试关闭按钮', () => {
		let instance = ReactTestUtils.renderIntoDocument(
			<Panel title="this is a title" closeable/>		
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'i'));
	});
});
