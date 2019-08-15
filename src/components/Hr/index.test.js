import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Hr from './index.js';

describe('<Hr />', () => {

  it("renders", () => {
    mount(<Hr />)
  });

  it("accepts background && color prop", () => {
    const component = mount(<Hr background="blue" color="red" />);
    expect(component.find('hr').props().style.background).toEqual('blue');
    expect(component.find('hr').props().style.color).toEqual('red');
  });

});
