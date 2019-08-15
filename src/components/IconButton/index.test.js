import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import IconButton from './index.js';

describe('<IconButton />', () => {

  it("renders", () => {
    mount(<IconButton />)
  });

});