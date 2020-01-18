import * as React from 'react'
import { mount } from 'enzyme'

import Hero from './index'

describe('<Hero />', () => {
  it('renders', () => {
    mount(<Hero />)
  })
})
