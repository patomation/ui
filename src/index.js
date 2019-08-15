import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './style.scss';

const moduleHotAccept = (mod) => {
  if (mod && mod.hot) {
    mod.hot.accept();
  }
}
moduleHotAccept(module);

const renderToDOM = (root) => {
  if (root !== null) {
    ReactDOM.render(<App />, root)
  }
}
renderToDOM(document.getElementById('root'));

export {
  renderToDOM,
  moduleHotAccept
};
