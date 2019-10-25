import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import './style.scss'
import './favicon.ico'

if (module && module.hot) {
  module.hot.accept()
}

import AdminDemo from './AdminDemo'

render(
  <BrowserRouter>
    <Route path='/' component={AdminDemo} />
  </BrowserRouter>,
  document.getElementById('root')
)
