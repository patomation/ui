import React from 'react';
import { mount } from 'enzyme';

import Spinner from './index.js';

describe('<Spinner />', () => {

  it("renders", () => {
    mount(<Spinner />)
  });

});
