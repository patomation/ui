import React from 'react';
import ReactDOM from 'react-dom';
import SideBarItem from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SideBarItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
