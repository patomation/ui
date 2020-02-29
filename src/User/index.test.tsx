import * as React from 'react'
import { mount } from 'enzyme'

import User from './index'

describe('<User />', () => {
  it('renders', () => {
    mount(<User />)
  })
})
