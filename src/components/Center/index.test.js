import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Center from './index.js';

describe('<Center />', () => {

  it("renders", () => {
    mount(<Center />)
  });

});