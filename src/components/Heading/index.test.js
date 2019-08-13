import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading Tag='h1' />, div);
  ReactDOM.unmountComponentAtNode(div);
});
