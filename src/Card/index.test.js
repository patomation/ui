import React from 'react'
import { mount } from 'enzyme'

import Card from './index.js'

describe('<Card />', () => {
  it('renders', () => {
    mount(<Card />)
  })
})
