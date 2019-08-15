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

  it("accepts background && color prop", () => {
    const component = mount(<IconButton background="blue" color="red" />);
    expect(component.find('div').props().style.background).toEqual('blue');
    expect(component.find('div').props().style.color).toEqual('red');
  });

});
