import React from 'react';
import { mount } from 'enzyme';

import Hero from './index.js';

describe('<Hero />', () => {

  it("renders", () => {
    mount(<Hero />)
  });

});
