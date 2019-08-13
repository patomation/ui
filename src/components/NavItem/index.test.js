import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
