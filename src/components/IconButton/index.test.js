import React from 'react';
import ReactDOM from 'react-dom';
import IconButton from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IconButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
