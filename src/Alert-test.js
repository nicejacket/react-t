/**
 * 
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-22 08:12:42
 * @version 1.0.0
 */

import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import Alert from '../src/js/components/Alert.js';

describe('Alert', () => {
    it('往页面插入一段带有strong标签的组件', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Alert>
                <strong>Message</strong>
            </Alert>
        );
        assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'strong'));
    });
});
