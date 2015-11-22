/**
 * 
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-22 08:11:57
 * @version 1.0.0
 */

import React from 'react';

class Alert extends React.Component({
    render() {
        return (
            <div {...this.props}>
                {this.props.children}
            </div>
        );
    }
});

export default Alert;