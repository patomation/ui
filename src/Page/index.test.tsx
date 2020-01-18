import * as React from 'react'
import { mount } from 'enzyme'

import Page from './index'

describe('<Page />', () => {
  it('renders', () => {
    mount(<Page />)
  })
})
