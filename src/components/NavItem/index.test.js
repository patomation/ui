import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import NavItem from './index.js';

describe('<NavItem />', () => {

  it("renders", () => {
    mount(<NavItem />)
  });

  it("accepts background && color prop", () => {
    const component = mount(<NavItem background="blue" color="red" />);
    expect(component.find('a').props().style.background).toEqual('blue');
    expect(component.find('a').props().style.color).toEqual('red');
  });

});
