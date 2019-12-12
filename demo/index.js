import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import './style.scss'
import './favicon.ico'

if (module && module.hot) {
  module.hot.accept()
}

import AdminDemo from './AdminDemo'
import Test from './pages/Test'

render(
  <BrowserRouter>
    <Route exact path='/' component={AdminDemo} />
    <Route path='/test' component={Test} />
  </BrowserRouter>,
  document.getElementById('root')
)
