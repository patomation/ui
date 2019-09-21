import React from 'react'
import { mount } from 'enzyme'

import User from './index.js'

describe('<User />', () => {

  it("renders", () => {
    mount(<User />)
  })

})
