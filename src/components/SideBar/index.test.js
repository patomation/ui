import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SideBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
