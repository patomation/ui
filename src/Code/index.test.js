import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Code from './index.js';

describe('<Code />', () => {

  it("renders", () => {
    mount(<Code />)
  });

  it("accepts background && color prop", () => {
    const component = mount(<Code background="blue" color="red" />);
    expect(component.find('div').props().style.background).toEqual('blue');
    expect(component.find('div').props().style.color).toEqual('red');
  });

});
