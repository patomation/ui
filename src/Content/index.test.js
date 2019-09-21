import React from 'react'
import { mount } from 'enzyme'

import Content from './index.js'

describe('<Content />', () => {

  it("renders", () => {
    mount(<Content />)
  })

})
