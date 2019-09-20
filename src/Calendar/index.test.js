import React from 'react';
import { mount } from 'enzyme';

import Calendar from './index.js';

describe('<Calendar />', () => {

  it("renders", () => {
    mount(<Calendar />)
  });

});
