import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Icon from './index.js';

describe('<Icon />', () => {

  it("renders", () => {
    mount(<Icon />)
  });

});