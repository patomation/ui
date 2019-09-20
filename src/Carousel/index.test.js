import React from 'react';
import { mount } from 'enzyme';

import Carousel from './index.js';

describe('<Carousel />', () => {

  it("renders", () => {
    mount(<Carousel />)
  });

});
