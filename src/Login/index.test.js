import React from 'react'
import { mount } from 'enzyme'

import Login from './index.js'

describe('<Login />', () => {

  it("renders", () => {
    mount(<Login />)
  })

})
