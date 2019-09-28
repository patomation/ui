import React from 'react'
import { mount } from 'enzyme'

import Breakpoints from './index.js';

describe('<Breakpoints />', () => {

  it("renders", () => {
    mount(<Breakpoints />)
  });

});