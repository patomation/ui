import * as React from 'react'
import { mount } from 'enzyme'

import Message from './index'

describe('<Message />', () => {
  it('renders', () => {
    mount(<Message />)
  })
})
