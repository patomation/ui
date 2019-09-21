import React from 'react'
import { mount } from 'enzyme'

import SideBar from './index.js'

describe('<SideBar />', () => {

  it("renders", () => {
    mount(<SideBar />)
  })

})
