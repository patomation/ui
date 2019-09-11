import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Grid from './index.js';

describe('<Grid />', () => {

  it("renders", () => {
    mount(<Grid />)
  });

});