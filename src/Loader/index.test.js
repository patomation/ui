import React from 'react'
import { mount } from 'enzyme'

import Loader from './index.js'

describe('<Loader />', () => {
  it('renders', () => {
    mount(<Loader />)
  })
})
