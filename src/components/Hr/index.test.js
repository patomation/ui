import React from 'react';
import ReactDOM from 'react-dom';
import Hr from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hr />, div);
  ReactDOM.unmountComponentAtNode(div);
});
