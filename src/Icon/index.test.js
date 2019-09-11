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

  it("accepts background && color prop", () => {
    const component = mount(<Icon background="blue" color="red" />);
    expect(component.find('span').props().style.background).toEqual('blue');
    expect(component.find('span').props().style.color).toEqual('red');
  });

});
