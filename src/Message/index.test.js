import React from 'react'
import { mount } from 'enzyme'

import Message from './index.js'

describe('<Message />', () => {
  it('renders', () => {
    mount(<Message />)
  })
})
