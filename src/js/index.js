/**
 * @authors zhou_xg (zhou84034339@sina.com)
 * @date    2015-11-18 19:24:01
 * @version 1.0.0
 */

import Hello from './hello';
import App from './App.js';
import React from 'react';
import {Router, Route} from 'react-router';

React.render((
  <Router>
    <Route path="/" component={App}>
        <Route path="messages/:id" component={Hello} />
    </Route>
  </Router>
), document.getElementById('hello'));
