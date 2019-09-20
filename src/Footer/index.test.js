import React from 'react';
import { mount } from 'enzyme';

import Footer from './index.js';

describe('<Footer />', () => {

  it("renders", () => {
    mount(<Footer />)
  });

});
